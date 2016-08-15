//initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('customMenu', function(){
	return {
		restrict: 'E', // E = element; A = attribute; C = class; M = comment
		templateUrl: "views/menu.html"
	}
});

tweetApp.config(function($routeProvider){
	// at /trump, load the home.html template, but new controller
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	});
	// at /trump, load the same template, but new controller
	$routeProvider.when('/trump', {
		templateUrl: 'views/home.html',
		controller: 'trumpController'
	});
	// at /hillary, load the same template, but new controller
	$routeProvider.when('/hillary', {
		templateUrl: 'views/home.html',
		controller: 'hillaryController'
	});
	$routeProvider.otherwise('/'); // default
});