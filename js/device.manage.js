$(function(){
	var myjson,
		srcData,
		deviceList = $('#device-list'),
		speedNum = $('#router-speed'),
		dialog = common.dialog(),
		jform = $('#form'),
		form = jform[0],
		connTypes = ['有线','WIFI','WIFI-5G'],
		unit = 1000,
		getSpeeds = function(k){
			if (k / unit < unit){
				return (k/unit).toFixed(2)+'K';
			}else if(k / unit / unit < unit){
				return (k/unit/unit).toFixed(2) + 'M';
			}else if(k / unit / unit / unit < unit){
				return (k/unit/unit/unit).toFixed(2) + 'G';
			}
		},
		getLimitInfo = function(item){
			var s='';
			if (item['uploadSpeedLimit'] === '0' && item['downloadSpeedLimit'] === '0'){
				s = '<a href="javascript:;" data-action="setLimit">无限制</a>';
			}else{
				if (item['uploadSpeedLimit'] > 0){
					s += '<a href="javascript:;" data-action="setLimit">'+getSpeeds(item['uploadSpeedLimit'])+'</a>';
				}else{
					s += '<a href="javascript:;" data-action="setLimit">无限制</a>';
				}
				s += '<br/>';
				if (item['downloadSpeedLimit'] > 0){
					s += '<a href="javascript:;" data-action="setLimit">'+getSpeeds(item['downloadSpeedLimit'])+'</a>';
				}else{
					s += '<a href="javascript:;" data-action="setLimit">无限制</a>';
				}
			}
			return s;
		},
		renderChart = function(list){
			var data = {},
				arr = [],
				opt,
				routerSpeed = 0;
			if (!common.chart){
				common.chart = {};
				common.chart.data = {};
				common.chart.pan = $('#speed-chat');
				common.chart.opt = {'min':9999999,'max':0,'index':0};
				common.chart.tooltip = $('<div id="tooltip" class="chart-tooltip"></div>').appendTo('body');
				common.chart.showToolTip = function(x, y, contents){
					common.chart.tooltip.html(contents).css({
						'top':y+5,
						'left':x+5,
						'opacity':0.8
					}).fadeIn(200);
				};
				
				common.chart.pan.bind('plothover',function(event, pos, item) {
					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;
							common.chart.tooltip.addClass('none').removeAttr('style');
							var x = item.datapoint[0].toFixed(2),
							y = item.datapoint[1].toFixed(2);
							common.chart.showToolTip(item.pageX, item.pageY,item.series.label+':<br/>下行速度：'+y+'MB/s');
						}
					} else {
						common.chart.tooltip.addClass('none').removeAttr('style');
						previousPoint = null;
					}
				});
			}
			data = common.chart.data;
			opt = common.chart.opt;
			for (var i=0,k=list.length,item,speed = 0;i<k;i++){
				item = list[i];
				routerSpeed += item['recvSpeed'];
				speed = Number((item['recvSpeed']/unit/unit).toFixed(2));
				if (!data[item['macAddress']]){
					data[item['macAddress']] = [];
				}
				data[item['macAddress']][opt['index']] = [opt['index'],speed];
				opt['min'] = Math.min(opt['min'],speed);
				opt['max'] = Math.max(opt['max'],speed);
				arr[i] = {'data':data[item['macAddress']].slice(-50),'label':item['deviceName'].slice(-50)};
			}
			
			if (!$.plot){
				return;
			}
			common.plot = $.plot(common.chart.pan,arr,{
				series: {
					lines: {
						show: true
					},
					points: {
						show: true
					}
				},
				grid: {
					hoverable: true,
					clickable: true
				},
				yaxis: {
					min: opt['min'],
					max: opt['max']+0.1*opt['max']
				}
			});
			opt['index']++;
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
						'<span>',item['deviceName'],'</span>',
						'</td>',
						'<td class="left">',
						'上行：'+getSpeeds(item['sentSpeed'])+'<br/>下行：'+getSpeeds(item['recvSpeed']),
						'</td>',
						'<td align="center">',
						getLimitInfo(item),
						'</td>',
						'<td align="center">',
						'<a href="javascript:;" data-action="breakDevice" data-kick="'+{'true':1,'false':0}[item['blocked']]+'">'+{'true':'取消断开','false':'强制断开'}[item['blocked']]+'</a>',
						'</td>',
					'</tr>'].join('');
				deviceList.append($(s));
			}
		},
		onData = function(data){
			var list = data.deviceList,
				arr = [],
				hostname,
				mac,
				speedDown =0,
				speedUp = 0;
			srcData = list;
			
			if (list.length){
				deviceList.find('tr.loading').remove();
				deviceList.find('tr').addClass('none');
				speedDown = speedUp = 0;
				for(var i=0,k=list.length,item;i<k;i++){
					list[i]['deviceName'] = strAnsi2Unicode(Base64.Decode(list[i]['hostName']));
					setDevice(list[i]);
					speedDown += Number(list[i]['recvSpeed']);
					speedUp += Number(list[i]['sentSpeed']);
				}
				speedNum.html(getSpeeds(speedDown));
				
				renderChart([{
					'deviceName':'当前路由器',
					'macAddress':'0',
					'sentSpeed':speedUp.toString(),
					'recvSpeed':speedDown.toString(),
				}].concat(list));
			}else{
				deviceList.html('<tr class="loading"><td colspan="7">没有连接的设备</td></tr>');
				speedNum.html('0M');
			}
			common.resize();
		},
		getDeviceList = function(){
			common.protocol.getRemoteData('getDeviceList',{'interval':3},{'success':onData,'error':function(){
				deviceList.html('<tr><td colspan="7">获取设备列表失败,<a href="javascript:;" data-action="getDeviceList">请重试</a>！</td></tr>');
			}});
		};
	
	$.extend(common.action,{
		'getDeviceList':function(event,t){
			t.parent().html('设备加载中...');
			getDeviceList();
		},
		'renameDevice':function(event,t){
			var tr = t.parent().parent();
			dialog.alert({
				'title':'修改设备名',
				'text':'<input type="text" value="'+t.text()+'" name="hostname" class="form-text"/>',
				'height':190,
				'top':t.offset().top
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
				initVal = function(v){
					v = Math.floor((v/unit));
					return v || '';
				},
				item;
			for(var i=0,k=srcData.length;i<k;i++){
				if (mac === srcData[i]['macAddress']){
					item = srcData[i];
					break;
				}
			}
			dialog.alert({
				'title':'限速',
				'text':'<label>上传速度：</label> <input type="text" name="upload" value="'+initVal(item['uploadSpeedLimit'])+'" name="hostname" class="form-text"/> <label>KB/s</label><br/><label>下载速度：</label> <input type="text" name="download" value="'+initVal(item['downloadSpeedLimit'])+'" name="hostname" class="form-text"/> <label>KB/s</label>',
				'width':500,
				'height':240,
				'top':t.offset().top
			},function(event){
				var btn = $(this),
					dialogForm = btn[0].form,
					item = {'macAddr':mac,'limit':0},
					arr = [];
					
					if (Number(dialogForm['upload'].value) > 0){
						item['limit'] = '1';
						item['upload'] = Math.round(Number(dialogForm['upload'].value)).toString();
						item['download'] = Math.round(Number(dialogForm['download'].value)).toString();
					}
					if (Number(dialogForm['download'].value) > 0){
						item['limit'] = '1';
						item['download'] = Math.round(Number(dialogForm['download'].value)).toString();
					}
					arr[0] = item;
					common.protocol.getRemoteData('setDeviceSpeedLimit',{'devices':arr},{'success':function(data){
						var code = +data.errorCode;
						if (code === 0){
							dialog.alert('设置成功',function(){
								location.reload();
							});
						}else{
							dialog.alert('设置失败');
						}
					},'error':function(){
						dialog.alert('网络连接失败');
					}});
				return false;
			});
			common.resize();
		},
		'breakDevice':function(event,t){
			var tr = t.parent().parent(),
				mac = tr.attr('data-mac'),
				device={},
				item = {},
				arr = [],
				act = {'0':'取消断开','1':'强制断开'};
			for(var i=0,k=srcData.length;i<k;i++){
				if (mac === srcData[i]['macAddress']){
					item = srcData[i];
					break;
				}
			};
			device['macAddr'] = tr.attr('data-mac');
			device['kick'] = tr.attr('data-kick') || '1';
			act = act[device['kick']];
			arr.push(device);
			dialog.confirm('确定强制断开此设备？',function(){
				common.protocol.getRemoteData('breakDevices',{'devices':arr},{'success':function(data){
					var code = +data.errorCode;
					if (code === 0){
						dialog.alert(act+'成功',function(){
							location.reload();
						});
					}else{
						dialog.alert(act+'设置失败');
					}
				},'error':function(){
					dialog.alert('网络连接失败');
				}});
				dialog.alert('断开成功');
			});
			common.resize();
		}
	});
	
	getDeviceList();
	common.resize();
})