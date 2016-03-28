angular
    .module('dogbook')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directives/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      link: linkFunction,
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function linkFunction(scope, elem, log) {
      console.log("test link funciton", scope);
    }

    function NavbarController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }
