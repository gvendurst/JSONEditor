angular.module("JSONEditor").directive("jsonObject",
function(){
	return {
		restrict: "E",
		replace: "true",
		//template: "<p>HERP</p>",
		templateUrl: "src/JSONObject.html",
		link: function(scope, elem, attrs){
			scope.object = attrs.object;
		}
	};
});