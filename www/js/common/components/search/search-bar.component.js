(function () {
  angular
    .module('search', [])
    .component('searchBar', {
      templateUrl: 'js/common/components/search/search-bar.tpl.html',
      controller: SearchController,
      bindings: {
        filterText: '='
      }
    });

  function SearchController() {
    var $ctrl = this;

    $ctrl.showCancel = false;

    $ctrl.clearSearch = clearSearch;
    $ctrl.searchBarFocus = searchBarFocus;
    $ctrl.searchBarBlur = searchBarBlur;

    function clearSearch() {
      $ctrl.filterText = '';
    }

    /**
     * When the search bar is in focus, we want to display the cancel button
     */
    function searchBarFocus() {
      $ctrl.showCancel = true;
    }

    /**
     * When the search bar loses focus, we want to hide the cancel button,
     * except if a filterText exists. The filterText case is handled in
     * the ngShow in the html.
     */
    function searchBarBlur() {
      $ctrl.showCancel = false;
    }
  }
})();
