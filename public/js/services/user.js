angular.module('dotrand-app')
  .factory('UserService', ['$http', 'BaseUrl', function ($http, BaseUrl) {
    return {
      authenticate: function(info) {
        return $http.post(BaseUrl + '/user/authenticate', info);
      },
      
      userList: function() {
        return $http.get(BaseUrl + '/users');
      }
    };
  }]);