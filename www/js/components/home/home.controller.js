(function () {
  angular
    .module('impactNation.home')
    .controller('HomeController', HomeController);

  function HomeController($rootScope, scheduleManager, sessionsService) {
    var $ctrl = this;
    $ctrl.userSessions = [];
    updateUserSessions();

    $rootScope.$on('scheduleManager.toggleScheduled', updateUserSessions);

    function updateUserSessions() {
      var mySchedule = scheduleManager.getMySchedule();
      sessionsService.getSessions().then(function (sessions) {
        $ctrl.userSessions = _.filter(sessions, function (session) {
          return _.includes(mySchedule, parseInt(session.id));
        }).slice(0,3);
      })
    }
  }
})();
