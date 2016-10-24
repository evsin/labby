// JavaScript Document

//banner焦点图
;(function(){ 
$(function(){ 
      num=0;
	  timer=null;
	  
	   function autoplay(){ 
          clearInterval(timer)
		  timer=setInterval(function(){ 
			num++;
			if(num>4){
			   $('.banner .banners').animate({left:num*-730},500).animate({left:0},0);
					num=0
			   $('.banner .list li').eq(num).addClass('red').siblings().removeClass();
			}
		   $('.banner .banners').animate({left:num*-730},500)
		   $('.banner .list li').eq(num).addClass('red').siblings().removeClass();
		  },2000)
	   };
	   autoplay();
	  $('.banner').hover(function(e) {
          clearInterval(timer)
    },function(){ 
	   autoplay();
	});
	$('.banner .list li').mouseover(function(e) {
		   var user=$(this).index();
		   num=user;
          $('.banner .banners').stop().animate({left:user*-730},500)
		  $(this).addClass('red').siblings().removeClass();
    });
})
})();

//搜索框
;(function(){ 
$(function(){ 
    $('.logo_r1 .txt').focus(function(e) {
		if( $(this).val()=='都市小牛仔 帅气源于本性' ){
          $(this).val('');
		  $(this).css({color:'#000'})
			}
    });
    $('.logo_r1 .txt').blur(function(e) {
		if( $(this).val()=='' ){ 
          $(this).val('都市小牛仔 帅气源于本性');
		  $(this).css({color:'#5C5C5C'})
		}
    });
	
	
})

})();

/*;(function(){ 
$(function(){ 
    var  logo_r1T=$('.logo_r1').offset().top;
	$(window).scroll(function(e) {
        var winT=$(window).scrollTop();
		if( winT>logo_r1T ){ 
		$('.logo_r1').css({position:'fixed',top:0,background:'#fff'})
		}else{
		$('.logo_r1').css({position:'static'})	
		}
    });
	
})	



})();*/


//banner下滚动图
;(function(){ 
$(function(){ 
       var num=0;
	   var timer=null;
	   
	   function autoplay(){ 
            clearInterval(timer)
		   timer=setInterval(function(){ 
		         num++;
				 if( num>1){ 
					num=0
				 }
			  $('.banner_down ul').stop().animate({left:num*-750},500)
			  $('.banner_down .list li').eq(num).addClass('red').siblings().removeClass();
		   },2000)
	   }
	   autoplay();
	   
	   $('.banner_down ul').hover(function(e) {
            clearInterval(timer)
    },function(){ 
	   autoplay();
	});
	
	$('.banner_down .list li').mouseover(function(e) {
		  var user=$(this).index();
		  num=user;
	     $('.banner_down ul').stop().animate({left:user*-750},500);
         $(this).addClass('red').siblings().removeClass();
    });
	   
})    


})();

//top下拉菜单
;(function(){ 
$(function(){ 
   $('.box .li1').hover(function(e) {
      $('.box .uls').css({display:'block'});
	  $('.box .li1 .my').css({background:'#fff' })
	  $(this).css({background:'#fff  url(../images/arr3.png)'})
  },function(){ 
	  $('.box .li1 .my').css({background:'#f2f2f2'})
      $('.box .uls').css({display:'none'});
	  $(this).css({background:'#f2f2f2'})
});
   $('.box .li2').hover(function(e) {
	  $('.box .li2 .boss').css({background:'#fff'})
      $('.box .ul2').css({display:'block'});
	  $(this).css({background:'#fff'})
  },function(){ 
	  $('.box .li2 .boss').css({background:'#f2f2f2'})
      $('.box .ul2').css({display:'none'});
	  $(this).css({background:'#f2f2f2'})
});
   $('.box .lastli').hover(function(e) {
      $('.box .ul3').css({display:'block'});
	  $(this).css({background:'#fff'})
  },function(){ 
      $('.box .ul3').css({display:'none'});
	  $(this).css({background:'#f2f2f2'})
});

})



})()




