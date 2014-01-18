$(function(){
	var myjson,
		srcData,
		deviceList = $('#device-list'),
		dialog = common.dialog(),
		jform = $('#form'),
		form = jform[0],
		connTypes = ['有线','WIFI'],
		getSpeeds = function(k){
			if (k / 1024 < 1024){
				return (k/1024).toFixed(2)+'K';
			}else if(k / 1024 / 1024 < 1024){
				return (k/1024/1024).toFixed(2) + 'M';
			}else if(k / 1024 / 1024 / 1024 < 1024){
				return (k/1024/1024/1024).toFixed(2) + 'G';
			}
		},
		getLimitInfo = function(item){
			var s='';
			if (item['uploadSpeedLimit'] === '0' && item['downloadSpeedLimit'] === '0'){
				s = '<a href="javascript:;" data-action="setLimit">无限制</a>';
			}else{
				if (item['uploadSpeedLimit'] > 0){
					s += getSpeeds(item['uploadSpeedLimit']);
				}else{
					s += '<a href="javascript:;" data-action="setLimit">无限制</a>';
				}
				s += '<br/>';
				if (item['downloadSpeedLimit'] > 0){
					s += getSpeeds(item['downloadSpeedLimit']);
				}else{
					s += '<a href="javascript:;" data-action="setLimit">无限制</a>';
				}
			}
			return s;
		},
		setDevice = function(item){
			var tr = deviceList.find('tr[data-mac="'+item['macAddress']+'"]'),
				s = '';
			if (tr.length > 0){
				tr.find('td:eq(0)').html(connTypes[+item['connectMode']]);
				tr.find('td:eq(4)').html('上行：'+getSpeeds(item['sentSpeed'])+'<br/>下行：'+getSpeeds(item['recvSpeed']));
				s = getLimitInfo(item);
				tr.removeClass('none').find('td:eq(5)').html(s);
			}else{
				hostname = strAnsi2Unicode(Base64.Decode(item['hostName']));
				mac = item['macAddress'].replace(/(.{2})/g,'$1:').slice(0,-1);
				s = ['<tr data-mac="'+item['macAddress']+'">',
						'<td align="center">',
						connTypes[+item['connectMode']],
						'</td>',
						'<td align="center"><span>',
						mac,
						'</span></td>',
						'<td align="center">',
						item['ip'],
						'</td>',
						'<td align="center">',
						'<span>',hostname,'</span>',
						'</td>',
						'<td class="left">',
						'上行：'+getSpeeds(item['sentSpeed'])+'<br/>下行：'+getSpeeds(item['recvSpeed']),
						'</td>',
						'<td align="center">',
						getLimitInfo(item),
						'</td>',
						'<td align="center">',
						'<a href="javascript:;">断开</a>',
						'</td>',
					'</tr>'].join('');
				deviceList.append($(s));
			}
		},
		onData = function(data){
			var list = data.deviceList,
				arr = [],
				hostname,
				mac; 
			srcData = list;
			console.log(srcData);
			if (list.length){
				deviceList.find('tr.loading').remove();
				deviceList.find('tr').addClass('none');
				for(var i=0,k=list.length,item;i<k;i++){
					setDevice(list[i]);
				}
			}else{
				deviceList.html('<tr class="loading"><td colspan="7">没有连接的设备</td></tr>')
			}
			common.resize();
		},
		getDeviceList = function(){
			common.protocol.getRemoteData('getDeviceList',{'interval':3},{'success':onData});
		};
	
	$.extend(common.action,{
		'renameDevice':function(event,t){
			var tr = t.parent().parent();
			dialog.alert({
				'title':'修改设备名',
				'text':'<input type="text" value="'+t.text()+'" name="hostname" class="form-text"/>',
				'height':190,
				'top':100
			},function(){
				var btn = $(this),
					dialogForm = btn[0].form;
					common.protocol.getRemoteData('breakDevice',{'interval':0},{'success':onData});
				return false;
			});
			common.resize();
		},
		'setLimit':function(event,t){
			var tr = t.parent().parent(),
				mac = tr.attr('data-mac'),
				item;
			for(var i=0,k=srcData.length;i<k;i++){
				if (mac === srcData[i]['macAddress']){
					item = srcData[i];
					break;
				}
			}
			dialog.alert({
				'title':'限速',
				'text':'<label>上传速度：</label> <input type="text" name="upload" value="'+(item['uploadSpeedLimit']/1024).toFixed(0)+'" name="hostname" class="form-text"/><label>KB/s</label><br/><label>下载速度：</label> <input type="text" name="download" value="'+(item['downloadSpeedLimit']/1024).toFixed(0)+'" name="hostname" class="form-text"/><label>KB/s</label>',
				'height':280,
				'top':100
			},function(event){
				var btn = $(this),
					dialogForm = btn[0].form,
					item = {'macAddr':mac,'limit':0},
					arr = [];
					
					if (Number(dialogForm['upload'].value) > 0){
						item['limit'] = 1;
						item['upload'] = Math.round(Number(dialogForm['upload'].value) * 1000);
						item['download'] = Math.round(Number(dialogForm['download'].value) * 1000);
					}
					if (Number(dialogForm['download'].value) > 0){
						item['limit'] = 1;
						item['download'] = Math.round(Number(dialogForm['download'].value) * 1000);
					}
					arr[0] = item;
					console.log(common.json.toString(arr));
					common.protocol.getRemoteData('setDeviceSpeedLimit',{'devices':common.json.toString(arr)},{'success':onData});
				return false;
			});
			common.resize();
		}
	});
	
	getDeviceList();
	common.resize();
})