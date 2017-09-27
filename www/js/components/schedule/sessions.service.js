(function () {
  angular
    .module('impactNation.schedule')
    .service('sessionsService', sessionsService);

  function sessionsService(api) {
    var service = {
      sessions: [],

      getSession: getSession,
      getSessions: getSessions
    };

    getSessions();

    return service;

    /**
     * Get a singular session by ID
     * @param sessionID
     * @returns {*}
     */
    function getSession(sessionID) {
      return new Promise(function (resolve) {
        getSessions().then(function () {
          resolve(_.find(service.sessions, { id: parseInt(sessionID) }));
        });
      });
    }

    function getSessions() {
      return api.get('sessions').then(function (response) {
        service.sessions = response.data;
        return response.data;
      });
    }
  }
})();
