(function($, window, undefined){
	//全局对象
	window.JIJI = window.JIJI || {};

	//模版引擎
	(function(){
		var cache = {};
		window.JIJI.tmpl = function tmpl(str, data){
			var fn = !/\W/.test(str) ?
				cache[str] = cache[str] ||
					tmpl(document.getElementById(str).innerHTML) :
				new Function("obj",
					"var p=[],print=function(){p.push.apply(p,arguments);};" +
					"with(obj){p.push('" +
					str
						.replace(/[\r\t\n]/g, " ")
						.split("<%").join("\t")
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
						.replace(/\t=(.*?)%>/g, "',$1,'")
						.split("\t").join("');")
						.split("%>").join("p.push('")
						.split("\r").join("\\'")
				+ "');}return p.join('');");
			return data ? fn( data ) : fn;
		};
	})();


	$.extend(true, JIJI, {
		_joinNum : 1000, //参与人数,拉取人数接口出错时，给初始值1000
		_joinNumLength : 7, //参与人数初始显示7位
		placeholderSupported : 'placeholder' in document.createElement('input') ,
		animateSupported : navigator.userAgent.indexOf('Firefox') > -1 ? false : true,  //firefox不支持background-position-y
		util : {
			/**
			 * [setArr description] 将传入的数字转换为数组
			 * @return {[type]}   数组
			 */
			setArr : function(num) {
	            var numStr = num.toString(), 
	            	k = numStr.length,
	            	v = '',
	            	s = '',
	            	l = k > JIJI._joinNumLength ? k : JIJI._joinNumLength;  //页面展示的位数（参与人数大于初始值7位时（如12345678），数组长度设置为真实人数位数）

	            for (var u = 0; u < l; u++) {
	                v += "0";
	            }
	            if(k < l){
	            	s = v.slice(k) + numStr; 
	            }
	            return s.split("");
	        },
	        /**
	         * [getLength description] 获取数字的位数。也可借助setArr获取。
	         * @param  {[type]} num 数字
	         * @return {[type]}     数字的位数
	         */
	        getLength : function(num){
			    var count = 0;
			    if(typeof num === 'number'){
			    	while(Math.floor(num/10) > 0){
				        ++count;
				        num = Math.floor(num/10);
				    }
			    }
			    return count;
			},
			/**
			 * [randomNum description] 随机增加数字
			 * @param  {[type]} initNum  原数值
			 * @param  {[type]} scope 增加的范围
			 * @return {[type]}       生成的随机数值
			 */
	        randomNum : function(initNum, scope) {
	            var rdNum = initNum + Math.floor(Math.random() * scope);  //随机增加的数值
	            return rdNum;
	        },
	        /**
	         * [findChange description] 找出两个数组中不同位的位置
	         * @param  {[type]} t [description] 数组一 [1,2,3]
	         * @param  {[type]} s [description] 数组二 [2,2,1]
	         * @return {[type]}   [description] 返回数组，元素是t和s中不同数值的索引[0,2]
	         */
	        findChange : function(t, s) {
	            var v = [];
	            for (var u = 0; u < t.length; u++) {
	                if (t[u] != s[u]) {
	                    v.push(u);
	                }
	            }
	            return v;
	        },
	        /**
	         * [description] 校验输入的字符是否数字（实现文本框只允许输入数字）
	         * @param  {[type]} e   [description]
	         * @param  {[type]} obj [description]
	         * @return {[type]}     [description]
	         */
	        vaildIntegerNumber : function(e, obj){ 
				e = e || window.event;
				var keyCode = window.event ? e.keyCode : e.which;
				/*console.log(obj.value);
				return /^\d+$/g.test(obj.value) || keyCode == 8 || keyCode == 9;*/
				return keyCode >= 48 && keyCode <= 57 || keyCode == 8 || keyCode == 9 || keyCode == 37 || keyCode == 39 || 46; //8是backspace，9是tab, 37是Left Arrow， 39是Right Arrow，46是Delete
			},
			createPlaceholder : function(){
				$("input[placeholder]").each(function(){
					var t = $(this),
						placeholder = $('<span class="placeholder">' + t.attr("_val") + '</span>').appendTo(t.parent());
						placeholder.click(function(){
							$(this).siblings("input[placeholder]").trigger("focus");
						});
				}).bind("blur",function(){
					var t = $(this);
					if (!t.val()){
						t.siblings(".placeholder").removeClass("hidden");
					}
				}).bind("focus",function(){
					var t = $(this);
					if (!t.val()){
						t.siblings(".placeholder").addClass("hidden");
					}
				});
			}
		},
		/**
		 * [validate description] 字段校验规则
		 * @type {Object}
		 */
		validate : {
			mobileRule : function(value, selector){
				var rex = /[^0-9]+/g;
				value = value.replace(/^\s+|\s$/g, '');
				selector.val(value);
				
				if(value == ''){
					return '手机号码不能为空';
				}
				if (value && rex.test(value)){
					return '手机号码包含非数字字符';
				}
				rex = /^1[3|4|5|8][0-9]\d{8}$/; //校验13、14、15、18号段手机号码
				if(!!value && !rex.test(value)){
					return '手机号码不正确';
				}else{
					return true;
				}
			},
			checkMobile : function(){
				var mobileNum = $('#mobile-num'),
					mobileWrap = $('.mobile-wrap'),
					help = $('.help-inline'),
					value = mobileNum.val(),
					ret = JIJI.validate.mobileRule(value, mobileNum);

				if (ret && ret !== true){
					JIJI.validate.showMsg(ret, 0); 
				}else if(ret === true){
					JIJI.validate.showMsg('', 1);
				}
				return ret;
			},
			showMsg : function(msg, flag){  //0:出错，1:正确，2:等待，3：清除提示信息
				var mobileNum = $('#mobile-num'),
					mobileWrap = $('.mobile-wrap'),
					help = $('.help-inline'),
					themes = ["help-inline-error", "help-inline_right", "help_inline_wait", ''],
					theme = themes[flag];

				help.removeClass(themes.join(" ")).addClass(theme).html(msg);
				if(flag === 0){
					mobileWrap.css('border', '1px solid red');
					help.css('width', mobileNum.width());
					JIJI.validate.errorAnimate();
				}else if(flag === 1){
					mobileWrap.css('border', '1px solid #fff');
					help.css('width', 0);
				}
			},
			errorAnimate : function(){
				var mobileWrap = $('.mobile-wrap');
				mobileWrap.animate({top: '-5px'}, 100, function() {
					mobileWrap.animate({top: '5px'}, 100, function(){
						mobileWrap.animate({top: '-5px'}, 100, function(){
							mobileWrap.animate({top: '5px'}, 100, function(){
								mobileWrap.animate({top: '0'}, 100);
							});
						});
					});
				});
			}
		},
		/**
		 * [numAnimate description] 参与人数滚动特效
		 * @param  {[type]} settings [description]
		 * @return {[type]}          [description]
		 */
		numAnimate : function(settings){
			var self = JIJI,
				settings = $.extend(true, {
					num : 0,  //参与人数初始值
					height : 102, //数字背景图片高度
					speed : 100,  //动画速度
					scope : 5,  //数值增加的范围
					rType : 0   //获取新参与人数的方式
				}, settings);
				initNumArr =  self.util.setArr(settings.num),  //初始数值的字符串数组
    			newNum = 0, //新的参与人数
        		newNumArr = [],  //随机生成的数值的字符串数组
        		posArr = []; //initNumArr和newNumArr不同数值的索引数组
        		
    		/**
        	 * [scroolNum description] 滚动索引为index的数值
        	 * @param  {[type]} index 数字索引
        	 * @return {[type]}       [description]
        	 */
	        var	scroolNum = function (index) {
        		var num = $('#n' + index),
        			ii = initNumArr[index],  //加操作之前数
        			rd = newNumArr[index];  //加操作之后数
        			
        		//各浏览器取css('background-position-y')，值不一致
        		var backY = num.css('background-position-y') || num.css('background-position').split(' ')[1],
        		    backY = backY.replace('px','') - 0, //当前元素的background-position-y值(取backgroundPositionY和backgroundPosition的y值，不一致)
        			toBackHere;

        		/*console.log(backY);*/

        		if(ii < rd) {  
        			toBackHere = backY - settings.height * (rd - ii);
        			/*console.log(toBackHere);*/
    				num.animate({'background-position-y' : toBackHere + 'px'}, settings.speed, function(){	
        				self._joinNum = newNum; // 初始值为本次改变后的值
        			});
        		}else {
        			toBackHere = backY + settings.height * (ii - rd);
    				num.animate({'background-position-y' : '0'}, settings.speed / 2, function(){
        				num.animate({'background-position-y' : toBackHere + 'px'}, settings.speed /2, function(){
        					self._joinNum = newNum;; // 初始值为本次改变后的值
        				});
        			});
        		}
        	};

        	var startScroll = function(){
        		newNumArr = self.util.setArr(newNum);
        		posArr = self.util.findChange(initNumArr, newNumArr);

        		/*console.log(initNumArr);
	        	console.log(newNumArr);
	        	console.log(posArr);*/
	        	if((newNumArr.length > initNumArr.length) || !self.animateSupported){  //随机值位数大于初始值位数，或浏览器不支持动画时，则重新渲染数字区域
	        		JIJI.renderNum(newNum);
	        		self._joinNum = newNum;
	        	}else{
	        		//依次滚动改变的数值
		        	for (var i = posArr.length - 1; i >= 0 ; i--) { 
		        		scroolNum(posArr[i]);
		        	};
	        	}
        	}
	       
        	if(settings.num == 0){  //如果是第一次执行，则新人数是首次ajax请求拉取的参与人数
        		newNum = self._joinNum;
        		startScroll();
        	}else{
        		if(settings.rType == 0){  //随机数方式
        			newNum = self.util.randomNum(settings.num, settings.scope);
        			startScroll();
        		}else{  //ajax请求方式
        			$.ajax({
						'url' : '/operation/totalMembers',
						'data' : {},
						'dataType' : 'json',
						'type' : 'get',
						'success' : function(d){
							if(d.rtn == 1){
								newNum = d.totalMembers;
							}else{
								newNum = self.util.randomNum(settings.num, settings.scope);  //出错，用随机数
							}
							startScroll();
						},
						"error":function(){
							newNum = self.util.randomNum(settings.num, settings.scope); //出错，用随机数
							startScroll();
						}
					});
        		}
        	}
		},
		/**
		 * [refreshNum description] 定时刷新参与人数
		 * @param  {[type]} rType [description] 定时刷新的参与人数的生成方式：随机数(0) or ajax拉取(1)，默认随机数
		 * @param  {[type]} timer [description] 定时刷新时间间隔     
		 * @return {[type]}       [description]
		 */
		refreshNum : function(rType, timer){
			setInterval(function(){
				JIJI.numAnimate({'num' : JIJI._joinNum, 'rType' : rType});
			}, timer);
		},
		renderNum : function(num){
			var self = JIJI,
				numArr = self.util.setArr(num),
				tpl = ['<% for(var i = 0, n; n = numArr[i]; i++){ %>',
							'<div class="num num<%= n%>" id="n<%= i%>"><%= n%></div>',
						'<%}%>'].join(''),
				numHtml = self.tmpl(tpl, {'numArr' : numArr});
			$('#joinNum').html(numHtml);
		},
		/**
		 * [getJoinNum description] 获取参与人数，并根据参数决定第一次渲染是否动画，是否定时刷新人数
		 * @param  {[type]}  animateObj       [description] 动画参数
		 *                                    needRefresh 是否需要定时刷新，默认否
		 *                                    rtype       定时刷新的参与人数的生成方式：随机数(0) or ajax拉取(1)，默认随机数
		 *                                    timer       定时刷新时间间隔          
		 * @return {[type]}                   [description]
		 */
		getJoinNum : function(animateObj){
			var rType = animateObj.rType || 0,
				timer = animateObj.timer || 5000,
				needRefresh = animateObj.needRefresh || false,				
				callback = function(){
					setTimeout(function(){
						JIJI.numAnimate({'num' : 0});
					}, 100);

					//如果需要定时刷新参与人数
					needRefresh && JIJI.refreshNum(rType, timer);
				};

			$.ajax({
				'url' : '/operation/totalMembers',
				'data' : {},
				'dataType' : 'json',
				'type' : 'get',
				'success' : function(d){
					if(d.rtn == 1){
						JIJI._joinNum = d.totalMembers;
						callback();
					}else{
						callback();
					}
				},
				"error":function(){
					callback();
				}
			});
		},
		initEvt : function(){
			//手机号码文本框仅允许输入数字
			$('#mobile-num').each(function(){
				var input = $(this);
				$(this).bind('keyup', function(event){
					var ret = JIJI.util.vaildIntegerNumber(event);
					return ret;
				}).bind('keydown', function(event){
					var ret = JIJI.util.vaildIntegerNumber(event);
					return ret;
				});
			});

			//手机号码文本框焦点离开校验
			//$('#mobile-num').blur(JIJI.validate.checkMobile);
			
			// 错误提示信息的click事件：点击时，提示信息隐藏，input获得焦点
			$('.help-inline').bind('click', function(e){
				var mobileNum = $('#mobile-num'),
					mobileWrap = $('.mobile-wrap'),
					help = $('.help-inline'),
					themes = ['help-inline-error', 'help-inline-right', 'help-inline-wait', ''];

				//移除文本框上的错误提示
				mobileWrap.css('border', '1px solid #fff');
				help.removeClass(themes.join(' ')).html('').css('width' , 0);

				//文本框获取焦点
				mobileNum.trigger('focus');
				//mobileNum[0].focus();
			});

			//监听回车 
	        $('form').keydown(function(e) {
	        	e = window.event ? window.event : e;
	       		if(e.keyCode == 13) {
	        		$('input[type=submit]').trigger('click');
	        	}
	        });


			//提交申请
			//$('form').submit(function() {
			$('input[type=submit]').click(function(){
				var form = $(this),
					mobileNum = $('#mobile-num');

				//有错误未处理
				if($('.help-inline-error')[0]){
					//仍然动画
					JIJI.validate.errorAnimate();
					return false;
				}

				//格式验证
				var checkRet = JIJI.validate.checkMobile();
				if(checkRet !== true){
					return false;
				}
				
				if(form.hasClass('submiting')){
					return false;
				}else{
					form.addClass('submiting');
					$.ajax({
						'url' : '/operation/bookAccount',
						'data' : {'mobileNum' : mobileNum.val()},
						'dataType' : 'json',
						'type' : 'post',
						'success' : function(d){
							form.removeClass('submiting');
							if (d.rtn === 1){
								$('.apply-form').html('<p class="apply-suc-title">感谢您的申请！</p><p class="apply-suc-msg">由于申请人数众多，我们将随机分配内测资格。如果申请成功，您会收到应用的内测邀请码和下载链接。谢谢！</p>');
							}else{
								JIJI.validate.showMsg(d.msg, 0);
							}
						},
						"error":function(){
							form.removeClass('submiting');
							JIJI.validate.showMsg('哦哦，预约失败了，重试一下吧:)', 0);
						}
					});
				}
			});
		},
		slideImg : function(){
			var slideImg = $('.slide-img'),
				length = slideImg.length,
				curIndex = 0, //初始播放图片
				speed = 1000, //动画速度
				time = 5000, //计时器
				change = function(index){
					var nImg = slideImg.eq(index);
					slideImg.eq(curIndex).stop(1, 1).animate({'opacity' : '0'}, speed);
					nImg.stop(1, 1).css({opacity: "0.5"}).show().animate({opacity: "1"}, speed);
					curIndex = index;
				};

			if(length > 1){  //多于1张图片，轮播
				setInterval(function(){
					change((curIndex + 1) % length);
				}, time);
			}
		},
		/**
		 * 入口
		 * @return {[type]} [description]
		 */
		init : function(){
			$(document).ready(function() {
				var self = JIJI;

				//兼容不支持placeholder的浏览器——改为所有浏览器都用自己写的placeholder
				//if(!self.placeholderSupported){
					self.util.createPlaceholder();
				//}

				//渲染参与人数，并开始动画
				self.getJoinNum({'needRefresh' : true, 'rType' : 0, 'timer' : 10000}); //动画参数：需要定时刷新参与人数，刷新方式，定时时间间隔

				//初始化事件绑定
				self.initEvt();

				//图片轮播
				self.slideImg();
			});
		}
	});

	window.JIJI.init();
})(jQuery, this);

