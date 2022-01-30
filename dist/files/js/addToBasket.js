$(document).ready(function () {
	$(".item-box__description-bottom").click(function () {
		$(this).addClass('addBasket');
	});
});


// Counter --- сётчикт кл-ва выбранных товаров.

$(document).ready(function() {
	$('.minus').click(function () {
		let $input = $(this).parent().find('input');
		let count = parseInt($input.val()) - 1;
		count = count < 1 ? $(this).parent().removeClass('addBasket') & $input.val() : count;
		count = count <= 0 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		let $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});
