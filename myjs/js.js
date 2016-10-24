// JavaScript Document

//music
;(function(){ 
$(function(){ 
    $('.music').toggle(function(e) {
        $('audio').get(0).muted = true;
    },function(){ 
         $('audio').get(0).muted = false;
	});
}) 
})();

//screen1
;(function(){ 
  $(function(){ 
      var num=0;
	  var timer=null;
	$('.main .screen1').removeClass('out');
	//$('.main').css({top:-400+'%'})
  $('.gps li').click(function(e) {
	  index=$(this).index();
      $(this).addClass('current').siblings().removeClass();
	  $('.main').stop().animate({top:-100*index+'%'},500)
	  num=index;
	$('.main>div').eq(index).removeClass('out').siblings().addClass('out');
  });
  $(document).mousewheel(function(e,d) {
	  clearTimeout(timer);
	  timer=setTimeout(function(){ 
	    num-=d;
        if(num>6){num=6};
		if(num<0){num=0};
		$('.gps li').eq(num).addClass('current').siblings().removeClass();
		$('.main').stop().animate({top:-100*num+'%'},500);
		$('.main>div').eq(num).removeClass('out').siblings().addClass('out');
		$('.screen3 .c1').toggleClass('animated bounceInLeft')
		$('.screen3 .c2').toggleClass('animated bounceInRight')
	  },300)
  });
  $('.arr').click(function(e) {
     $('.main').animate({top:-100+'%'},500)
	 $('.gps li').eq(1).addClass('current').siblings().removeClass();
  });

})
})();

//screen2
;(function(){ 
$(function(){ 
		   var timer=null;
		   var num=0;
      function go(){
        clearInterval(timer);
		 timer=setInterval(function(){ 
			num++;
			if(num>5){
			$('.screen2 ul').animate({left:-1000*num},500).animate({left:0},0);
				num=0
				};
			$('.screen2 ul').animate({left:-1000*num},500);
		 },2000)
		  };
		  go();
		 $('.box').hover(function(e) {
			clearInterval(timer);
			$('.screen2 span').css({display:'block'});
		},function(){ 
			  go();
			$('.screen2 span').css({display:'none'});
		});
		
		$('.screen2 .right').click(function(e) {
			num++;
			if(num>5){num=0};
			$('.screen2 ul').stop().animate({left:-1000*num},500);
        });
		$('.screen2 .left').click(function(e) {
			num--;
			if(num<0){num=5};
			$('.screen2 ul').stop().animate({left:-1000*num},1000);
        });
        
})

})();

//icon
;(function(){ 
  $(function(){ 
      $(' .screen3 .icons li').hover(function(e) {
		  //var num=$(this).index();
       // $(this).addClass('big').siblings().removeClass('big').hide();
		//$('.screen3 .close').fadeIn(500);
		$(this).css({'transform':'scale(2,2)'}).siblings().css({'opacity':'0.3'})
    },function(){ 
	    $(' .screen3 .icons li').css({'opacity':'1'}).css({'transform':'scale(1,1)'})
	});
  })
})();

//webs
;(function(){ 
$(function(){ 
   $('.screen4 .webs li').hover(function(e) {
       $(this).siblings().stop().fadeTo(500,0.5)
    },function(){ 
	   $(this).siblings().stop().fadeTo(500,1)
   });
})

})();

//app
;(function(){ 
$(function(){ 
    $('.screen5 .app li').each(function(index, element) {
			var rNum = index*45;
			$(element).css('transform', 'rotateY('+rNum+'deg)  translateZ(260px)');
		});
})
})();








