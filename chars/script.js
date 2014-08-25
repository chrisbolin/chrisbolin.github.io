var app = angular.module('charsApp', []);

app.controller('MainController', function($scope,$sce) {
	$scope.symbols = symbols;
	$scope.limit = 60;
	$scope.limitInit = 60;

	for (var i in $scope.symbols) {
		var symbol = $scope.symbols[i];
		symbol.printable = $sce.trustAsHtml(symbol.codes[0])
	};

	$scope.symbols = symbols;

	$scope.search = '';
	$scope.searchFunc = function(symbol){
		// return symbol.about.toLowerCase().indexOf($scope.search) > -1;
		var target = symbol.about.toLowerCase() + symbol.codes[0];
		var searches = $scope.search.toLowerCase().split(" ");
		for (var i in searches){
			if (target.indexOf(searches[i]) == -1){
				return false;
			}
		}
		return true;
	}
});