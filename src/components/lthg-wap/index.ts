import './index.less'

declare const TCPlayer: any;

// $(".more").on("click", function () {
//     if ($(this).hasClass("up")) {
//         $(this).closest(".sp").find("ul li:nth-of-type(n+5)").hide();
//         $(this).find("span").text("展开更多");
//         $(this).removeClass("up");
//     }
//     else {
//         $(this).closest(".sp").find("ul li").show();
//         $(this).find("span").text("收起");
//         $(this).addClass("up");
//     }
// });
// var player = TCPlayer('masksp', {});
// player.poster($(".sp").find("li").eq(0).find("img").attr("src"));
// var player2 = TCPlayer('swipervideo', {});
// player2.src($("#swipervideo").attr("value"));
// $(".sp").on("click", "li img", function () {
//     $("#mask").show();
//     $("html,body").addClass("noscroll");
//     player.src($(this).attr("value"));
//     player.poster($(this).attr("src"));
//     player2.pause();
//     setTimeout(function () {
//         player.play();
//     }, 300);
// });
// $("#mask").on("click", "img", function () {
//     $("html,body").removeClass("noscroll");
//     player.pause();
//     $("#mask").hide();
// });
// $('#go-bottom').on('click', function () {
//     $('html,body').animate({
//         scrollTop: $("form").offset().top
//     }, 500);
// });