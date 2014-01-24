$(function(){
	var myjson,
		dialog = common.dialog(),
		jform = $('#form'),
		form = jform[0],
		extendCommon = function(){
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
						if (myjson.nodeIndex0 == '') {
							if (myjson.lan_reserve_config != '') {
								if (myjson.lan_reserve_config.indexOf('<'+$('#form_mac').text()+'<')>-1){
									alert('已存在，不需要重复添加');
									return;
								}else{
									add_rev_info = myjson.lan_reserve_config + '>' + add_rev_info;
								}
							}
						} else {
							if (nodeindex >= 0) {
								var rules = myjson.lan_reserve_config.split('>');
								rules.splice(nodeindex,1,add_rev_info);
								add_rev_info = rules.join('>')
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
			common.resize();
			parent.common.resize();
		};
	$.extend(window.common,{
		'init':function(){
			$.getJSON('/dataCenter.js', {
				lan_reserve_config: '',
				nodeIndex0: ''
			},
			function(json) {
				myjson = json,
				index = parseInt(json.nodeIndex0,10),
				editItem = {};
				if (json.nodeIndex0 != '') {
					$('#table1').addClass('none');
					editItem = myjson.lan_reserve_config.split('>').slice(index,index+1)[0].split('<');
					$('#form_ip').html(editItem[0]);
					$('#form_mac').html(editItem[1]);
					$('#form_host').html(editItem[2]);
				} else {
					$('#td_reseverlist_show').show();
					$.getJSON('/dataCenter.js', {
						'/tmp/udhcpd_json.leases': 'file'
					},
					function(json) {
						var DhcpList = [];
						var hostName;
						var m = 1;
						$.each(json,
						function(i, n) {
							var disabled = (myjson.lan_reserve_config.indexOf('<'+n.lan_dhcp_macaddr+'<')>-1),
								s = '';
							hostName = strAnsi2Unicode(Base64.Decode(n.lan_dhcp_hostname));
							DhcpList.push([
								'<tr'+(disabled?' class="disabled gray"':'')+'>',
									'<td align="center"'+(disabled?' title="已添加"':'')+'>',
										'<input type="radio" name="device" data-action="select" id="device_'+m+'" '+(disabled?' disabled':'')+'/>',
										'<label for="device_'+m+'" data-type="ip">',n.lan_dhcp_ipaddr,'</label>',
									'</td>',
									'<td align="center"><label for="device_'+m+'" data-type="mac">',n.lan_dhcp_macaddr,'</label></td>',
									'<td align="left"><label for="device_'+m+'" data-type="host">',hostName,'</label></td>',
								'</tr>'
							].join(''));
							m++;
						});
						$('#dhcp-list').html(DhcpList.join(''));
						common.resize();
						parent.common.resize();
					});
				}
			});
		}
	});
	$.getScript('/js/advance.base.js',extendCommon);
})