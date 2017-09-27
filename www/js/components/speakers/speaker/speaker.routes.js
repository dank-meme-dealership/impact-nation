(function () {
  angular
    .module('impactNation.speakers.speaker')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.speaker', {
        url: '/speakers/:speakerID',
        views: {
          'menuContent': {
            templateUrl: 'js/components/speakers/speaker/speaker.tpl.html',
            controller: 'SpeakerController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
