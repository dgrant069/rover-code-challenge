angular
    .module('dogbook')
    .factory('DogsDataFactory', DogsDataFactory);

  /** @ngInject */
  function DogsDataFactory($log, $http, $q, $window) {
    var service = {
      getDogsCollection: getDogsCollection
    };

    var apiUrl = 'http://interview.rover.com/dogs.json';

    function getDogsCollection() {
      var deferred = $q.defer();

      $http.get(apiUrl).then(
        function(dogsData) {
          var dogsArray = dogsData.data;
          $window.localStorage.setItem("dogs-list", JSON.stringify(dogsArray));
          deferred.resolve(dogsArray);
        },
        function (networkError) {
          var networkStatus = networkError.status;
          if (!networkStatus || networkStatus === 0) {
              networkStatus = 504;
          }
          getDogsCollectionFailed(networkError);

          var dogsCache = $window.localStorage.getItem("dogs-list");
          if(!dogsCache) {
            deferred.resolve(JSON.stringify(dogsCache));
          } else {
            deferred.reject({
                statusText: 'Get call failed due to: ' + networkStatus,
                status: networkStatus
            });
          }
        }
      );

      return deferred.promise;
    }

    function getDogsCollectionFailed(error) {
      $log.error('XHR Failed for getDogsCollection.\n' + angular.toJson(error.data, true));
    }

    return service;
  }
