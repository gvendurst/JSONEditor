angular.module("JSONEditor").controller("MainCtrl", 
["$scope",
function($scope){
	$scope.theObject = {};
	$scope.theObject.herp = "derp";
	$scope.theObject.ferp = "herp";
	$scope.theObject.derp = { herp: "herp"};
	
	
}]);