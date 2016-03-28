angular
    .module('dogbook')
    .factory('DogsDataFactory', DogsDataFactory);

  /** @ngInject */
  function DogsDataFactory($log, $http, $q) {
    var apiUrl = 'http://interview.rover.com/dogs.json';

    function getDogsCollection() {
      var deferred = $q.defer();

      $http.get(apiUrl).then(
        function(dogData) {
          $log.info('dogData', dogData);
          deferred.resolve(dogData);
        },
        function (networkError) {
            var networkStatus = networkError.status;
            if (!networkStatus || networkStatus === 0) {
                networkStatus = 504;
            }

            deferred.reject({
                statusText: 'Get call failed due to: ' + networkStatus,
                status: networkStatus
            });
        }
      );

      return deferred.promise;
    }

    var service = {
      getDogsCollection: getDogsCollection
    };

    return service;

    function getDogsCollectionFailed(error) {
      $log.error('XHR Failed for getDogsCollection.\n' + angular.toJson(error.data, true));
    }
  }
