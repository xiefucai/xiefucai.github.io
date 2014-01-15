$(function(){
	var srcData,
		dialog = common.dialog(),
		jform = $('#form'),
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
		};
		
	$(form['proto']).bind('change',function(){
		var proto = $(this).attr('data-value').toLowerCase();console.log(proto);
		setFormValue('server',srcData['wan0_'+proto+'_server']);
		setFormValue('username',srcData['wan0_'+proto+'_username']);
		setFormValue('pasw',srcData['wan0_'+proto+'_passwd']);
		setFormValue('server',srcData['wan0_'+proto+'_server']);
		setSelectorValue('pattern',srcData['wan0_'+proto+'_demand']);
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
		srcData = json;
		if (/^(pptp|l2tp)$/.test(srcData['wan0_proto'])){
			setSelectorValue('proto',srcData['wan0_proto'].toUpperCase());
		}else{
			setSelectorValue('proto','PPTP');
		}
	});
	
	$.extend(common.action,{
		'postForm':function(event,t){
			var postData = {},
				setData = {
					'PPTP':function(){
						postData['wan0_proto']='pptp';
						postData['wan0_pptp_ifname']='ppp0';
						postData['wan0_pptp_username']=getFormValue('username');
						postData['wan0_pptp_passwd']=getFormValue('pasw');
						postData['wan0_pptp_server']=getFormValue('server');
						
						postData['wan0_pptp_client']='...';
						postData['wan0_pptp_netmask']='...';
						postData['wan0_pptp_gateWay']='...';
						
						//是否启用静态IP地址
						postData['wan0_pptp_static']= 0;
						postData['wan0_pptp_mru']=srcData['wan0_pptp_mtu'] || defaultValue['pptp'];
						postData['wan0_pptp_mtu']=srcData['wan0_pptp_mtu'] || defaultValue['pptp'];
						postData['wan0_pptp_demand']=+$(form['pattern']).attr('data-value');
						
						if (postData['wan0_pptp_demand'] === 1){
							postData['wan0_pptp_idletime'] = 60; //闲置超时60S
						}
					},
					'L2TP':function(){
						postData['wan0_proto']='l2tp';
						postData['wan0_l2tp_ifname']='ppp0';
						postData['wan0_l2tp_username']=getFormValue('username');
						postData['wan0_l2tp_passwd']=getFormValue('pasw');

						postData['wan0_l2tp_server']=getFormValue('server');
						
						postData['wan0_l2tp_client']='...';
						postData['wan0_l2tp_netmask']='...';
						postData['wan0_l2tp_gateWay']='...';
						
						postData['wan0_l2tp_static']= 0;
						postData['wan0_l2tp_mru']=srcData['wan0_l2tp_mtu'] || defaultValue['pptp'];
						postData['wan0_l2tp_mtu']=srcData['wan0_l2tp_mtu'] || defaultValue['pptp'];
						
						postData['wan0_l2tp_demand']=+$(form['pattern']).attr('data-value');
						
						if (postData['wan0_l2tp_demand'] === 1){
							postData['wan0_l2tp_idletime'] = 60; //闲置超时60S
						}
					}
				};
			if (disabled){
				return;
			}
			postData['mode'] = $(form['proto']).attr('data-value').toUpperCase();
			postData['wan0_unit']='0';
			
			setData[postData['mode']]();
			t.addClass('form-loading');
			common.http.post($.extend(postVar,postData),function(data){
				common.http.success.call(t,dialog,data,postData['apply_wait_time']);
			});
		}
	});
});