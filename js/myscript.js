var fixed_menu = true;
window.jQuery = window.$ = jQuery;


/* MY jQuery */

$(document).ready(function() {

$(window).scroll(function() {

  if ($(window).scrollTop() > 650) { $('#header-show-hide').slideDown(650);
  }
  if ($(window).scrollTop() < 650) { $('#header-show-hide').slideUp(650); 
  }
});
});

/* Custom Scripts */

function calculateScroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.navmenu').find('a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top );
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
			$('.navmenu li')
			.removeClass('active')
			.eq(i).addClass('active');

			$('#top .navmenu li').first().addClass('active');
			jQuery('.mobile_menu_wrapper').css({'display' : 'none'});

		}
	})
};


jQuery(document).ready(function() {
	//Fixed Menu
	if (jQuery('.fixed-menu').size() && fixed_menu == true) {

		jQuery('.fixed-menu').append('<div class="fixed-menu-wrapper container">'+jQuery('#top header .container').html()+'</div>');
		jQuery('.fixed-menu').find('.menu').children('li').each(function(){
			jQuery(this).children('a').append('<div class="menu_fadder"/>');
		});

		var fixd_menu = setInterval(scrolled_menu, 100);
	}

	//MobileMenu
	jQuery('#top header .container').append('<a href="javascript:void(0)" class="menu_toggler"/>');
	jQuery('#top').append('<div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
	jQuery('.mobile_menu').html(jQuery('#top header').find('.navmenu').html());
	jQuery('.mobile_menu_wrapper').hide();
	jQuery('.menu_toggler').click(function(){
		jQuery('.mobile_menu_wrapper').slideToggle(300);
	});

	// if single_page
	if (jQuery("#page").hasClass("single_page")) {
	}
	else {
		$(window).scroll(function(event) {
			calculateScroll();
		});
		$('.navmenu ul li a, .mobile_menu ul li a, .down_btn, .about_btn').click(function() {
			$('html, body').animate({scrollTop: $(this.hash).offset().top - 67}, 1000);
			return false;
		});
	};


	//Iframe transparent
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});


	//Testimonials Tab
	$(".tab_content_block").hide();
	$("ul.block_tabs li:first").addClass("active").show();
	$(".tab_content_block:first").show();
	$("ul.block_tabs li").click(function() {
		$("ul.block_tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content_block").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn(1000);
		return false;
	});


	//Portfolio Filter
	$("#portfolio_filter a").click(function () {
		$('#portfolio_filter a').removeClass("active");
		$(this).addClass("active");
	});
	$("#portfolio_filter a.city").click(function () {
		$('.portfolio_block div').removeClass("gallery_act");
		$('.portfolio_block .city_gal').addClass("gallery_act");
	});
	$("#portfolio_filter a.family").click(function () {
		$('.portfolio_block div').removeClass("gallery_act");
		$('.portfolio_block .family_gal').addClass("gallery_act");
	});
	$("#portfolio_filter a.wedding").click(function () {
		$('.portfolio_block div').removeClass("gallery_act");
		$('.portfolio_block .wedding_gal').addClass("gallery_act");
	});
	$("#portfolio_filter a.animals").click(function () {
		$('.portfolio_block div').removeClass("gallery_act");
		$('.portfolio_block .animals_gal').addClass("gallery_act");
	});


	//Portfolio Slider
	$(window).load(function() {
		//1 slide
		$('#carousel1').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 150,
			itemMargin: 20,
			asNavFor: '#slider1'
		});
		$('#slider1').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: "#carousel1"
		});
		//2 slide
		$('#carousel2').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 150,
			itemMargin: 20,
			asNavFor: '#slider2'
		});
		$('#slider2').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: "#carousel2"
		});
		//3 slide
		$('#carousel3').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 150,
			itemMargin: 20,
			asNavFor: '#slider3'
		});
		$('#slider3').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: "#carousel3"
		});
		//4 slide
		$('#carousel4').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 150,
			itemMargin: 20,
			asNavFor: '#slider4'
		});
		$('#slider4').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: "#carousel4"
		});
	});


	//PrettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto();


	//Home Height
	sliderHeight();

	//Contact Height
	contactPadding();





	//Welcome Block Vertical Align
	mymargtop();

});

jQuery(window).load(function(){
	//Parallax Effect
	$(window).stellar();

});


jQuery(window).resize(function(){
	//Home Height
	sliderHeight();

	//Contact Height
	contactPadding();

	//Welcome Block Vertical Align
	mymargtop();

	//Parallax Effect
	$(window).stellar();

});

function scrolled_menu() {
	var home_h = $(window).height();
	if (jQuery(window).scrollTop() > jQuery('#top header').height()+home_h-74) {
		jQuery('.fixed-menu').addClass('fixed_show');
	} else {
		jQuery('.fixed-menu').removeClass('fixed_show');
	}
};


//Home Height
function sliderHeight(){
	wh = $(window).height();
	$('#home').css({height:wh});

}


//Welcome Block Vertical Align
function mymargtop() {
	var body_h = $(window).height();
	var container_h = $('.welcome_block').height();
	var marg_top = Math.abs((body_h - container_h)/2);
	$('.welcome_block').css('padding-top', marg_top);
	$('.welcome_block').css('padding-bottom', marg_top);
}


//Contact Height
function contactPadding(){
	if ($(window).width() > 1024){
		var window_h = $(window).height();
		var contact_h = $('#contact').height();
		var contact_padding = Math.abs((window_h - contact_h)-132);
		$('#contact').css('padding-bottom', contact_padding);
	};
}
