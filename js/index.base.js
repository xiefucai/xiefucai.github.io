$(function(){
	var getParams = function(str){
		var o = {};
		str.replace(/([^&=]+)=([^&=]+)/g,function(){
			o[arguments[1]] = arguments[2];
		});
		return o;
	},
	getSelectText = function(){
		return (document.selection ? document.selection.createRange().text: document.getSelection()).toString().replace(/[\s\n]+/g, " ");
	}
	px = 0,
	hash = getParams(location.hash.slice(1));
	elem = {
		'main':$('.main'),
		'mainBg':$('.main-bg'),
		'mainSlider':$('.main-slider'),
		'sliderLeft':$('.slider-ctrs-left'),
		'sliderRight':$('.slider-ctrs-right'),
		'nav':$('.header-inner-right'),
		'footer':$('#footer'),
		'frame1':$('#frame1'),
		'frame2':$('#frame2')
	},
	slider = {
		'index':0,
		'count':2,
		'sliderTo':function(i,f){
			var rect = common.getDocSize(),
				w = rect.width,
				activeSlide,
				callback = function(){
					elem.sliderLeft.removeClass('disabled');
					elem.sliderRight.removeClass('disabled');
					
					if (slider.index === 0){
						elem.sliderLeft.addClass('disabled');
					}else if(slider.index === slider.count){
						elem.sliderRight.addClass('disabled');
					}
					
					if (f === undefined){
						hash['slide'] = $('.main-'+i).attr('data-hash') || i;
						location.hash = $.param(hash);
						if (i === 2 && !$('.main-'+i).attr('data-hash')){
							$('.router_sider').find('li:eq(0)').find('a').trigger('click');
						}
					}
					
					activeSlide.addClass('autoheight').siblings().removeClass('autoheight');
					common.changeSlideInfo(i);
					common.protected.toggleRouterVisible(activeSlide[0]);
				}
				;
			slider.index = i;
			activeSlide = $('.main-'+(i+1));
			activeSlide.removeClass('autoheight');
			if (f === false){
				elem.mainSlider.css({'left':(-i*w)+'px'});
				elem.mainBg.removeClass('main-bg-1 main-bg-2 main-bg-3').addClass('main-bg-'+(i+1));
				callback();
			}else{
				elem.mainSlider.animate({'left':(-i*w)+'px'},callback);
				elem.mainBg.fadeOut('slow',function(){
					$(this).removeClass('main-bg-1 main-bg-2 main-bg-3').addClass('main-bg-'+(i+1)).fadeIn(1500);
				});
			}
		}
	};
	
	
	hash['slide'] = (hash['slide'] === undefined?'1':hash['slide']);
	common = $.extend(common,{
		'config':{
			'routerList':null	
		},
		'getDocSize':function(){
			//为了不显示滚动条，所以加上30
			return {'width':(document.documentElement.clientWidth || document.body.clientWidth)+20,'height':document.documentElement.clientHeight || document.body.clientHeight};
		},
		'resizeWin':function(event){
			var rect = common.getDocSize();
			$('.main-1,.main-2,.main-3').css({'width':rect.width/*,'minHeight':812*/});
			$('.router_mian_wp').css({'minHeight':rect.height-156});
			$('.main-1 .router_mian_wp').css({'minHeight':Math.max(rect.height-156,534)});
			$('.router_con_wp').css({'top':Math.max((rect.height-554-152)/2,106)}); 
			elem.mainSlider.width(rect.width*3+30);
			if (event){
				slider.sliderTo(slider.index,false);
			}
		},
		'setCurrentPage':function(p){
			//slider.sliderTo(,false);
			var i = +(p[0] || 0),
				j = +(p[1] || 0),
				k = +(p[2] || 0);
			slider.sliderTo(i,false);
			switch (i){
				case 0:;break;
				case 1:;break;
				case 2:
					$('.router_sider').find('li:eq('+j+')').find('a').trigger('click');
					if (j === 3){
						$('.advance-nav').find('a:eq('+k+')').trigger('click');
					}
				;break;
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
				'<a href="http://shop.xunlei.com/" target="_blank" class="c-white" title="网上商城">网上商城</a>'
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
			},
			//页面滚动的时候，需要隐藏路由器信息
			'toggleRouterVisible':function(scroller){
				var scrollTop = scroller.scrollTop,
					routerSelector = $('.router-selector');
				if (scrollTop > 10){
					routerSelector.addClass('unvisible');
				}else{
					routerSelector.removeClass('unvisible');
				}
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
			},
			//
			'showRightFrame':function(event,t){
				var routerFace = $('.router_mian'),
					setFrameUrl = function(url){
						elem.frame2[0].src = url+'?t='+(+new Date());
					};
					t.parent().addClass('cur').siblings().removeClass('cur');
				
				if (t.attr('title') === '高级设置'){
					routerFace.addClass('advance-mode');
					(function(elem){
						elem.trigger('click');
						//$('#frame2').attr('src',elem.attr('href'));
						setFrameUrl(elem.attr('href'));
					})($('.advance-nav').find('a:eq(0)'));
				}else{
					setFrameUrl(t.attr('href'));
					routerFace.removeClass('advance-mode');
				}
				
				hash['slide'] = [2,t.parent().index()].join('-');
				location.hash = $.param(hash);
				$('.main-2').attr('data-hash',hash['slide']);
				return false;
			},
			//
			'showRightFrame2':function(event,t){
				t.addClass('cur').siblings().removeClass('cur');
				hash['slide'] = [2,3,t.index()].join('-');
				location.hash = $.param(hash);
				$('.main-2').attr('data-hash',hash['slide']);
			}
		},
		'init':function(){
			//拉取路由器列表
			/*
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
			*/
			common.protocol.getRouterData({
				'wan0_proto':'',
				'wan0_hwaddr':''
			},function(d){console.log(d);
				elem.footer.html([
					'<span>系统版本：1.0.0</span>',
					'<span>mac地址：'+d['wan0_hwaddr']+'</span>',
					'<span>服务热线：0755-51851888</span>'
				].join(''));	
			});
		}/*,
		'onTouch':function(event){
			if (event.pointerType === 'touch'){
				switch (event.type) {
					case "touchstart":
					case "pointerdown":
					case "MSPointerDown":
					common.onTouchStart(event);
					break;
					
					case "touchmove":
					case "pointermove":
					case "MSPointerMove":
					common.onTouchMove(event);
					break;
					
					case "touchend":
					case "pointerup":
					case "MSPointerUp":
					common.onTouchEnd(event);
					break;
				}
			}
		},
		'onTouchStart':function(event){
			var curX = event.pageX || event.targetTouches[0].pageX;
			console.log('onTouchStart',curX);
		},
		'onTouchMove':function(event){
			var curX = event.pageX || event.targetTouches[0].pageX;
			console.log('onTouchMove',curX);
		},
		'onTouchEnd':function(event){
			var curX = event.pageX || event.targetTouches[0].pageX;
			console.log('onTouchEnd',curX);
		}*/
	});
	
	if (window.addEventListener){/*
		if (window.navigator.msPointerEnabled) {
			this.element.addEventListener("MSPointerDown", function(e){
				console.log();
			}, false);
			this.element.addEventListener("MSPointerMove", eventHandlerName, false);
			this.element.addEventListener("MSPointerUp", eventHandlerName, false);
		}*/
		document.body.addEventListener('touchstart', function(e){
			console.log('touchstart');
			px = e.touches[0].pageX;
		}, false);
		
		document.body.addEventListener('touchmove', function(e){
			slider.touchX = e.touches[0].pageX;
		}, false);
		
		document.body.addEventListener('touchend', function(e){
			if (slider.touchX && slider.touchX-px>100){
				elem.sliderLeft.trigger('click');
			}else if(slider.touchX && slider.touchX - px < -100){
				elem.sliderRight.trigger('click');
			}
		}, false);
		/*
		if (window.navigator.msPointerEnabled) {
			document.body.addEventListener("MSPointerDown", common.onTouch, false);
			document.body.addEventListener("MSPointerMove", common.onTouch, false);
			document.body.addEventListener("MSPointerUp", common.onTouch, false);
		}
		document.body.addEventListener("touchstart", common.onTouch, false);
		document.body.addEventListener("touchmove", common.onTouch, false);
		document.body.addEventListener("touchend", common.onTouch, false);
		*/
	}
	
	$('body').bind({
		'mousedown':function(event){
			px = event.pageX;
		},
		'mouseover':function(){
			
		},
		'mouseup':function(event){
			if (!getSelectText()){
				if (event.pageX - px>100){
					$('.slider-ctrs-left').trigger('click');
				}else if(event.pageX - px < -100){
					$('.slider-ctrs-right').trigger('click');
				}
			}
		},
		'mousewheel':function(e){
			clearTimeout(slider.slideTimer);
			if (e.originalEvent.deltaX < 0){
				slider.slideTimer = setTimeout(function(){
					elem.sliderLeft.trigger('click');	
				},50);
			}else if(e.originalEvent.deltaX > 0){
				slider.slideTimer = setTimeout(function(){
					elem.sliderRight.trigger('click');	
				},50);
			}
			//console.log(,e.originalEvent.deltaY);
		}
	});
	
	
	
	$('body').bind('click',function(event){
		var target = event.target,
			jtarget = $(target),
			action = jtarget.attr('data-action'),
			r;
		if (action && common.action[action]){
			r = common.action[action](event,jtarget);
		}
		if (r === false){
			return r;
		}
	});
	
	$('.main-1,.main-2,.main-3').bind('scroll',function(event){
		common.protected.toggleRouterVisible(event.target);
	});
	/*
	elem.mainSlider.bind({
		'mousewheel':function(e){
			console.log(e.originalEvent.deltaX,e.originalEvent.deltaY);
		}
	});
	*/
	/*
	elem.mainSlider.bind('mousewheel',function(e){
		var k = event.wheelDelta? event.wheelDelta:-event.detail*10;
			console.log(event);
			elem.mainSlider[0].scrollTop = this.scrollTop - k;
			return false;
	});
	*/
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
				t++;
				if (t > 31){
					clearTimeout(timer);
				}else{
					timer = setTimeout(working,(32-t)*2);
				}
			};
		timer = setTimeout(working,(32-t)*2);
	});
	
	$(window).resize(common.resizeWin);
	common.resizeWin();
	common.setCurrentPage(hash['slide'].split('-'));
	common.init();
});