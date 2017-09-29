(function () {
  angular
    .module('impactNation.schedule')
    .controller('ScheduleController', ScheduleController);

  function ScheduleController($rootScope, sessionsService, scheduleManager) {
    var $ctrl = this;

    $ctrl.tabs = [
      {
        title: 'Schedule',
        icon: 'ion-calendar',
        sessions: [],
        emptyMessage: 'There are no scheduled sessions right now.'
      },
      {
        title: 'My Schedule',
        icon: 'ion-person',
        sessions: [],
        emptyMessage: 'There are no scheduled sessions to show. Try adding some from the schedule page.'
      }
    ];

    $ctrl.selectTab = selectTab;
    $ctrl.selectDate = selectDate;
    $ctrl.sessionFilter = sessionFilter;

    // set up a listener to keep my schedule up to date
    $rootScope.$on('scheduleManager.toggleScheduled', updateMySchedule);

    init();

    /**
     * Set the default tab and update the schedule
     */
    function init() {
      $ctrl.selectedTab = $ctrl.tabs[0];
      updateMySchedule();
    }

    /**
     * Selecting a tab 'Schedule' or 'My Schedule'
     * @param tab
     */
    function selectTab(tab) {
      $ctrl.selectedTab = tab;
    }

    /**
     * Selecting a date option at the top
     * @param option
     */
    function selectDate(option) {
      $ctrl.selectedDate = option;
    }

    /**
     * Update the sessions on the Schedule tab with all sessions and the
     * My Schedule tab with all of the sessions currently set on my
     * schedule, also find any conflicts in the sessions on My Schedule
     */
    function updateMySchedule() {
      $ctrl.mySchedule = scheduleManager.getMySchedule();
      sessionsService.getSessions().then(function (sessions) {
        // set all sessions to the schedule tab
        $ctrl.tabs[0].sessions = findConflicting(sessions);
        // set sessions on mySchedule to the My Schedule tab
        $ctrl.tabs[1].sessions = _.filter($ctrl.tabs[0].sessions, isOnMySchedule);
        // get unique date options for a date picker
        $ctrl.dateOptions = _.uniq(_.map(sessions, 'displayDate'));
        if (!$ctrl.selectedDate) {
          $ctrl.selectedDate = $ctrl.dateOptions[0];
        }
      })
    }

    /**
     * Mark which sessions are conflicting with a boolean
     * <session-list-item> keys off of this boolean to turn checkmarks yellow
     * @param sessions
     * @returns {*}
     */
    function findConflicting(sessions) {
      var lastSessions = [];

      _.each(sessions, function (session) {
        if (isOnMySchedule(session)) {
          _.each(lastSessions, function (lastSession) {
            if (session.startTime <= lastSession.endTime) {
              lastSession.conflicting = true;
              session.conflicting = true;
            }
          });
          lastSessions.push(session);
        }
      });

      return sessions;
    }

    /**
     * Determine if a session is on My Schedule
     * @param session
     * @returns {boolean}
     */
    function isOnMySchedule(session) {
      return _.includes($ctrl.mySchedule, parseInt(session.id));
    }

    /**
     * Filter the sessions shown in the list, right now just by date
     * @param sessions
     * @returns {Array}
     */
    function sessionFilter(sessions) {
      // apply the filter the user has specified to SessionName, SessionType, and VenueName
      // to avoid a deep comparison
      return _.filter(sessions, function (thisSession) {
        return thisSession.displayDate === $ctrl.selectedDate;
      });
    }
  }
})();
