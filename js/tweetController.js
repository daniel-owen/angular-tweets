tweetApp.controller('tweetController', function($scope, $http, $location, $routeParams){
	// $scope.searchTweets = searchTweets;
	// $scope.trumpTweets = trumpTweets;
	// $scope.hillaryTweets = hillaryTweets;

	// console.log($location.hash());
	console.log($routeParams);

	if($routeParams.searchTerm){
		var searchTerm = $routeParams.searchTerm;
	}else{
		var searchTerm = 'trump';
	}

	// $scope.getTweets = function(searchText){
		$http({
			method: 'GET',
			url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=' + searchTerm
		}).then(
			function successFunction(tweetData){
				$scope.searchTweets = tweetData.data.statuses;
				console.log(tweetData.data.statuses);
			},function failureFunction(tweetData){
				console.log(tweetData);
			}
		);
	// }

	$scope.getTrumpTweets = function(){
		$http({
			method: 'GET',
			url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=donald%20trump'
		}).then(
			function successFunction(tweetData){
				$scope.trumpTweets = tweetData.data.statuses;
				console.log(tweetData);
			},function failureFunction(tweetData){
				console.log(tweetData);
			}
		);
	}

	$scope.getHillaryTweets = function(){
		$http({
			method: 'GET',
			url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=hillary%20clinton'
		}).then(
			function successFunction(tweetData){
				$scope.hillaryTweets = tweetData.data.statuses;
				console.log(tweetData);
			},function failureFunction(tweetData){
				console.log(tweetData);
			}
		);
	}

});





// ------------ ORIGINAL SEARCH FUNCTION ------------
// 	$scope.getTweets = function(searchText){
// 		$http({
// 			method: 'GET',
// 			url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=' + searchText
// 		}).then(
// 			function successFunction(tweetData){
// 				$scope.tweets = tweetData.data.statuses;
// 				console.log(tweetData);
// 			},function failureFunction(tweetData){
// 				console.log(tweetData);
// 			}
// 		);
// 	}

// 	$scope.logTweets = function(){
// 		console.log($scope.tweets);
// 	}

// });