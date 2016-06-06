"use strict";

angular.module('dotrand-app')
  .config(function(envServiceProvider) {
    
    envServiceProvider.config({
      domains: {
				development: ['localhost', 'dev.local'],
				production: ['dotrand.com', 'dotrand.herokuapp.com'],
			},
			vars: {
				development: {
					API_URL: 'http://localhost:2016',
          VALIDATION_URL: 'http://localhost:2016/username/availability'
				},
				production: {
					API_URL: 'https://dotrand-api.herokuapp.com',
          VALIDATION_URL: 'https://dotrand-api.herokuapp.com/username/availability'
				}
			}
    });
    // run the environment check, so the comprobation is made 
		// before controllers and services are built 
		envServiceProvider.check();
  });