$(function(){
	var jform = $('#form'),
		form = jform[0],
		postVar = {action:"Apply",mode:"UPNP",getPage:"upnp.html"},
		srcData = {},
		setFormValue = function(name,value){
			if (form[name]){
				form[name].value = value;
			}
		},
		getFormValue = function(name,value){
			if (form[name]){
				return form[name].value;
			}else{
				return value || '';
			}
		},
		setSelectorValue = function(name,value){
			if (form[name]){
				common.component.selector.setValue.call(form[name],value);
			}
		},
		setCheckBoxValue = function(name,value){
			if (form[name]){
				common.component.checkbox.setValue.call(form[name],value);
			}
		},
		getUpnpList = function(){
			$.getJSON('/dataCenter.js', {'/var/portmapinfo_json.txt':'file'},function(json){
				var UpnpList = [];	
				$.each(json, function(i,n){
					if(n.action!= undefined){
						UpnpList.push([
							'<tr>',
								'<td>'+n.desc+'</td>',
								'<td>'+n.extport+'</td>',
								'<td>'+n.protocol+'</td>',
								'<td>'+n.interport+'</td>',
								'<td>'+n.ip+'</td>',
							'</tr>'
						].join(''));
					}
				});
				if (!UpnpList.length){
					UpnpList.push('<tr><td colspan="5">暂无数据！</td></tr>');
				}
				$('#upnp-list').html(UpnpList.join(''));
			});
		};
	
	$.getJSON("/dataCenter.js", {
		'upnp_enable': '',
		'upnp_advertisement_period': '',
		'upnp_advertisement_ttl': '',
		'spi_firewall_enable': ''
	},function(json){console.log(json);
		var input;
		srcData = json;
		setCheckBoxValue('upnp_enable',+json['upnp_enable']);
		setFormValue('advertisement_period',json['upnp_advertisement_period']);
		setFormValue('advertisement_ttl',json['upnp_advertisement_ttl']);
		getUpnpList();
	});
		
	$.extend(common.action,{
		'postForm':function(event,t){
			var form = t[0].form;
			var postData = {
				'upnp_enable': +form['upnp_enable'].checked,
				'upnp_advertisement_period': getFormValue('advertisement_period',30),
				'upnp_advertisement_ttl': getFormValue('advertisement_ttl',4)
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