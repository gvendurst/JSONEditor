angular.module("JSONEditor").directive("jsonObjectMember",
function($compile){
	return {
		restrict: "E",
		replace: "true",
		scope: {
			memberName: "=",
			member: "="
		},
		templateUrl: "src/JSONObjectMember.html",
		
		link: function(scope, elem, attrs){
			console.log(scope.member);
			
			//Object.keys(scope.member).forEach(function(key){
				//console.log(key, scope.member[key]);
				
				if (angular.isObject(scope.member)) {
					console.log(scope.member);
					elem.append("<json-object object='member'></json-object>");
					$compile(elem.contents())(scope)
				}
				
			//});
			
			
			
			
		
		
			scope.isAnObject = function(value){
				return (typeof value) === (typeof {});
			};
			
			
			
		},
		
		
		
	};
});