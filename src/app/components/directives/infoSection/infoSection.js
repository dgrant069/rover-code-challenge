angular
  .module('dogbook')
  .directive('infoSection', infoSection);

  /** @ngInject */
  function infoSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/infoSection/infoSection.html',
      scope: {
          dogsList: '=',
          type: '='
      },
      controller: controllerFunction,
      controllerAs: 'vm',
      link: linkFunction
    };

    return directive;

    /** @ngInject */
    function linkFunction(scope, elem, log, ctrl) {
      console.log("info section scope", scope);
      console.log("info section ctrl", ctrl);
      scope.$watch('type', function(newVal, oldVal) {
        scope.viewType = newVal;
      });
    }

    /** @ngInject */
    function controllerFunction($scope){
      var vm = this;

      vm.filter = function(text) {
        $scope.dogFilter = text;
      }
    }
  }
