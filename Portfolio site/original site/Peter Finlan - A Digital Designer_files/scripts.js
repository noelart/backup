/***********************************/
/*   Author: Peter Finlan 2014    */
/*********************************/
$(function() {

	$('.code-content').waypoint(function() {
		$('.codeheaders').addClass('bounceInRight');
	}, {
		offset: '70%'
	});

	$('.contact').waypoint(function() {
		$('.contact-btn').addClass('fadeInUp');
	}, {
		offset: '80%'
	});

});
// RESPONSIVE SELECT NAVIGATION ---->
$(document).ready(function() {
	//build dropdown
	$("<select />").appendTo(".nav");

	// Create default option "Go to..."
	$("<option />", {
		"selected": "selected",
		"value": "",
		"text": "Go to..."
	}).appendTo(".nav select");

	// Populate dropdowns with the first menu items
	$(".nav li a").each(function() {
		var el = $(this);
		$("<option />", {
			"value": el.attr("href"),
			"text": el.text()
		}).appendTo(".nav select");
	});
	//make responsive dropdown menu actually work			
	$(".nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
});

// SKROLLR INI ---->
$(function() {
	var windowWidth = $(window).width();
	if (windowWidth > 1024) {
		skrollr.init({
			forceHeight: false
		});
	}
});
// STICKY NAVIGATION ---->
$(function() {

	var windowWidth = $(window).width();
	if (windowWidth > 767) {

		// grab the initial top offset of the navigation 
		var sticky_navigation_offset_top = $('.nav').offset().top;

		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var sticky_navigation = function() {
			var scroll_top = $(window).scrollTop(); // our current vertical position from the top

			// if we've scrolled more than the navigation, change its position to fixed to stick to top,
			// otherwise change it back to relative
			if (scroll_top > sticky_navigation_offset_top) {
				$('.nav').css({
					'position': 'fixed',
					'top': 0,
					'left': 0,
					'opacity': 0.8,
				});
			} else {
				$('.nav').css({
					'position': 'relative',
					'opacity': 1,
				});
			}
		};

		// run our function on load
		sticky_navigation();

		// and run it again every time you scroll
		$(window).scroll(function() {
			sticky_navigation();
		});
	}
});

// SMOOTH SCROLL TO TOP ---->
$(document).ready(function() {

	// hide #back-top first
	$("#to-top").hide();

	// fade in #back-top
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('#to-top').fadeIn();
			} else {
				$('#to-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#to-top').click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});

});

// SMOOTH NAV SCROLL ---->
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});
});

// jQuery NiceScroll ---->
$(document).ready(

	function() {

		$("html").niceScroll({
			scrollspeed: 60,
			mousescrollstep: 40,
			cursorwidth: 15,
			cursorborder: 0,
			cursorcolor: '#2D3032',
			cursorborderradius: 6,
			autohidemode: false,
			horizrailenabled: false,
			zindex: 102,
			smoothscroll: true
		});

	}

);

$('.dev-overlay').hover(function(){ 
	$('.viewBtn').addClass('animated fadeInDown') },
       function(){ 
       	$('.viewBtn').removeClass('animated fadeInDown') 
   });


