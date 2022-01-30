// document.addEventListener('DOMContentLoaded', function () {
//     new ChiefSlider("#menu-slider", {
//     loop: false,
//     swipe: true
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     new ChiefSlider("#coldEat", {
//     loop: true,
//     swipe: true
//     });
// });

// $('.coldEat-slider-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });
$(document).ready(function(){
    $('.coldEat-slider-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        touchThreshold: 15,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        initialSlide:1,
    });
    $('.hootEat-slider-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        touchThreshold: 15,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        initialSlide: 2,
    });
    $('.meetEat-slider-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        touchThreshold: 15,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        initialSlide: 3,
    });
    $('.soops-slider-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        touchThreshold: 15,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        initialSlide: 4,
    });
    $('.fisthEat-slider-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        touchThreshold: 15,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        initialSlide: 3,
    });
    $('.bbqEat-slider-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        touchThreshold: 15,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        initialSlide: 1,
    });
    $('.chefEat-slider-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        touchThreshold: 15,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        initialSlide: 2,
    });
    $('.drinks-slider-items').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        touchThreshold: 15,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        initialSlide: 3,
    });
    $('.menu-slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        touchThreshold: 15,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: true,
    });
});