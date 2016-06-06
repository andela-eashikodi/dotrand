"use strict";

angular.module('dotrand-app')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'cfpLoadingBarProvider', function($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = false;
    // $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })
      .state('user', {
        url: '/:user',
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'templates/404.html'
      });

    $locationProvider.html5Mode(true);
  }]);