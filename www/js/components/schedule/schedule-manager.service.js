(function () {
  angular
    .module('impactNation.schedule')
    .factory('scheduleManager', scheduleManager);

  /**
   * Manages your local schedule of events you are attending
   */
  function scheduleManager(localStorage, $rootScope) {
    return {
      addToSchedule: addToSchedule,
      toggleScheduled: toggleScheduled,
      getMySchedule: getMySchedule,
      isScheduled: isScheduled
    };

    /**
     * key should be 'permanent'
     */
    function addToSchedule(key, ids) {
      var schedule = localStorage.getObject('schedule');
      schedule[key] = _.union(schedule[key], ids);

      localStorage.setObject('schedule', schedule);
      $rootScope.$broadcast('scheduleManager.toggleScheduled', getMySchedule());
    }

    /**
     * key should be 'permanent'
     */
    function toggleScheduled(key, id) {
      var schedule = localStorage.getObject('schedule');
      schedule[key] = _.xor(schedule[key], [id]);

      localStorage.setObject('schedule', schedule);
      $rootScope.$broadcast('scheduleManager.toggleScheduled', getMySchedule());
    }

    /**
     * only return permanent schedule
     */
    function getMySchedule() {
      var schedule = localStorage.getObject('schedule');
      // Treat schedule.permanent being undefined (nothing has been stored there yet)
      // as a schedule of 0 events as callers will expect
      return schedule.permanent || [];
    }

    /**
     * key should be 'permanent'
     */
    function isScheduled(key, id) {
      var schedule = localStorage.getObject('schedule');
      return _.includes(schedule[key], id);
    }
  }
})();
