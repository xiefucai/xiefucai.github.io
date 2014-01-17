//首页第二屏
(function(){
	var basePath = 'http://192.168.1.1:9999/',
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
				'statusid':36,
				'routerid':'xxhhll'
			}
		}
	},
	postFrame = $('<iframe width="10" height="10" frameborder="0" class="postFrame" id="postFrame" name="postFrame"></iframe>').appendTo($('body')),
	postForm = $('<form class="postForm"></form>').appendTo($('body')),
	request = {
		'config':{
			'host':'/',
			'paras':{
				'cv':'101',				//客户端版本名称，如 1.0.101， 1.2.32
				'cvc':'101',			//客户端版本号，int类型，随版本迭代而递增。
				'ov':'23',				//操作系统版本号
				'device':'huaweiske',			//客户端设备品牌型号
				'imei':'28383882',			//客户端设备唯一标识(IMEI号等）
				'pdtid':3,				//客户端的产品ID
				'routerid':'',		//路由器ID
				'uid':'141734790'				//迅雷帐号ID
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
		'getRemoteData':function(name,data){
			var p = [],
				cgi = api[name];
			data = data || {};
			data = $.extend(data,cgi.paras);
			data = $.extend(data,request.config.paras);
			for(var i in data){
				p.push('<input type="hidden" name="'+i+'" value="'+data[i]+'"/>');
			}
			postForm.html(p.join(''));
			postForm[0].action = basePath+cgi.url;
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
		}
	};
	
	common.protocol = $.extend(common.protocol,request);
})();