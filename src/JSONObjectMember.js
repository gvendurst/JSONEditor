angular.module("JSONEditor").directive("jsonObjectMember",
function($compile){
	return {
		restrict: "E",
		replace: "true",
		scope: {
			jeMemberName: "=",
			jeMember: "="
		},
		templateUrl: "src/JSONObjectMember.html",
		
		link: function(scope, elem, attrs){
			console.log(scope.jeMember);
			
			//Object.keys(scope.member).forEach(function(key){
				//console.log(key, scope.member[key]);
				
				if (angular.isObject(scope.jeMember)) {
					console.log(scope.jeMember);
					elem.append("<json-object je-object='jeMember'></json-object>");
					$compile(elem.contents())(scope)
				}
				
			//});
			
			
			
			
		
		
			scope.isAnObject = function(value){
				return (typeof value) === (typeof {});
			};
			
			
			
		},
		
		
		
	};
});