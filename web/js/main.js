$(document).ready(function() {

	$('.slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		
		prevArrow: '.slider__arrow--left',
		nextArrow: '.slider__arrow--right',
		cssEase: 'ease-out'
	});

});