$(document).ready(function () {
    $(".details__information:not(:first-child)").hide();
    $(".production__item:first-child").addClass("active");

    var clickFlag = false; // Флаг для отслеживания кликов

    $(".production__item").hover(
        function () {
            if (!clickFlag) { // Проверяем, был ли совершен клик
                $(".production__item").not($(this)).removeClass("active");
                var index = $(this).index();
                $(".details__information").stop().hide();
                $(".details__information").eq(index).stop().show(500);
                if ($(this).hasClass("active")) {
                    $(".details__information").eq(index).css("width", "100%");
                }
            }
        },
        function () {
            if (!clickFlag) { // Проверяем, был ли совершен клик
                var index = $(this).index();
                if (!$(this).hasClass("clicked")) {
                    $(".details__information").eq(index).stop().hide(500);
                }
            }
        }
    );

    $(".production__item").click(function () {
        $(".production__item").removeClass("clicked");
        $(this).addClass("active clicked");
        var index = $(this).index();
        $(".details__information").removeClass("fixed");
        $(".details__information").hide();
        $(".details__information").eq(index).show(500).addClass("fixed");
        $(".details__information").eq(index).css("width", "100%");

        clickFlag = true; // Устанавливаем флаг после обработки клика
    });

    $(".production__items").mouseleave(function () {
        if (!$(".details__information").hasClass("fixed") && !clickFlag) {
            $(".production__item:first-child").addClass("active");
            $(".details__information").hide();
            $(".details__information:first-child").show(500);
        }
    });
});