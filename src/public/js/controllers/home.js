angular.module('dotrand-app')
  .controller('homeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.goBlog = function() {
      console.log('blogging');
      window.location.reload(true);
    }
  }]);