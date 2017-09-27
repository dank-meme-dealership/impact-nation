(function () {
  angular
    .module('impactNation.activityFeed')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.activityFeed', {
        url: '/activity-feed',
        views: {
          'menuContent': {
            templateUrl: 'js/components/activity-feed/activity-feed.tpl.html',
            controller: 'ActivityFeedController',
            controllerAs: '$ctrl'
          }
        }
      });
  }
})();
