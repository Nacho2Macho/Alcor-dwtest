$(document).ready(function() {
    $('[data-tab-contacts="tab1"]').addClass('active');
    $('.contacts__wrapper-tab:not([data-tab-contacts="tab1"])').hide();

    $('.contacts__wrapper-link').click(function() {
        let tabId = $(this).data('tab-contacts');
        $('.contacts__wrapper-link').removeClass('active');
        $(this).addClass('active');
        $('.contacts__wrapper-tab').hide().removeClass('active');
        $('[data-tab-contacts="' + tabId + '"]').show(400).addClass('active');
    });
});

