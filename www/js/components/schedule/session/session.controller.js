(function () {
  angular
    .module('impactNation.schedule.session')
    .controller('SessionController', SessionController);

  function SessionController($state, sessionsService, scheduleManager) {
    var $ctrl = this;

    $ctrl.isScheduled = false;

    $ctrl.toggleScheduled = toggleScheduled;

    init();

    function init() {
      sessionsService.getSession($state.params.sessionID).then(function (session) {
        $ctrl.session = session;
        setIsScheduled();
      });
    }

    function toggleScheduled() {
      scheduleManager.toggleScheduled('permanent', $ctrl.session.id);
      setIsScheduled();
    }

    function setIsScheduled() {
      $ctrl.isScheduled = scheduleManager.isScheduled('permanent', $ctrl.session.id);
    }
  }
})();
