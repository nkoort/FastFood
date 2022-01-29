document.addEventListener('DOMContentLoaded', function () {
    new ChiefSlider("#menu-slider", {
    loop: false,
    swipe: true
    });
});
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
        touchThreshold: 10,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
    });
});