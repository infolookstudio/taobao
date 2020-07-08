(function ($) {
    'use strict';

    $(window).on("load", function() {
		background();
	    //preloader
		$("#preloader").delay(300).animate({
	    	"opacity" : "0"
	    	}, 500, function() {
	    	$("#preloader").css("display","none");
	    });
	});

    // background image js
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	// Activate scroll to top
	$("#scroll-top").on('click', function () {
		$('html , body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	// active mobile-menu
	jQuery('#mobile-menu').meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.mobile-menu'
	});

	// service-carousel-3 active
	$('#service-carousel-3').owlCarousel({
		loop: true,
		smartSpeed: 800,
		nav: true,
		dots: true,
		margin: 30,
		navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
		//autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			576: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	// Activate scroll to top
	$("#scroll-top").on('click', function () {
		$('html , body').animate({
			scrollTop: 0
		}, 1000);
	});

	// Nice select
	$('select').niceSelect();

	$(".nav-cat-btn").on("click", function () {
		$(".nav-cat-menu").addClass("active");
	});

	// offcanvas menu
	$(".nav-cat-btn").on("click", function () {
		$(".nav-cat-menu").removeClass("active");
	});


	// Activate lightcase
    $('a[data-rel^=lightcase]').lightcase();

})(jQuery);