(function(){
	'use strict';

	angular.module('puti', [ 
		'ngRoute',
		'header',
		'view-main',
		'view-product',
		'view-about',
		'view-accommodation',
		'view-activity',
		'view-location',
		'view-kitchen',
		'templates' 
		])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();