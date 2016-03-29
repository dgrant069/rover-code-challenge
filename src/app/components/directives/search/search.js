angular
    .module('dogbook')
    .directive('searchFilter', searchFilter);

  /** @ngInject */
  function searchFilter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/search/search.html',
      scope: {},
      link: linkFunction
    };

    return directive;

    /** @ngInject */
    function linkFunction(scope, elem, ctrl, modelValue, vm) {
      console.log("elem in search", elem);

      elem.on('keyup', function () {
        console.log("vm", vm);
        // infoSection.filter(scope.dog.nameSearch);

        // scope.dogFilter = scope.dog.nameSearch;
      //   if (ctrl.$modelValue) {
          // validatePinUniqueNumbers();
          // validatePinLength();
          // scope.$apply();
        // } else {
          // ctrl.$setValidity('pinUnique', false);
          // validatePinUniqueNumbers();
          // scope.$apply();
      //   }
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
