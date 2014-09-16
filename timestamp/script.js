var app = angular.module('timestampApp', []);

app.controller('MainCtrl', function($scope) {
	$scope.timestamp = 'init';
	updateTimestamp = function(){
		var ts = Math.round(Date.now()/1000);
		$scope.timestampArray = ts.toString().split('');
		$scope.$apply();
	}
	var delay = 250;
	var intervalID = window.setInterval(updateTimestamp, delay);
});