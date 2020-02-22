/* ======================================
-----------------------------------------
	Porto - Photo Gallery HTML Template
	Version: 1.0
 ---------------------------------------
 =======================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

	var masonryLayout = function () {
		$('.portfolios-area').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});
	}

	/*------------------
		Mixitup js
	--------------------*/
	masonryLayout();
	if($('.portfolios-area').length > 0 ) {
		var containerEl = document.querySelector('.portfolios-area');
		var mixer = mixitup(containerEl, {
			callbacks: {
				onMixEnd: function() {
					masonryLayout();
				}
			}
		});
	}

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function () {
		$('.main-menu').slideToggle();
	});
	

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	

	/*----------------------
		Portfolio item size
	------------------------*/
	var PorfolioItemFix = function () {
		$( ".portfolio-item" ).each(function( index ) {
			var portfolioItem = $(this);
			var PIheight = portfolioItem.width();
			portfolioItem.css('height',PIheight);
		});

		var portfolioIntro = $( ".portfolio-item.__wide");
		var Introheight = portfolioIntro.width() / 2;
		if($(window).width() > 768) {
			portfolioIntro.css('height', Introheight);
		}
		$('.portfolios-area').css('minHeight', Introheight)
	}
	PorfolioItemFix();
	$(window).on('resize',function(){
		PorfolioItemFix();
	});


	/*------------------
		Fullpage js
	--------------------*/
	if($('#fullpage').length > 0 ) {
		$('#fullpage').fullpage({
			//options here
			autoScrolling:false,
			scrollHorizontally: true,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			fitToSection: false,
			scrollBar: true,
			navigation: true,
			navigationPosition: 'right',
			responsiveWidth: 991,
		});
	}


})(jQuery);
