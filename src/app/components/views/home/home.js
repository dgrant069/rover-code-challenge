  angular
    .module('dogbook')
    .controller('HomeController', MainController);

  /** @ngInject */
  function MainController($timeout, DogsDataFactory, $log, $scope) {
    $scope.dogsArray = [];
    $scope.type = 'grid';
    init();

    function init() {
      DogsDataFactory.getDogsCollection().then(
        function(dogData) {
          $log.info('data in controller from service', dogData);
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
