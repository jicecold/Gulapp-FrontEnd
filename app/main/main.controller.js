(function() {
	'use strict';
	
	angular
		.module('gulapp')
		.controller('ControllerMain', ControllerMain);
	
	function ControllerMain(){
		
		var mainVm = this;
		mainVm.search;
		
		mainVm.toggleSearchClick = function(){
		search.visible ? search.visible=false : search.visible=true; 
		/*search.visible ? search.slideUp() : search.slideDown(function()
		{
			search.find('input').focus();
		});*/
			console.log("toggleSearchClick");

			return false;
			
		}
	}
})();