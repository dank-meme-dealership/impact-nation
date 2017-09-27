(function () {
  angular
    .module('impactNation.schedule.session')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.session', {
        url: '/schedule/:sessionID',
        views: {
          'menuContent': {
            templateUrl: 'js/components/schedule/session/session.tpl.html',
            controller: 'SessionController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
