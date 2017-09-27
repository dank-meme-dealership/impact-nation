(function () {
  angular
    .module('impactNation.home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'js/components/home/home.tpl.html',
            controller: 'HomeController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
