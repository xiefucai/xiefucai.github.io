//首页第二屏
(function(){
	var api = {
		'getRouterList':{
			'name': '获取路由设备',
			'url': 'getrouterlist',
			'method': 'get',
			'paras':{}
		}
	},
	request = {
		'config':{
			'host':'/',
			'paras':{
				'cv':'1.0.0',				//客户端版本名称，如 1.0.101， 1.2.32
				'cvc':'1.0.0',			//客户端版本号，int类型，随版本迭代而递增。
				'ov':'1.0.0',				//操作系统版本号
				'device':'',			//客户端设备品牌型号
				'imei':'',			//客户端设备唯一标识(IMEI号等）
				'pdtid':3,				//客户端的产品ID
				'routerid':'',		//路由器ID
				'uid':'1'				//迅雷帐号ID
			},
			'api':api
		},
		'getRouterData':function(data){
			$.getJSON('/dataCenter.js',data,function(s){
				try {
					eval('window.__json__=' + s);
					return window.__json__;
				} catch(e) {
					return null;
				}
			});	
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