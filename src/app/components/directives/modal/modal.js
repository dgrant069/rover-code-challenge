angular.module('dogbook')
  .controller('ModalCtrl', function ($scope, $uibModal, $log) {

    $scope.animationsEnabled = true;

    $scope.open = function (dog) {
      $scope.dogInfo = dog;

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/components/directives/modal/modal.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          dogInfo: function () {
            return $scope.dogInfo;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };

  });

angular.module('dogbook')
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    $scope.dogInfo = dogInfo;

    $scope.ok = function () {
      $uibModalInstance.close();
    };
  });