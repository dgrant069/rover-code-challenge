  angular
    .module('dogbook')
    .controller('HomeController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, DogsDataFactory, $log) {
    var vm = this;

    init();

    function init() {
      DogsDataFactory.getDogsCollection().then(
        function(dogData) {
          $log.info('data in controller from service', dogData);
        },
        function(error) {

        }
      )
    }
  }
