angular.module('dotrand-app')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'cfpLoadingBarProvider', function($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = false;
    // $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home',
        controller: 'homeCtrl'
      })
      .state('user', {
        url: '/:user',
        templateUrl: 'partials/profile',
        controller: 'homeCtrl'
      });

    $locationProvider.html5Mode(true);
  }]);