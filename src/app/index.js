/* global malarkey:false, moment:false */
angular.module('dogbook', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'toastr'
])
.constant('malarkey', malarkey)
.constant('moment', moment)
.config(config)
.config(routerConfig)
.run(runBlock);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/components/views//home/home.html',
            controller: 'HomeController',
            controllerAs: 'main'
        });

        $urlRouterProvider.otherwise('/');
    }

    /** @ngInject */
    function config($logProvider, toastrConfig) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;
    }

    /** @ngInject */
    function runBlock($log) {
        $log.debug('runBlock end');
    }