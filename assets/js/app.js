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

    $(function () {
    });
})(jQuery);