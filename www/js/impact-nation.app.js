(function () {
  angular
    .module('impactNation', [
      'ionic',

      'impactNation.menu',
      'impactNation.home',
      'impactNation.activityFeed',
      'impactNation.map',
      'impactNation.schedule',
      'impactNation.speakers',
      'impactNation.sponsors',
      'impactNation.tracks'
    ])

    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

    .config(function ($urlRouterProvider) {
      // use this as the default/fallback
      $urlRouterProvider.otherwise('/app/home');
    });
})();
