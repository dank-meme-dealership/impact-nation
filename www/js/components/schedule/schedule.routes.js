(function () {
  angular
    .module('impactNation.schedule')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.schedule', {
        url: '/schedule',
        views: {
          'menuContent': {
            templateUrl: 'js/components/schedule/schedule.tpl.html',
            controller: 'ScheduleController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
