$(function(){
	var jform = $('#form'),
		form = jform[0],
		postVar = {action:"Apply",mode:"WLAN",getPage:"wireless_basic.html"},
		srcData = {},
		dialog = common.dialog(),
		extendChannel = [[0],[5],[6],[7],[8],[1,9],[2,10],[3,11],[4],[5],[6],[7],[8],[9],[10]],
		//根据随机数生成
		getRandomPasw = function(v){
			var code = ['A','F','9','8','C','D','4','3','2','E'];
			return v.toString().slice(2,12).replace(/(\d)/g,function(){
				return code[+arguments[1]];
			});
		},
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
		};
	
	$.extend(common.action,{
		'delMacAddr':function(event,t){
			t.parent().remove();
			common.resize();
		},
		'addMacAddr':function(event,t){
			var str = [
				'<li class="form-item">',
				'<span class="form-label">MAC地址</span>',
				'<input type="text" name="mac" class="form-text" placeholder="">',
				'<a href="javascript:;" class="form-delbtn" data-action="delMacAddr" title="删除">×</a>',
				'</li>'
			].join('');
			if (t.attr('disabled')){
				return;
			}
			$(str).insertBefore(t.parent());
			common.resize();
		}
	});
	
	$(form['channel']).bind('change',function(){
		var channelVal = +$(this).attr('data-value');
		form['extendChannel'].value = extendChannel[channelVal][0];
	});
	
	$(form['macvisible']).bind('change',function(){
		var visible = $(this).is(':checked'),
			elem = $('#mac-visible');
		if (visible){
			elem.removeClass('none');
		}else{
			elem.addClass('none');
		}
		common.resize();
	});
	
	$(form['mac_enable']).bind('change',function(){
		/*var enabled = $(this).attr('data-value'),
			configLayer = $('#mac-config'),
			addBtn = configLayer.find('.form-addbtn');
		
		if (enabled === 'allow'){
			configLayer.find('input').removeAttr('disabled');
			addBtn.removeAttr('disabled');
			configLayer.removeClass('form-disabled');
		}else{
			configLayer.find('input').attr('disabled','disabled');
			addBtn.attr('disabled','disabled');
			configLayer.addClass('form-disabled');
		}*/
	});
	
	if (form['macvisible']){
		$.getJSON('/dataCenter.js',{filter_macmode:'',filter_maclist:''},function(json){
			var macs = $.trim(json.filter_maclist || '').split(/\s+/),
				arr = [];
			for(var i=0,k=macs.length;i<k;i++){
				arr.push([
				'<li class="form-item">',
					'<span class="form-label">MAC地址'+(i+1)+'</span>',
					'<input type="text" name="mac" class="form-text" value="'+macs[i]+'"/>',
					'<a href="javascript:;" class="form-delbtn" data-action="delMacAddr" title="删除">&times;</a>',
				'</li>'].join(''));
			}
			arr.push('<li class="form-item"><a href="javascript:;" class="form-addbtn" data-action="addMacAddr">✚ 添加MAC地址</a></li>');
			$('#mac-config').html(arr.join(''));
			setSelectorValue('mac_enable',json.filter_macmode);
			setCheckBoxValue('macvisible',macs.length>1);
		});
	}
	
	$.getJSON('/dataCenter.js',{
		//'2G'				               //'5G'
		'wl0_country_code':'',             'wl1_country_code':'',               
		'wl0_nband':'',                    'wl1_nband':'',             	
		'wl0_phytype':'',             	   'wl1_phytype':'',                		 	
		'wl0_radio':'',               	   'wl1_radio':'',                  		 	
		'wl0_ssid':'',                	   'wl1_ssid':'',                           		 	
		'wl0_bw_cap':'',              	   'wl1_bw_cap':'',                 		 	
		'wl0_chanspec':'',            	   'wl1_chanspec':'',               		 	
		'wl0_wme':'',                 	   'wl1_wme':'',                    		 	
		'wl0_gmode':'',               	   'wl1_gmode':'',                  		 	
		'wl0_nmode':'',               	   'wl1_nmode':'',                  		 	
		'wl0_gmode_protection':'',    	   'wl1_gmode_protection':'',       		 	
		'wl0_nmode_protection':'',    	   'wl1_nmode_protection':'',       		 	
		'wl0_mimo_preamble':'',       	   'wl1_mimo_preamble':'',          		 	
		'wl0_closed':'',              	   'wl1_closed':'',                 		 	
		'wl0_bss_opmode_cap_reqd':'', 	   'wl1_bss_opmode_cap_reqd':'',
		'wl0_ap_isolate':'',                 'wl1_ap_isolate':'',
		'wl0_rate' :'',                      'wl1_rate' :'',
		'wl0_nmcsidx':'',                    'wl1_nmcsidx':'',
		'wl0_plcphdr':'',					   'wl1_plcphdr':'',
		'wl0_wdsmode':'',                    'wl1_wdsmode':'',
		'wl_unit' : '' , 
		/********************'security'**************/  
		'wl0_security_choice' :'',	'wl1_security_choice' :'',
		'wl0_wep' :'',            	'wl1_wep' :'',
		'wl0_akm' :'',            	'wl1_akm' :'',
		'wl0_key' :'',            	'wl1_key' :'',
		'wl0_key1':'',            	'wl1_key1':'', 
		'wl0_key2':'',            	'wl1_key2':'', 
		'wl0_key3':'',            	'wl1_key3':'', 
		'wl0_key4':'',            	'wl1_key4':'',
		'wl0_crypto' :'',         	'wl1_crypto' :'', 
		'wl0_wep_type':'',          'wl1_wep_type':'',
		'wl0_wpa_psk':'',         	'wl1_wpa_psk':'',
		'wl0_auth':'',            	'wl1_auth':'',
		'wl0_auth_mode':'',       	'wl1_auth_mode':'',
		'wl0_wds_enable':'',       	'wl1_wds_enable':'',
		'wl0_wps_mode':'',          'wl1_wps_mode':''	
	},function(json){
		var input;
		srcData = json;
		setFormValue('ssid',json['wl0_ssid'] || ('xunlei_'+(+new Date())));
		setFormValue('ssid_pasw',json['wl0_wpa_psk']);
		//初使化是否隐藏SSID
		setCheckBoxValue('ssid_enable',+(+json['wl0_closed']));
		setCheckBoxValue('wifi_enable',!!json['wl0_radio']);
		setCheckBoxValue('wifi5g_enable',!!json['wl1_radio']);console.log(json['wl1_radio']);
		setSelectorValue('channel',json['wl0_chanspec'].replace(/\D+/g,''));
	});
		
	$.extend(common.action,{
		'postForm':function(event,t){
			var form = t[0].form,
				maclist = [],
				channel = +(form['channel'] ? $(form['channel']).attr('data-value'):srcData['wl0_chanspec'].replace(/\D+/g,'')),
				exChannel = getFormValue('extendChannel',extendChannel[+channel][0]),
				//是否启用保护
				openProtected = ['off','auto'][0],
				//802.11e/WMM QoS 
				wmmEnabled = ['off','on'][1],
				//加密方式
				security = getFormValue('security') && srcData.wl0_security_choice || 'tkipaes',
				//表单数据
				postData = {
					'wl_unit':0, // [2.4G,5G]
					'wl0_country_code':'US',
					'wl0_country_rev':'0',
					'wl0_radio':1, //是否启用无线网络 0表关闭
					'wl0_closed': +(form['ssid_enable'] ? form['ssid_enable'].checked:srcData['wl0_closed']), //是否启用SSID广播
					'wl0_ap_isolate':0,	//是否启用无线隔离
					'wl0_ssid':getFormValue('ssid',srcData.wl0_ssid),	//ssid名称
					'wl0_nmode':'-1',
					'wl0_bss_opmode_cap_reqd':0,
					'wl0_mimo_preamble':'auto',
					//与带宽设置相关的参数，这里默认带宽为40M/Hz
					'wl0_bw_cap':3,
					'wl0_chanspec':channel,
					'wl0_gmode_protection':openProtected,
					'wl0_nmode_protection':openProtected,
					'wl0_wme':wmmEnabled,
					'apply_wait_time':15
				},
				switchSecurity = function(v){
					var prev = 'wl'+postData['wl_unit'],
						choose = {
							'none':function(){
								postData[prev+'_wep'] = 'disabled';
								postData[prev+'_akm'] = 'none';
								postData[prev+'_auth'] = '0';
							},
							'wep':function(){
								// 太复杂，忽略
								if (srcData['wl' + postData['wl_unit'] + '_wps_mode'] == "enabled") {
									if (alertError('WpsConficWep', 2) == false){ //等补充此涵数
										return;
									} else {
										postData[prev+'_wps_mode'] = 'disabled';
									}
								}
								
								postData[prev+'_wep'] = 'enabled';
								//
								postData[prev+'_auth'] = 2; //认证方式 1-共享密钥 2-自动（默认）
									
								//加密强度 64：lang_length64 或 128：lang_length128
								postData[prev+'_wep_type'] = 'lang_length64'; 
								
								postData[prev+'_key'] = Math.floor(Math.random()*4)+1;
								
								for(var i=1;i<=4;i++){
									postData[prev+'_key'+i] = '';
									if (i === postData[prev+'_key']){
										postData[prev+'_key'+i] = getRandomPasw(Math.random());
									}
								}
								
								postData[prev+'_akm'] = 'none';
							},
							'tkip':function(){
								if (srcData['wl' + postData['wl_unit'] + '_wps_mode'] == "enabled") {
									if (alertError('WpsConficWep', 2) == false){ //等补充此涵数
										return;
									} else {
										postData[prev+'_wps_mode'] = 'disabled';
									}
								}
								postData[prev+'_wep'] = 'disabled';
								postData[prev+'_akm'] = 'psk';
								postData[prev+'_wpa_psk'] = getFormValue('ssid_pasw',srcData[prev+'_wpa_psk']);
								postData[prev+'_crypto'] = 'tkip';
								postData[prev+'_auth'] = '0';
							},
							'aes':function(){
								postData[prev+'_wep'] = 'disabled';
								postData[prev+'_akm'] = 'psk2';
								postData[prev+'_wpa_psk'] = getFormValue('ssid_pasw',srcData[prev+'_wpa_psk']);
								postData[prev+'_crypto'] = 'aes';
								postData[prev+'_auth'] = 0;
							},
							'tkipaes':function(){
								postData[prev+'_wep'] = 'disabled';
								postData[prev+'_akm'] = 'psk psk2';
								postData[prev+'_wpa_psk'] = getFormValue('ssid_pasw',srcData[prev+'_wpa_psk']);
								postData[prev+'_crypto'] = 'tkip+aes';
								postData[prev+'_auth'] = '0';
							}
						};
						
						postData[prev + '_security_choice'] = v;
						choose[v]();
				},
				copyDataTo5G = function(data){
					for (var i in data){
						if (/^wl0_/.test(i)){
							postData[i.replace('wl0_','wl1_')] = data[i];
						}else{
							postData[i] = data[i];
						}
					}
					postData['wl_unit'] = 1;
					postData['wl1_ssid'] = data['wl0_ssid'] + '-5G';
					postData['wl1_radio'] = form['wifi5g_enable']?+form['wifi5g_enable'].checked:+srcData.wl1_radio;
					postData['wl1_chanspec'] = 0; //5G模式下频道为自动
					postData['wl1_bw_cap'] = 7; //5G模式下的带宽
					
					//5G无线模式为802.11a/n/ac
					postData['wl1_nmode'] = -1;
					postData['wl1_bss_opmode_cap_reqd'] = 0; 
					postData['wl1_mimo_preamble'] = 'auto'; 
				};
			
			if (t.hasClass('form-loading')){
				return;
			}
			
			if (postData['wl0_closed'] === 1){
				postData['wl0_wps_mode'] = 'disabled';
			};
			
			if (channel !== 0){
				if (channel < exChannel){
					postData['wl0_chanspec'] = [channel , 'l'].join('');
				}else{
					postData['wl0_chanspec'] = [channel , 'u'].join('');
				}
			};
			
			switchSecurity(security);
			/*
			common.http.post($.extend(postData,postVar),function(data){
				var code = data.result;
				if (common.http.response[code]){
					common.http.response[code](data);
				}else{
					
				}
			});
			*/
			copyDataTo5G(postData);
			t.addClass('form-loading');
			common.http.post($.extend(postVar,postData),function(data){
				common.http.success.call(t,dialog,data,postData['apply_wait_time']);
			});
			
			jform.find('[name=\'mac\']').each(function(){
				var val = $(this).val();
				if ($.trim(val) && /^(?:[0-9a-e]{2}:){5}[0-9a-z]{2}$/.test(val)){
					maclist.push(val);
				}
			});
			
			if (form['macvisible']){
				common.http.post({
					'action':'Apply',
					'mode':'FILTER_MAC',
					'getPage':'fw_macfilter.html',
					'filter_macmode':$(form['mac_enable']).attr('data-value'),
					'filter_maclist':maclist.join(' '),
					'apply_wait_time':'10'
				},function(data){
				});
			}
		}
	});
	
	$.extend(window.common,{'tip':{
		'ssid':'== WIFI名称 == 某些设备对于中文处理不友好，可能会出现乱码\n建议使用英文字母和数字组合命名',
		'wifi_enable':'== WIFI开关 == 开启2.4G无线网络信号'	,
		'wifi5g_enable':'== 5G高速网络 == 开启5G无线高速网络信号\n有些设备的wifi模块不支持5G，会扫瞄不到5G信号'	,
	}});
});