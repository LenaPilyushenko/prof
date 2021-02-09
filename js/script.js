$(document).ready(function () {
	
	$('.slider-carousel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite:true,
		dots: false,
		responsive: [
			{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
			},
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				dots: true
			}
			}
		]
	});

	function slickInit() {
		$('.slider-carousel').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite:true,
			dots: false,
			responsive: [
				{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
				},
				{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
				},
				{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					dots: true
				}
				}
			]
		});
	}
	
	$('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
		$(".slider-carousel").slick("unslick");
			slickInit();
	});

	$('.navbar-toggler').click('click', function (e) {
		$('body').toggleClass("hidd");
		$('header').toggleClass("active");
	});

});
