"use strict";

angular.module('dotrand-app')
  .controller('homeCtrl', ['$scope', '$rootScope', '$location','$timeout', 'UserService', 'Toast', 'spinnerService', '$state', 'envService', function($scope, $rootScope, $location, $timeout, UserService, Toast, spinnerService, $state, envService) {
    
    $scope.selected = undefined;
    $scope.signup = false;
    $scope.validationUrl = envService.read('VALIDATION_URL');
    
    $scope.goBlog = function(url) {
      window.location.href='/' + url;
    };
    
    UserService.userList().then(function(res) {
      $scope.users = res.data;
    });
    
    $scope.toggleForm = function() {
      $scope.signup = !$scope.signup;
    };
    
    $scope.onSelect = function(item, model) {
      $state.go('user', {user: item.username});
    };
    
    $scope.login = function(loginDetails) {
      spinnerService.show('loadingSpinner');
      UserService.authenticate(loginDetails).then(function(res) {
        spinnerService.hide('loadingSpinner');
        $state.go('user', {user: loginDetails.username});
      }, function(err) {
        spinnerService.hide('loadingSpinner');
        Toast.errorToast(err.data.message);
        console.log('err', err);
      });
    };
    
    function validateEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    }
    
     $scope.clearError = function() {
      $scope.invalidEmail = false;
    };
    
    $scope.userSignUp = function(signupDetails) {
      if(signupDetails && validateEmail(signupDetails.email)) {
        spinnerService.show('loadingSpinner');
        UserService.register(signupDetails).then(function(res) {
          spinnerService.hide('loadingSpinner');
          $state.go('user', {user: signupDetails.username});
        }, function(err) {
          spinnerService.hide('loadingSpinner');
          Toast.errorToast(err.data.message);
          console.log('err', err);
        });
      }
      else {
        $scope.invalidEmail = true;
        Toast.errorToast("Invalid Email");
      }
    };
    
  }]);