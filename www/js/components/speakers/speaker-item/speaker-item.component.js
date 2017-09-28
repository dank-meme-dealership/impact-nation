(function () {
  angular
    .module('impactNation.speakers.speakerItem', [])
    .component('speakerListItem', {
      template: '' +
        '<ion-item ui-sref="app.speaker({ speakerID: $ctrl.speaker.id })">' +
          '<h2 class="speaker-name" ng-bind="$ctrl.speaker.name"></h2>' +
          '<h4 class="speaker-title-item" ng-bind="$ctrl.speaker.title"></h4>' +
        '</ion-item>',
      bindings: {
        speaker: '<'
      }
    });
})();
