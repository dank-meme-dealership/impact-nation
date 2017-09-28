(function () {
  angular
    .module('impactNation.schedule.sessionItem', [])
    .component('sessionListItem', {
      template: '' +
      '<ion-item ui-sref="app.session({ sessionID: $ctrl.session.id })">' +
        '<div ng-bind="$ctrl.session.title" class="session-list-title"></div>' +
      '</ion-item>',
      bindings: {
        session: '<'
      }
    });
})();
