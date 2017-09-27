(function () {
  angular
    .module('impactNation.schedule.sessionItem', [])
    .component('sessionListItem', {
      template: '' +
      '<ion-item ui-sref="app.session({ sessionID: $ctrl.session.id })">' +
        '<div ng-bind="$ctrl.session.title"></div>' +
        '<div ng-bind="$ctrl.session.subtitle"></div>' +
      '</ion-item>',
      bindings: {
        session: '<'
      }
    });
})();
