$(function(){
	var myjson,
		dialog = common.dialog(),
		jform = $('#form'),
		form = jform[0];
	
	$.extend(common.action,{
		'select':function(event,t){
			var tr = t.parent().parent();
			$('#form_ip').html(tr.find('label[data-type="ip"]').text());
			$('#form_host').html(tr.find('label[data-type="host"]').text());
			$('#form_mac').html(tr.find('label[data-type="mac"]').text());
		},
		'addDevice':function(event,t){
			var postVar={'action':'Apply','mode':'LAN_RESERVE_IP','getPage':'lan_set.html'},
				postData = {},
				add_rev_info = [$('#form_ip').text(),$('#form_mac').text(),$('#form_host').text()].join('<'),
				//nodeIndex0 表示修改项的索引，当新增的时候这的值为空
				nodeindex=parseInt(myjson.nodeIndex0); 
				if (myjson.nodeIndex0 == "") {
					if (myjson.lan_reserve_config != "") {
						if (myjson.lan_reserve_config.indexOf('<'+$('#form_mac').text()+'<')>-1){
							alert('已存在，不需要重复添加');
							return;
						}else{
							add_rev_info = myjson.lan_reserve_config + ">" + add_rev_info;
						}
					}
				} else {
					if (nodeindex >= 0) {
						var rules = myjson.lan_reserve_config.split('>');
						console.log(rules,nodeindex,add_rev_info);
						rules.splice(nodeindex,1,add_rev_info);
						add_rev_info = rules.join('>')
						console.log(add_rev_info);
					}
				}
				
				postData['lan_reserve_config']=add_rev_info;
				
				t.addClass('form-loading');
				common.http.post($.extend(postVar,postData),function(data){
					common.http.success.call(t,dialog,data,postData['apply_wait_time'],function(){
						parent.location.reload();
					});
				});
		},
		'cancel':function(event,t){
			parent.$(frameElement.parentNode).addClass('none');
		}
	});
	
	common.protocol.getRemoteData('getDeviceList',{});
	
	$.getJSON('/dataCenter.js', {
		lan_reserve_config: ''
	},
	function(json) {
		myjson = json;
		editItem = {};
		$('#td_reseverlist_show').show();
		$.getJSON('/dataCenter.js', {
			'/tmp/udhcpd_json.leases': 'file'
		},
		function(json) {console.log(json);
			var DhcpList = [];
			var hostName;
			var m = 1;
			var type = {'WIRE':'有线','WIRELESS':'WIFI'};
			$.each(json,
			function(i, n) {
				var disabled = (myjson.lan_reserve_config.indexOf('<'+n.lan_dhcp_macaddr+'<')>-1),
					s = '';
				hostName = strAnsi2Unicode(Base64.Decode(n.lan_dhcp_hostname));
				DhcpList.push([
				'<tr>',
					'<td align="center">',
					type[n['lan_dhcp_interface'].toUpperCase()],
					'</td>',
					'<td align="center"><span>',
					n['lan_dhcp_macaddr'].toUpperCase(),
					'</span></td>',
					'<td align="center">',
					n['lan_dhcp_ipaddr'].toUpperCase(),
					'</td>',
					'<td align="center">',
					strAnsi2Unicode(Base64.Decode(n['lan_dhcp_hostname'])),
					'<a href="javascript:;" class="none">改名</a>',
					'</td>',
					'<td align="center">',
					n['lan_dhcp_interface'].toUpperCase(),
					'</td>',
					'<td align="center">',
					n['lan_dhcp_interface'].toUpperCase(),
					'</td>',
					'<td align="center">',
					'<a href="javascript:;">断开</a>',
					'</td>',
				'</tr>'].join(''));
				m++;
			});
			$('#device-list').html(DhcpList.join(''));
			common.resize();
		});
	});
	common.resize();
})