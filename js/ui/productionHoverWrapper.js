$(document).ready(function () {
    var clickFlag = false;

    if (innerWidth >= 1241) {
        $(".details__information:not(:first-child)").hide();
        $(".production__item:first-child").addClass("active");

        $(".production__item").hover(
            function () {
                if (!clickFlag) {
                    $(".production__item").not($(this)).removeClass("active");
                    var index = $(this).index();
                    $(".details__information").stop().hide();
                    $(".details__information").eq(index).stop().show(500);
                }
            },
            function () {
                if (!clickFlag) {
                    var index = $(this).index();
                    if (!$(this).hasClass("clicked")) {
                        $(".details__information").eq(index).stop().hide(500);
                    }
                }
            }
        );

        $(".production__item").click(function () {
            $(".production__item").not($(this)).removeClass("active clicked");
            $(this).addClass("active clicked");
            var index = $(this).index();
            $(".details__information").removeClass("fixed").css({ "width": "", "height": "" });
            $(".details__information").hide();
            $(".details__information").eq(index).show(500).addClass("fixed");

            clickFlag = true;
        });

        $(".production__items").mouseleave(function () {
            if (!$(".details__information").hasClass("fixed") && !clickFlag) {
                $(".production__item:first-child").addClass("active");
                $(".details__information").hide();
                $(".details__information:first-child").show(500);
            }
        });
    } else {
        $(".details__information--tablet").hide();
        $(".production__item--tablet").first().addClass("active clicked");
        $(".production__clause").addClass("active");
        $(".details__information--tablet").first().show();

        $(".production__item--tablet").click(function () {
            if (!clickFlag) {
                $(".production__item--tablet").not($(this)).removeClass("active clicked");
                $(this).addClass("active clicked");
                var index = $(this).index();
                $(".details__information--tablet").stop().hide();
                $(".details__information--tablet").eq(index).stop().show(500);
            }
            $(".production__clause").addClass("active");
        });        
    }
});
