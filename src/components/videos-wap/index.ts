import './index.less'

declare const TCPlayer: any;

var player = TCPlayer('masksp', {});
player.poster($(".jcsp").find("li").eq(0).find("img").attr("src"));
var player2 = TCPlayer('swipervideo', {});
player2.src($("#swipervideo").attr("value"));
$(".jcsp").on("click", "li img", function () {
    $("#mask").show();
    $("html,body").addClass("noscroll");
    player.src($(this).attr("value"));
    player.poster($(this).attr("src"));
    player2.pause();
    setTimeout(function () {
        player.play();
    }, 300);
});
$("#mask").on("click", "img", function () {
    $("html,body").removeClass("noscroll");
    player.pause();
    $("#mask").hide();
});
$(".more").on("click", function () {
    if ($(this).hasClass("up")) {
        $(this).closest(".jcsp").find("ul li:nth-of-type(n+5)").hide();
        $(this).find("span").text("展开更多");
        $(this).removeClass("up");
    }
    else {
        $(this).closest(".jcsp").find("ul li").show();
        $(this).find("span").text("收起");
        $(this).addClass("up");
    }
});