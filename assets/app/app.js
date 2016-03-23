var app = angular.module('gulapp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.
	when("/login", 
			{ templateUrl: "login.html", 
			controller: "controllerLogin" }).
	when("/app",
			{ templateUrl: "main.html",
			controller: "controllerMain" }).
	otherwise( { redirectTo: "/login" });
});
