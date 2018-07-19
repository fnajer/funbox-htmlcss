$(function() {
	$('.card, .card-section__btn').click(function() {
		let card = this;

		if (!($(this).hasClass('card'))) {
			card = $(this).closest('.card-section').children().first();
		}

		if ($(card).hasClass('card_default')) {
			$(card).removeClass('card_default')
				.addClass('card_selected');

		} else if ($(card).hasClass('card_selected')) {
			$(card).removeClass('card_selected')
				.addClass('card_default');
			$(card).find('.card__subtitle').text('Сказочное заморское яство');
			$(card).removeClass('card_selected-hover');

		} else if ($(card).hasClass('card_disable')) {
			return;
		}
		
	});

	$('.card').mouseenter(function() {
		if ($(this).hasClass('card_selected')) {
			$(this).find('.card__subtitle').text('Котэ не одобряет?');
			$(this).addClass('card_selected-hover');
		} 
		
	});
	$('.card').mouseleave(function() {
		if ($(this).hasClass('card_selected')) {
			$(this).find('.card__subtitle').text('Сказочное заморское яство');
			$(this).removeClass('card_selected-hover');
		} 
		
	});


});