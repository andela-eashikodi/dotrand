"use strict";

angular.module('dotrand-app')
  .controller('profileCtrl', ['$scope', '$rootScope', '$location','$timeout', 'UserService', 'Toast', 'spinnerService', '$state', 'envService', '$stateParams', function($scope, $rootScope, $location, $timeout, UserService, Toast, spinnerService, $state, envService, $stateParams) {
    
    
    UserService.userStatus({value: $stateParams.user}).then(function(res) {
      if(res.data.isValid) {
        $state.go('404');
      }
      else {
        $scope.user = res.data.user;
      }
    });
    
  }]);