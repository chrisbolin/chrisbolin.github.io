var app = angular.module('timestampApp', []);

app.controller('MainCtrl', function($scope) {
	$scope.timestamp = 'init';
	updateTimestamp = function(){
		$scope.timestamp = Math.round(Date.now()/1000);
		$scope.$apply();
	}
	var delay = 250;
	var intervalID = window.setInterval(updateTimestamp, delay);
});