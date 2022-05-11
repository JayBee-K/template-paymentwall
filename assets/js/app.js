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
                elmHamburger = $('#hamburger-toggle'),
                elmNavigation = $('#header-navigation');

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
                if (elmBody.hasClass('navigation-show')) {
                    elmBody.attr({
                        'class': '',
                        'style': ''
                    });
                    document.removeEventListener('touchmove', handleTouchMoveNavigation);
                    elmNavigation.find('.collapse').collapse('hide');
                } else {
                    document.addEventListener('touchmove', handleTouchMoveNavigation, {passive: false});
                    elmBody.attr({
                        'class': 'navigation-show',
                        'style': 'overflow-y: hidden'
                    });
                }
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
        handleHeaderMobile();
        sliderBanner();
        if (windowWidth < 992) {
            sliderCases();
        }
    });
})(jQuery);