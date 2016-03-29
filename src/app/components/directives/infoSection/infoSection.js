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
      link: linkFunction
    };

    return directive;

    /** @ngInject */
    function linkFunction(scope, elem, log, ModalService) {
      console.log("info section scope", scope);
      scope.$watch('type', function(newVal, oldVal) {
        scope.viewType = newVal;
      });

      scope.showModal = function() {
          ModalService.showModal({
              templateUrl: 'modal.html',
              controller: "ModalController"
          }).then(function(modal) {
              modal.element.modal();
              modal.close.then(function(result) {
                  scope.message = "You said " + result;
              });
          });
      };

      scope.closeModal = function() {

      }
    }
  }
