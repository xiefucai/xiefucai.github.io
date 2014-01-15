$(function(){
	var srcData;
	var dialog = common.dialog();
	var jform = $('#form'),
		form = jform[0],
		postVar = {
			'action':'Apply',
			'getPage':'deviceinfo.html',
			'image_id':'img1',
			'ul_id':1,
			'src_id':'lang_adsl',
			'dest_id':'lang_routerstatus'
		},
		disabled = false,
		srcData = {},
		defaultValue = {
			'pppoe':1480,
			'pptp':1436,
			'l2tp':1430
		},
		getFormValue = function(name,value){
			if (form[name]){
				return form[name].value;
			}else{
				return value || '';
			}
		},
		setFormValue = function(name,value){
			if (form[name]){
				form[name].value = value;
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
		
	$(form['prototype']).bind('change',function(){
		var i = +$(this).attr('data-value'),
			dnsConfiger = $('#dns-configer'),
			wireConfiger = $('.wire-config')
		;
		$('#tab0,#tab1,#tab2').addClass('none');
		$('#tab'+i).removeClass('none');
		if (i === 2){
			dnsConfiger.addClass('none');
		}else{
			dnsConfiger.removeClass('none');
		}
		if (i === 1){
			setSelectorValue('wiretype',$(form['wiretype']).attr('data-value'));
		}else{
			wireConfiger.addClass('none');
		}
		common.resize();
	});
	
	$(form['dns-switcher']).bind('change',function(){
		var configLayer = $('.dns-config');
		if (this.checked){
			configLayer.removeClass('none');
		}else{
			configLayer.addClass('none');
		}
		common.resize();
	});
	
	$(form['wiretype']).bind('change',function(){
		var dnsConfiger = $('#dns-configer'),
			wireConfiger = $('.wire-config');
		if ($(this).attr('data-value') === '0'){
			wireConfiger.addClass('none');
			dnsConfiger.removeClass('none');
		}else{
			wireConfiger.removeClass('none');
			dnsConfiger.addClass('none');
		}
		common.resize();
	});
		
	$.getJSON('/dataCenter.js', {
		wan0_hostname:'',
		wan0_proto:'',
		
		wan0_gateway:'',
		wan0_ipaddr:'',
		wan0_netmask:'',
		
		wan0_hwaddr:'',
		vlan2_hwaddr:'',
		pc_login_macaddr:'gval',
		
		wan0_dns:'',
		wan0_dnsauto_enable:'',
		wan0_usrdns:'',
		
		wan0_pppoe_username:'',
		wan0_pppoe_passwd:'',
		wan0_pppoe_service:'',
		wan0_pppoe_mtu:'',
		wan0_pppoe_demand:'',
		wan0_pppoe_idletime:'',
		
		wan0_pptp_demand:'',          wan0_l2tp_demand:'',          
		wan0_pptp_idletime:'',        wan0_l2tp_idletime:'',
		wan0_pptp_passwd:'',          wan0_l2tp_passwd:'',
		wan0_pptp_username:'',        wan0_l2tp_username:'',
		wan0_pptp_server:'',          wan0_l2tp_client:'',
		wan0_pptp_client:'',          wan0_l2tp_netmask:'',
		wan0_pptp_netmask:'',         wan0_l2tp_gateWay:'',
		wan0_pptp_gateWay:'',         wan0_l2tp_server:'',
		wan0_pptp_mtu:'',             wan0_l2tp_mtu:''    
		
	},function(json){
		var types = ['pppoe','dhcp','wifi'],
			i = types.indexOf(srcData['wan0_proto']);	
			srcData = json,
			dns = (srcData && srcData.wan0_usrdns || '').split(/\s+/);
			if (i<0 && /^(pptp|l2tp)$/i.test(srcData['wan0_proto'])){
				i = 0;
			}else if(/^(dhcp|static)$/i.test(srcData['wan0_proto'])){
				i = 1;
				setSelectorValue('wiretype',{'dhcp':0,'static':1}[srcData['wan0_proto'].toLowerCase()]);
			}else{
				i = 2;
			}
			console.log('当前联网方式',i,srcData['wan0_proto'],srcData);
			setFormValue('pppoe_username',srcData['wan0_l2tp_username']);
			setFormValue('pppoe_passwd',srcData['wan0_l2tp_passwd']);
			setFormValue('dns1',dns[0]);
			setFormValue('dns2',dns[1]);
			setFormValue('usrdns1',dns[0]);
			setFormValue('usrdns2',dns[1]);
			setFormValue('ipaddr',srcData['wan0_ipaddr']);
			setFormValue('netmask',srcData['wan0_netmask']);
			setFormValue('gateway',srcData['wan0_gateway']);
			setFormValue('wan0_pppoe_service',srcData['wan0_pppoe_service']);
			setFormValue('hostname',srcData['wan0_hostname']);
			setCheckBoxValue('dns-switcher',!(+srcData['wan0_dnsauto_enable']));
			setSelectorValue('prototype',i>-1?i:2);
	});
	
	$.extend(common.action,{
		'postForm':function(event,t){
			var postData = {},
				setData = {
					'PPPOE':function(){
						postData['mode']='PPPOE';
						postData['wan0_proto']='pppoe';
						postData['wan0_pppoe_ifname']='ppp0';
						postData['wan0_pppoe_username']=getFormValue('pppoe_username');
						postData['wan0_pppoe_passwd']=getFormValue('pppoe_passwd');
						postData['wan0_pppoe_service']=getFormValue('pppoe_service') || undefined;
						postData['wan0_pppoe_mru']=srcData.wan0_pppoe_mtu;
						postData['wan0_pppoe_mtu']=srcData.wan0_pppoe_mtu;
						postData['wan0_pppoe_demand']=+$(form['pattern']).attr('data-value');
						if(postData['wan0_pppoe_demand'] == 1){
							postData['wan0_pppoe_idletime']=60;
						}
					},
					'DHCP':function(){
						postData['mode']='WAN_DHCP';
						postData['wan0_proto']='dhcp';
						postData['wan0_hostname']=getFormValue('hostname');
					},
					'STATIC':function(){
						postData['mode']='WAN_STATIC';
						postData['wan0_proto']='static';
						postData['wan0_hostname']=getFormValue('hostname');
						postData['wan0_ipaddr']=getFormValue('ipaddr');
						postData['wan0_netmask']=getFormValue('netmask');
						postData['wan0_gateway']=getFormValue('gateway');
						postData['wan0_usrdns']=[getFormValue('usrdns1'),getFormValue('usrdns2')].join(' ');
					}
				};
			if (disabled){
				return;
			}
			
			switch(+$(form['prototype']).attr('data-value')){
				//拨号上网
				case 0:
					postData['mode'] = 'PPPOE';
				break;
				//网线直连
				case 1:
					switch(+$(form['wiretype']).attr('data-value')){
						case 0:
							postData['mode'] = 'DHCP';
						break;
						case 1:
							postData['mode'] = 'STATIC';
						break;
					}
				break;
				//无线中继
				case 2:
				break;
			}
			postData['wan0_dnsauto_enable']=+(!form['dns-switcher'].checked);
			postData['wan0_unit']='0';	// [2.4G,5G网络]
			postData['wan0_usrdns']=[getFormValue('dns1'),getFormValue('dns2')].join(' ');
			setData[postData['mode']]();
			t.addClass('form-loading');
			common.http.post($.extend(postVar,postData),function(data){
				common.http.success.call(t,dialog,data,postData['apply_wait_time']);
			});
		}
	});
	
	$.extend(window.common,{'tip':{
		'dns-switcher':'== 自定义DNS == 自定义配置域名解析服务器，建议不要开启',
		'hostname':'== 主机名 == 默认可不填写，除非ISP提供有特定的主机名\n如果ISP提供了特定的主机名，则输入该主机名（例如，CCA7324-A）'	
	}});
});