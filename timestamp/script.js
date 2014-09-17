var app = angular.module('timestampApp', []);

details = [
	'~32 years',
	'~3 years',
	'~4 months',
	'~11 days',
	'~1 day',
	'~3 hours',
	'~15 minutes',
	'~1.5 minutes',
	'10 seconds',
	'1 second',
]

app.controller('MainCtrl', function($scope) {
	$scope.timestamp = 'init';
	updateTimestamp = function(){
		var ts = Math.round(Date.now()/1000);
		$scope.timestampArray = ts.toString().split('');
		$scope.$apply();
	}
	var delay = 250;
	var intervalID = window.setInterval(updateTimestamp, delay);
	$scope.getInfo = function(index){
		console.log(index);
		$scope.info = details[index];
	}
});