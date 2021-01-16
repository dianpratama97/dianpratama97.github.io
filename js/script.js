$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 }, 1250, 'easeInOutExpo');

 e.preventDefault();
});

//paralax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	})
})