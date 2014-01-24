$(function(){
	var jform = $('#form'),
		form = jform[0],
		dialog = common.dialog(),
		postVar = {
			'action':'Apply',
			'getPage':'ut_system_set.html',
			'mode':'AUTH',
			'auth_action':'modifypassword',
			'sessiontimeout':5940,
			'apply_wait_time':10
		},		
		disabled = false;

	$.extend(common,{
		'init':function(){
			
		},
		'tip':{
			'mtu':'== MTU设置 == 当使用宽带拨号方式连接互联网的时候才能进行MTU设置'	
		}
	});
	
	$.getScript('/js/advance.base.js',function(){
		$.extend(common.action,{
			'setDefaultVal':function(event,t){
				if (disabled){
					return;
				}
				form['mtu'].value = defaultValue[srcData['wan0_proto']];
			},
			'postForm':function(event,t){
				var form = t[0].form,
					pasw = $.trim(form['pasw'].value).replace(/\s/g,'@'),
					pasw2 = $.trim(form['pasw2'].value).replace(/\s/g,'@'),
					postData = {
						'oldpasswd':Base64.Encode(pasw),
						'newpasswd':Base64.Encode(pasw2),
						'newconfirmpasswd':Base64.Encode(pasw2),
					};
					
				if (disabled){
					return;
				}else if(pasw ===''){
					dialog.alert('请输入路由器密码(旧)');
					return;
				}else if(pasw2 === ''){
					dialog.alert('请输入路由器密码(新)');
					return;
				}else if(pasw === pasw2){
					dialog.alert('路由器密码(旧)和路由器密码(新)不能一样');
					return;
				}
				t.addClass('form-loading');
				common.http.post($.extend(postVar,postData),function(data){
					common.http.success.call(t,dialog,data,postData['apply_wait_time'],null,function(code){
							if (data.result = 2004){
								dialog.alert('保存失败，路由器的旧密码输入错误');
							}
					});
				});
			}
		});
	});
});