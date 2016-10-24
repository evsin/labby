// JavaScript Document


//banner焦点图
;(function(){ 
$(function(){ 

       $('#banner li').each(function(index, element) {
		  var huode=index+1
         $(element).css({background:'url(images/banenr'+huode+'.jpg) no-repeat center top'})  
    });

       var num=0;
	   var timer=null;
	   function play(){ 
		   timer=setInterval(function(){ 
			   num++;
			   if(num>2){num=0}
			   $('#banner ul').animate({left:-num*100+'%'})
		   },2000)
	   }
	   play();
	   $('#banner').hover(function(e) {
          clearInterval(timer)
		  $('#banner .arr').css({display:'block'})
    },function(){ 
	   play();
		  $('#banner .arr').css({display:'none'})
	});
	
	$('#banner .right').click(function(e) {
		num++;
		if(num>2){num=0}
	  $('#banner ul').stop().animate({left:-num*100+'%'})
    });
	$('#banner .left').click(function(e) {
		num--;
		if(num<0){num=2}
	  $('#banner ul').stop().animate({left:-num*100+'%'})
    });
	   
})


})();




//content
;(function(){ 
$(function(){ 
      $('.service dd').hover(function(e) {
        $(this).children('.mask').stop().animate({top:0},500)
    },function(){ 
        $(this).children('.mask').stop().animate({top:-100+'%'},500)
	});
})


})()















