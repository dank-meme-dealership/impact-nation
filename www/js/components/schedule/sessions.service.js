(function () {
  angular
    .module('impactNation.schedule')
    .service('sessionsService', sessionsService);

  function sessionsService(api, speakersService) {
    var service = {
      sessions: undefined,

      getSession: getSession,
      getSessionFromService: getSessionFromService,
      getSessions: getSessions
    };

    getSessions();

    return service;

    /**
     * Get a singular session by ID
     * @param sessionID
     * @returns {*}
     */
    function getSession(sessionID) {
      return new Promise(function (resolve) {
        if (service.sessions && service.sessions.length) {
          resolve(getSessionFromService(sessionID))
        } else {
          getSessions().then(function () {
            resolve(getSessionFromService(sessionID));
          });
        }
      });
    }

    /**
     * Pull the session from the saved sessions in the service
     * @param sessionID
     * @returns {*}
     */
    function getSessionFromService(sessionID) {
      return _.find(service.sessions, {id: parseInt(sessionID)});
    }

    /**
     * Get all sessions
     * @returns {*}
     */
    function getSessions() {
      return api.get('sessions').then(function (response) {
        service.sessions = _.map(response.data, mapSession);
        return service.sessions;
      });
    }

    /**
     * Map extra fields onto a session
     * @param session
     * @returns {*}
     */
    function mapSession(session) {
      // values the schedule needs
      session.startTime = moment.unix(session.startTime).add(4, 'hours').tz('America/New_York');
      session.startTimeFormatted = session.startTime.format('h:mm a');
      session.endTime = moment.unix(session.endTime).add(4, 'hours').tz('America/New_York');
      session.endTimeFormatted = session.endTime.format('h:mm a');

      // I created these ranges based on what The Google told me
      // "what is morning": the period of time between midnight and noon, especially from sunrise to noon.
      // "what is afternoon" : the time from noon or lunchtime to evening.
      // "what is evening" : the period of time at the end of the day, usually from about 6 p.m. to bedtime.
      // everything after 11pm bedtime is considered "late"
      var timeOfDay = '';
      var sessionHour = session.startTime.hour();
      if (sessionHour > 5 && sessionHour < 12) timeOfDay = 'Morning';
      else if (sessionHour >= 12 && sessionHour < 18) timeOfDay = 'Afternoon';
      else if (sessionHour >= 18 && sessionHour < 23) timeOfDay = 'Evening';
      else timeOfDay = 'Late';

      // the display date is offset by three hours so that 1am appears as though it is part
      // of the day prior, and we call it "evening" based on the logic setting up groupSuffix
      var displayDate = session.startTime.clone().subtract(3, 'hours');

      // Provide string display date & time of day separately so views can decide
      // how to show the 2 parts. Generate a searchDate field that can be used to search by
      // a date string like "Thursday" or "27th"
      session.displayDate = displayDate.format('ddd MMMM Do');
      session.searchDate = displayDate.format('LLLL') + ' ' + timeOfDay;
      session.timeOfDay = timeOfDay;

      // the displayed group is a concat of display date and suffix
      session.displayGroup = session.displayDate + ' ' + timeOfDay;

      // we need to map these speakers too
      session.speakers = _.map(session.speakers, speakersService.mapSpeaker);

      return session;
    }
  }
})();
