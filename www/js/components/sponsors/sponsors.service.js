(function () {
  angular
    .module('impactNation.sponsors')
    .service('sponsorsService', sponsorsService);

  function sponsorsService(api) {
    var service = {
      sponsors: undefined,

      getSponsors: getSponsors
    };

    return service;

    function getSponsors() {
      return api.get('sponsors');
    }
  }
})();
