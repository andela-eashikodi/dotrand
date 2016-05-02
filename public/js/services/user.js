"use strict";

angular.module('dotrand-app')
  .factory('UserService', ['$http', 'envService', function ($http, envService) {
    var BaseUrl = envService.read('API_URL');
    return {
      authenticate: function(info) {
        return $http.post(BaseUrl + '/user/authenticate', info);
      },
      
      userList: function() {
        return $http.get(BaseUrl + '/users');
      }
    };
  }]);