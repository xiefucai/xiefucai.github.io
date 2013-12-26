$(function(){
	var elem = {
		'main':$('.main'),
		'mainSlider':$('.main-slider'),
		'sliderLeft':$('.slider-ctrs-left'),
		'sliderRight':$('.slider-ctrs-right'),
		'nav':$('.header-inner-right')
	};
	var slider = {
		'index':0,
		'count':2,
		'sliderTo':function(i,f){
			var rect = common.getDocSize(),
				w = rect.width,
				callback = function(){
					elem.sliderLeft.removeClass('disabled');
					elem.sliderRight.removeClass('disabled');
					if (slider.index === 0){
						elem.sliderLeft.addClass('disabled');
					}else if(slider.index === slider.count){
						elem.sliderRight.addClass('disabled');
					}
					common.changeSlideInfo(i);
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
		'changeSlideInfo':function(i){
			var str,
				tip = [
					['','首页'],
					['下载管理','设备管理'],
					['首页','']
				][i];
			if (i === 1){
				str = [
				'<a href="http://g.xunlei.com/" target="_blank" class="header-inner-right-link" title="无线">无线</a>',
				'<a href="http://vip.xunlei.com/" target="_blank" class="header-inner-right-link" title="穿墙">穿墙</a>',
				'<a href="http://g.xunlei.com/" target="_blank" class="header-inner-right-link" title="面板灯">面板灯</a>'
				].join(' ');
			}else{
				str = [
				'<a href="http://g.xunlei.com/" target="_blank" class="header-inner-right-link" title="机友论坛">机友论坛</a>',
				'<a href="http://vip.xunlei.com/" target="_blank" class="header-inner-right-link" title="开通会员">开通会员</a>',
				'<a href="http://g.xunlei.com/" target="_blank" class="header-inner-right-link" title="网上商城">网上商城</a>'
				].join(' ');
			}
			elem.sliderLeft.find('.slider-ctrs-label').html(tip[0]);
			elem.sliderRight.find('.slider-ctrs-label').html(tip[1]);
			elem.nav.html(str);
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
		var s = '-webkit-gradient(radial,23 23,%x,23 23,%y,from(rgb(255, 255, 255)),color-stop(0.5, rgba(255,255,255,0.1)),to(rgb(255,255,255)))',
			t = 0,
			timer = 0,
			qa = function(s,x,y){
				return s.replace(/%x/g,x).replace(/%y/g,y);
			},
			working = function(){
				logo.style.webkitMaskImage = qa(s,t*10,t*10+10);
				//logo.style.mask = '-moz-gradient(radial, 23 23,%x, 23 23, %y, from(rgb(255, 255, 255)), color-stop(0.5, rgba(255,255,255,0.1)), to(rgb(255,255,255)))'
				t++;
				if (t > 31){
					clearTimeout(timer);
					//$(logo).removeAttr('style');
				}else{
					timer = setTimeout(working,(32-t)*2);
				}
			};
		timer = setTimeout(working,(32-t)*2);
	});
	
	$(window).resize = common.resizeWin;
	common.resizeWin();
	slider.sliderTo(0,false);
});