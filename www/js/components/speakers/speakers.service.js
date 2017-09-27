(function () {
  angular
    .module('impactNation.speakers')
    .service('speakersService', speakersService);

  function speakersService(api) {
    var service = {
      speakers: [],

      getSpeaker: getSpeaker,
      getSpeakers: getSpeakers
    };

    getSpeakers();

    return service;

    /**
     * Get a singular speaker by ID
     * @param speakerID
     * @returns {*}
     */
    function getSpeaker(speakerID) {
      return new Promise(function (resolve) {
        getSpeakers().then(function () {
          resolve(_.find(service.speakers, { id: parseInt(speakerID) }));
        });
      });
    }

    /**
     * Get all speakers
     * @returns {*}
     */
    function getSpeakers() {
      return api.get('speakers').then(function (response) {
        service.speakers = response.data;
        return response;
      });
    }
  }
})();
