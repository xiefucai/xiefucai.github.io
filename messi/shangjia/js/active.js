;(function($) {
	var slideElem = $('#sliders'),
		form = $('#form')[0],
	pageY = 0,
	pageY2 = 0,
	scrollTop = 0,
	curPage = 0,
	curSlide = 0,
	isTelNum = function(val){
		if (new RegExp(/[^\d]/g).test(val)) {
			return false;
		}
		if (val.length == 11) {
			if (new RegExp(/^1(?:3|5|8)\d{9}$/).test(val)) {
				return true
			} else {
				return false;
			}
		} else {
			if (val.length >= 14) {
				if (new RegExp(/^008860?9\d{8}$/).test(val)) {
					return true
				} else {
					return false;
				}
			} else {
				return false;
			}
		}	
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
	
	$(form).bind({
		'submit':function(event){
			var tel = $.trim(form['tel'].value);
			if ($(form['submit']).hasClass('loading')){
				return false;
			}
			if (!tel){
				showResult(1,'请输入手机号码');
			}else if(!isTelNum(tel)){
				showResult(1,'手机号码格式错误');
			}else{
				$(form['submit']).addClass('loading');
				$.ajax({
					'url':'/operation/bookAccount',
					'data':{'mobileNum':tel},
					'type':'post',
					'dataType':'json',
					'success':function(data){
						if (data && (data.rtn === 1)){
							showResult(0,'感谢您的申请！<br/>由于申请人数众多，我们将随机分配内测资格。如果申请成功，您会收到应用的内测邀请码和下载链接。谢谢！');
						}else{
							showResult(1,d.msg);
						}
						$(form['submit']).removeClass('loading');
					},
					'error':function(){
						showResult(1,'哦哦，预约失败了，重试一下吧:)');
						$(form['submit']).removeClass('loading');
					}
				});
			}
			return false;
		}
	});
	
	$('#delbtn').bind('click',function(){
		form['tel'].value = '';
	});
	/*
	window.addEventListener('deviceorientation', orientationListener, false); //方向感应器
	window.addEventListener('MozOrientation', orientationListener, false); //方向感应器 for firefox
	window.addEventListener('devicemotion', orientationListener, false); //重力加速感应器 for iphone, android
	*/
	slider.slideTo(0);
})(Zepto);