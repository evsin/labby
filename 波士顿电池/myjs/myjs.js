// JavaScript Document


//首页banner滚动
;(function(){ 
$(function(){ 
    var num=0;
	var timer=null;
	
	function autoplay(){ 
        clearInterval(timer);
		timer=setInterval(function(){ 
		   num++
		   if( num>1 ){ 
		   $('.trade_in ul').animate({left:-num*240},500).animate({left:0},0)
		   num=0 
		   }
		   $('.trade_in ul').animate({left:-num*240},500);
		},1000)
	};
	autoplay();
	$('.trade_in').hover(function(e) {
        clearInterval(timer);
    },function(){ 
	autoplay();
	});
	$('.trade_in .rr').click(function(e) {
		num++;
		if(num>1){num=0}
        $('.trade_in ul').stop().animate({left:-num*240})
    });
	$('.trade_in .ll').click(function(e) {
		num--;
		if(num<0){
			num=1}
        $('.trade_in ul').stop().animate({left:-num*240})
    });
})

})();

//搜索框
;(function(){ 
$(function(){ 
     $('.banner_in .txt').focus(function(e) {
		 if( $(this).val()=='请输入您要搜索的内容' ){
         $(this).val('');
		 $(this).css({color:'#000'})
			 }
    });
     $('.banner_in .txt').blur(function(e) {
		 if( $(this).val()=='' ){ 
        $(this).val('请输入您要搜索的内容');
		$(this).css({color:'#575656'})
		 }
    });
 
})



})();












