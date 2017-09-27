(function () {
  angular
    .module('impactNation.sponsors')
    .controller('SponsorsController', SponsorsController);

  function SponsorsController(sponsorsService) {
    var $ctrl = this;
    $ctrl.goToLink = goToLink;
    init();

    function init() {
      sponsorsService.getSponsors().then(function(response) {
        $ctrl.sponsors = response.data;
      });
    }

    function goToLink(url) {
      window.open(url,'_system','location=yes');
    }
  }
})();
