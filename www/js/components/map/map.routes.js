(function () {
  angular
    .module('impactNation.map')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.map', {
        url: '/map',
        views: {
          'menuContent': {
            templateUrl: 'js/components/map/map.tpl.html',
            controller: 'MapController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
