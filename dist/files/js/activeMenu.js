$(document).ready(function () {
	$(".slider__item").click(function () {
		$(".slider__item").removeClass('line-active');
		$(this).toggleClass('line-active');
	});
});