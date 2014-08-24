var app = angular.module('charsApp', []);

app.controller('MainController', function($scope,$sce) {
	$scope.symbols = symbols;
	$scope.limit = 60;
	$scope.limitInc = 60;

	for (var i in $scope.symbols) {
		var symbol = $scope.symbols[i];
		symbol.printable = $sce.trustAsHtml(symbol.codes[0])
	};
	$sce.trustAsHtml()
	$scope.symbols = symbols;
});