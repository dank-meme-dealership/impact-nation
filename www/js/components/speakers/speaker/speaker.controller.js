(function () {
  angular
    .module('impactNation.speakers.speaker')
    .controller('SpeakerController', SpeakerController);

  function SpeakerController($state, speakersService, sessionsService) {
    var $ctrl = this;

    init();

    function init() {
      speakersService.getSpeaker($state.params.speakerID).then(function (speaker) {
        $ctrl.speaker = speaker;

        sessionsService.getSessions().then(function (sessions) {
          $ctrl.sessions = _.filter(sessions, function (session) {
            var hasSpeaker = false;
            _.each(session.speakers, function (speaker) {
              if (speaker.id === $ctrl.speaker.id) {
                hasSpeaker = true;
              }
            });
            return hasSpeaker;
          });
        });
      });
    }
  }
})();
