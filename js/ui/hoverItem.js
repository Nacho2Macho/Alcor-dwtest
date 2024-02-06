$(document).ready(function () {
    $('.link-hover').hover(
        function () {
            $(this).addClass('active');
        },
        function () {
            $(this).removeClass('active');
        }
    );
});
