(function () {
  angular
    .module('impactNation.sponsors')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.sponsors', {
        url: '/sponsors',
        views: {
          'menuContent': {
            templateUrl: 'js/components/sponsors/sponsors.tpl.html',
            controller: 'SponsorsController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
