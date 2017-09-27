(function () {
  angular
    .module('impactNation.speakers.speaker')
    .controller('SpeakerController', SpeakerController);

  function SpeakerController($state) {
    var $ctrl = this;

    $ctrl.speakers = {
      10: {
        id: 10,
        name: "Brik Royster",
        title: "Software Enginner",
        company: "Relias Learning",
        description: "While he spends most of his time playing magic and foosball at work, he\'s a very quick and smart dev."
      },
      11: {
        id: 11,
        name: "Daniel Ryan",
        title: "Android Developer",
        company: "TSheets",
        description: "TSheets badass that jumped ship from WCA and made Tim mad, whoops ¯\\_(ツ)_/¯"
      }
    };

    init();

    function init() {
      if ($state.params.speakerID) {
        $ctrl.speaker = $ctrl.speakers[$state.params.speakerID];
      }
    }
  }
})();
