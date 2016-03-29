  angular
    .module('dogbook')
    .controller('HomeController', MainController);

  /** @ngInject */
  function MainController($timeout, DogsDataFactory, $log, $scope) {
    $scope.type = 'grid';
    init();

    function init() {
      DogsDataFactory.getDogsCollection().then(
        function(dogData) {
          $scope.dogsArray = dogData;
        },
        function(error) {

        }
      )
    }

    $scope.toggle = function(type) {
      $scope.type = type;
    }
  }
