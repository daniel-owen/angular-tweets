// Initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.config(function($routeProvider){
	//At / load up home.html, with home controller	
	$routeProvider.when('/',{
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});
	//At /trump, load up the same template, but new controller
	$routeProvider.when('/:searchTerm',{
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});
	$routeProvider.when('/:searchTerm*',{
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});
// 	//At /hillary, load up the same template, but new controller
// 	$routeProvider.when('/hillary',{ 
// 		templateUrl: 'views/home.html',
// 		controller: 'hillaryController'
// 	});
// 	$routeProvider.when('/:other',{
// 		templateUrl: 'views/home.html',
// 		controller: 'trumpController'

// 	})
// 	$routeProvider.otherwise('/'); //Default

});