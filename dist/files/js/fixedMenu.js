$(function () {
    $nav = $('.fixed-div');
    $nav.css('height', $nav.outerHeight());
    $window = $(window);
    $h = $nav.offset().top;
    $window.scroll(function () {
        if ($window.scrollTop() > $h) {
            $nav.addClass('fixed');
            $(".header__basket").addClass('fixed');
            $(".header__basket_name").addClass('fixed');
        } else {
            $nav.removeClass('fixed');
            $(".header__basket").removeClass('fixed');
            $(".header__basket_name").removeClass('fixed');
        }
    });
});