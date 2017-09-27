(function () {
  angular
    .module('impactNation.schedule.session')
    .controller('SessionController', SessionController);

  function SessionController($state) {
    var $ctrl = this;

    $ctrl.mockData = {
      conner: {
        title: 'Conner',
        description: 'conner is a BA'
      },
      matt: {
        title: 'Matt',
        description: 'matt is a ninja'
      },
      peter: {
        title: 'Peter',
        description: 'peter is a master'
      }
    };

    init();

    function init() {
      if ($state.params.sessionID) {
        $ctrl.details = $ctrl.mockData[$state.params.sessionID];
      }
    }
  }
})();
