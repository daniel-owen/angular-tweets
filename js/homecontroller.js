tweetApp.controller('homeController', function($scope, $http, $location, $mdDialog, $mdMedia){
	$scope.homePage = true;
	
	$scope.$watch(function(){
		return $location.path();
	},
	function(newPath){
		$scope.trump = "";
		$scope.hillary = "";
		$scope.home = "";
		console.log("The path changed. It's now " + newPath);
		if(newPath == "/trump"){
			$scope.trump = "active";
		}else if(newPath == "/hillary"){
			$scope.hillary = "active"
		}else if(newPath == "/"){
			$scope.home = "active";
		}
	}
	);

	$scope.showPrompt = function(ev) {
		// Appending dialog to document.body to cover sidenav in docs app
		var confirm = $mdDialog.prompt()
			.title('Search recent tweets regarding presidential candidates')
			.textContent('Trump? Hillary?')
			.placeholder('Candidate')
			.ariaLabel('Candidate name')
			.targetEvent(ev)
			.ok('Display Tweets')
			.cancel('I don\'t care');
		$mdDialog.show(confirm).then(function(result) {
			$scope.status = 'Search recent tweets regarding: ' + result;
		}, function() {
			$scope.status = 'You didn\'t name your dog.';
		});
	};

});