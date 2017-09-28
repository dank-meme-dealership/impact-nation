(function () {
  angular
    .module('impactNation.speakers.speakerItem', [])
    .component('speakerListItem', {
      template: '' +
        '<ion-item ui-sref="app.speaker({ speakerID: $ctrl.speaker.id })">' +
          '<img class="speaker-avatar" ng-src="{{ $ctrl.speaker.imageUrl }}">' +
          '<div class="speaker-info"><h2 class="speaker-name" ng-bind="$ctrl.speaker.name"></h2>' +
          '<h4 class="speaker-title-item" ng-bind="$ctrl.speaker.title"></h4></div>' +
        '</ion-item>',
      bindings: {
        speaker: '<'
      }
    });
})();
