$(function() {
	processCSS();
	current_visit = "deviceinfo.html";
	$.getJSON("/dataCenter.js", {
		time: "time",
		wan0_hwaddr: '',
		wan0_proto: '',
		wan0_ipaddr: '',
		wan0_gateway: '',
		wan0_netmask: '',
		wan0_dns: '',
		wan0_dnsauto_enable: '',
		wan0_usrdns: '',

		lan_hwaddr: '',
		lan_ipaddr: '',
		lan_netmask: '',
		lan_proto: '',

		//2G				                //5G
		wl0_ssid: "",
		wl1_ssid: "",
		wl0_country_code: "",
		wl1_country_code: "",
		wl0_chanspec: "",
		wl1_chanspec: "",
		wl0_bw_cap: "",
		wl1_bw_cap: "",
		wl0_nband: "",
		wl1_nband: "",
		wl0_phytype: "",
		wl1_phytype: "",
		wl0_radio: "",
		wl1_radio: "",
		wl0_ap_isolate: "",
		wl1_ap_isolate: "",
		wl0_wme: "",
		wl1_wme: "",
		wl0_gmode: "",
		wl1_gmode: "",
		wl0_nmode: "",
		wl1_nmode: "",
		wl0_gmode_protection: "",
		wl1_gmode_protection: "",
		wl0_nmode_protection: "",
		wl1_nmode_protection: "",
		wl0_mimo_preamble: "",
		wl1_mimo_preamble: "",
		wl0_closed: "",
		wl1_closed: "",
		wl0_bss_opmode_cap_reqd: "",
		wl1_bss_opmode_cap_reqd: "",

		wl0_wds_enable: '',
		wl1_wds_enable: '',
		wl0_wdsmode: '',
		wl1_wdsmode: '',
		router_disable: '',

		wl0_wps_mode: '',
		wl1_wps_mode: '',
		wl0_security_choice: '',
		wl1_security_choice: ''
	},
	function(json) {
		var YES = variable.lang_yes;
		var NO = variable.lang_no;
		setJSONValue({
			//sysinfo
			'sysFirmwareVersion': 'V 1.0.0',
			'BootVersion': 'V 1.0.0',
			'HardwareVersion': 'V 1.0.0',
			'serialNum': '0123456789',

			//wan setting
			'wanMac': (json.wan0_hwaddr).toUpperCase(),
			'wanNetLink': ConnectionType(json.wan0_proto),
			'WanIPAddress': json.wan0_ipaddr,
			'WanSubnetMask': json.wan0_netmask,
			'DefaultGateway': json.wan0_gateway,
			'WanDomainNameServer': json.wan0_dnsauto_enable == 1 ? json.wan0_dns: json.wan0_usrdns,

			//lan setting
			'lanMac': json.lan_hwaddr,
			'lanIp': json.lan_ipaddr,
			'subNet': json.lan_netmask,
			'dhcpServer': json.lan_proto == 'dhcp' ? YES: NO,

			//wireless setting 2.4G
			'TD_wlan_ssid': json.wl0_ssid,
			'TD_wlan_Regulatory': optionText.Region[json.wl0_country_code],
			'TD_wlan_channel': Channel_2G(json),
			'TD_wlan_mode': ModeType_2G(json),
			'TD_wlan_radio': json.wl0_radio == 1 ? YES: NO,
			'TD_wlan_SSIDBroad': json.wl0_closed == 0 ? YES: NO,
			'TD_wlan_APIsolate': json.wl0_ap_isolate == 1 ? YES: NO,
			'TD_wlan_WPSEnable': json.wl0_wps_mode == 'enabled' ? YES: NO,
			'TD_wlan_securitymode': SecurityOptions(json.wl0_security_choice),

			//wireless setting 5G
			'TD_wlan_ssid_5G': json.wl1_ssid,
			'TD_wlan_Regulatory_5G': optionText.Region[json.wl1_country_code],
			'TD_wlan_channel_5G': Channel_5G(json),
			'TD_wlan_mode_5G': ModeType_5G(json),
			'TD_wlan_radio_5G': json.wl1_radio == 1 ? YES: NO,
			'TD_wlan_SSIDBroad_5G': json.wl1_closed == 0 ? YES: NO,
			'TD_wlan_APIsolate_5G': json.wl1_ap_isolate == 1 ? YES: NO,
			'TD_wlan_WPSEnable_5G': json.wl1_wps_mode == 'enabled' ? YES: NO,
			'TD_wlan_securitymode_5G': SecurityOptions(json.wl1_security_choice)

		});
		if (json.wl0_wds_enable == 1 && json.wl0_wdsmode == 'Repeater' || json.wl1_wds_enable == 1 && json.wl1_wdsmode == 'Repeater' || json.router_disable == 1) $('#wanport').hide();

		systemDate(json.time * 1000);
		frameElement.height = $('#bottom').offset().top;
	});
	
	
});

function ConnectionType(Type) {
	switch (Type) {
	case 'static':
		return variable.land_stat;
		break;
	case 'pppoe':
		return variable.land_pppoe;
		break;
	case 'pptp':
		return variable.land_pptp;
		break;
	case 'l2tp':
		return variable.land_l2tp;
		break;
	default:
		return variable.land_dhcp;
	}
}

function Channel_2G(json) {
	var num = parseInt(json.wl0_chanspec.replace(/[^0-9]/ig, ""));
	if (num == 0) return variable.land_auto;
	else return num;
}
function Channel_5G(json) {
	var num;
	if (json.wl1_bw_cap == 7) {
		num = parseInt(json.wl1_chanspec.split('/')[0]);
		if (num == 0) return variable.land_auto;
		else return num;
	}
	num = parseInt(json.wl1_chanspec.replace(/[^0-9]/ig, ""));
	if (num == 0) return variable.land_auto;
	else return num;
}

function ModeType_2G(json) {
	if (json.wl0_radio == 0) {
		return variable.land_off;
	} else {
		if (json.wl0_nmode == 0) {
			if (json.wl0_gmode == 0) return '802.11b';
			else return '802.11g';
		} else {
			if (json.wl0_mimo_preamble == "gf") {
				return '802.11n';
			} else {
				return '802.11b/g/n';
			}
		}
	}
}

function ModeType_5G(json) {
	if (json.wl1_radio == 0) {
		return variable.land_off;
	} else {
		if (json.wl1_nmode == 0) {
			return '802.11a';
		} else {
			if (json.wl1_mimo_preamble == "gf") {
				return '802.11n';
			} else {
				return '802.11a/n/ac';
			}
		}
	}
}

function SecurityOptions(opt_val) {
	switch (opt_val) {
	case 'wep':
		return 'Wep';
		break;
	case 'tkip':
		return 'WPA-PSK[TKIP]';
		break;
	case 'aes':
		return 'WPA2-PSK[AES]';
		break;
	case 'tkipaes':
		return 'WPA-PSK[TKIP]+WPA2-PSK[AES]';
		break;
	default:
		//none
		return variable.lang_none;
		break;
	}
}

function systemDate(t) {
	//获取系统时间
	var date_pc = new Date(); //heyanping add 

	var date = new Date(t);
	var month = date.getMonth() + 1; //month默认0-11，所以要加1        
	var minutes = date.getMinutes(),
	Min;
	var seconds = date.getSeconds(),
	updateTime,
	Sec;

	var hours = date.getHours(); //24小时制
	var hours_f; //美制
	var flag = "AM";
	var localOffset;

	localOffset = date_pc.getTimezoneOffset() * 60000;
	date = new Date(t + localOffset);
	month = date.getMonth() + 1; //month默认0-11，所以要加1     
	minutes = date.getMinutes();
	seconds = date.getSeconds();

	hours = date.getHours();

	updateTime = 60 - seconds;
	minutes <= 9 ? Min = "0" + minutes: Min = minutes;
	seconds <= 9 ? Sec = "0" + seconds: Sec = seconds;
	if (hours == 12) {
		flag = "PM";
		hours_f = hours;
	}
	else if (13 <= hours && hours <= 23) {
		flag = "PM";
		hours_f = hours - 12;
	}
	else {
		flag = "AM";
		hours_f = hours;
	}
	var week = date.getDay(),
	day;
	switch (week) {
	case 0:
		day = optionText.Week[7];
		break;
	case 1:
		day = optionText.Week[1];
		break;
	case 2:
		day = optionText.Week[2];
		break;
	case 3:
		day = optionText.Week[3];
		break;
	case 4:
		day = optionText.Week[4];
		break;
	case 5:
		day = optionText.Week[5];
		break;
	case 6:
		day = optionText.Week[6];
		break;
	}

	var time = date.getFullYear() + "/" + month + "/" + date.getDate() + " " + hours_f + ":" + Min + ":" + Sec + flag + " " + day;
	$("#updateTime").text(time);

	t = t + 1000;
	setTimeout("systemDate(" + t + ")", 1000);
}

function ShowStatistics() {
	/*
	var href = "status_statistics.html" + "?t=" + new Date();
	var pbcwin = window.open(href, "pbc", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,width=600,height=300,resizable=0");
	*/
	var url = 'status_statistics.html?t=' + (+new Date()),
		moveCenter = function(){
			common.dialog.moveTo((document.documentElement.clientWidth - 588)/2,(document.documentElement.scrollTop || document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight-400)/2);
		},
		showFrame = function(){
			common.dialog.showFrame(url);
			moveCenter();
		};
	if (window.common && common.dialog){
		showFrame();
	}else{
		$.getScript('/js/common.dialog.js',function(){
			showFrame();
			window.onmessage = function(event){
				var d = (event || window.event).data;console.log(d);
				if (d){
					d = common.string.toJSON(d);
				}
				if (d && d.action){
					if (d.action === "resize"){console.log(d.data);
						common.dialog.resizeTo(580,d.data.height-6);
					}else if(d.action === "success"){
						common.dialog.close();
					}
				}
			};
			if (window.postMessage === undefined){
				setInterval(function(){
					var name = window.name;
					if (name){
						window.onmessage({"data":name});
					}
				},500);
			};
		});
	}
}

function Connect_Status() {}
function processCSS() {
	$("td:even").not(":only-child").width("50%");
}