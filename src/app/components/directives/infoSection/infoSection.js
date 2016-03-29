angular
    .module('dogbook')
    .directive('infoSection', infoSection);

  /** @ngInject */
  function infoSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/infoSection/infoSection.html',
      scope: {
          dogsList: '='
      },
      link: linkFunction
    };

    return directive;

    /** @ngInject */
    function linkFunction(scope, elem, log) {
      console.log("info section scope", scope);
      scope.viewType = "grid";


    }
  }
