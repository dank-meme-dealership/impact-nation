(function () {
  angular
    .module('impactNation.schedule')
    .service('sessionsService', sessionsService);

  function sessionsService(api) {
    var service = {
      sessions: undefined,

      getSession: getSession,
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
        service.sessions = response.data;
        return response.data;
      });
    }
  }
})();
