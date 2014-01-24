﻿$.extend(window.common,{
	'action':{},
	'http':{
		'post':function(data,succ,err){
			$.ajax({
				'url':'/postCenter.js',
				'data':data,
				'dataType':'text',
				'type':'post',
				'success':function(text){
					var data = common.string.parseJSON(text),
						code = +(data && data.result);
					
					if(common.http.response[code]){
						common.http.response[code](data);
					}else{
						succ(data);
					}
				},
				'error':err || function(){}
			});
		},
		'success':function(dialog,data,timer,callback,errCallBack){
			var code = +data.result,
				t = this;
				setTimeout(function(){
					t.removeClass('form-loading');
					if (common.http.response[code]){
						common.http.response[code](data);
					}else if(code === 0){
						dialog.alert('保存成功！',callback);
					}else{
						errCallBack?errCallBack(code):dialog.alert('保存失败');
					}
				},(timer || 1) * 1000);	
		},
		'response':{
			'2003':function(){
				top.location.href = '/toomany.html';
			},
			'1020':function(){
				top.location.href = '/login.html';
			}
		}
	},
	'postMessage':function(s){
		var _opener = window.opener;
		var isMSIE = /msie/i.test(navigator.userAgent);
		if (!(window.common && common.json && common.json.toString)){
			console.log('common.json.toString未加载',s,location.href);
			return;
		}
		s = common.json.toString(s);
		if (window.postMessage){
			parent.postMessage(s,"*");
			// ie下window.opener.postMessage有bug
			if (_opener) {
				if (isMSIE) {
					_opener.name = s;
				} else {
					_opener.postMessage(s, "*");
				}
			}
		}else{
			parent.name = s;
			if (_opener) {
				_opener.name = s;
			}
		}
	},
	'resize':function(event){
		var h = Math.ceil($('#bottom').offset().top);
		if (window !== parent){
			frameElement.height = h;
			common.postMessage({"action":"resize","data":{"height":h}});
		}else if(window.frameElement){
			frameElement.height = h;
			common.postMessage({"action":"resize","data":{"height":h}});
		}
	},
	'start':function(){
		$.extend({
			'getJSON':function(url,data,callback){
				$.ajax({
					'url':url,
					'data':data,
					'type':'get',
					'dataType':'text',
					'success':function(text){
						callback(common.string.parseJSON(text));
					}
				});
			}
		});
		common.initEvent();
		//页面大小重置
		$(window).resize(common.resize);
		setTimeout(common.resize,100);
	},
	'initEvent':function(){
		$('.form-select').each(function(){
			common.component.selector.initEvent.call(this);
		});	
		$('.form-check').each(function(){
			common.component.checkbox.initEvent.call(this);
		});
	},
	'component':{
		'checker':function(form,dialog){
				
		},
		'checkbox':{
			'initEvent':function(){
				var checker = $(this),
					input = checker.find('input');
				input.bind({
					'focus':function(event){
						if (checker.hasClass('form-check-checked')){
							checker.addClass('form-checked-focus');
						}else{
							checker.addClass('form-unchecked-focus');
						}
					},
					'blur':function(){
						checker.removeClass('form-unchecked-focus form-checked-focus');
					}
				});	
			},
			'onChange':function(target){
				target.parent().removeClass('form-unchecked-focus form-checked-focus');
				if (target.is(':checked')){
					target.parent().addClass('form-check-checked');
				}else{
					target.parent().removeClass('form-check-checked');
				}
			},
			'setValue':function(value){
				var target = $(this);
				if (value === true || value === 1 || value === target.attr('data-checked')){
					target.attr('checked','checked');
					target.parent().addClass('form-check-checked');
				}else{
					target.removeAttr('checked');
					target.parent().removeClass('form-check-checked');
				}
				target.trigger('change');
			}
		},
		'selector':{
			'initEvent':function(){
				var selector = $(this),
					input = selector.find('input'),
					opts = selector.find('.form-select-opts');
				input.bind({
					'focus':function(){
						if (selector.hasClass('disabled')){
							return false;
						}
						selector.addClass('focus');
					},
					'keydown':function(event){
						if (event.keyCode === 9){
							selector.removeClass('focus');
							return true;
						}	
					},
					'keyup':function(event){
						var code = event.keyCode,
							opt = opts.find('.active')
							;
						if (!selector.hasClass('focus')){
							selector.addClass('focus');
							if (opt.length === 0){
								opt.trigger('mouseover');
								opt = opts.find('a').first();
							}
							return;
						}
						if (code === 13 && opt.length){
							opt.trigger('click');
							selector.removeClass('focus');
							return false;
						}else if(code === 38){
							opt.prev().trigger('mouseover');
							opt = opt.prev();
							if (opt.length && opt[0].offsetTop < opts[0].scrollTop){
			 					opts[0].scrollTop -= opt.height();
			 				}
						}else if(code === 40){
							opt.next().trigger('mouseover');
							opt = opt.next();
							if (opt.length && (opt[0].offsetTop - opts[0].scrollTop >= opts.height())){
			 					opts[0].scrollTop += opt.height();
			 				}
						}
					}
				});
				
				opts.bind({
					'doSelect':function(event){
						var target = event.target,
							jtarget = $(target);
						input.val(jtarget.text()).attr('data-value',jtarget.attr('data-value'));
						input.trigger('change');
					},
					'mouseover':function(event){
						var target = event.target;
						$(target).addClass('active').siblings().removeClass('active');	
					},
					'click':function(event){
						var target = event.target,
							jtarget = $(target);
						jtarget.trigger('doSelect');
						selector.removeClass('focus');
						return false;
					}
				});
			},
			'setValue':function(value){
				var selector = $(this.parentNode),
					input = $(this),
					opts = selector.find('.form-select-opts').removeClass('active');
					opts.find('span[data-value="'+value+'"]').trigger('doSelect').trigger('mouseover');
			}
		}
	}
});

$.extend(window.common.action,{
	'showTip':function(tipName,tipTarget){
		var tip = $('#globalTip'),
			commTip = window.common.tip,
			offset = tipTarget.offset(),
			format = function(str){
				return str.replace(/==\s(\S+)\s==/g,'<h3 class="form-tip-title">$1</h3>')
				.replace(/\*{3}(.*)\*{3}/g,'<span class="red">$1</span>')
				.replace(/\n/g,'<br/>');
			};
		if (!tip.length){
			tip = $(['<div class="form-tip none" id="globalTip">',
			'<span class="form-tip-angel"></span>',
			'<span class="form-tip-angel-shadow"></span>',
			'<div class="form-tip-content"></div>',
			'</div>'].join('')).appendTo($('body'));
		}
		if (commTip && commTip[tipName]){
			tip.css({'top':offset.top})
			.removeClass('none')
			.find('.form-tip-content')
			.html(format(commTip[tipName]));
		}
	},
	'hideTip':function(tipName,tipTarget){
		var tip = $('#globalTip');
		if (tip.length){
			tip.addClass('none');
		}
	}
});

$('body').bind({
	'click':function(event){
		var target = event.target,
			jtarget = $(target),
			action = jtarget.attr('data-action');
		if (action && common.action[action]){
			common.action[action](event,jtarget);
		}else if(target.tagName === 'INPUT' && target.type === 'checkbox'){
			common.component.checkbox.onChange(jtarget);
		}else if(target.tagName !== 'INPUT' && !jtarget.parent().hasClass('form-select')){
			$('.form-select').filter('.focus').removeClass('focus');
		}else if(target.tagName === 'INPUT'){
			$('.form-select').filter('.focus').removeClass('focus');
			if (jtarget.parent().hasClass('form-select') && !jtarget.parent().hasClass('disabled')){
				jtarget.parent().addClass('focus');
			}
		}
	},
	'mouseover':function(event){
		var target = event.target,
			jtarget = $(target),
			tipName = jtarget.attr('data-tip');
		if (tipName){
			common.action.showTip(tipName,jtarget);
		}else{
			common.action.hideTip(tipName,jtarget);
		}
	}
});

$.getScript('/js/common.lib.js',function(){
	console.log('common.lib.js loaded');
	$.getScript('/js/index.protocol.js',function(){
		console.log('index.protocol.js loaded');
		$.extend(window.common,common);
		common.start();
		if (window.common.init){
			window.common.init();
		}
	});
});