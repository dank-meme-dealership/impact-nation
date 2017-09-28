(function () {
  angular
    .module('impactNation.speakers.speakerItem', [])
    .component('speakerListItem', {
      template: '' +
        '<ion-item ui-sref="app.speaker({ speakerID: $ctrl.speaker.id })">' +
          '<div class="speaker-name" ng-bind="$ctrl.speaker.name"></div>' +
          '<div class="speaker-title-item" ng-bind="$ctrl.speaker.title"></div>' +
        '</ion-item>',
      bindings: {
        speaker: '<'
      }
    });
})();
