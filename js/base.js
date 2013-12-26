$(function(){
	var elem = {
		'main':$('.main'),
		'mainSlider':$('.main-slider'),
		'sliderLeft':$('.slider-ctrs-left'),
		'sliderRight':$('.slider-ctrs-right')
	};
	var slider = {
		'index':0,
		'count':2,
		'sliderTo':function(i,f){
			var rect = common.getDocSize(),
				w = rect.width,
				callback = function(){
					if (slider.index === 0){
						elem.sliderLeft.addClass('disabled');
					}else if(slider.index === slider.count){
						elem.sliderRight.addClass('disabled');
					}
				};
			slider.index = i;
			if (f === false){
				elem.mainSlider.css({'left':(-i*w)+'px'});
				callback();
			}else{
				elem.mainSlider.animate({'left':(-i*w)+'px'},callback);
			}
		}
	};
	common = $.extend(common,{
		'getDocSize':function(){
			return {'width':document.documentElement.clientWidth || document.body.clientWidth,'height':document.documentElement.clientHeight || document.body.clientHeight};	
		},
		'resizeWin':function(){
			var rect = common.getDocSize();
			$('.main-1,.main-2,.main-3').width(rect.width);
			elem.mainSlider.width(rect.width*3);
			slider.sliderTo(slider.index,false);
		},
		'action':{
			'sliderLeft':function(event,t){
				var i = slider.index;
				if (t.hasClass('disabled')){
					return;
				}
				if (i > 0){
					slider.sliderTo(i-1);
					elem.sliderRight.removeClass('disabled');
				}
			},
			'sliderRight':function(event,t){
				var i = slider.index;
				if (t.hasClass('disabled')){
					return;
				}
				if (i < slider.count){
					slider.sliderTo(i+1);
					elem.sliderLeft.removeClass('disabled');
				}
			}
		}
	});
	$('body').bind('click',function(event){
		var target = event.target,
			jtarget = $(target),
			action = jtarget.attr('data-action');
		if (action && common.action[action]){
			common.action[action](event,jtarget);
		}
	});
	
	$('.logo').mouseover(function(){
		var logo = this;
		var s = '-webkit-gradient(radial, 17 17,%x, 17 17, %y, from(rgb(255, 255, 255)), color-stop(0.5, rgba(255,255,255,0.1)), to(rgb(255,255,255)))',
			t = 0,
			timer = 0,
			qa = function(s,x,y){
				return s.replace(/%x/g,x).replace(/%y/g,y);
			};
		timer = setInterval(function(){
			logo.style.webkitMaskImage = qa(s,t*3,(t+10)*3);
			logo.style.mask = '-moz-gradient(radial, 17 17,%x, 17 17, %y, from(rgb(255, 255, 255)), color-stop(0.5, rgba(255,255,255,0.1)), to(rgb(255,255,255)))'
			t++;
			if (t > 100){
				clearInterval(timer);
				$(logo).removeAttr('style');
			}
		},10);
	});
	
	$(window).resize = common.resizeWin;
	common.resizeWin();
	slider.sliderTo(1,false);
});