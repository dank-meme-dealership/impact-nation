(function () {
  angular
    .module('impactNation.speakers')
    .service('speakersService', speakersService);

  function speakersService(api) {
    var service = {
      speakers: undefined,

      getSpeaker: getSpeaker,
      getSpeakers: getSpeakers,
      mapSpeaker: mapSpeaker
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
        if (service.speakers && service.speakers.length) {
          resolve(getSpeakerFromService(speakerID))
        } else {
          getSpeakers().then(function () {
            resolve(getSpeakerFromService(speakerID));
          });
        }
      });
    }

    /**
     * Pull the speaker from the saved speakers in the service
     * @param speakerID
     * @returns {*}
     */
    function getSpeakerFromService(speakerID) {
      return _.find(service.speakers, {id: parseInt(speakerID)});
    }

    /**
     * Get all speakers
     * @returns {*}
     */
    function getSpeakers() {
      return api.get('speakers').then(function (response) {
        service.speakers = _.map(response.data, mapSpeaker);
        return service.speakers;
      });
    }

    /**
     * Map additional fields to speaker
     * @param speaker
     */
    function mapSpeaker(speaker) {
      speaker.name = [speaker.firstName, speaker.lastName].join(' ');
      return speaker;
    }
  }
})();
