'use strict';
app.controller('controllerLogin', function($scope, $location) {
	$scope.doLogin = function() {
		console.log("doLogin");
		$location.path("/app");	
	}
});