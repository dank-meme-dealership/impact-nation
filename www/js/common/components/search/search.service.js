(function () {
  angular
    .module('search')
    .factory('searchService', searchService);

  function searchService() {
    var service = {
      accentFold        : accentFold,
      lowerCaseCompare  : lowerCaseCompare,
      lowerCaseIncludes : lowerCaseIncludes
    };

    return service;

    /**
     * Fix up accents
     * @param inStr
     */
    function accentFold(inStr) {
      return inStr.replace(/([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g, function(str,a,c,e,i,n,o,s,u,y,ae) {
        if(a) return 'a';
        else if(c) return 'c';
        else if(e) return 'e';
        else if(i) return 'i';
        else if(n) return 'n';
        else if(o) return 'o';
        else if(s) return 's';
        else if(u) return 'u';
        else if(y) return 'y';
        else if(ae) return 'ae';
      });
    }

    /**
     * Compare string to the query
     * @param str
     * @param query
     * @returns {boolean}
     */
    function lowerCaseCompare(str, query) {
      return accentFold(str).toLowerCase().indexOf(accentFold(query)) > -1;
    }

    /**
     * See if string array includes query
     * @param arr
     * @param query
     * @returns {boolean}
     */
    function lowerCaseIncludes(arr, query) {
      var includes = false;
      _.each(arr, function(a) {
        includes = includes || lowerCaseCompare(a, query);
      });
      return includes;
    }
  }
})();
