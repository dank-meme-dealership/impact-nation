(function () {
  angular
    .module('impactNation.activityFeed')
    .controller('ActivityFeedController', ActivityFeedController);

  function ActivityFeedController(twitterService) {
    var $ctrl = this;

    init();

    function init() {
      twitterService.initialize();
      twitterService.getHomeTimeline();
    }
  }
})();
