;(function($) {
	var slideElem = $('#sliders'),
	pageY = 0,
	pageY2 = 0,
	scrollTop = 0,
	slider = {
		'index':0,
		'count':slideElem.find('.page').length,
		'getHeight':function(){
			return $('.pages').height();	
		},
		'slideTo':function(i){
			var h = slider.getHeight(),
				h2 = h * i,
				t = slideElem[0].scrollTop,
				t2 = h * i,
				timer = 0,
				times = 0,
				d = Math.floor((t2 - t)/10);
			slider.index = i;
			slideElem[0].scrollTop += ((t2 - t)%10);
			timer = setInterval(function(){
				if (times >= 10){
					clearInterval(timer);
					slideElem[0].scrollTop = t2;
					$('.page'+i).addClass('active').siblings().removeClass('active');
					return;
				}
				slideElem[0].scrollTop += d;
				times++;
			},20);
		},
		'slideNext':function(){
			var i = slider.index;
			if (i < slider.count){
				slider.slideTo(i+1);
			}
		},
		'slidePrev':function(){
			var i = slider.index;
			if (i > 0){
				slider.slideTo(i-1);
			}
		}
	};
	$('#sliders').bind({
		'touchstart':function(event){
			pageY = event.touches[0].pageY;
			scrollTop = slideElem[0].scrollTop;
		},
		'touchmove':function(event){
			pageY2 = event.touches[0].pageY;
			console.log('slider.count',slider.count,slider.index,pageY2 - pageY);
			if (((slider.count - 1) === slider.index) && (pageY2 - pageY > 0)){
				return;
			}
			slideElem[0].scrollTop = scrollTop + (pageY2 - pageY);
			return false;
		},
		'touchend':function(event){
			var d = pageY2 - pageY;
			if (((slider.count - 1) === slider.index) && (pageY2 - pageY > 0)){
				return;
			}
			if (d > 100){
				slider.slideNext();
			}else if(d < -100){
				slider.slidePrev();
			}else{
				slider.slideTo(slider.index);
			}
			return false;
		}
	});
})(Zepto);