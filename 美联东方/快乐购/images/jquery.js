(function (jQuery) {
    jQuery.fn.focusMap = function (options) {
        var defaults = {
            speed: 300,
            time: 4000
        }
        var options = jQuery.extend(defaults, options);

        this.each(function () {

            var obj = jQuery(this),
				element = obj.find('li'),
				len = element.size(),
				nowNum = 0,
				picTimer = false,
				active = false;

            obj.find('ul').show();

            if (len <= 1) return;

            var btn = '<div class="btn"><div style="padding-left:10px;">';

            for (var i = 0; i < len; i++) btn += "<span></span>";

            btn += "</div></div>";

            obj.append(btn);
            obj.find('.btn span').eq(0).addClass('on');

            obj.find('.btn span').click(function () {
                nowNum = obj.find('.btn span').index(this);
                showPics();
            });

            element.css({ 'opacity': 0, 'z-index': 0 });
            element.eq(0).css({ 'opacity': 1, 'z-index': 1 });
            element.eq(0).find('img.bg').removeClass('up').addClass('down');
            element.eq(0).find('img.text').fadeIn(500);

            obj.hover(function () {
                clearInterval(picTimer);
            }, function () {
                picTimer = setInterval(function () {
                    nowNum++;
                    if (nowNum == len) nowNum = 0;
                    showPics();
                }, options.time);
            }).trigger('mouseleave');

            function showPics() {
                active = true;
                element.css({ 'z-index': 0 });
                obj.find('li.on').css({ 'z-index': 1 });

                element.eq(nowNum).css({ opacity: 0, 'z-index': 2 });
                element.eq(nowNum).find('img.bg').removeClass('down').addClass('up');
                element.eq(nowNum).find('img.text').hide();

                element.eq(nowNum).animate({ 'opacity': 1 }, options.speed, function () {
                    jQuery(this).find('img.text').fadeIn(500);
                    active = false;
                }).find('img.bg').removeClass('up').addClass('down');

                element.removeClass('on').eq(nowNum).addClass('on');

                obj.find('.btn span').eq(nowNum).addClass('on').siblings().removeClass('on');
            }
        });
    }

})(jQuery);//chao.Radish@gmail.com

var windowWidth, left;
var windowSize = function () {
    //windowWidth=$(window).width();
    //if(windowWidth<1000) windowWidth=1000;
    //left=(windowWidth-1900)/2;
    windowWidth = $(window).width();
    left = -((1900 - windowWidth) / 2);
    $('#indexBanner').find('.big_eye_pic li').css({ 'left': left + 'px' });
    //$('#indexBanner').width(windowWidth).find('img.bg').css({ 'left': left + 'px' });
}





jQuery(function () {
    windowSize();
    jQuery('#indexBanner').focusMap();
    jQuery(window).resize(function () {
        windowSize();
    });


});

