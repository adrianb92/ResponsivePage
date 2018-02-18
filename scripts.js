console.log($('.menu')[0]);

$('.menu').click(function() {
	$('.nav').toggleClass('open');
	$('.header').toggleClass('margined');
})