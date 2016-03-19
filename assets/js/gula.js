$(document).ready(function()
{
	/**
	 * Adds overlay
	 */
	function addOverlay()
	{
		//var o = $("<div id='mako-overlay'></div>");
		var o = $("<div id='gula-overlay'></div>");

		$("body").append(o);

		o.css({ display : "block", opacity : 0 });

		o.velocity({opacity: 0.3}, {duration: 300, queue: false, ease: "easeOutCubic"});

		o.click(function()
		{
			removeOverlay();
		});

		return o;
	}

	/**
	 * Removes overlay
	 */
	function removeOverlay()
	{
		var o = $("#gula-overlay");

		o.velocity({opacity: 0}, {duration: 200, queue: false, ease: 'easeOutQuart', complete: function()
		{
			o.trigger('remove').remove();
		}});
	}

	/**
	 * Positions the tabs
	 */
	function positionTabs()
	{
		var tabs = $('#tab-wrapper');

		if(tabs.length)
		{
			var nav = $('#nav');

			var search = $('#search');

			var content = $('#content');

			var offsetTop = window.pageYOffset || document.documentElement.scrollTop;

			if(offsetTop > (nav.height() + (search.is(':visible') ? search.height() : 0)) && window.innerWidth > 600)
			{
				tabs.addClass('fixed');

				content.css({'padding-top': (tabs.height() + parseInt(tabs.css('margin-bottom'))) + 'px'});
			}
			else
			{
				tabs.removeClass('fixed');

				content.css({'padding-top': 0});
			}
		}
	}

	/**
	 * Parallax effetc
	 */

//	 function parallax()
//	 {
//		var slow = $('.slow');
//
//		slow.removeClass('bounceInDown');
//
//		slow.css
//		({
//			'padding-top': 100 + ($(window).scrollTop() / 1.888) + "px",
//			'opacity': 1 - ($(window).scrollTop() / 350)
//		});
//	 }

	/**
	 * Adjust content height
	 */
	function adjustContentHeight()
	{
		var leftMenu = $('.left-menu');

		if(leftMenu.length)
		{
			if(leftMenu.is(":visible"))
			{
				$('.page-content').css({'min-height': leftMenu.height() + 'px'});
			}
			else
			{
				$('.page-content').css({'min-height': 0 + 'px'});
			}
		}
	}

	adjustContentHeight();

	// Scroll events
	$(window).scroll(function(e)
	{
		positionTabs();
		//parallax();
	});

	// Resize events
	$(window).resize(function(e)
	{
		positionTabs();
		adjustContentHeight();
	});

	// Enable materialize functionality
	$(".button-collapse").sideNav();

	$('.dropdown-button').dropdown({'hover': false});

	$('select').not('.disabled').material_select();

	// Make it easier to hit the tab link
	$('#tab-wrapper>div>div>div.col').hover(function()
	{
		$(this).css({'cursor': 'hand'});

	})
	.click(function()
	{
		var a = $(this).find('a');

		if(a.length)
		{
			window.location = a.attr('href');
		}
	});

	// Open navigation
	$('button#toggle-menu').click(function()
	{
		var overlay = addOverlay();

		var menu = $('#left-nav');

		menu.css({'height': overlay.height() + 'px'});

		menu.addClass('left-nav-visible');

		menu.effect("slide", {'direction': 'left'});

		overlay.on('remove', function()
		{
			menu.removeClass('left-nav-visible');

			menu.css({'display': 'none', 'height': 'auto'});
		});
	});

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

	//$('pre > code:not(.no-syntax)').addClass('language-php');
});