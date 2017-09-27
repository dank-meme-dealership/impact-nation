(function () {
  angular
    .module('impactNation.menu')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/components/menu/menu.tpl.html',
        controller: 'MenuController',
        controllerAs: '$ctrl'
      });
  }
})();
