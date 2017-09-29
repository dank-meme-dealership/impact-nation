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

    function init() {
      $ctrl.selectedTab = $ctrl.tabs[0];
      updateMySchedule();
    }

    function selectTab(tab) {
      $ctrl.selectedTab = tab;
    }

    function selectDate(option) {
      $ctrl.selectedDate = option;
    }

    function updateMySchedule() {
      var mySchedule = scheduleManager.getMySchedule();
      sessionsService.getSessions().then(function (sessions) {
        // set all sessions to the schedule tab
        $ctrl.tabs[0].sessions = sessions;
        // set sessions on mySchedule to the My Schedule tab
        $ctrl.tabs[1].sessions = _.filter(sessions, function (session) {
          return _.includes(mySchedule, parseInt(session.id));
        });
        // get unique date options for a date picker
        $ctrl.dateOptions = _.uniq(_.map(sessions, 'displayDate'));
        if (!$ctrl.selectedDate) {
          $ctrl.selectedDate = $ctrl.dateOptions[0];
        }
      })
    }

    function sessionFilter(sessions) {
      // apply the filter the user has specified to SessionName, SessionType, and VenueName
      // to avoid a deep comparison
      return _.filter(sessions, function (thisSession) {
        return thisSession.displayDate === $ctrl.selectedDate;
      });
    }
  }
})();
