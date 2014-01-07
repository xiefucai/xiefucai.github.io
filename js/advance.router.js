$(function(){
	var jform = $('#form'),
		form = jform[0],
		postVar = {action:"Apply",mode:"LANDHCP",getPage:"lan_set.html"},
		srcData = {};
	
	$.getJSON("/dataCenter.js", {
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
	});
		
	$.extend(common.action,{
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
			common.http.post($.extend(postVar,postData),function(data){
				var code = data.result;
				if (common.http.response[code]){
					common.http.response[code](data);
				}else{
					
				}
			});
		}
	});
});