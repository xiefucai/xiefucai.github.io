$(function(){
	var jform = $('#form'),
		form = jform[0],
		dialog = common.dialog(),
		disabled = false,
		srcData = {};
	
	$(form['selector']).bind('change',function(){
		var i = $(this).attr('data-value');
		$('#form-0,#form-1,#form-2').addClass('none');
		$('#form-'+i).removeClass('none');
	});
	
	$('input[name="nvfile"]').bind('change',function(){
		var t= $(this),
			val = t.val();console.log(val);
		t.parent().prev('.form-label').html(val);
	});
	
	$.extend(common,{
		'init':function(){
			
		},
		'tip':{
			'restore':'== 恢复说明 == 恢复出厂设置：<br/>将所有设置信息恢复到路由器出厂状态<br/>备份当前设置：<br/>将所有设置信息保存到本地<br/>从文件恢复设置：<br/>上传你备份到本地的设置信息文件进行恢复'
		}
	});
	
	$.getScript('/js/advance.base.js',function(){
		$.extend(common.action,{
			'postForm0':function(event,t){
				var f = t[0].form;
				dialog.confirm('是否确定恢复出厂设置？',function(){
					t.val('正在恢复...').addClass('form-loading');
					common.http.post({
						'action':'Apply',
						'mode':'RESTORE',
						'restore_defaults':'1'
					},function(data){
						var code = +data.result;
						t.val('恢复出厂设置').removeClass('form-loading');
						if (code === 0){
							dialog.alert('已经恢复出厂设置，请用有线设备连接路由器配置网络连接！');
						}else{
							
						}
					},function(){
						dialog.alert('网络连接失败');
					});
				});
			},
			'postForm2':function(event,t){
				var f = t[0].form,
					file = f['nvfile'];
				if (!file.value){
					dialog.alert('请从本地上传备份的配置文件');
					return;
				}
				dialog.confirm({'text':'恢复配置后路由器会重新启动，网络断开后请手动连接网络','height':180},function(){
					t.val('正在恢复...').addClass('form-loading');
					f.submit();
					setTimeout(function(){
						dialog.alert('已经恢复',function(){
							location.reload();
						});
					},10000);
				});
			}
		});
	});
});