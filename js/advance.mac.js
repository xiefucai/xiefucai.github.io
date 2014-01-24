$(function(){
	var jform= $('#form'),
		form = jform[0],
		srcData = {},
		dialog = common.dialog(),
		maclist = $('#maclist'),
		selector = $(form['selector']),
		extendCommon = function(){
			$.extend(window.common.action,{
				'postForm':function(event,t){
					var form = t[0].form;
					var postVar = {'action':'Apply'};
					var postData = {};
					if (!srcData.wan0_hwaddr){
						dialog.alert('未能获取路由器的MAC信息，保存失败！');
						return;
					}
					if (srcData.wan0_hwaddr.toUpperCase() !== form['mac'].value){
						postData['mode'] = 'WAN_MAC';
						postData['getPage'] = 'restarting.html';
						postData['apply_wait_time'] = 2;
						postData['_flg'] = 0;
						postData['wan0_hwaddr'] = form['mac'].value;
						t.addClass('form-loading');
						common.http.post($.extend(postVar,postData),function(data){
							common.http.success.call(t,dialog,data,postData['apply_wait_time']);
						});
					}else{
						//不需要保存，因为没有修改
						dialog.alert('没有修改，不需要保存！');
					}
				}
			});
		};
	
	selector.bind({'change':function(){
		var type = +$(this).attr('data-value');
		if (type === 2){
			$('#custom').removeClass('none');
		}else{
			$('#custom').addClass('none');
		}
		form['mac'].value = maclist.find('span[data-value="'+type+'"]').attr('data-mac');
	}});
	
	$.extend(window.common,{
		'init':function(){
			$.getJSON('/dataCenter.js', {
				wan0_hwaddr:'',
				vlan2_hwaddr:'',
				pc_login_macaddr:'gval'
			},function(json){
				srcData = json;
				var list = [
					'<span class="active" data-mac="'+json['wan0_hwaddr']+'" data-value="0">默认</span>',
					'<span data-mac="'+json['pc_login_macaddr']+'" data-value="1">复制'+json['vlan2_hwaddr']+'</span>',
					'<span data-mac="'+json['wan0_hwaddr']+'" data-value="2">手动</span>',
				];
				selector.parent().removeClass('disabled');
				maclist.html(list.join(''));
			});
		},
		'tip':{
			'selector':'== 修改路由器的MAC地址为 == 1) 路由器的默认MAC地址\n2) 正在访问本网页的上网设备的MAC地址\n3) 手动配置的MAC地址\n***建议使用路由器的默认配置，不要修改***'
		}
	});
		
	$.getScript('/js/advance.base.js',extendCommon);
});