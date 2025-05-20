import './index.scss'

declare const Swiper: any;

var mySwiper = new Swiper('.case_swiper', {
    effect: 'coverflow',
    centeredSlides: true,
    spaceBetween: -610,
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: false,
    coverflowEffect: {
        rotate: 0,
        stretch: -20,
        depth: 400,
        modifier: 1,
        slideShadows: true
    },
    on: {
        slideChangeTransitionStart: addvideo,
        onSlideChangeEnd: addvideo
    }
});
var timer = null;
function addvideo() {
    $(".swiper-slide-active").siblings(".swiper-slide").find(".video-wrap").find("#player_s").remove();
    timer = setInterval(function () {
        var $img = $(".swiper-slide-active").find(".video-wrap").find("img");
        if (!$(".swiper-slide-active").find("#player_s").length) {
            $(".swiper-slide-active").find(".video-wrap").append("<video objectFit=\"cover\" style=\"background-color:#000;\" id=\"player_s\" controls=\"controls\" webkit-playsinline=\"true\" playsinline=\"true\" x5-video-player-type=\"h5\" x5-video-player-fullscreen=\"true\" src=\"".concat($img.attr("value"), "\" poster=\"").concat($img.attr("src"), "\"> <source src=\"").concat($img.attr("value"), "\" type=\"video/mp4\"> <source src=\"").concat($img.attr("value"), "\" type=\"video/ogg\"> <source src=\"").concat($img.attr("value"), "\" type=\"video/webm\"></video>")).find("video").css("opacity", 0);
            setTimeout(function () {
                $(".swiper-slide-active").find("video").css("opacity", 1);
                // $("#player_s").css("object-position", "center -538px")
            }, 300);
            addvideo();
        }
        else {
            $(".swiper-slide-active").siblings(".swiper-slide").find(".video-wrap").find("#player_s").remove();
            clearInterval(timer);
        }
    }, 500);
}
mySwiper.el.onclick = function () {
};
