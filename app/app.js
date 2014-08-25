(function(){
	'use strict';

	angular.module('pagetransitions', [ 'ngRoute','pagetransitions-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();