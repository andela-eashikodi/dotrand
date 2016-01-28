angular.module('dotrand-app')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'cfpLoadingBarProvider', function($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = false;
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'homeCtrl',
        controllerAs : 'ctrl'
      });

    $locationProvider.html5Mode(true);
  }]);