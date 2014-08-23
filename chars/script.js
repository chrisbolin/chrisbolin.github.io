var app = angular.module('charsApp', []);

var symbols = [
	{codes:['&circledast;'],tags:['circle','asterisk','operator']},
	{codes:['&CircleDot;'],tags:['circle','dot','operator']},
	{codes:['&osol;'],tags:['circle','division','operator']},
	{codes:['&CircleTimes;'],tags:['circle','times','operator']},
	{codes:['&CirclePlus;'],tags:['circle','plus','operator']},
	{codes:['&CircleMinus;'],tags:['circle','Minus','operator']},
	// ------------------------------------ //
	{codes:['&CirclePlus;'],tags:['circle','plus','operator']},
	{codes:['&CircleMinus;'],tags:['circle','Minus','operator']},
	{codes:['&CircleDot;'],tags:['circle','dot','operator']},
	{codes:['&circledast;'],tags:['circle','asterisk','operator']},
	{codes:['&CircleTimes;'],tags:['circle','times','operator']},
	{codes:['&osol;'],tags:['circle','division','operator']}
];

app.controller('MainController', function($scope,$sce) {
	$scope.symbols = symbols;

	for (var i in $scope.symbols) {
		var symbol = $scope.symbols[i];
		symbol.printable = $sce.trustAsHtml(symbol.codes[0])
	};
	$sce.trustAsHtml()
	$scope.symbols = symbols;
});