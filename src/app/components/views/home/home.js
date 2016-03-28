  angular
    .module('dogbook')
    .controller('HomeController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, DogsDataFactory, $log) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1459122143098;
    vm.showToastr = showToastr;

    activate();
    init();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

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
