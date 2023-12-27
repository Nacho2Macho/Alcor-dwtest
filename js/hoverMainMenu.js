
$(document).ready(function () {
    $('.main__slide-wrapper').hide();
    $('.main__menu-item .main__menu-text').stop().animate({ opacity: 0 }, 300);
    $('.main__menu-item:first .main__menu-text').stop().animate({ opacity: 1 }, 300);

    const firstMenuItem = $('.main__menu-item:first');
    let firstTabId = firstMenuItem.data('tab');
    firstMenuItem.addClass('active');

    $('.main__slide-wrapper[data-tab="' + firstTabId + '"]').show();

    $('.main__menu-item').click(function () {

        $('.main__slide-wrapper').fadeOut(300);

        const tabId = $(this).data('tab');

        $('.main__menu-item').removeClass('active');
        $('.main__menu-item .main__menu-text').stop().animate({ opacity: 0 }, 300);

        $(this).find('.main__menu-text').stop().animate({ opacity: 1 }, 300);
        $('.main__slide-wrapper[data-tab="' + tabId + '"]').fadeIn(300, function () {
            $(this).addClass('active');
        });
        $(this).addClass('active');

        
    });
    $('.main__menu-item').hover(
        function () {
            if (!$(this).hasClass('active')) {
                $(this).find('.main__menu-text').stop().animate({ opacity: 1 }, 300);
            }
        },
        function () {
            if (!$(this).hasClass('active')) {
                $(this).find('.main__menu-text').stop().animate({ opacity: 0 }, 300);
            }
        }
    );
    $('.main__menu').on('mouseleave', function () {
        if ($('.main__menu-item.active').length === 0) {
            firstMenuItem.addClass('active');
            firstMenuItem.find('.main__menu-text').stop().animate({ opacity: 1 }, 300);
            $('.main__slide-wrapper').hide();
            $('.main__slide-wrapper[data-tab="' + firstTabId + '"]').show();
        }
    });
});
