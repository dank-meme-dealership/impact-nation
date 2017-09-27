(function () {
  angular
    .module('impactNation.schedule')
    .controller('ScheduleController', ScheduleController)
    .filter('addListDividers', addListDividers);

  function ScheduleController(sessionsService) {
    var $ctrl = this;

    $ctrl.sessionsService = sessionsService;

    init();

    function init() {

    }
  }

  function addListDividers() {
    var dividers = {};

    return function (input) {
      if (!input || !input.length) return;

      var output = [];
      var previousDisplayGroup;
      var currentDisplayGroup;
      var item;

      for (var i = 0, ii = input.length; i < ii && (item = input[i]); i++) {
        currentDisplayGroup = item.displayGroup;
        if (!previousDisplayGroup || currentDisplayGroup != previousDisplayGroup) {
          if (!dividers[currentDisplayGroup]) {
            dividers[currentDisplayGroup] = { isDivider: true, divider: currentDisplayGroup };
          }

          output.push(dividers[currentDisplayGroup]);
        }

        output.push(item);
        previousDisplayGroup = currentDisplayGroup;
      }

      return output;
    };
  }
})();
