(function () {
  angular
    .module('impactNation.schedule')
    .controller('ScheduleController', ScheduleController);

  function ScheduleController(api) {
    var $ctrl = this;

    init();

    function init() {
      api.get('sessions').then(function (response) {
        $ctrl.sessions = response.data;
      })
    }
  }
})();
