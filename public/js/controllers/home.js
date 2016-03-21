angular.module('dotrand-app')
  .controller('homeCtrl', ['$scope', '$rootScope', '$location','$timeout', 'UserService', 'Toast', 'spinnerService', '$state', function($scope, $rootScope, $location, $timeout, UserService, Toast, spinnerService, $state) {
    
    $scope.selected = undefined;
    
    $scope.goBlog = function(url) {
      window.location.href='/' + url;
    };
    
    UserService.userList().then(function(res) {
      $scope.users = res.data;
    });
    
    $scope.onSelect = function(item, model) {
      // window.location.href= '/' + item.username;
      $state.go('user', {user: item.username});
      // console.log('item', item);
      // console.log('model', model);
      // console.log('scope.selected', $scope.selected);
    };
    
    $scope.login = function(loginDetails){
      spinnerService.show('loadingSpinner');
      UserService.authenticate(loginDetails).then(function(res) {
        spinnerService.hide('loadingSpinner');
        console.log('res', res);
      }, function(err) {
        spinnerService.hide('loadingSpinner');
        Toast.errorToast(err.data.message);
        console.log('err', err);
      });
    };
    
  }]);