(function() {
	'use strict';

	angular
		.module('gulapp')
		.controller('ControllerLogin', ControllerLogin);

	ControllerLogin.$inject = [ '$location' ];

	function ControllerLogin($location) {

		// View Model
		var loginVm = this;
		loginVm.title = 'Gastronomia em um só lugar';

		// =========Eventos========
		loginVm.doLogin = function () {
			console.log("doLogin");
			$location.path("/app");
		}
	}
})();