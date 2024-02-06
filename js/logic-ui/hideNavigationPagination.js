function updateElementVisibility() {
    if (window.innerWidth <= 1240) {
        $('.main__swiper-pagination').delay(300).fadeOut();
        $('.main__swiper-next').delay(300).fadeOut();
        $('.main__swiper-prev').delay(300).fadeOut();
    } else {
        $('.main__swiper-pagination').delay(300).fadeIn();
        $('.main__swiper-next').delay(300).fadeIn();
        $('.main__swiper-prev').delay(300).fadeIn();
    }
}

$(window).on('resize', function () {
    updateElementVisibility();
});

$(document).ready(function () {
    updateElementVisibility();
});