;
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
    })($('.views'));
    
    $('.views').swipeLeft(function(){
    	slider.slideTo(slider.index+1);
    });
    $('.views').swipeRight(function(){
    	console.log('swipeRight');
    	slider.slideTo(slider.index-1);
    });
    resize();
})(Zepto);
