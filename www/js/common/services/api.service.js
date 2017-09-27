(function () {
  angular
    .module('impactNation')
    .factory('api', api);

  function api($http) {
    var service = {
      get: get
    };

    return service;

    /**
     * Load the mock data from a json file given a name
     * @param name
     */
    function get(name) {
      return $http.get('/json/' + name + '.json');
    }
  }
})();
