// JavaScript Document
$(function() {
	$('.tn_btn_maxheight').on('click',function(){
		var mh_father = $(this).parent( ".tn_box_maxheight" )
		if(mh_father.hasClass('open')){
			mh_father.removeClass('open');
			$(this).html('...続き&raquo;');
		}else{
			mh_father.addClass('open');
			$(this).html('閉じる');
		}
	});
	$('.acco_box .acco_a').on("click",function(){
		$(this).toggleClass('opened');
		$(this).next('.acco_dv').slideToggle('slow');
	});
	$('.menu-click').on("click", function(){
		$(this).toggleClass('opened');
		$('header .navigation').slideToggle('slow');
	});
  //SCROLL TO TOP
  $(".page-top a").click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
	$('#slides .slides_container').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '#slides .prev',
    nextArrow: '#slides .next',
  });
});
