var Ohtml = document.documentElement;
var screenWidth = Ohtml.clientWidth;
if(screenWidth <= 320){
	Ohtml.style.fontSize = '25px';  
}else if(screenWidth >= 768){   
	Ohtml.style.fontSize = '60px';  
}else{
	Ohtml.style.fontSize = screenWidth/(12.8) +'px';  
}   
$(document).ready(function(){
	$('.tab ol li').click(function(){
		$(this).addClass('on').siblings().removeClass();
		$('.tab ul').removeClass().eq($(this).index()).addClass('on');
	})
	$('.tab ul li').click(function(){
		$(this).addClass('on').siblings().removeClass();
	})
	$('.main li h5').click(function(){
		$('.mask').show();
		$('.tost').slideDown();
	})
	$('.tost span').click(function(){
		$('.mask').hide();
		$('.tost').slideUp();
	})
});