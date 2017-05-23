$(document).ready(function(){
	$('#slider_conteiner').owlCarousel({
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : true,

		itemsScaleUp : false,
		
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
		
		// Navigation
		navigation : true,
		navigationText : ["<img src=\"img/arrow_left.png\">","<img src=\"img/arrow_right.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		//transitionStyle : "backSlide"
	});
});