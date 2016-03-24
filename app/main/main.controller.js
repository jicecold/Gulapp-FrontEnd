(function() {
	'use strict';
	
	angular
		.module('gulapp')
		.controller('ControllerMain', ControllerMain);
	
	function ControllerMain(){
		
		var mainVm = this;
		
		mainVm.toggleSearchClick = function(){
			
			console.log("toggleSearchClick");
		}
	}
})();