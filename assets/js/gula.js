$(document).ready(function()
{
	
	// Toggle search
	$('a#toggle-search').click(function()
	{
		var search = $('div#search');

		search.is(":visible") ? search.slideUp() : search.slideDown(function()
		{
			search.find('input').focus();
		});

		return false;
	});

});