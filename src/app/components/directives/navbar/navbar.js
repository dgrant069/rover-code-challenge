angular
    .module('dogbook')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/navbar/navbar.html',
      scope: {},
      link: linkFunction
    };

    return directive;

    /** @ngInject */
    function linkFunction(scope, elem, log) {
      console.log("nav scope", scope);
    }
  }
