;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const handleTouchMoveNavigation = function (ev) {
		if (!$(ev.target).closest('#header-navigation').length) {
			ev.preventDefault();
		}
	}
	const handleHeaderMobile = () => {
		if (windowWidth < 992) {
			let elmBody = $('body'),
				elmHamburger = $('#header-hamburger'),
				elmNavigation = $('#header-navigation'),
				elmOverlay = $('#header-overlay'),
				elmCloseNavigation = $('#header-navigation_close');

			elmNavigation.find('ul > li > ul > li').map(function (index) {
				$(this).parent().prev('a').attr({
					'data-toggle': 'collapse',
					'data-target': "#header-sub_" + index,
				});
				$(this).parent().attr({
					"id": "header-sub_" + index,
					"class": "navigation-sub collapse",
					"data-parent": "#header-navigation"
				});
			});

			elmHamburger.click(function () {
				if (elmBody.hasClass('is-show_navigation')) {
					elmBody.attr({
						'class': '',
						'style': ''
					});
					document.removeEventListener('touchmove', handleTouchMoveNavigation);
					elmNavigation.find('.collapse').collapse('hide');
				} else {
					document.addEventListener('touchmove', handleTouchMoveNavigation, {passive: false});
					elmBody.attr({
						'class': 'is-show_navigation',
						'style': 'overflow-y: hidden'
					});
				}
			});

			elmOverlay.add(elmCloseNavigation).click(() => {
				elmHamburger.trigger('click')
			});
		}
	}

	const sliderBanner = () => {
		new Swiper('#slider-banner .swiper', {
			speed: 1000,
			slidesPerView: 1,
			effect: 'slide',
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			pagination: {
				el: "#slider-banner .swiper-pagination",
				clickable: true,
			},
		});
	}

	const sliderCases = () => {
		new Swiper('#slider-cases .swiper', {
			speed: 1000,
			slidesPerView: 3,
			spaceBetween: 20,
			preloadImages: false,
			effect: 'slide',
			breakpoints: {
				320: {
					slidesPerView: 1.4,
				},
				768: {
					slidesPerView: 2.4,
				},
			},
			pagination: {
				el: "#slider-cases .swiper-pagination",
				clickable: true,
			},
		})
	}

	$(function () {
		sliderBanner();
		if (windowWidth < 992) {
			sliderCases();
		}
	});
})(jQuery);