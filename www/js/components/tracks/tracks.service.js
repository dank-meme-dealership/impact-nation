(function () {
  angular
    .module('impactNation.tracks')
    .factory('tracksService', tracksService);

  function tracksService(api, sessionsService) {
    var service = {
      tracks: undefined,

      getTrack: getTrack,
      getTracks: getTracks
    };

    getTracks();

    return service;

    /**
     * Get a singular track by ID
     * @param trackID
     * @returns {*}
     */
    function getTrack(trackID) {
      return new Promise(function (resolve) {
        if (service.tracks && service.tracks.length) {
          resolve(getTrackFromService(trackID))
        } else {
          getTracks().then(function () {
            resolve(getTrackFromService(trackID));
          });
        }
      });
    }

    /**
     * Pull the track from the saved tracks in the service
     * @param trackID
     * @returns {*}
     */
    function getTrackFromService(trackID) {
      return _.find(service.tracks, {id: parseInt(trackID)});
    }

    /**
     * Get all tracks
     * @returns {*}
     */
    function getTracks() {
      return new Promise(function (resolve) {
        var tracksPromise = api.get('tracks');
        var sessionsPromise = sessionsService.getSessions();

        Promise.all([tracksPromise, sessionsPromise]).then(function (values) {
          service.tracks = _.map(values[0].data, mapTrack);
          resolve(service.tracks);
        });
      });
    }

    /**]
     * Map the sessions to the track
     * @param track
     * @returns {*}
     */
    function mapTrack(track) {
      track.sessions = _.map(track.sessions, function (sessionID) {
        return sessionsService.getSessionFromService(sessionID);
      });
      return track;
    }
  }
})();
