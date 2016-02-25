angular.module('dotrand-app')
  .controller('homeCtrl', ['$scope', '$rootScope', '$location','$timeout', function($scope, $rootScope, $location, $timeout) {
    $scope.goBlog = function() {
      $timeout(function () {
        window.location.reload(true);
      }, 10);
    }
  }]);