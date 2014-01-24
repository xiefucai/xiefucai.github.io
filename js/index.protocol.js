(function(common){
	var basePath = 'http://' + location.hostname + ':9999/',
		api = {
		'getAp':{
			'name':'获取路由器设备信息',
			'url':'getap',
			'method':'post',
			'paras':{}
		},
		'getRouterList':{
			'name': '获取路由设备',
			'url': 'getrouterlist',
			'method': 'get',
			'paras':{}
		},
		'getDeviceList':{
			'name':'获取连接到本路由器上的设备',
			'url':'getstatus',
			'method':'get',
			'paras':{
				'statusId':36
			}
		},
		'getWifiState':{
			'name':'获取wifi启用状态',
			'url':'getstatus',
			'method':'get',
			'paras':{
				'statusId':37
			}
		},
		'getWifiStrength':{
			'name':'获取wifi强度',
			'url':'getstatus',
			'method':'get',
			'paras':{
				'statusId':39
			}
		},
		'setWifiStrength':{
			'name':'设置wifi强度',
			'url':'getstatus',
			'method':'post',
			'paras':{
				'statusId':39
			}
		},
		'setDeviceSpeedLimit':{
			'name':'限制上网设备的上下行网速',
			'url':'setdevicespeedlimit',
			'method':'post',
			'paras':{}
		},
		'breakDevices':{
			'name':'踢设备',
			'url':'breakdevice',
			'method':'post',
			'paras':{}
		},
		'getConnectionSettings':{
			'name':'获取路由器远程链接情况',
			'url':'getconnectionsettings',
			'method':'get',
			'paras':{}
		}
	},
	postFrame = $('<iframe width="10" height="10" frameborder="0" class="postFrame" id="postFrame" name="postFrame"></iframe>').appendTo($('body')),
	postForm = $('<form class="postForm"></form>').appendTo($('body')),
	request = {
		'config':{
			'host':'/',
			'paras':{
				'cv':'',				//客户端版本名称，如 1.0.101， 1.2.32
				'cvc':'',				//客户端版本号，int类型，随版本迭代而递增。
				'ov':'',				//操作系统版本号
				'device':'',			//客户端设备品牌型号
				'imei':'',				//客户端设备唯一标识(IMEI号等）
				'pdtid':3,				//客户端的产品ID
				'routerid':'',			//路由器ID
				'uid':'141734790'		//迅雷帐号ID
			},
			'api':api
		},
		'getRouterData':function(data,fun){
			$.ajax({
				'url':'/dataCenter.js',
				'data':data,
				'type':'get',
				'dataType':'text',
				'success':function(s){
					try {
						eval('window.__json__=' + s);
						fun(window.__json__);
					} catch(e) {
						fun(null);
					}
				}
			});	
		},
		'getRemoteData':function(name,data,callback){
			var p = [],
				cgi = api[name],
				actionName = name,
				url = basePath+cgi.url;
				data = data || {};
			if (callback){
				cgi.paras = $.extend(cgi.paras || {},{'action':actionName});
				if (callback.success){
					common.callback.success[actionName] = callback.success;
				}
				if (callback.error){
					common.callback.error[actionName] = callback.error;
				}
			}
			if (cgi.method === 'get'){
				data = $.extend(data,cgi.paras);
				data = $.extend(data,request.config.paras);
				for(var i in data){
					p.push('<textarea class="none" name="'+i+'">'+data[i]+'</textarea>');
				}
				p.push('<input type="hidden" name="t" value="'+(+new Date())+'"/>');
			}else if(cgi.method === 'post'){
				url = [url,$.param($.extend(cgi.paras,request.config.paras))].join('?');
				p.push('<textarea class="none" name="data">'+common.json.toString(data)+'</textarea>');
			}
			postFrame.attr('data-actid',actionName).removeAttr('data-loaded');
			postForm.html(p.join(''));
			postForm[0].action = url;
			postForm[0].target = 'postFrame';
			postForm[0].method = cgi.method || 'post';
			postForm[0].submit();
		},
		'build':function(name,data,succ,err){
			var conf = request.config.api[name];
			if (conf){
				$.ajax({
					'url':conf.url,
					'method':conf.method || 'get',
					'data':$.extend($.extend(request.config.paras,conf.paras),data || {}),
					'success':succ || function(){},
					'error':err || function(){}
				});
			}else{
				alert('请求地址：' + name + '还未配置');
			}
		},
		'onMessage':function(d){
			var data;
			postFrame.attr('data-loaded',1);
			if (!(common && common.string && common.string.toJSON)){
				console.log('未引入common.string.toJSON',location.href);
				return;
			}
			
			data = common.string.toJSON(d);
			if (data.action){
				var actionName = data.action;
				delete data.action;
				if (common.callback.success[actionName]){
					common.callback.success[actionName](data);
				}else{
					console.log('not exists common.callback.success.'+actionName,location.href);
				}
			}
		},
		'stopLoop':function(){
			postFrame.attr('src','about:blank');
		}
	};
	
	if (window.postMessage){
			if (window.addEventListener){
				window.addEventListener('message',function(event){
					request.onMessage(event.data);
				});
			}else{
				window.attachEvent('onmessage',function(event){
					request.onMessage(event.data);
				});
			}
	}else{
		setInterval(function(){
			var name = window.name;
			request.onMessage(name);
		},2000);
	}
	
	(function(s,f){
		s.onload = f;
		s.onreadystatechange = function(){
			if (s.readyState === 'complete'){
				f();
			}
		}
	})(postFrame[0],function(){
		setTimeout(function(){
			var callback = common.callback.error,
				action = postFrame.attr('data-actid');
			if (!postFrame.attr('data-loaded') && callback && action){
				callback[action]();
			}
		},100);
	});
	
	$.extend(common,{
		'callback':{'success':{
			'resize':function(){}	
		},'error':{}},
		'protocol':request
	});
})(window.common);