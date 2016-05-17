(function() {
	'use strict';

	angular
		.module('gulapp')
		.controller('ControllerMain', ControllerMain);

	function ControllerMain() {

		var mainVm = this;
		mainVm.search = false;

		mainVm.toggleSearchClick = function() {

			mainVm.search = !mainVm.search;
			
			console.log("toggleSearchClick");

			return false;

		}
	}
})();