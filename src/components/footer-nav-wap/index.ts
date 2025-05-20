import './index.scss'

$(".footer-nav").on("click", "li", function () {
    var img = $(this).find("img");
    if (img.attr("img")) {
        $(".concat h4").text(img.attr("alt"));
        $(".concat .img img").attr("src", img.attr("img"));
        if (img.attr("tel")) {
            $(".concat p").text("".concat(img.attr("alt"), "\u8BF7\u626B\u7801\u6216\u62E8\u6253\u7535\u8BDD\uFF1A"));
            $(".concat a").attr("href", "tel:".concat(img.attr("tel"))).text("".concat(img.attr("tel")));
        }
        else {
            $(".concat p").text("".concat(img.attr("alt"), "\u8BF7\u626B\u7801"));
            $(".concat a").attr("href", "").text("");
        }
        $(".concat").addClass("show");
        $("html,body").addClass("noscroll");
    }
    else {
        $('html,body').animate({
            scrollTop: $("body").height()
        }, 500);
    }
});
$(".concat .box > img").on("click", function () {
    $(".concat").removeClass("show");
    $("html,body").removeClass("noscroll");
});