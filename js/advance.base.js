$(function(){
	var common = {
		'string':{
			'parseJSON':function(s){
				try {
					eval('common.__json__=' + s);
					return common.__json__;
				} catch(e) {
					return null;
				}
			},
			'toJSON':function(s){
				if (window.JSON) {
					try {
						return JSON.parse(s);
					} catch(e) {
						return null;
					}
				} else {
					try {
						eval('common.__json__=' + s);
						return common.__json__;
					} catch(e) {
						return null;
					}
				}
			}	
		},
		'json':{
			'toString':function(o){
				if (window.JSON){
					return JSON.stringify(o);
				}
			
				var arr = [],
					format = function(s){
						if (typeof s === "object" && s !== null){
							if (s.length){
								var sarr = [];
								for(var j=0,jk=s.length;j<jk;j++){
									sarr.push(format(s[j]));
								}
								return "["+sarr.join(",")+"]";
							}
							return common.json.toString(s);
						}else if(typeof s === "string"){
							return '"'+s+'"';
						}else if(typeof s === "number"){
							return s;
						}else{
							return s;
						}
					};
				for(var i in o){
					arr.push(['"'+i+'"',format(o[i])].join(":"));
				}
				return "{"+arr.join(",")+"}";
			}	
		},
		'http':{
			'post':function(data,succ,err){
				$.ajax({
					'url':'/postCenter.js',
					'data':data,
					'dataType':'text',
					'type':'post',
					'success':function(text){
						succ(common.string.parseJSON(text));
					},
					'error':err || function(){}
				});
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
			var h = $('#bottom').offset().top;
			if (window !== parent){
				frameElement.height = h;
				common.postMessage({"action":"resize","data":{"height":h}});
			}else if(window.frameElement){
				frameElement.height = h;
				common.postMessage({"action":"resize","data":{"height":h}});
			}
		},
		'init':function(){
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
		},
		'action':{
		},
		'component':{
			'checkbox':{
				'onChange':function(target){
					if (target.is(':checked')){
						target.parent().addClass('form-check-checked');
					}else{
						target.parent().removeClass('form-check-checked');
					}
				},
				'setValue':function(value){
					var target = $(this);
					console.log(value);
					if (value === true || value === target.attr('data-checked')){
						target.attr('checked','checked');
						target.parent().addClass('form-check-checked');
					}else{
						target.removeAttr('checked');
						target.parent().removeClass('form-check-checked');
					}
				}
			},
			'selector':{
				'initEvent':function(){
					var selector = $(this),
						input = selector.find('input'),
						opts = selector.find('.form-select-opts');
					input.bind('focus',function(){
						if (selector.hasClass('disabled')){
							return false;
						}
						selector.addClass('focus');
					});
					
					opts.bind({
						'mouseover':function(event){
							var target = event.target;
							$(target).addClass('active').siblings().removeClass('active');	
						},
						'click':function(event){
							var target = event.target,
								jtarget = $(target);
							input.val(jtarget.text());
							selector.removeClass('focus');
						}
					});
				}
			}
		}
	};
	$('body').bind('click',function(event){
		var target = event.target,
			jtarget = $(target),
			action = jtarget.attr('data-action');
		if (action && common.action[action]){
			common.action[action](event,jtarget);
		}else if(target.tagName === 'INPUT' && target.type === 'checkbox'){
			common.component.checkbox.onChange(jtarget);
		}else if(target.tagName !== 'INPUT' && !jtarget.parent().hasClass('form-select')){
			
		}
	});
	
	common.init();
	window.common = $.extend(window.common,common);
});