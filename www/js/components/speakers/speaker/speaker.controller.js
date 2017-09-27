(function () {
  angular
    .module('impactNation.speakers.speaker')
    .controller('SpeakerController', SpeakerController);

  function SpeakerController($state, speakersService) {
    var $ctrl = this;

    init();

    function init() {
      speakersService.getSpeaker($state.params.speakerID).then(function (speaker) {
        $ctrl.speaker = speaker;
      })
    }
  }
})();
