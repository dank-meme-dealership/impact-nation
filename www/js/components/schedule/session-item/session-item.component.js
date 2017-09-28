(function () {
  angular
    .module('impactNation.schedule.sessionItem', [])
    .component('sessionListItem', {
      templateUrl: 'js/components/schedule/session-item/session-item.tpl.html',
      bindings: {
        session: '<',
        disableEdit: '<'
      }
    });
})();
