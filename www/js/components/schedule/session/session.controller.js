(function () {
  angular
    .module('impactNation.schedule.session')
    .controller('SessionController', SessionController);

  function SessionController($state, sessionsService) {
    var $ctrl = this;

    init();

    function init() {
      sessionsService.getSession($state.params.sessionID).then(function (session) {
        $ctrl.session = session;
      });
    }
  }
})();
