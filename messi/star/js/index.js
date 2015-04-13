(function($) {
    var resize = function(){
    	var w = document.documentElement.clientWidth || document.body.clientWidth,
    		h = document.body.clientHeight || document.body.clientHeight,
    		n = $('.views').find('.view').css({
    			'width':w,
    			'height':h
    		}).length;
    	$('.views').css({
    		'width': n * w,
    		'height': h
    	});
    	$('.pagination').css({
    		'top': w * 814/640
    	}).removeClass('none');
    },
    slider = (function(views){
    	var w = document.documentElement.clientWidth || document.body.clientWidth;

    	return {
    		'index':0,
    		'count':views.find('.view').length,
    		'slideTo':function(i){
    			if (i < 0 || i > this.count-1){
    				return false;
    			}
    			views.css({
    				'left':-i * w
    			});
    			this.index = i;
    			$($('.pagination').find('li')[i]).addClass('active').siblings().removeClass('active');
    		}
    	};
    })($('.views')),
    Swipe = function(elem){
        var x0,y0,x1,y1,self;
        self = this;
        this.slideElement = elem;

        elem.bind({
            'touchstart':function(event){
                x0 = event.touches[0].pageX;
                y0 = event.touches[0].pageY;
            },
            'touchmove':function(event){
                x1 = event.touches[0].pageX;
                y1 = event.touches[0].pageY;

                if (self.swiping) {
                    self.swiping({
                        'x':x1-x0,
                        'y':y1-y0
                    })
                }
            },
            'touchend':function(event){
                if (self.swipeLeft) {
                    if (x1 - x0 < 0) {
                        self.swipeLeft(x0-x1);
                    }
                }
                if (self.swipeRight) {
                    if (x1 - x0 > 0) {
                        self.swipeRight(x1-x0);
                    }
                }
                if (self.swipeUp) {
                    if (y1 - y0 > 0) {
                        self.swipeUp(y1-y0);
                    }
                }
                if (self.swipeDown){
                    if (y1 -y0 < 0) {
                        self.swipeDown(y0-y1);
                    }
                }
            }
        });
        return this;
    },
    swipe = new Swipe($('.views'));

    swipe.swipeLeft = function(){
        slider.slideTo(slider.index+1);
    };
    swipe.swipeRight = function(){
        slider.slideTo(slider.index-1);
    };
    resize();
})(Zepto);
