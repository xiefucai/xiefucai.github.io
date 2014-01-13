$(function(){
	var jform = $('#form'),
		form = jform[0],
		postVar = {
			'action':'Apply',
			'getPage':'deviceinfo.html',
			'image_id':'img1',
			'ul_id':1,
			'src_id':'lang_adsl',
			'dest_id':'lang_routerstatus'
		},
		disabled = false,
		srcData = {},
		defaultValue = {
			'pppoe':1480,
			'pptp':1436,
			'l2tp':1430
		};
	$.getJSON('/dataCenter.js', {
		wan0_proto:'',
		wan0_pppoe_mtu:'',
		wan0_pptp_mtu:'',
		wan0_l2tp_mtu:''
	},function(json){
		var proto = json.wan0_proto;// 使用的哪种网络连接方式
			srcData = json;
			form['mtu'].value = json['wan0_'+proto+'_mtu'] || '';
		if (!defaultValue[json.wan0_proto]){
			$(form['mtu']).attr('disabled','disabled');
			disabled = true;
		}
		console.log(json);
	});
	
	$.extend(common.action,{
		'setDefaultVal':function(event,t){
			if (disabled){
				return;
			}
			form['mtu'].value = defaultValue[srcData['wan0_proto']];
		},
		'postForm':function(event,t){
			var postData = {};
			if (disabled){
				return;
			}
			postData['mode'] = srcData.wan0_proto.toUpperCase();
			postData['wan0_'+srcData['wan0_proto']+'_mtu'] = form['mtu'].value;
			
			common.http.post($.extend(postVar,postData),function(data){
				var code = data.result;
				if (common.http.response[code]){
					common.http.response[code](data);
				}else{
					
				}
			});
		}
	});
	
	$.extend(window.common,{'tip':{
		'mtu':'== MTU设置 == 当使用宽带拨号方式连接互联网的时候才能进行MTU设置'	
	}});
});