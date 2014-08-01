var app = angular.module('pbjApp', []);

var allValues = {}

allValues.p = ["Pablo","Paige","Pam","Pamela","Pat","Patrica","Patrice","Patricia","Patrick","Patsy","Patti","Patty","Paul","Paula","Paulette","Pauline","Pearl","Pearlie","Pedro","Peggy","Penelope","Penny","Percy","Perry","Pete","Peter","Petra","Phil","Philip","Phillip","Phyllis","Pierre","Polly","Preston","Priscilla","Phoebe","Pamala"];
allValues.b = ["Barbara","Barbra","Barry","Bart","Beatrice","Beatriz","Becky","Belinda","Ben","Benita","Benito","Benjamin","Bennie","Benny","Bernadette","Bernadine","Bernard","Bernice","Bert","Bertha","Bessie","Beth","Bethany","Betsy","Bette","Bettie","Betty","Bettye","Beulah","Beverly","Bianca","Bill","Billie","Billy","Blaine","Blair","Blake","Blanca","Blanche","Bob","Bobbi","Bobbie","Bobby","Bonita","Bonnie","Boyd","Brad","Bradford","Bradley","Brady","Brain","Brandi","Brandon","Brandy","Brenda","Brendan","Brent","Bret","Brett","Brian","Brianna","Bridget","Bridgette","Brittany","Brittney","Brooke","Bruce","Bryan","Bryant","Bryce","Bryon","Buddy","Burton","Byron"];
allValues.j = ["Jack","Jackie","Jackson","Jaclyn","Jacob","Jacqueline","Jacquelyn","Jaime","Jake","Jamal","James","Jami","Jamie","Jan","Jana","Jane","Janelle","Janet","Janette","Janice","Janie","Janine","Janis","Jared","Jarrod","Jasmine","Jason","Jasper","Javier","Jay","Jayne","Jean","Jeanette","Jeanie","Jeanine","Jeanne","Jeannette","Jeannie","Jeannine","Jeff","Jeffery","Jeffrey","Jeffry","Jenifer","Jenna","Jennie","Jennifer","Jenny","Jerald","Jeremiah","Jeremy","Jeri","Jermaine","Jerome","Jerri","Jerry","Jess","Jesse","Jessica","Jessie","Jesus","Jewel","Jewell","Jill","Jillian","Jim","Jimmie","Jimmy","Jo","Joan","Joann","Joanna","Joanne","Joaquin","Jocelyn","Jodi","Jodie","Jody","Joe","Joel","Joesph","Joey","Johanna","John","Johnathan","Johnnie","Johnny","Jolene","Jon","Jonathan","Jonathon","Joni","Jordan","Jorge","Jose","Josefina","Joseph","Josephine","Josh","Joshua","Josie","Joy","Joyce","Juan","Juana","Juanita","Judith","Judy","Julia","Julian","Julianne","Julie","Julio","Julius","June","Junior","Justin","Justine"]
allValues.bg = ["04BFBF", "1C96BF", "07C5E0", "05F7F7", "07E0C3", "07FBBA"]

app.controller('MainController', function($scope) {
	$scope.values = {};

	$scope.changeValue = function(key) {
		var choices = allValues[key];
		$scope.values[key] = choices[Math.floor(Math.random()*choices.length)];
	}

	$scope.changeAll = function() {
		$scope.changeValue('p');
		$scope.changeValue('b');
		$scope.changeValue('j');
		$scope.changeValue('bg');
	}

	$scope.changeAll();

});