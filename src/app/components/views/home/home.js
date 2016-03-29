  angular
    .module('dogbook')
    .controller('HomeController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, DogsDataFactory, $log, $scope) {
    var vm = this;
    $scope.dogsArray = [];

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
  }
