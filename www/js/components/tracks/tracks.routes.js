(function () {
  angular
    .module('impactNation.tracks')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.tracks', {
        url: '/tracks',
        views: {
          'menuContent': {
            templateUrl: 'js/components/tracks/tracks.tpl.html',
            controller: 'TracksController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
