var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";

	//Preloader
	$(window).load(function(){
		$('.preloader').fadeOut('slow',function(){$(this).remove();});
	});
	
	// Search
	$('.fa-search').on('click', function() {
		$('.field-toggle').slideToggle(200);
	});

    //  Hide Mobile Menu On Click

    menuHide();
    function menuHide(){
        var windowWidth = $(window).width();
            if(windowWidth < 991 ){
                $('.navbar-collapse a').click(function (e) {
                $('.navbar-collapse').collapse('toggle');
            });
        }  
    }	

	//Scroll Menu
	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.navbar').addClass('fixed-top animated fadeIn');
					$('.navbar').removeClass('main-nav');
				} else {
					$('.navbar').removeClass('fixed-top');
					$('.navbar').addClass('main-nav');
				}
			});
		}else{
			
			$('.navbar').addClass('main-nav');
				
		};
		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.top-bar').addClass('top-bar-hide');
				} else {
					$('.top-bar').removeClass('top-bar-hide');
				}
			});
		}else{			
			$('.top-bar').addClass(this);				
		};
		
		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.navbar-brand').addClass('change-logo');
				} else {
					$('.navbar-brand').removeClass('change-logo');
				}
			});
		}else{			
			$('.navbar-brand').addClass(this);				
		}
				
	}

	menuToggle();

	// Navigation Scroll	
		
	// $('.navbar').onePageNav({});

	
	//Parallax Scrolling
	$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {		
		$("#promo-one").parallax("50%", 0.3);
		$("#promo-two").parallax("50%", 0.3);
		$("#fun-fact").parallax("50%", 0.3);
		$("#deliveries").parallax("50%", 0.3);
		$("#news-letter").parallax("50%", 0.3);
		$("#twitter").parallax("50%", 0.3);	
		$("#twitter2").parallax("50%", 0.3);	
	}	
	parallaxInit();			
		
	
	/**** Progress Bar ****/
	    
	$('.skill').appear();
	$('.skill').on('appear', loadCharts);

	function loadCharts() {
	    $('#circle-one').easyPieChart( {
			barColor: '#000000',
			trackColor: '#363636',
			rotate: '0',
			lineCap: 'butt',
			scaleLength: '0',
			lineWidth: 32,
			size: 185
		});

		$('#circle-two').easyPieChart( {
			barColor: '#000000',
			trackColor: '#363636',
			rotate: '0',
			lineCap: 'butt',
			scaleLength: '0',
			lineWidth: 32,
			size: 185
		} );

		$('#circle-three').easyPieChart( {
			barColor: '#000000',
			trackColor: '#363636',
			rotate: '0',
			lineCap: 'butt',
			scaleLength: '0',
			lineWidth: 32,
			size: 185
		} );

		$('#circle-four').easyPieChart( {
			barColor: '#000000',
			trackColor: '#363636',
			rotate: '0',
			lineCap: 'butt',
			scaleLength: '0',
			lineWidth: 32,
			size: 185
		} );
	}

	
	//Pretty Photo
	 $("a[data-gallery^='prettyPhoto']").prettyPhoto({
	  social_tools: false
	 });
	
	//Isotope
	var winDow = $(window);
			// Needed variables
	var $container=$('.portfolio-items');
	var $filter=$('.filter');

	try{
		$container.imagesLoaded( function(){
			$container.show();
			$container.isotope({
				filter:'*',
				layoutMode:'masonry',
				animationOptions:{
					duration:750,
					easing:'linear'
				}
			});
		});
	} catch(err) {
	}

	winDow.bind('resize', function(){
		var selector = $filter.find('a.active').attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {
		}
		return false;
	});
	
	// Isotope Filter 
	$filter.find('a').click(function(){
		var selector = $(this).attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {

		}
		return false;
	});


	var filterItemA	= $('.filter a');

	filterItemA.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemA.removeClass('active');
			$this.addClass('active');
		}
	});
	
	// Timer
	$('#fun-fact').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	$('#deliveries').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: 600 }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter)+"+");
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	//Initiat WOW JS
	new WOW().init();
	
	//smoothScroll
	smoothScroll.init();
	
	// Google Map Customization
	// (function(){

	// 	var map;

	// 	map = new GMaps({
	// 		el: '#gmap',
	// 		lat: 45.494447,
	// 		lng: -73.5697587,
	// 		scrollwheel:false,
	// 		zoom: 16,
	// 		zoomControl : true,
	// 		panControl : false,
	// 		streetViewControl : false,
	// 		mapTypeControl: false,
	// 		overviewMapControl: false,
	// 		clickable: false
	// 	});

	// 	var image = '';
	// 	map.addMarker({
	// 		lat: 45.494447,
	// 		lng: -73.5697587,
	// 		icon: image,
	// 		animation: google.maps.Animation.DROP,
	// 		verticalAlign: 'bottom',
	// 		horizontalAlign: 'center',
	// 		backgroundColor: '#d3cfcf',
	// 	});


	// 	var styles = [ 

	// 	{
	// 		"featureType": "road",
	// 		"stylers": [
	// 		{ "color": "#ffffff" }
	// 		]
	// 	},{
	// 		"featureType": "water",
	// 		"stylers": [
	// 		{ "color": "#99b3cc" }
	// 		]
	// 	},{
	// 		"featureType": "landscape",
	// 		"stylers": [
	// 		{ "color": "#f2efe9" }
	// 		]
	// 	},{
	// 		"elementType": "labels.text.fill",
	// 		"stylers": [
	// 		{ "color": "#d3cfcf" }
	// 		]
	// 	},{
	// 		"featureType": "poi",
	// 		"stylers": [
	// 		{ "color": "#ded2ac" }
	// 		]
	// 	},{
	// 		"elementType": "labels.text",
	// 		"stylers": [
	// 		{ "saturation": 1 },
	// 		{ "weight": 0.1 },
	// 		{ "color": "#000000" }
	// 		]
	// 	}

	// 	];

	// 	map.addStyle({
	// 		styledMapName:"Styled Map",
	// 		styles: styles,
	// 		mapTypeId: "map_style"  
	// 	});

	// 	map.setStyle("map_style");
	// }());		
		
});

