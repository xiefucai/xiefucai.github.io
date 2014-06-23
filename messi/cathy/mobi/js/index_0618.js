;(function($) {
	var slideElem = $('#sliders'),
	pageY = 0,
	pageY2 = 0,
	scrollTop = 0,
	curPage = 0,
	curSlide = 0,
	turnPage = function(i){
		var t = document.body.scrollTop,
			h = document.body.clientHeight,
			t2 = i * h,
			d = Math.floor((t2 - t)/10),
			times = 0,
			timer = 0;
		document.body.scrollTop = (t2-t)%10 + t;
		curPage = i;
		timer = setInterval(function(){
			if (times < 10){
				document.body.scrollTop = document.body.scrollTop + d;
				times++;
			}else{
				clearInterval(timer);
				document.body.scrollTop = t2;
			}
		},10);
	},
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
					curSlide = i;
					$('.page'+(i+1)).addClass('active').siblings().removeClass('active');
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
	},
	orientationListener = function(event){
		//gamma(x),alpha(y),beta(z)
		if (curPage === 0){
			$('#sliders').find('.page').css({
				'margin-left':Math.floor(event.gamma)+'px'
			});
		}
	},
	showResult = function(i,t){
		var result = $('#result');
		if (i === 0){
			result.removeClass('red none').html(t);
		}else{
			result.removeClass('none').addClass('red').html(t);
		}
		setTimeout(function(){
			result.addClass('none');
		},1500);
	};
	$('#sliders').bind({
		'touchstart':function(event){
			pageY = event.touches[0].pageY;
			scrollTop = slideElem[0].scrollTop;
		},
		'touchmove':function(event){
			pageY2 = event.touches[0].pageY;
			if (((slider.count - 1) === slider.index) && (pageY2 - pageY < 0)){
				return true;
			}
			slideElem[0].scrollTop = scrollTop - (pageY2 - pageY);
			return false;
		},
		'touchend':function(event){
			var d = pageY2 - pageY;
			if (((slider.count - 1) === slider.index) && (pageY2 - pageY < 0)){
				if (pageY2 - pageY < -50){
					turnPage(1);
					return false;
				}else{
					slider.slideTo(slider.index);
					return false;
				}
			}
			if (d > 100){
				slider.slidePrev();
			}else if(d < -100){
				slider.slideNext();
			}else{
				slider.slideTo(slider.index);
			}
			return false;
		}
	});
	
	$(document).bind({
		'touchmove':function(){return false;}
	});
	
	turnPage(0);
	slider.slideTo(0);
})(Zepto);