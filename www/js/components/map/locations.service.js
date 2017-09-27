(function() {
  angular
    .module('impactNation.map.locations', [])
    .factory('locationsService', locationsService);

  function locationsService(api) {
    var service = {
      getLocations : getLocations
    };

    return service;

    function getLocations() {
      return api.get('locations');
    }
  }
})();
