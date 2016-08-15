//initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('tweetHello', function(){
	return {
		restrict: 'E', // E = element; A = attribute; C = class; M = comment
		template: "Hello, class from an element!"
	}
});

tweetApp.directive('helloAttr', function(){
	return {
		restrict: 'A', // E = element; A = attribute; C = class; M = comment
		// template: "<li>Hello, class from an attribute!</li><li>{{test}}</li>",
		templateUrl: "views/hello.html"
	}
});

tweetApp.directive('helloClass', function(){
	return {
		restrict: 'C', // E = element; A = attribute; C = class; M = comment
		template: "Hello, class from another type of class!"
	}
});

tweetApp.directive('turnMeBlue', function(){
	return {
		link: function($scope, element, attrs){
			element.bind('mouseenter', function(){
				element.css('color', $scope.myColor);
				console.log(element);
			});
			element.bind('mouseleave', function(){
				element.css('color', 'black');
			});
		}
	}
});