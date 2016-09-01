$( document ).ready(function() {		
	$('.card__img-holder').height($('.card').height() + 1);
	$('.card__img-inner').height($('.card').height() + 1);
	$('.card__content').height($('.card').height() + 1);
	$('.card__content-inner').height($('.card').height() + 1);

	$("a").click(function () {
		$(".navigation__elem").removeClass('navigation__elem_active');
		$(this).parent().addClass('navigation__elem_active');
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1000 );
		return false;
	});
});