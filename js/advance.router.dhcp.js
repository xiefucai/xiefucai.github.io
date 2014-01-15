$(function(){
	var myjson,
		dialog = common.dialog(),
		jform = $('#form'),
		form = jform[0];
	var strAnsi2Unicode = function(asContents) {
		var len1 = asContents.length;
		var temp = "";
		var chrcode;
		for (var i = 0; i < len1; i++) {
			var varasc = asContents.charCodeAt(i);
			if (varasc > 127) {
				chrcode = AnsiToUnicode((varasc << 8) + asContents.charCodeAt(++i));
			}
			else {
				chrcode = varasc;
			}
			temp += String.fromCharCode(chrcode);
		}
		return temp;
	};
	
	var Base64 = {
		keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

		//将Ansi编码的字符串进行Base64编码
		Encode: function(input) {
			var output = "";
			var chr1, chr2, chr3 = "";
			var enc1, enc2, enc3, enc4 = "";
			var i = 0;
			do {
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);

				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;

				if (isNaN(chr2)) enc3 = enc4 = 64;
				else if (isNaN(chr3)) enc4 = 64;

				output = output + this.keyStr.charAt(enc1) + this.keyStr.charAt(enc2) + this.keyStr.charAt(enc3) + this.keyStr.charAt(enc4);
				chr1 = chr2 = chr3 = "";
				enc1 = enc2 = enc3 = enc4 = "";
			} while ( i < input . length );

			return output;
		},

		//将Base64编码字符串转换成Ansi编码的字符串
		Decode: function(input) {
			var output = "";
			var chr1, chr2, chr3 = "";
			var enc1, enc2, enc3, enc4 = "";
			var i = 0;
			if (input.length % 4 != 0) return "";

			var base64test = /[^A-Za-z0-9\+\/\=]/g;
			if (base64test.exec(input)) return "";

			do {
				enc1 = this.keyStr.indexOf(input.charAt(i++));
				enc2 = this.keyStr.indexOf(input.charAt(i++));
				enc3 = this.keyStr.indexOf(input.charAt(i++));
				enc4 = this.keyStr.indexOf(input.charAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output = output + String.fromCharCode(chr1);

				if (enc3 != 64) output += String.fromCharCode(chr2);
				if (enc4 != 64) output += String.fromCharCode(chr3);

				chr1 = chr2 = chr3 = "";
				enc1 = enc2 = enc3 = enc4 = "";
			} while ( i < input . length );

			return output;
		}
	};
	
	$.getJSON("/dataCenter.js", {
		lan_reserve_config: "",
		nodeIndex0: ""
	},
	function(json) {
		myjson = json,
		index = parseInt(json.nodeIndex0,10),
		editItem = {};
		if (json.nodeIndex0 != "") {
			$('#table1').addClass('none');
			editItem = myjson.lan_reserve_config.split('>').slice(index,index+1)[0].split('<');
			console.log(editItem);
			$('#form_ip').html(editItem[0]);
			$('#form_mac').html(editItem[1]);
			$('#form_host').html(editItem[2]);
		} else {
			$("#td_reseverlist_show").show();
			$.getJSON("/dataCenter.js", {
				'/tmp/udhcpd_json.leases': 'file'
			},
			function(json) {
				var DhcpList = [];
				var hostName;
				var m = 1;console.log("aaaa",json);
				$.each(json,
				function(i, n) {
					var disabled = (myjson.lan_reserve_config.indexOf('<'+n.lan_dhcp_macaddr+'<')>-1),
						s = '';
					hostName = strAnsi2Unicode(Base64.Decode(n.lan_dhcp_hostname));
					DhcpList.push([
						'<tr'+(disabled?' class="disabled gray"':'')+'>',
							'<td align="center">',
								'<input type="radio" name="device" data-action="select" id="device_'+m+'" '+(disabled?' disabled':'')+'/>',
								'<label for="device_'+m+'" data-type="ip">',n.lan_dhcp_ipaddr,
								disabled?'<span class="red">(已添加)</span>':'',
								'</label>',
							'</td>',
							'<td align="center"><label for="device_'+m+'" data-type="host">',hostName,'</label></td>',
							'<td align="center"><label for="device_'+m+'" data-type="mac">',n.lan_dhcp_macaddr,'</label></td>',
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
	
	common.resize();
	parent.common.resize();
})