(function () {
  angular
    .module('impactNation.schedule')
    .directive('scheduleButton', tfScheduleButton);

  function tfScheduleButton($rootScope, scheduleManager) {
    var directive = {
      restrict: 'AE',
      replace: true,
      scope: {
        session: '='
      },
      link: scheduleButtonLink,
      templateUrl: 'js/components/schedule/schedule-button/schedule-button.tpl.html'
    };

    return directive;

    function scheduleButtonLink($scope, $element) {
      // initialize element
      setIsScheduled();

      $element.on('click', function (event) {
        event.stopPropagation();

        scheduleManager.toggleScheduled('permanent', $scope.session.id);
      });

      // Listen for some events so scheduled events are in sync, this is still
      // more performant than using ng-class everywhere :P
      $scope.$watch('session', setIsScheduled);
      $rootScope.$on('scheduleManager.toggleScheduled', setIsScheduled);

      function setIsScheduled() {
        if (!$scope.session) return;

        $element.removeClass('ion-ios-checkmark ion-plus-round');
        var isScheduled = scheduleManager.isScheduled('permanent', $scope.session.id);
        isScheduled ?
          $element.addClass('ion-ios-checkmark') :
          $element.addClass('ion-plus-round');
      }
    }
  }
})();
