$(function(){
	var jform = $('#form'),
		form = jform[0],
		postVar = {action:"Apply",mode:"LANDHCP",getPage:"lan_set.html"},
		srcData = {},
		dialog = common.dialog(),
		showDhcpList = function(list){
			var arr = [],
				table = $('#dhcp-list');
			if (list.length && list[0]){
				for(var i=0,k=list.length;i<k;i++){
					arr.push(
						['<tr>',
							'<td>'+list[i].replace(/</g,'</td><td>')+'</td>',
							'<td align="center">',
								'<a href="javascript:;" data-action="removeDhcp">删除</a> ',
								'<a href="javascript:;" data-action="editDhcp">编辑</a>',
							'</td>',
						'</tr>'].join(''));
				}
				table.html(arr.join(''));
			}else{
				table.html('<tr><td colspan="4">尚未添加DHCP设备</td></tr>');
			}
		};
	
	$(form['lan_proto']).bind('change',function(){
		if ($(this).is(':checked')){
			$('#dhcp-config').removeClass('none');
		}else{
			$('#dhcp-config').addClass('none');
		}
		common.resize();
	});
	
	$.getJSON('/dataCenter.js', {
		'lan_ipaddr':'',
		'lan_netmask':'',
		'lan_proto':'',
		'dhcp_start':'',
		'dhcp_end':'',
		'lan_lease':'',				
		'lan_domain':'',
		'lan_reserve_config':'',
		'wl0_wds_enable':'',
		'wl1_wds_enable':'',
		'wl0_wdsmode':'',
		'wl1_wdsmode':''
	},function(json){
		var input;
		srcData = json;
		for(var i in json){
			input = $(form[i]);
			if (input.hasClass('form-text') || input.attr('type') === 'hidden'){
				input.val(json[i]);
			}else if(input.attr('type') === 'checkbox'){
				common.component.checkbox.setValue.call(input[0],json[i]);
			}
		}
		showDhcpList(json.lan_reserve_config.split('>'));
	});
		
	$.extend(common.action,{
		'addDhcpDevice':function(event,t){
			var frame = $('#dhcpFrame');
			if (frame.length === 0){
				frame = $('<div id="dhcpFrame" class="popframe none"><iframe frameborder="0" width="100%" height="100%"></iframe></div>').appendTo($('body'));
			}
			frame.css({
				'top':t.offset().top+t.height()+1
			}).removeClass('none')
			.find('iframe')
			.attr('src','advance.router.dhcp.html?t='+(+new Date()));
		},
		'removeDhcp':function(event,t){
			var postVar={'action':'Apply','mode':'LAN_RESERVE_IP','getPage':'lan_set.html'},
				postData = {},
				list = srcData.lan_reserve_config.split('>'),
				mac = t.parent().parent().find('td:eq(1)').text();
			;
			for(var i=0,k=list.length;i<k;i++){
				if (list[i].indexOf(mac)>-1){
					list.splice(i,1);
					break;
				}
			}
			
			postData['lan_reserve_config']=list.join('>');
			common.http.post($.extend(postVar,postData),function(data){
				var code = +data.result;
				if (common.http.response[code]){
					common.http.response[code](data);
				}else if(code === 0){
					location.reload();
				}
			});
		},
		'editDhcp':function(event,t){console.log(111);
			var list = srcData.lan_reserve_config.split('>'),
				mac = t.parent().parent().find('td:eq(1)').text(),
				postData = {},
				index = 0,
				postVar = {
					'getPage':'lan_reserv_add.html',
					'action':'Apply',
					'mode':'ADDPARAMODE',
					'_flg':0
				};
				console.log(list,mac);
				for(var i=0,k=list.length;i<k;i++){
					if (list[i].indexOf(mac)>-1){
						index = i;
						break;
					}
				};
				postData['nodeIndex0'] = index;
				
			common.http.post($.extend(postVar,postData),function(data){
				var code = +data.result;
				if (common.http.response[code]){
					common.http.response[code](data);
				}else if(code === 0){
					common.action.addDhcpDevice(null,$('.form-addbtn'));
				}
			});
		},
		'postForm':function(event,t){
			var form = t[0].form;
			var ipaddr = form['lan_ipaddr'].value;
			var netmask= form['lan_netmask'].value;
			var dhcp_start= form['dhcp_start'].value;
			var dhcp_end = form['dhcp_end'].value;
			var leaseTime = Number($(form['lan_lease']).attr('data-value'));
			var postData = {
				'apply_wait_time':[30,5][+(srcData.lan_ipaddr === ipaddr)],
				'lan_proto':['static','dhcp'][+(form['lan_proto'].checked)],
				'lan_ipaddr':ipaddr,
				'lan_netmask':netmask,
				'dhcp_start':dhcp_start,
				'dhcp_end':dhcp_end,
				'lan_lease':leaseTime,
				'lan1_lease':leaseTime,
				'lan_domain':form['lan_domain'].value || 'peiluyou.com',
				'lan1_domain':form['lan_domain'].value || 'peiluyou.com',
				'lan_backupip':ipaddr,
				'lan_backupnetmask':netmask
			};
			t.addClass('form-loading');
			common.http.post($.extend(postVar,postData),function(data){
				common.http.success.call(t,dialog,data,postData['apply_wait_time']);
			});
		}
	});
	
	$.extend(window.common,{'tip':{
		'lan_proto':'== DHCP服务 == 为使用此路由器上网的设备分配IP地址'	
	}});
});