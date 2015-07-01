angular.module("JSONEditor").controller("MainCtrl", 
["$scope",
function($scope){
	$scope.theObject = {};
	
	//A mocked object
	$scope.theObject.herp = "derp";
	$scope.theObject.ferp = "herp";
	$scope.theObject.derp = {
		herp: "herp",
		derp: {
			zerg: "herp",
			herp: "zerg"
		}
	};
	
	
}]);