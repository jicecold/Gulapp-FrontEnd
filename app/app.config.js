
angular.module('gulapp').config(config);

function config($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.when("/login", {
		templateUrl : "app/login/login.html",
		controller : "ControllerLogin"

	}).when("/app", {
		templateUrl : "app/main/main.html",
		controller : "ControllerMain"
			
	}).otherwise({
		redirectTo : "/login"
	});
}
