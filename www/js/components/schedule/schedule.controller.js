(function () {
  angular
    .module('impactNation.schedule')
    .controller('ScheduleController', ScheduleController);

  function ScheduleController(sessionsService) {
    var $ctrl = this;

    $ctrl.sessionsService = sessionsService;

    init();

    function init() {

    }
  }
})();
