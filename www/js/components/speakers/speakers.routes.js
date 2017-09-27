(function () {
  angular
    .module('impactNation.speakers')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.speakers', {
        url: '/speakers',
        views: {
          'menuContent': {
            templateUrl: 'js/components/speakers/speakers.tpl.html',
            controller: 'SpeakersController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
