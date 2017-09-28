(function () {
  angular
    .module('impactNation.schedule')
    .controller('ScheduleController', ScheduleController)
    .filter('addListDividers', addListDividers);

  function ScheduleController($rootScope, sessionsService, scheduleManager) {
    var $ctrl = this;

    $ctrl.tabs = [
      { title: 'Schedule', icon: 'ion-calendar', sessions: [], emptyMessage: 'There are no scheduled sessions right now.' },
      { title: 'My Schedule', icon: 'ion-person', sessions: [], emptyMessage: 'There are no sessions on your schedule. Try adding some from the schedule page.' }
    ];

    $ctrl.selectTab = selectTab;

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

    function updateMySchedule() {
      var mySchedule = scheduleManager.getMySchedule();
      sessionsService.getSessions().then(function (sessions) {
        // set all sessions to the schedule tab
        $ctrl.tabs[0].sessions = sessions;
        // set sessions on mySchedule to the My Schedule tab
        $ctrl.tabs[1].sessions = _.filter(sessions, function (session) {
          return _.includes(mySchedule, parseInt(session.id));
        })
      })
    }
  }

  /**
   * Add list dividers to a list, dunno if we'll use this yet
   * @returns {Function}
   */
  function addListDividers() {
    var dividers = {};

    return function (input) {
      if (!input || !input.length) return;

      var output = [];
      var previousDisplayGroup;
      var currentDisplayGroup;
      var item;

      for (var i = 0, ii = input.length; i < ii && (item = input[i]); i++) {
        currentDisplayGroup = item.displayGroup;
        if (!previousDisplayGroup || currentDisplayGroup != previousDisplayGroup) {
          if (!dividers[currentDisplayGroup]) {
            dividers[currentDisplayGroup] = { isDivider: true, divider: currentDisplayGroup };
          }

          output.push(dividers[currentDisplayGroup]);
        }

        output.push(item);
        previousDisplayGroup = currentDisplayGroup;
      }

      return output;
    };
  }
})();
