(function () {
  angular
    .module('impactNation.speakers')
    .controller('SpeakersController', SpeakersController);

  function SpeakersController(speakersService) {
    var $ctrl = this;

    $ctrl.speakersService = speakersService;

    init();

    function init() {

    }
  }
})();
