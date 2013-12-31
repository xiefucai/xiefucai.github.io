$(function(){
	var getParams = function(str){
		var o = {};
		str.replace(/([^&=]+)=([^&=]+)/g,function(){
			o[arguments[1]] = arguments[2];
		});
		return o;
	},
	hash = getParams(location.hash.slice(1));
	hash['slide'] = (hash['slide'] === undefined?1:+hash['slide']);
	var elem = {
		'main':$('.main'),
		'mainBg':$('.main-bg'),
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
				activeSlide = $('.main-'+(i+1)),
				callback = function(){
					if (hash['slide'] !== i){
						hash['slide'] = i;
						location.hash = $.param(hash);
					}
					elem.sliderLeft.removeClass('disabled');
					elem.sliderRight.removeClass('disabled');
					if (slider.index === 0){
						elem.sliderLeft.addClass('disabled');
					}else if(slider.index === slider.count){
						elem.sliderRight.addClass('disabled');
					}
					activeSlide.siblings().removeClass('autoheight');
					common.changeSlideInfo(i);
				}
				;
			slider.index = i;
			activeSlide.addClass('autoheight');
			if (f === false){
				elem.mainSlider.css({'left':(-i*w)+'px'});
				elem.mainBg.removeClass('main-bg-1 main-bg-2 main-bg-3').addClass('main-bg-'+(i+1));
				callback();
			}else{
				elem.mainSlider.animate({'left':(-i*w)+'px'},callback);
				elem.mainBg.fadeOut(function(){
					$(this).removeClass('main-bg-1 main-bg-2 main-bg-3').addClass('main-bg-'+(i+1)).fadeIn();
				});
			}
		}
	};
	common = $.extend(common,{
		'config':{
			'routerList':null	
		},
		'getDocSize':function(){
			return {'width':document.documentElement.clientWidth || document.body.clientWidth,'height':document.documentElement.clientHeight || document.body.clientHeight};	
		},
		'resizeWin':function(event){
			var rect = common.getDocSize();
			$('.main-1,.main-2,.main-3').css({'width':rect.width,'minHeight':812});
			$('.router_mian_wp').css({'minHeight':rect.height-156});
			$('.main-1 .router_mian_wp').css({'minHeight':Math.max(rect.height-156,534)});
			$('.router_con_wp').css({'top':Math.max((rect.height-554-152)/2,106)}); 
			elem.mainSlider.width(rect.width*3+30);
			if (event){
				slider.sliderTo(slider.index,false);
			}
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
				'<a href="javascript:;" class="c-white" title="无线" id="light-wifi" data-action=""><span class="icon-wifi"></span>无线</a>',
				'<a href="javascript:;" class="c-white" title="穿墙" id="light-enhance"><span class="icon-enhance"></span>穿墙</a>',
				'<a href="javascript:;" class="c-white" title="面板灯" id="light-panel"><span class="icon-panel"></span>面板灯</a>'
				].join(' ');
			}else{
				str = [
				'<a href="http://g.xunlei.com/" target="_blank" class="c-white" title="机友论坛">机友论坛</a>',
				'<a href="http://vip.xunlei.com/" target="_blank" class="c-white" title="开通会员">开通会员</a>',
				'<a href="http://g.xunlei.com/" target="_blank" class="c-white" title="网上商城">网上商城</a>'
				].join(' ');
			}
			elem.sliderLeft.find('.slider-ctrs-label').html(tip[0]);
			elem.sliderRight.find('.slider-ctrs-label').html(tip[1]);
			elem.nav.html(str);
		},
		'protected':{
			//当置当前路由器信息
			'setCurrentRouter':function(router){
				common.config.routerInfo = router;
				$('#router-name').html(router.name);
				$('.router-options').addClass('none');
				setTimeout(function(){
					$('.router-options').removeClass('none');
				},500);
			}
		},
		'action':{
			//向左翻页
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
			//向右翻页
			'sliderRight':function(event,t){
				var i = slider.index;
				if (t.hasClass('disabled')){
					return;
				}
				if (i < slider.count){
					slider.sliderTo(i+1);
					elem.sliderLeft.removeClass('disabled');
				}
			},
			//滚屏到指定页面
			'slide':function(event,t){
				slider.sliderTo(+t.attr('data-index'));
			},
			//切换路由器
			'switchRouter':function(event,t){
				var routerId = t.data('id');
				for(var i=0,list = common.config.routerList,k=list.length,router;i<k;i++){
					router = list[i];
					if (router['routerID'] === routerId){
						common.protected.setCurrentRouter(router);
						break;
					}
				}
			}
		},
		'init':function(){
			//拉取路由器列表
			common.protocol.build('getRouterList',null,function(d){
				var routerList = d && d.routerList,
					arr = [];
				if (d && d.errorCode === 0){
					if (routerList.length){
						//按照id进行排序
						routerList.sort(function(v1,v2){
							return v1.routerID - v2.routerID;
						});
						for(var i=0,k=routerList.length,router;i<k;i++){
							router = routerList[i];
							arr.push('<a href="javascript:;" class="router-option" data-action="switchRouter" data-id="'+router['routerID']+'">'+router['name']+'</a>');
						}
						common.config.routerList = routerList;
					}
				}
				common.protected.setCurrentRouter(routerList[0]);
				$('.router-options').html(arr.join(''));
			});
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
	/*
	elem.mainSlider.bind('mousewheel',function(e){
		var k = event.wheelDelta? event.wheelDelta:-event.detail*10;
			elem.mainSlider[0].scrollTop = this.scrollTop - k;
			return false;
	});*/
	
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
	
	$(window).resize(common.resizeWin);
	common.resizeWin();
	slider.sliderTo(hash['slide'],false);
	common.init();
});