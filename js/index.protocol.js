//首页第二屏
(function(){
	var basePath = 'http://192.168.111.1:9999/',
		api = {
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
				'statusId':36,
				'routerId':'xxhhll'
			}
		},
		'setDeviceSpeedLimit':{
			'name':'获取连接到本路由器上的设备',
			'url':'setdevicespeedlimit',
			'method':'post',
			'paras':{
				//'routerId':'xxhhll'
			}
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
				actionName = 'callback_'+(+new Date()),
				url = basePath+cgi.url;
				data = data || {};
			if (callback && callback.success){
				cgi.paras = $.extend(cgi.paras || {},{'action':actionName});
				common[actionName] = callback.success;
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
				console.log(data);
				for(var i in data){
					p.push('<textarea class="none" name="'+i+'">'+data[i]+'</textarea>');
				}
			}
			postForm.html(p.join(''));
			postForm[0].action = url;
			postForm[0].target = 'postFrame';
			postForm[0].method = cgi.method || 'post';
			console.log(postForm[0].outerHTML);
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
		}
	};
	//basePath = 'http://' + location.hostname + ':9999/'
	common.protocol = $.extend(common.protocol,request);
	
	var onMessage = function(d){
		var data;
			if (!(common && common.string && common.string.toJSON)){
				return;
			}
			
			data = common.string.toJSON(d);
			
			if (data.action){
				var actionName = data.action;
				delete data.action;
				common[actionName](data);
				//common[actionName] = null;
				//delete common[actionName];
			}
		};

	if (window.postMessage){
			if (window.addEventListener){
				window.addEventListener('message',function(event){
					onMessage(event.data);
				});
			}else{
				window.attachEvent('onmessage',function(event){
					onMessage(event.data);
				});
			}
	}else{
		setInterval(function(){
			var name = window.name;
			onMessage(name);
		},2000);
	}
	
	
})();