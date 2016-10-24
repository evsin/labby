// JavaScript Document

//大屏banner轮播
	
$(function(){	

//轮播焦点图
;(function(){  
		//初始化中执行
			//自动播放
			var timer = null; 
			var num = 0;
			function dongdong(){
				clearInterval(timer);	
				timer = setInterval(function(){	
					num++;
					if(num>5){	
						num = 0;
					}
					$('.focus_in .banner li').eq(num).fadeIn().siblings().fadeOut();
					$('.focus_in ol li').eq(num).addClass('current').siblings().removeClass('current');
				},2000);	
			}
			dongdong()
		//事件中执行
			//清除动画与左右切换显示
			$('.focus_in').hover(function(e) {
			   //清除动画
			   clearInterval(timer);
			   //左右切换图标显示
			   $('.focus_in span').show() 
			},function(){	
				dongdong()
				$('.focus_in span').hide()
			});
			//角标与左右切换
			$('.focus_in ol li').mouseover(function(e) {
				var index = $(this).index();
				num = index;
				$('.focus_in .banner li').eq(index).fadeIn().siblings().fadeOut();
				$(this).addClass('current').siblings().removeClass();
			});
			//左侧点击
			$('.focus_in .left').click(function(e) {
				num--;
				if(num<0){	
					num = 5;
				}
				$('.focus_in .banner li').eq(num).fadeIn().siblings().fadeOut();
				$('.focus_in ol li').eq(num).addClass('current').siblings().removeClass('current');
			});
			//右侧点击
			$('.focus_in .right').click(function(e) {
				num++;
				if(num>5){	
					num = 0;
				}
				$('.focus_in .banner li').eq(num).fadeIn().siblings().fadeOut();
				$('.focus_in ol li').eq(num).addClass('current').siblings().removeClass('current');
			});


})();
//小轮播
;(function(){  
		//初始化中执行
			//自动播放
			var timer = null; 
			var num = 0;
			function dongdong(){
				clearInterval(timer);	
				timer = setInterval(function(){	
					num++;
					if(num>500){	
						num = 0;
					}
				$('.ad_right ul').css({left:-num});
			
		      },30);

			}
			dongdong();
		//事件中执行
			//清除动画与左右切换显示
			$('.ad_right').hover(function(e) {
			   //清除动画
			   clearInterval(timer);
			   //左右切换图标显示
			   $('.ad_right span').show();
			},function(){	
				dongdong();
				$('.ad_right span').hide();
			});
			//左侧点击
			$('.ad_right .left').click(function(e) {
				num--;
				if(num<0){	
					num = 500;
				}
				$('.ad_right ul li').eq(num).fadeIn().siblings().fadeOut();
			});
			//右侧点击
			$('.ad_right .right').click(function(e) {
				num++;
				if(num>500){	
					num = 0;
				}
				$('.ad_right ul li').eq(num).fadeIn().siblings().fadeOut();
			});


})();


//左侧边栏
;(function(){ 
	var winH=$(window).height();
	$(window).scroll(function(){ 
	    var winT=$(window).scrollTop();
		if(winT>winH){
		   $('.side').fadeIn(); 	 
		}else{ 
		   $('.side').fadeOut(); 	 
		}
	});
	
	$('.side li').click(function(){ 
	
	  var index=$(this).index();
	  var scrollT = $('.clothes').eq(index).offset().top;
	  $('html,body').animate({scrollTop:scrollT});
	
	});
	
})();
	
	




//搜索框
;(function(){ 
		$('#header .input_box .txt').focus( function(){ 
			 if( $(this).val()=='运动相机' ){
				 $(this).val('');
				 $(this).css({color:'#000'});
			 }
		});
	
		$('#header .input_box .txt').blur( function(){ 
			 if( $(this).val()==''){
				 $(this).val('运动相机');
				 $(this).css({color:'#ccc'});
			 }
		});
	
})();

//购物车

;(function(){ 

   $('.shopping_bag').hover(function(e) {
      $('.nogouwu').toggle();
   });
   



})();

//列表	
;(function(){ 
	$('.bar li').hover(function(e) {
        $(this).children('span').children().css('display','block')
    },function(){
	   $(this).children('span').children().css('display','none')	
	});
	
	
	

})();

;(function(){ 

  $('.nav_l dd>div').hover(function(){ 
    $(this).children('.popup').css('display','block')
  
  },function(){ 
  
    $(this).children('.popup').css('display','none')
  
  })


})();

















	
	
})




 


		
  
		
	 



