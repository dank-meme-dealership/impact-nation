(function () {
  angular
    .module('impactNation.speakers')
    .controller('SpeakersController', SpeakersController);

  function SpeakersController() {
    var $ctrl = this;

    $ctrl.speakers = [
      {
        id: 10,
        name: "Brik Royster",
        title: "Software Enginner",
        company: "Relias Learning"
      },
      {
        id: 11,
        name: "Daniel Ryan",
        title: "Android Developer",
        company: "TSheets"
      }
    ];
  }
})();
