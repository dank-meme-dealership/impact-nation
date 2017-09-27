(function () {
  angular
    .module('impactNation.tracks')
    .controller('TracksController', TracksController);

  function TracksController(tracksService) {
    var $ctrl = this;
    $ctrl.tracksService = tracksService;
  }
})();
