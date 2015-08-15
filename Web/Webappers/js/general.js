// JavaScript Document
$(document).ready(function () {
	
	var slider = $('ul.slider');
	
	if(slider.length > 0) {
	slider.cycle({
		fx: 		'scrollLeft',
		timeout:	4000,
		pager: 		'.bannernav'
		});
	
}	
	
//Latest Works
	
	var container = $('section.latestworks .holder');
	
	if(container.length > 0) {
		
		container.mouseenter(function() {
			$(this).find('a.plus').css({'z-index':'11'});
		});
		
		container.mouseleave(function() {
			$(this).find('a.plus').css({'z-index':'9'});
		});
	}
	
});