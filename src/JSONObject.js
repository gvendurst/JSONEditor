angular.module("JSONEditor").directive("jsonObject",
function(){
	return {
		restrict: "E",
		replace: "true",
		scope: {
			object: "="
		},
		templateUrl: "src/JSONObject.html",
		
		link: function(scope, elem, attrs){
			scope.isAnObject = function(value){
				return (typeof value) === (typeof {});
			}
		},
		
		
		
	};
});