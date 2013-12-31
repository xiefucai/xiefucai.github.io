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
			'host':'http://192.168.90.217:6171/',
			'paras':{
				'cv':'xxx',				//客户端版本名称，如 1.0.101， 1.2.32
				'cvc':'xxx',			//客户端版本号，int类型，随版本迭代而递增。
				'ov':'xxx',				//操作系统版本号
				'device':'xxx',			//客户端设备品牌型号
				'imei':'xxx',			//客户端设备唯一标识(IMEI号等）
				'pdtid':3,				//客户端的产品ID
				'routerid':'xxx',		//路由器ID
				'uid':'1'		//迅雷帐号ID
			},
			'api':api
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