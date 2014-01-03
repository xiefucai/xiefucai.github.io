var errorCode={
	'255': '',
	'256': 'Unknown error. Please contact developer.',
	'1001':'Out of Memeory. Please contact developer.',
	'1002':'Null Potier error. Please contact developer.',
	'1003':'Variable name over length. Please contact developer.',
	'1004':'Variable name Too short. Please contact developer.',
	'1005':'Variable out of range.',
	'1006':'Mode not math. Please contact developer.',
	'1007':'Invalid Ip address',
	'1008':'Ip address exceed range',
	'1009':'Invalid Mac address',
	'1010':'Ip and Netmask not match',
	'1011':'Invalid Netmask',
	'1012':'Action not match',
	'1013':'Host name format error',
	'1014':'Not alllow to configure WAN while at bridge mode',
	'1015':'Enable value invalid',
	'1016':'Invalid gateway address',
	'1017' : 'port range wrong(1-65535)',
	'1018':'The protocol does not support',
	'1019':'Invalid input value,must be unsigned int!',
	'1101' : 'LAN IP confilct with guest network',
	'1102' : 'LAN IP confilct with WAN',
	'1103' : 'DHCP Pool out of range',
	'1104' : 'Invaild DHCP pool address',
	'1105' : 'DHCP Pool changed in AP mode',
	'1106' : 'DHCP lease time changed in AP mode',
	'1107' : 'Local Domain Name changed in AP mode',
	'1108' : 'DHCP switch modifiyed in AP mode',
	'1109' : 'Local IP address in DHCP Pool',
	'1110' : 'The IP is exceed the scope of DHCP pool!',
	'1201' : 'account length must between 1 - 255',
	'1202' : 'password length must between 1 - 255',
	'1205' : 'Invalid MRU, must be between 616-1492',
	'1206' : 'Invalid MTU, must be between 616-1492',
	'1207' : 'Idle time of the numbers you entered are invalid.The number has to be an integer between 1-60.',
	'1208' : 'Invalid MRU, must be between 616-1436',
	'1209' : 'Invalid MTU, must be between 616-1436',
	'1210' : 'Invalid MRU, must be between 616-1430',
	'1211' : 'Invalid MTU, must be between 616-1430',
	'1401' : 'port range is invalid',
	'1402' : 'must specify a source port Range',
	'1403' : 'must specify a LAN IP Address',
	'1404' : 'must specify a Destination Port Range',
	'1405' : 'source start port greater than end port',
	'1406' : 'Destination start port greater than end',
	'1407' : 'WAN Port Range and LAN Port Range must be the same size',
	'1408' : 'protocal tcp,udp,tcp/udp is invalid',
	'1409' : 'not an IP address',
	'1410' : 'not in the lan range',
	'1411' : 'cannot be the network address',
	'1412' : 'cannot be the broadcast address',
	'1413' : 'port conflict',
	'1501' : 'Invalid gateway address',
	'1502' : 'LAN IP confilct with WAN',
	'1503' : 'WAN IP confilct with guest network',
	'1601' : 'The wireless 2.4G channel have been setting error',
	'1602' : 'The wireless 5G channel have been setting error',
	'1603' : 'Invalid Character(s) found in ssid name. Valid characters are: 0-9,a-z, A-Z, ~!@#$%^&*()_-+=|\{}[]:";\',.<>/?',
	'1604' : 'Invalid wep key1 value. Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F',
	'1605' : 'Invalid wep key2 value. Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F',
	'1606' : 'Invalid wep key3 value. Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F',
	'1607' : 'Invalid wep key4 value. Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F',
	'1608' : 'The psk key must be between 8 and 63 characters long and can include spaces and symbols, or 64 Hex (0-F) only',
	'1609' : 'Setting ssid name repeated with others',
	'1610' : 'SSID length is invalid. The maximum ssid length is 32 and the minimum ssid length is 1.',
	'1611' : 'Invalid wep key value. Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F',
	'1612':'Invalid key.\nKeys length should be 10 Hex [0-9] or [a-f] or [A-F] chars.\nThe default key must have value, other key can be empty.',
	'1613':'Invalid key.\nKeys length should be 26 Hex [0-9] or [a-f] or [A-F] chars.\nThe default key must have value, other key can be empty.',
	'1801' : 'end time cannot be less than the start time.',
	'2001' : 'wrong username.',
	'2002' : 'wrong password.',
	'2004' : 'Current Password is invalid.',
	'2005' : 'The new passwords you entered do not match.  Please try again.',
	'2006' : 'Idle time of the numbers you entered are invalid. The number has to be an integer between 1-99.',
	'2007' : 'Insufficient permission',
	'2201' : 'Invalid portrange (min > max)!',
	'2202' : 'not in the lan range',
	'2203' : 'IP conflict with management',
	'2301' : 'IP address duplicate',
	'2302' : 'MAC address duplicate',
	'2501' : 'invalid gateway',
	'2502' : 'invalid metric',
	'2503' : 'route conflict',
	'2504' : 'invalid IP or netmask setting',
	'2505' : 'invalid description',
	'2506' : 'can not reslove the destination ip',
	'2507' : 'static route configure faild.',
	'2601' : 'invalid mail server address',
	'2602' : 'invalid mail address',
	'2701' : 'FTP account has more than 10 accounts',
	'2702' : 'FTP accounts have been registered',
	'2801' : 'Domain name should not contain the http',
	'2802' : 'Domain length must between 4-64'
};

var alertErrorCode={
	'fw_ddnsWebsite':"No DDNS Service selected.",
	'fw_portmapNoSpace': "All entries are full.Please remove some entries then try again.",
	'lang_DeleteWaring':"Do you want to clear entry",
	'fw_portmapDeleteWaring':'Do you want to clear all entries?',
	'fw_macFilterBroad':'Invalid MAC address, it is a broadcast address.',
	'fw_macFilterBlank':'Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A(a)-F(f)',
	'fw_macFilterMulticastAddress':'Invalid MAC address, it is a multicast address.',
	'fw_macFilterConflit':'This MAC has already been added',
	'WpsConficWep':'Changing your security type will disable WPS',
	'WpsConficWepconfirm':'WPS is disabled due to your wireless security type',
	'WpsConficWepSsid':'WPS is disabled since you have hidden your network name(SSID) and due to your wirless security type',
	'WpsConficSsid':'WPS is disabled because you have hidden your network name(SSID)',
	'WpsConficwepsecurity':'WPS is disabled due to your wirless security type',
	'TurnOnWpsConficssidwepsecurity':'Turning on WPS will un_hide your network name(SSID) and change your security type to WPA-PSK[TKIP]+WPA2-PSK[AES].Your current network password will work just fine',
	'TurnOnWpsConficssid':'Turning on WPS will un_hide your network name(SSID)',
	'TurnOnWpsConficwepsecurity':'Turning on WPS will change your security type to WPA-PSK[TKIP]+WPA2-PSK[AES].Your current network password will work just fine',
	'InvalidPin':'Invalid PIN! The device PIN is eight numeric digits. Please verify and enter again',
	'PinChecksumFailed':'PIN checksum failed! Please verify and enter a valid PIN.',
	'PassPhrase_Blank' : 'Please enter a PassPhrase!',
	'ut_dmzInputServerBlank':"Please enter the IP address before enabling DMZ.",
	'ut_dmzInputServerWrongIp':"The number in ip address entry box should be between 0 - 255.",
	'ut_dmzInputServerConflitIp':"The host IP address is invalid. It should not be the Router's LAN IP.",
	'qos_delete' : 'Please select items to delete.',
	'qos_edit' : 'Please select an item to edit.',
	'qos_blank' : 'Please enter a number!',
	'qos_comment_blank' : 'Please enter Description of the refused sites !',
	'qos_timeschedname_blank' : 'Please enter Schedule Description!',
	'qos_invalid' : 'Invalid number,Must be 0123456789!',
	'qos_limit' : 'Invalid number, the number must be great than 0 and less than 100!',
	'qos_minmax' : 'Invalid number, the %BWMin must not be great than %BWMax!',
	'qos_sum' : 'The sum of all %BWMin can not be over 100!',
	'site_name' : 'input site name,please',
	'PWDTooShort':'Password length is invalid. The maximum password length is 12 and the minimum password length is 3.',
	'NewAndConfirmPasswdNotSame':'New Password and Confirm New Password fields do not match',
	'WebIdleTimeOutInvalid':'Idle time of the numbers you entered are invalid. The number has to be an integer between 1-99',
	'DdnsInvalidHostname':'Invalid hostname',
	'SysUpgradeCRCFaild' : 'CRC check faild, Please restart router and try again.',
	'SysUpgradeWrongIMG' : 'Invalid File',
	'SysUpgradeFail' : 'upgrade img file fail',
	'SysUpgradeUnknow' : 'Unknow error, please contact developer.',
	'ConfigLoadFaild' : 'Invalid Configuration file',
	'pleasechooseanitemedit' : 'Please select an item to edit.',
	'pleasechooseanitemedelete' : 'Please select an item to delete.',
	'URLBlankDetected' : 'A space detected in your keyword.',
	'URLERROR1' : 'The Keyword can not be a single character.',
	'DoubleURL' : 'This rule already exists in the block list.',
	'UrlAllNumbers' : 'Using pure numbers as keyword may cause some regular website can not be visited! We recommend you use the integrate domain name or url as your keywords.',
	'UrlInvaildKeywords' : 'Invaild Keywords, try integrate domain name or url please. ',
	'downloader_U_bigger' : 'The usb disk is not enough.',
	'downloader_U_existent' : 'The usb disk is not existent.',
	'downloader_max_num' : 'Has reach the max num of task.',
	'downloader_right_file': 'Please add a right BT torrent.',
	'downloader_file_existent' : 'The file is existent.',
	'downloader_select'				 : 'You select nothing.',
	'downloader_wan_status'    : 'Please check your wan port and network status.',
	'WlreNotAuto'  : 'Wireless repeating function cannot be used with Auto channel.\n Please change your channel settings before you enable Wireless Repeating Function',
	'InvalidCharacter' : 'Invalid Character(s) found">"!',
	'DeviceNameBlank':'Device name can not be empty.',
	'DeviceNameDul':'Duplicate Name!',
	'InvalidTimeoutNum':'Only input positive integer',
	'InvalidTimeoutLong':'Refresh time is too short or too long',
	'OutOfRules':'Out of max rules.',
	'DomainLength' : 'Domain length of at least 2'
};
var left_menu={
	'lang_status'				: "Running Status",
	'lang_routerstatus'			: "Router Status",
	'lang_dhcp'					: "Client List",
	
	'lang_wizard'               : "Setup Wizard" ,
	
	'lang_wansetup_new'			: "Network Setup",
	'lang_lansetup'				: "LAN Setup",
	'lang_adsl'                 : "WAN Setup",
	
	'lang_wirelessmain'			: "Wireless Setup",
	'lang_wirelesssetup' 		: "Basic Setup",
	'lang_wirelessguest'        : "Guest Network",
	'lang_WifiProtected'		: "WPS Setup",
	'lang_wirelessadvanced'     : "Advanced Setup",
	'lang_wirelessrepeater'     : "Repeater Function",
	'lang_AccessPoint'			: "Use as an Access Point",
	'lang_wirelesssta'			: "Use as a STA",
	'lang_wirelessmode'			: "Advanced Mode",
	
	'lang_qosmain' 				: "Media Features ",
	'land_qosservice' 			:  "QOS Setup",
	'land_samba'				: "Samba Setup",
	'lang_ftpdsetting'          : "Ftpd Setup",
	'lang_usbhttp'              : 'HTTP Access Storage',
	'lang_usbdlna'              : 'DLNA',
	
	'lang_firewall'				: "Security Options",
	'land_parent_control'		:'Parental Controls',
	'lang_wansetup'			    : "WAN Setup",
	'lang_macfiltering'			: "MAC Address Filtering",
	'lang_urlfilter'            : "Block Sites",

	
	'lang_advanced'             : "Advanced Setup",
	'lang_ddns'					: "DDNS",
	'lang_VirtualServers'		: "Virtual Servers",
	'lang_staticroute'          : "Static Routes",
	'lang_upnp'					: "UPnP Setup",
	'lang_porttrigger'          : "Port Triggering",
	
	'lang_utilities'			: "Utilities",
	'lang_reboot'				: "Router Reboot",
	'lang_restrore_setting'		: "Backup Setup",
	'lang_FirmwareUpdate'		: "Firmware Update",
	'lang_SystemSetting'		: "System Settings",
	'lang_SelfHealing'			: "Self Healing",
	'lang_SecurityLog'			: "System Log",
	'lang_Email'				: "E-mail",
	
	'lang_download'					: "Downloader",
	'lang_logout'    		    : 'Logout'
};

var top_menu={
	'lang_Home'                 : 'Home',
	'lang_Help'    			    : 'Help',
	'lang_Logout'    		    : 'Logout',
	'lang_Login'                : 'Login',
	'lang_Status'    			: 'Internet Status:',
	'lang_wanConnStatusDown'    : 'Not Connected',
	'lang_wanConnStatusUp'      : 'Connected',
	'lang_logoWelcome'			: 'Welcome',
	'lang_zh_cn'				: '简体中文',
	'lang_en_us'				: 'English',
	'lang_language_select'		: 'Language:'
};
var footer={
	'lang_hareware_version'		:'Hardware Version：	V 1.0.0',
	'lang_software_version'		: 'Software Version:	V 1.0.0',
	'lang_rights_reserved'		: '2013 &copy; All Rights Reserved'
};
var title_show = {
	'login.html'    					: 'Login',
	
	'deviceinfo.html'    			    : 'Running Status > Router Status',
	'lan_dhcp.html'						: "Running Status > Client List",
	
	'WIZ_sel.html'                      : "Setup Wizard" ,
	
	'lan_set.html'						: "Network Setup > LAN Setup",
	'wanadsl.html'						: "Network Setup > WAN Setup",
	
	'wireless_basic.html'				: "Wireless > Basic Setup",
	'wireless_wps.html'					: "Wireless > WPS Setup",
	'wireless_guest.html'              	: "Wireless > Guest Network",
	'wireless_advanced.html'		   	: "Wireless > Advanced Setup",
	'wireless_repeater.html'		   	: "Wireless > Wireless Repeater",
	'ap_enable.html'					: "Wireless > Use as an Access Point",
	'wireless_sta.html'                 : "Wireless > Use as a STA",
	
	'qos_service.html'					: "Media Features > QoS Setup",
	'samba.html'					    : "Media Features > Samba Setup",
	'ftpd_setting.html'					: "Media Features > Ftpd Setup",
	'usb_http.html'					    : "Media Features > HTTP Access Storage",
	'usb_dlna.html'					    : "Media Features > DLNA",
	
	'parent_control.html'				: "Security Options > Parental Controls Setup",
	'fw_wansetup.html'				    : "Security Options > WAN Setup",
	'fw_macfilter.html'					: "Security Options > MAC Address Filtering ",
	'fw_urlfilter'                      : "Security Options > Block Sites",
	
	'fw_portmap.html'					: "Advanced Setup > Virtual Servers ",
	'fw_ddns.html'						: "Advanced Setup > DDNS",
	'upnp.html'							: "Advanced Setup > UPnP Setup",
	'porttrigger.html'               	: "Advanced Setup > Port Triggering",
	'str_route.html'                    : "Advanced Setup > Static Routes",
	
	'ut_main.html'						: "Utilities >",
	'ut_reboot.html'					: "Utilities > Router Reboot",
	'ut_prev.html'						: "Utilities > Backup Setup",
	'ut_firmware.html'					: "Utilities > Firmware Update",
	'fw_log.html'						: "Utilities > System log ",
	'fw_email.html'						: "Utilities > E-mail",
	'ut_system_set.html'				: "Utilities > System Settings",
	'ut_self_healing.html'				: "Utilities > Regular Maintenance",
	'download_bt.html' 					: "Download offline",
	'login_guest.html'    				: 'Guest Login',
	'login_guest_success.html'    		: 'Guest Login > Success'
} 

var variable={
	'lang_yes' : 'Enabled',
	'lang_no'  : 'Disabled',
	'lang_none'  : 'None',
	'land_both': 'BOTH',
	'land_delete': 'Delete',
	'land_auto':'Auto',
	'land_off':'OFF',
	'land_toomany1' : 'Duplicate Administrator',
	'land_toomany2' :	'This device is managed by',
	'land_toomany3' :	'currently!!',
	'land_qosRuleType' : 'Downlink ',
	'land_qosRuleType1' : 'Uplink ',
	'land_qosAddressType1': 'Destination IP',
	'land_qosAddressType2': 'Source IP',
	'land_qosAddressType3': 'Source MAC',
	'land_qosAddressType4': 'Any',
	'land_qosAddrFilter1' : 'Destination',
	'land_qosAddrFilter2' : 'Source',
	'land_qosAddrFilter3' : 'Destination or Source',
	'land_qosAddrFilter4' : 'Any',
	'land_qosClass1'	:'Highest',
	'land_qosClass2'	:'High',
	'land_qosClass3'	:'Medium',
	'land_qosClass4'	:'Low',
	'land_qosClass5'	:'Lowest',
	'land_dhcp' : 'DHCP',
	'land_stat' : 'STATIC',
	'land_pppoe' : 'PPPOE',
	'land_pptp' : 'PPTP',
	'land_l2tp' : 'L2TP',
	'land_bt_pause' : 'pause',
	'land_bt_begin' : 'start',
	'land_bt_wait'  : 'wait',
	'land_option'	:'--Please select--',
	'land_enable'	:'Enable',
	'land_disable'	:'Disable',
	'land_yes' : 'Yes',
	'land_no'  : 'No',
	'lang_mtu_limit_pppoe':'(616~1492 bytes)',
	'lang_mtu_limit_pptp':'(616~1436 bytes)',
	'lang_mtu_limit_l2tp':'(616~1430 bytes)'
};

var data_language={
'deviceinfo.html':{
	InnerHTML:{
		'lang_deviceinfo' : 'Running Status > Router Status',
		'lang_version_info' : 'System Info',
		'lang_HardwareVersion' : 'Hardware Version',
		'lang_SysFirmwareVersion' : 'Firmware Version',
		'lang_BootVersion' : 'Boot Version',
		'lang_serial' : 'Serial No.',
		'lang_time' : 'Time and Date',
		
		'lang_lan_set' : 'LAN Port',
		'lang_LanMACAddress' : 'MAC Address',
		'lang_LanIPAddress' : 'IP Address',
		'lang_LanSubnetMask' : 'IP Subnet Mask',
		'lang_dhcp_server' : 'DHCP Server',
		
		'lang_wan_set' : 'Internet Port',
		'lang_WanFacDefMACAddr' : 'MAC Address',
		'lang_WanNetLink' : 'Internet Access Mode',
		'lang_WanIPAddress' : 'IP Address',
		'lang_WanSubnetMask' : 'IP Subnet Mask',
		'lang_WanDefaultGateway' : 'Default Gateway',
		'lang_WanDomainNameServer' : 'Domain Name Server',
		
		'lang_WirelessPort_2G' : 'Wireless Port(2G)',
		'lang_WirelessPort_5G' : 'Wireless Port(5G)',
		'lang_WirelessNetworkName_2G' : 'Wireless Network Name (SSID)',
		'lang_WirelessNetworkName_5G' : 'Wireless Network Name (SSID)',
		'lang_WirelessRegulatory_2G' : 'Region',
		'lang_WirelessRegulatory_5G' : 'Region',
		'lang_WirelessChannel_2G' : 'Wireless Channel',
		'lang_WirelessChannel_5G' : 'Wireless Channel',
		'lang_Mode_2G' : '802.11 Mode',
		'lang_Mode_5G' : '802.11 Mode',
		'lang_WirelessRadio_2G' : 'Wireless Radio',
		'lang_WirelessRadio_5G' : 'Wireless Radio',
		'lang_WirelessSSIDBroad_2G' : 'Broadcast Name',
		'lang_WirelessSSIDBroad_5G' : 'Broadcast Name',
		'lang_WirelessAPIsolate_2G' : 'Wireless Isolation',
		'lang_WirelessAPIsolate_5G' : 'Wireless Isolation',
		'lang_WirelessWPSEnable_2G' : 'Wi-Fi Protected Setup',
		'lang_WirelessWPSEnable_5G' : 'Wi-Fi Protected Setup',
		'lang_WirelessSecurityMode_2G' : 'Wireless Security Mode',
		'lang_WirelessSecurityMode_5G' : 'Wireless Security Mode'
	},
	value : {
		'lang_ShowStatistics' : 'Show Statistics',
		'Connect_Status' : 'Connection Status'
	},
	dynamic:['Disabled','WPA/WPA2-Personal(PSK)','128bit WEP','64bit WEP']
},  

'status_statistics.html':{
	InnerHTML :{
		'lang_statistic_information' :'Statistic Information',
		'lang_SysUpTime' : 'System Up Time',
		'lang_port' : 'Port',
		'lang_status' : 'Status',
		'lang_txpkts' : 'TxPkts',
		'lang_rxpkts' : 'RxPkts',
		'lang_collisions' : 'Collisions',
		'lang_txbs' : 'Tx Bytes',
		'lang_rxbs' : 'Rx Bytes',
		'lang_up_Time' : 'Up Time',
		'lang_wan' : 'WAN',
		'lang_lan1' : 'LAN',
		'lang_lan2' : 'LAN 2',
		'lang_lan3' : 'LAN 3',
		'lang_lan4' : 'LAN 4',
		'lang_wlan_2G' : 'WLAN (2.4G) ',
		'lang_wlan_5G' : 'WLAN (5G) ',
		'lang_poll_interval' : 'Poll Interval',
		'lang_secs' : '(1~86400 secs)'
	},
	value : {
		'submit' : 'Set Interval',
		'button' : 'Stop'
	}
},

'lan_set.html':{
	InnerHTML:{
		'lang_lan_set1' : 'Network Setup > LAN Setup',
		'lang_lan_tcpip' : 'LAN TCP/IP Setup',
		'lang_routerIPaddr' : 'IP Address >',
		'lang_submask' : 'Subnet Mask >',
		'lang_DhcpServer' : 'Use Router as DHCP Server',
		'lang_lanName1': 'Local Domain Name >',
		'DhcpipaddrStart' : 'IP Pool Starting Address >',
		'DhcpipaddrEnd' : 'IP Pool Ending Address >',
		'DhcpleaseT' : 'Lease Time >',
		'lang_AddressReservation' : 'Address Reservation',
		'lang_IpAddr' : 'IP Address',
		'lang_DeviceName' : 'Device Name',
		'lang_MacAddr' : 'MAC Address'
	},
	value:{
		'Add' : 'Add',
		'Edit' : 'Edit',
		'Delete' : 'Delete',
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'lan_reserv_add.html':{
	InnerHTML : {
		'lang_AddressReservation' : 'Network Setup > LAN Setup > Address Reservation',
		'editresever_show'  :  'Address Reservation Table',
		'td_addr_reser_head2' : 'IP Address',
		'td_addr_reser_head3' : 'Device Name',
		'td_addr_reser_head4' : 'MAC Address',
		'lang_edit_ip' : 'IP Address',
		'Dv_mac_addr_show' : 'MAC Address',
		'Dv_name_show' : 'Device Name'
	},
	value : {
		'Refresh' : 'Refresh',
		'Cancel' : 'Cancel',
		'Add' : 'Add'
	}
},

'lan_dhcp.html':{
	InnerHTML:{
		'lang_dhcp_header' : 'Running Status > Client List',
		'td_lanClients_head2' : 'IP Address',
		'td_lanClients_head1' : 'Host Name',
		'td_lanClients_head3' : 'MAC Address'
	},
	value:{
		'refresh' : 'Refresh'
	}
},

'WIZ_sel.html':{
	InnerHTML : {
		'lang_title' : 'Setup Wizard',
		'lang_introduction' : 'The Smart Setup Wizard can detect the type of Internet connection that you have.Do you want the Smart Setup Wizard to try and detect the connection type now?',
		'lang_yes':'&nbsp;Yes.',
		'lang_no':'&nbsp;No. I want to configure the router myself.'
	},
	value : {
		'lang_next' : 'Next'
	}
},

'WIZ_cfm.html':{
	InnerHTML : {
		'lang_title' : 'Setup Wizard',
		'lang_link_status' : 'Please Check the Connections to the Internet WAN Port and Cable/DSL Modem.',
		'lang_wait_moment' : ' Detecting the Internet Connection!!!This process can take a minute or two. please wait...'
	},
	value : {
		'lang_Retry' : 'Try again',
		'quit' : 'Quit'
	}
},

'WIZ_wait.html':{
	InnerHTML : {
		'lang_title':'Setup Wizard',
		'lang_wait_moment' : 'This process can take a minute or two; please wait...'
	}
}, 

'WIZ_fix.html':{
	InnerHTML : {
		'lang_title':'Setup Wizard',
		
		'lang_dhcp_detected' : 'Dynamic IP (DHCP) detected',
		'langHostName':'Account Name (If Required)',
		
		'lang_pppoe_detected' : 'PPPoE detected',
		'langLoginName' : 'Login :', 
		'langLoginPassword' : 'Password :',
		
		'lang_staticip_detected' : 'Static (fixed) IP detected',
		'langStaticIPADD':'Internet IP Address',
		'langStaticIPAddress':'IP Address',
		'langStaticIPSubnetMask':'IP Subnet Mask',
		'langStaticIPDefaultGateway':'Gateway IP Address',
		'langStaticIPDNS':'Domain Name Server (DNS) Address',
		'langStaticIPPDNS':'Primary DNS',
		'langStaticIPSDNS':'Secondary DNS'
	},
	value : {
		'Cancel' : 'Cancel',
		'Apply':'Apply'
	}
}, 

'BRS_success.html':{
	InnerHTML : {
		'lang_title':'Setup Wizard > success',
		'lang_ssid':'Wireless Network Name (SSID)',
		'lang_password':'Network Key (Password)',
		'lang_ssid5':'Wireless Network Name (SSID)',
		'lang_password5':'Network Key (Password)'
	},
	value : {
		'lang_to_internet' : 'Take me to the Internet'
	}
}, 

'WIZ_wireless.html':{
	InnerHTML : {
		'lang_title':'Setup Wizard',
		'lang_ssid':'Wireless Network Name (SSID)',
		'lang_password':'Network Key (Password)',
		'lang_ssid5':'Wireless Network Name (SSID)',
		'lang_password5':'Network Key (Password)',
		'lang_help1':'8 to 63 characters',
		'lang_help2':'8 to 63 characters'
	},
	value : {
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'wanadsl.html':{
	InnerHTML : {
		'langWan' : 'Network Setup > WAN  Setup',
		'idLoginContext' : 'Does your Internet Connection Require A Login?',
		'idLoginYesContext' : 'Yes',
		'idLoginNoContext' : 'No',
		'langTypeConfig' : 'Internet Service Provider',
		'idAccountNameRequiredContext' : 'Account Name (If Required)',
		'idDomainNameRequiredContext' : 'Domain Name (If Required)',
		'idL2TPPPTPLoginContext' : 'Login',
		'idL2TPPPTPPasswordContext' : 'Password',
		'idPPPOEServiceNameContext' : 'Service Name (If Required)',
		'idL2TPPPTPModeContext' :'Connection Mode',
		'idL2TPPPTPTimoutContext' : 'Idle Timeout (In minutes)',
		'idL2TPPPTPIPAddressContext' : 'My IP Address',
		'idL2TPPPTPSubnetContext' : 'Subnet Mask',
		'idL2TPPPTPServerAddressContext' : 'Server Address',
		'idL2TPPPTPGatewayContext' : 'Gateway IP Address',
		'idL2TPPPTPIdNameContext' : 'Connection ID/Name',
		'idInternetIPAddressContext' : 'Internet IP Address',
		'idUseDHCPContext' : 'Get Dynamically From ISP',
		'idUseStatcContext' : 'Use Static IP Address',
		'idStaticIPAddressContext' : 'IP Address',
		'idPPPOEDualIPContext' :'Use Dual IP Address',
		'idPPPOEIPAddress2' : 'IP Address',
		'idStaticSubnetMaskContext' : 'IP Subnet Mask',
		'idStaticGatewayContext' : 'Gateway IP Address',
		'idDNSContext' : 'Domain Name Server (DNS) Address',
		'idDNSAutomatically' : 'Get Automatically From ISP',
		'idDNSManually' : 'Use These DNS Servers',
		'idDNSPrimaryContext' : 'Primary DNS',
		'idDNSSecondaryContext' : 'Secondary DNS',
		'idMACAddressContext' : 'Router MAC Address',
		'idMacDefault' : 'Use Default Address',
		'idMacComputer' : 'Use Computer MAC Address',
		'idMacThis' : 'Use This MAC Address',
		'idAlwaysOn' : 'Always On',
		'idDialOnDemand' : 'Dial On Demand',
		'idManuallyConnect' : 'Manually Connect',
		'lang_mtu':'MTU Size'
	},
	value : {
		'idApply' : 'Apply',
		'idCancel' : 'Cancel'
	}
},

'wireless_basic.html':{
	InnerHTML:{
		'lang_basic' : 'Wireless Setup > Basic Setup',
		'lang_basic_introduction' : 'Region Selection',
		'lang_Network_Adapter' : 'Adapter > ',
		'lang_Region' : 'Region > ',
		'lang_wireless_network' : 'Wireless Network',
		'lang_channel' : 'Wireless Channel >',
		'lang_other_channel' : 'Extension Channel >',
		'lang_SSID' : 'SSID >',
		'lang_mode' : 'Wireless Mode >',
		'lang_2040' : 'Bandwidth >',
		'langEnableRadioContext':'Enable Wireless Network',
		'langEnableSSIDContext':'Enable SSID Broadcast',
		'langEnableIsolatedContext1':'Enable Wireless Isolation',
		'langEnableRadioContext5':'Enable Wireless Network',
		'langEnableSSIDContext5':'Enable SSID Broadcast',
		'langEnableIsolatedContext15':'Enable Wireless Isolation',
		'langEnableIsolatedContext':'Protected Mode >',	
		'lang_channel5' : 'Wireless Channel >',
		'lang_other_channel5' : 'Extension Channel >',
		'lang_SSID5' : 'SSID >',
		'lang_mode5' : 'Wireless Mode >',
		'lang_20405' : 'Bandwidth >',
		'langEnableSSIDContext5':'Broadcast SSID >',
		'langEnableIsolatedContext5':'Protected Mode >',	
		'lang_off' : 'OFF',
		'lang_off5' : 'OFF',
		'lang_IsolatedOff' : 'Off',
		'lang_IsolatedOn' : 'On',
		'lang_IsolatedOff5' : 'Off',
		'lang_IsolatedOn5' : 'On',
		'lang_WmmOff' : 'Off',
		'lang_WmmOn' :'On',
		'lang_WmmOff5' : 'Off',
		'lang_WmmOn5' :'On',
		'lang_Rate' : 'Max Transmission Rate :',
		'lang_Rate5' : 'Max Transmission Rate :',
		
		'lang_Profile_securitynum' : 'Security Options--Profile ',
		'lang_SecurityOptions' : 'Security Options :',
		'lang_SecurityEncryptionWep' : 'Security Encryption(WEP)',
		'lang_AuthenticationType' : 'Authentication Type :',
		'lang_EncryptionStrength' : 'Encryption  Strength :',
		'lang_SecurityEncryptionWepKey' : 'Security Encryption(WEP) Key',
		'lang_key1' : 'Key1',
		'lang_key2' : 'Key2',
		'lang_key3' : 'Key3',
		'lang_key4' : 'Key4',
		'lang_SecurityOptionsWpaPsk' : 'Security Options(WPA-PSK)',
		'lang_PassPhraseWpaPsk' : 'PassPhrase :',
		'lang_charactersWpaPsk' : '(8-63 characters or 64 hexdigits)',
		'lang_SecurityOptionsWpa2Psk' : 'Security Options(WPA2-PSK)',
		'lang_PassPhraseWpa2Psk' : 'PassPhrase :',
		'lang_charactersWpa2Psk' : '(8-63 characters or 64 hexdigits)',
		'lang_SecurityOptionsWpaPskWpa2Psk' : 'Security Options(WPA-PSK+WPA2-PSK)',
		'lang_PassPhraseWpaPskWpa2Psk' : 'PassPhrase :',
		'lang_charactersWpaPskWpa2Psk' : '(8-63 characters or 64 hexdigits)',
		'lang_automatic' : 'Automatic',
		'lang_shared' : 'Shared Key',
		'lang_length64' : '64 bits',
		'lang_length128' : '128 bits',
		'lang_passphrase' : 'PassPhrase'
	},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel',
		'lang_generate' : 'Generate'
	}
},

'wireless_wps.html':{
	InnerHTML:{
		'lang_Wps' : 'Wireless Setup > WPS Setup',
		'lang_Network_Adapter' : 'Adapter > ',
		'lang_wps_setup' : 'Wi-Fi Protected Setup (WPS)',
		'lang_wps_off' : 'Disabled',
		'lang_wps_on' : 'Enabled',
		'lang_wps_button' : 'WPS hardware button',
		'lang_wps_ButtonOn' : 'Enabled',
		'lang_wps_ButtonOff' : 'Disabled',
		'lang_wps_method1' : '1) Personal Information Number (PIN) Method',
		'lang_wps_tip3' : 'Enter Client Device PIN',
		'lang_routerpin' : 'Router PIN:',
		'lang_wps_method2' : '2) Push Button Configuration (PBC) Method',
		'lang_wps_method3' : '3) Manual Configuration Method',
		'lang_wps_tip6' : 'For client devices without WPS, manually configure the device with the following settings:',
		'lang_network_name' : 'Network Name (SSID):',
		'lang_wireless_security' : 'Wireless Security:',
		'lang_configure_security' : 'Please configure wireless security',
		'lang_network_authentication' : 'Network Authentication:',
		'lang_data_encryption' : 'Data Encryption:',
		'lang_network_key' : 'Network Key',
		'lang_wl_security' : 'Wireless Security',
		'lang_network_name5' : 'Network Name (SSID):',
		'lang_wireless_security5' : 'Wireless Security:',
		'lang_configure_security5' : 'Please configure wireless security',
		'lang_network_authentication5' : 'Network Authentication:',
		'lang_data_encryption5' : 'Data Encryption:',
		'lang_network_key5' : 'Network Key',
		'lang_wl_security5' : 'Wireless Security'
	},
	dynamic:['Not configured','Configured','Auto'],
	value:{
		'genrate_pin' : 'Generate New PIN',
		'restore_pin' : 'Restore Default PIN',
		'start_PBC' : 'Start PBC',
		'lang_apply' : 'Apply',
		'enroll' : 'Enroll',
		'BUTTON_NEXT' : 'Next'
	}
},

'wireless_wps_show.html':{
	value:{
		'lang_ok' : 'Ok',
		'lang_close' : 'Cancel'
	},
	dynamic:['Initiating - Please start WPS in client device within 2 minutes.','Processing WPS start...','Success - The device is connected to the Router','Fail due to WPS message exchange error!','Fail due to WPS time out!','Fail due to WPS session overlap','Associating with access point...']
},

'wireless_guest.html':{
	InnerHTML : {
		'lang_guest' : 'Wireless Setup > Guest Network',
		'lang_Network_Adapter' : 'Adapter: ',
		'lang_NetworkProfiles' : 'Network Profiles',
		'lang_Scheme' : 'Scheme',
		'lang_SSID' : 'SSID',
		'lang_Security' : 'Security',
		'lang_Apply' : 'Apply',
		'lang_BroadcastSSID' : 'SSID Broadcast',
		'lang_Profile_wireless' : 'Wireless Settings--Profile ',
		'lang_Profile_securitynum' : 'Security Options--Profile ',
		'lang_EnableGuestNetwork' : 'Enable Guest Network',
		'lang_EnableSSIDBroadcast' : 'Enable SSID Broadcast',
		'lang_AllowGuest' : 'Allow Guest to access My Local Network',
		'lang_EnableIsolation' : 'Enable Wireless Isolation',
		'lang_EnableWmf' : 'Enable Broadcom WMF',
		'lang_GuestName' : 'Guest Wireless Network Name(SSID):',
		'lang_SecurityOptions' : 'Security Options :',
		'lang_SecurityEncryptionWep' : 'Security Encryption(WEP)',
		'lang_AuthenticationType' : 'Authentication Type :',
		'lang_EncryptionStrength' : 'Encryption  Strength :',
		'lang_SecurityEncryptionWepKey' : 'Security Encryption(WEP) Key',
		'lang_key1' : 'Key1',
		'lang_key2' : 'Key2',
		'lang_key3' : 'Key3',
		'lang_key4' : 'Key4',
		'lang_SecurityOptionsWpaPsk' : 'Security Options(WPA-PSK)',
		'lang_PassPhraseWpaPsk' : 'PassPhrase :',
		'lang_charactersWpaPsk' : '(8-63 characters or 64 hexdigits)',
		'lang_SecurityOptionsWpa2Psk' : 'Security Options(WPA2-PSK)',
		'lang_PassPhraseWpa2Psk' : 'PassPhrase :',
		'lang_charactersWpa2Psk' : '(8-63 characters or 64 hexdigits)',
		'lang_SecurityOptionsWpaPskWpa2Psk' : 'Security Options(WPA-PSK+WPA2-PSK)',
		'lang_PassPhraseWpaPskWpa2Psk' : 'PassPhrase :',
		'lang_charactersWpaPskWpa2Psk' : '(8-63 characters or 64 hexdigits)',
		'lang_automatic' : 'Automatic',
		'lang_shared' : 'Shared Key',
		'lang_length64' : '64 bits',
		'lang_length128' : '128 bits',
		'lang_passphrase' : 'PassPhrase'
	},
	value:{
		'lang_apply1' : 'Apply',
		'lang_cancle' : 'Cancel',
		'lang_generate' : 'Generate'
	}
},

'login_guest.html':{
	InnerHTML:{
		'lang_zh_cn' : '中文 ', 
		'lang_en_us' : 'English',
		'land_password'  : 'Password:',
		'land_language'   : 'Language:',
		'lang_login_failed' : 'Login Error !!',
		'lang_login_tip' : 'Guest Access is a feature that allows users to access the Internet but limits access to the home network. Please ask the network administrator for the Guest Access password and enter it below.'
	},
	value:{
		'lang_apply' : 'Login',
		'lang_cancle' : 'Reset'
	}
},
  
'login_guest_success.html':{
	InnerHTML:{
		'lang_login_guest_success' : 'Success! You may now open a web browser and surf the Internet.'
	}
},  

'wireless_advanced.html':{
	InnerHTML : {
		'lang_AdvancedWireless' : 'Wireless Setup > Advanced Setup',
		'lang_Network_Adapter' : 'Adapter : ',
		'lang_EnableBcmAcs' : 'Enable Broadcom ACS',
		'lang_EnableWMF' : 'Enable Broadcom WMF',
		'lang_EnableXPress' : 'Enable Broadcom XPress&#8482; Technology',
		'lang_EnablePhyWatchdog' : 'Enable Broadcom PHY Watchdog',
		'lang_FragmentationLength' : 'Fragmentation Length (256-2346)',
		'lang_CTS_RTS_Threshold' : 'CTS/RTS Threshold (1-2347)',
		'lang_PreambleMode' : 'Preamble Mode',
		'idShortPreamble':'Short Preamble',
		'idLongPreamble':'Long preamble',
		'langPower':'Transmit Power Control',
		'lang_list_disc':'Wireless Card Access List'
	},
	value : {
		'wiread_apply' : 'Apply',
		'wiread_cancel' : 'Cancel',
		'BUTTON_SetupList':'Setup Access List'
	}	
},

'wireless_advanced_list.html':{
	InnerHTML : {
		'lang_AdvancedWireless' : 'Wireless Setup > Advanced Setup > Wireless Card Access List',
		'lang_AccessControl' : 'Turn Access Control On',
		'lang_MacAddress' : 'Mac Address',
		'lang_Description' : 'Device Name'
	},
	value : {
		'wiread_apply' : 'Apply',
		'wiread_cancel' : 'Cancel',
		'wiread_add' : 'Add',
		'wiread_edit' : 'Edit',
		'wiread_delete' : 'Delete'
	}	
},

'wireless_advanced_edit.html':{
	InnerHTML : {
		'lang_AdvancedWireless' : 'Wireless Setup > Advanced Setup > Wireless Card Access Setup',
		'lang_disc' : 'Available Wireless Cards',
		'lang_disc_2':'Wireless Card Entry(Max of terms:16)',
		'lang_MacAddress2' : 'Mac Address',
		'idDeviceName':'Device Name',
		'idMACAddress':'Mac Address',
		'lang_Description2' : 'Device Name'
	},
	value : {
		'wiread_addlist' : 'Add',
		'wiread_canceladd' : 'Cancel',
		'wiread_refresh' : 'Refresh',
		'edit_accept':'Apply',
		'edit_cancel':'Cancel'
	}	
},

'wireless_repeater.html':{
	InnerHTML : {
		'lang_disc' : 'Wireless Setup > Wireless Repeater',
		'lang_repeater_context' : 'This page leads you to set your wireless router repeater mode. You can configure your router to repeater mode to make wireless signal cover more area, when an another wireless router runs in central basic station mode.',
		'lang_Network_Adapter' : 'Adapter: ',
		'lang_enable_repeater' : 'Enable Wireless Repeating Function',
		'lang_disable_clients' : 'Disable Wireless Clients Association',
		'lang_wireless_mac' : 'Wireless MAC of this router:',
		'lang_repeater_mode' : 'Wireless Repeater',
		'lang_repeater_ip_addr' : 'Repeater IP Address:',
		'lang_central_MAC' : 'Basic Station MAC Address: ',
		'lang_central_mode' : 'Wireless Basic Station',
		'lang_repeater1_MAC' : 'Repeater MAC Address 1: ',
		'lang_repeater2_MAC' : 'Repeater MAC Address 2: ',
		'lang_repeater3_MAC' : 'Repeater MAC Address 3: ',
		'lang_repeater4_MAC' : 'Repeater MAC Address 4: ',
		'lang_security1' : 'Security Options',
		'lang_security2' : 'Security Options :',
		'Security_Encryption_WEP' : 'Security Encryption(WEP)',
		'lang_auth_type' : 'Authentication Type :',
		'lang_enc_strength' : 'Encryption Strength :',
		'lang_enc_key' : 'Security Encryption(WEP) Key',
		'lang_key' : 'Key:',
		'lang_security_WPA_PSK' : 'Security Options(WPA-PSK)',
		'lang_wpa_passphrase' : 'PassPhrase :',
		'lang_wpa_note' : '(8-63 characters or 64 hexdigits)',
		'lang_security_WPA2_PSK' : 'Security Options(WPA2-PSK)',
		'lang_wpa2_passphrase' : 'PassPhrase :',
		'lang_wpa2_note' : '(8-63 characters or 64 hexdigits)',
		'lang_security_WPA_WPA2_PSK' : 'Security Options(WPA-PSK+WPA2-PSK)',
		'lang_wpa_wpa2_passphrase' : 'PassPhrase :',
		'lang_wpa_wpa2_note' : '(8-63 characters or 64 hexdigits)',
		'lang_length64' : '64 bits',
		'lang_length128' : '128 bits'
	},
	value : {
		'submit' : 'Apply',
		'cancel' : 'Cancel'
	}
},

'ap_enable.html':{
	InnerHTML:{
		'lang_mode_settings' : 'Wireless Setup > Use as an Access Point',
		'lang_advanced_feature' : 'ADVANCED FEATURE The Router can be configured to act strictly as an Access Point, bypassing all of the routing and firewall functions. To do so, select "Enable" and type in the IP address you want the Access Point to have.',
		'lang_moreInfo1' : 'More Info',
		'lang_ApEnable' : '	Enable / Disable >',
		'lang_ApOn' : 'Enable',
		'lang_ApOff' : 'Disable',
		'lang_SpecifyIP' : 'Specify IP Address >',
		'lang_Submask' : 'Subnet mask >',
		'lang_applyChange':'Applied Changes Successfully',
		'lang_seconds':'seconds remaining.'
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'wireless_sta.html':{
	InnerHTML:{
		'lang_title' : 'Wireless Setup > Use as a STA',
		'lang_Enable' : ' Use as a STA',
		'lang_Network_Adapter' : 'Select Mode ',	
		'lang_conn' : 'Connect to SSID',
		'lang_conn_status' : 'Connection Status',
		'lang_Profile_securitynum' : 'Security Options--Profile ',
		'lang_SecurityOptions' : 'Security Options',
		'lang_SecurityEncryptionWep' : 'Security Encryption(WEP)',
		'lang_AuthenticationType' : 'Authentication Type :',
		'lang_EncryptionStrength' : 'Encryption  Strength :',
		'lang_SecurityEncryptionWepKey' : 'Security Encryption(WEP) Key',
		'lang_key1' : 'Key1',
		'lang_key2' : 'Key2',
		'lang_key3' : 'Key3',
		'lang_key4' : 'Key4',
		'lang_SecurityOptionsWpaPsk' : 'Security Options(WPA-PSK)',
		'lang_PassPhraseWpaPsk' : 'PassPhrase :',
		'lang_charactersWpaPsk' : '(8-63 characters or 64 hexdigits)',
		'lang_SecurityOptionsWpa2Psk' : 'Security Options(WPA2-PSK)',
		'lang_PassPhraseWpa2Psk' : 'PassPhrase :',
		'lang_charactersWpa2Psk' : '(8-63 characters or 64 hexdigits)',
		'lang_SecurityOptionsWpaPskWpa2Psk' : 'Security Options(WPA-PSK+WPA2-PSK)',
		'lang_PassPhraseWpaPskWpa2Psk' : 'PassPhrase :',
		'lang_charactersWpaPskWpa2Psk' : '(8-63 characters or 64 hexdigits)',
		'lang_automatic' : 'Automatic',
		'lang_shared' : 'Shared Key'	
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_apply1' : 'Connection',
		'lang_cancle' : 'Cancel',
		'lang_generate' : 'Generate'
	}
},

'advancemode.html':{
	InnerHTML:{
		'lang_title' : 'Wireless Setup > Advance Mode',
		'lang_mode':'Mode >',
		'lang_Enable' : ' Use as a STA',
		'lang_Network_Adapter' : 'Select Mode ',	
		'lang_conn' : 'Connect to SSID',
		'lang_conn_status' : 'Connection Status',
		'lang_Profile_securitynum' : 'Security Options--Profile ',
		'lang_SecurityOptions' : 'Security Options',
		'lang_SecurityEncryptionWep' : 'Security Encryption(WEP)',
		'lang_AuthenticationType' : 'Authentication Type :',
		'lang_EncryptionStrength' : 'Encryption  Strength :',
		'lang_SecurityEncryptionWepKey' : 'Security Encryption(WEP) Key',
		'lang_key1' : 'Key1',
		'lang_key2' : 'Key2',
		'lang_key3' : 'Key3',
		'lang_key4' : 'Key4',
		'lang_SecurityOptionsWpaPsk' : 'Security Options(WPA-PSK)',
		'lang_PassPhraseWpaPsk' : 'PassPhrase :',
		'lang_charactersWpaPsk' : '(8-63 characters or 64 hexdigits)',
		'lang_SecurityOptionsWpa2Psk' : 'Security Options(WPA2-PSK)',
		'lang_PassPhraseWpa2Psk' : 'PassPhrase :',
		'lang_charactersWpa2Psk' : '(8-63 characters or 64 hexdigits)',
		'lang_SecurityOptionsWpaPskWpa2Psk' : 'Security Options(WPA-PSK+WPA2-PSK)',
		'lang_PassPhraseWpaPskWpa2Psk' : 'PassPhrase :',
		'lang_charactersWpaPskWpa2Psk' : '(8-63 characters or 64 hexdigits)',
		'lang_automatic' : 'Automatic',
		'lang_shared' : 'Shared Key',
		'lang_advanced_feature' : 'ADVANCED FEATURE The Router can be configured to act strictly as an Access Point, bypassing all of the routing and firewall functions. To do so, select "Enable" and type in the IP address you want the Access Point to have.',
		'lang_moreInfo1' : 'More Info',
		'lang_ApEnable' : '	Enable / Disable >',
		'lang_ApOn' : 'Enable',
		'lang_ApOff' : 'Disable',
		'lang_SpecifyIP' : 'Specify IP Address >',
		'lang_Submask' : 'Subnet mask >',
		'lang_applyChange':'Applied Changes Successfully',
		'lang_seconds':'seconds remaining.',
		'lang_repeaterSpecifyIP':'Specify IP Address',
		'lang_repeaterSubmask':'Subnet mask',
		'lang_Network_repeaterAdapter':'Select Mode',
		'repeater_25G':'2G and 5G',
		'lang_repeaterconn':'Connect to SSID',
		'lang_repeater_conn_status':'Connection Status',
		'lang_repeater_SecurityOptions':'Security Options',
		'lang_repeater_SecurityEncryptionWep':'Security Encryption(WEP)',
		'lang_repeater_AuthenticationType':'Authentication Type :',
		'lang_repeater_SecurityEncryptionWepKey':'Security Encryption(WEP) Key',
		'lang_repeater_SecurityOptionsWpaPsk':'Security Options(WPA-PSK))',
		'lang_repeater_PassPhraseWpaPsk':'PassPhrase:',
		'lang_repeater_charactersWpaPsk':'(8-63 characters or 64 hexdigits)',
		'lang_repeater_SecurityOptionsWpa2Psk':'Security Options(WPA2-PSK)',
		'lang_repeater_PassPhraseWpa2Psk':'PassPhrase:',
		'lang_repeater_charactersWpa2Psk':'(8-63 characters or 64 hexdigits)',
		'lang_repeater_SecurityOptionsWpaPskWpa2Psk':'Security Options(WPA-PSK+WPA2-PSK)',
		'lang_repeater_PassPhraseWpaPskWpa2Psk':'PassPhrase:',
		'lang_repeater_charactersWpaPskWpa2Psk':'(8-63 characters or 64 hexdigits)',
		'land_modeap':'AP Mode',
		'land_modesta':'STA Mode',
		'land_moderepeater':'Repeater Mode',
		'land_moderouter':'Router Mode'
		},
		
	value:{
		'lang_apply' : 'Apply',
		'lang_apply1' : 'Connection',
		'lang_cancle' : 'Cancel',
		'lang_generate' : 'Generate',
		'stascan':'Scan',
		'scan':'Scan'
	}
	
},

'upnp.html':{
	InnerHTML:{
		'lang_upnp'     : 'Advanced Setup > UPnP', 
		'lang_enable' : 'Turn UPnP On',
		'lang_UPnPPeriod' : 'Advertisement Period',
		'lang_UPnPTTL' : 'Advertisement Time To Live',
		'lang_inMimutes' : '(in minutes)',
		'lang_inHops' : '(in hops)',
		'land_UPnPTable' : 'UPnP Portmap Table',
		'land_UPnPTable1':'Active',
		'land_UPnPTable2':'Protocol',
		'land_UPnPTable3':'Int. Port',
		'land_UPnPTable4':'Ext. Port',
		'land_UPnPTable5':'IP Address',
		'land_UPnPTable6':'Description',
		'broadcast_time_range' : '(1-1440)',
		'hop_count' : '(1-255)'

	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel',
		'lang_Refresh':'Refresh'
	}
},

'porttrigger.html':{
	InnerHTML : {
		'lang_portforwd' : 'Advanced Setup > Port Triggering',
		'lang_EnablePortTrigger' : 'Enable Port Triggering',
		'lang_timeout' : 'Port Triggering Timeout(in minutes)',
		'timeout_range' : '(1-9999)',
		'idServerName' : 'Server Name',
		'idServiceType' : 'Service Type',
		'idRequiredConnection' : 'Required Inbound Connection',
		'idMaxrules'	: 'Max of rules: 32',
		'idServiceUser' : 'Service User'
	},
	value : {
		'submit' : 'Add Service',
		'edit' : 'Edit Service',
		'delete':'Delete Service',
		'apply' : 'Apply',
		'cancel' : 'Cancel'
	}
},

'porttrigger_edit.html':{
	InnerHTML : {
		'lang_custum_service' : 'Advanced Setup > Port Triggering > Port Triggering - Services',
		'lang_servicename' : 'Service Name',
		'lang_serviceuser' : 'Service User',
		'lang_any' : 'Any',
		'lang_singleaddress' : 'Single address',
		
		'lang_servicetype' : 'Service Type',
		'lang_triggerstartport' : 'Triggering Starting Port',
		'lang_triggerendport' : 'Triggering Ending Port',
		'idRequiredInboundConnection' : 'Required Inbound Connection',
		'lang_contype' : 'Connection Type',
		'lang_startport' : 'Starting Port',
		'lang_endport' : 'Ending Port'
	},
	value : {
		'submit' : 'Apply',
		'cancel' : 'Cancel'
	}
},

'qos_service.html':{
	InnerHTML:{		
		'lang_Qos' : 'Media Features > QoS Setup',
		'land_qosEnable' : 'Enable Qos >',
		'land_qosOn' : 'Enable',
		'land_qosOff' :'Disable',
		'land_ackEnable' : 'Prioritize ACK >',
		'land_ackOn'	: 'Enabled',
		'land_ackOff'	: 'Disabled',
		'land_icmpEnable': 'Prioritize ICMP >',
		'land_icmpOn'	: 'Enabled',
		'land_icmpOff'	: 'Disabled',
		'land_qosdefault' : 'Default Traffic Class >',
		'land_highest'		: 'Highest',
		'land_high'		: 'High',
		'land_medium'		: 'Medium',
		'land_low'		: 'Low',
		'land_lowest'		: 'Lowest',
		'land_Inboundmain'	: 'Inbound classes',
		'land_inboundMax'	: 'Max Downlink bandwidth >',
		'land_inhighestband' : 'Highes >',
		'land_inhighband'			: 'High >',
		'land_inmediumband'	:	'Medium >',
		'land_inlowband'	: 'Low >',
		'land_inlowestband' :'Lowest >',
		'land_outboundmain' :'Outbound classes',
		'land_outboundMax'  : 'Max Uplink bandwidth >',
		'land_outhighestband' : 'Highest >',
		'land_outboundhighband': 'High >',
		'land_outMediumhband' :'Medium >',
		'land_in_highestmin'		: '(%min)',
		'land_in_highestmax'	    : '(%max)',
		'land_in_highmin'		: '(%min)',
		'land_in_highmax'	    : '(%max)',
		'land_in_mediumhmin'		: '(%min)',
		'land_in_mediummax'	    : '(%max)',
		'land_in_lowmin'       : '(%min)',
		'land_in_lowmax'       : '(%max)',
		'land_in_lowestmin'       : '(%min)',
		'land_in_lowestmax'       : '(%max)',
		'land_highestmin'		: '(%min)',
		'land_highestmax'	    : '(%max)',
		'land_highmin'		: '(%min)',
		'land_highmax'	    : '(%max)',
		'land_mediumhmin'		: '(%min)',
		'land_mediummax'	    : '(%max)',
		'land_lowmin'       : '(%min)',
		'land_lowmax'       : '(%max)',
		'land_lowestmin'       : '(%min)',
		'land_lowestmax'       : '(%max)',
		'land_outlowband'	: 'Low >',
		'land_outlowestband' : 'Lowest >',
		'land_qosSetup'		:'QoS Priority Rule list >'							
	},
	value:{
		'land_listqos' : 'Setup QoS rule',
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'qos_list.html':{
	InnerHTML:{
		'lang_qoslist_header':'Media Features > QoS Setup > QOS List',
		'td_qoslist_head3' : 'Address Type',
		'td_qoslist_head4' : 'Address',
		'td_qoslist_head5' : 'Protocol',
		'td_qoslist_head6' : 'Port Filter',
		'td_qoslist_head7' : 'Port Number',
		'td_qoslist_head8' : 'Class',
		'td_qoslist_head9' : 'Description',
		'td_qoslist_head10' : 'Rule Type' 
	},
	value:{
		'land_edit'  :'Edit',
		'land_delete' : 'Delete',
		'land_add' : 'Add Priority Rule' ,
		'land_refresh' : 'Refresh',
		'land_cancel' : 'Cancel'
	}
},

'qos_add.html':{
	InnerHTML:{
		'lang_qosadd_header':'Media Features > QoS Setup >Qos Priority Rules',
		'land_macfilter' : 'IP/MAC Address Filter >',
		'land_ruleType':'Rule Type',
		'land_uplink':'UpLoad',
		'land_downlink':'DownLoad',
		'land_any' : 'Any',
		'land_destIp' : 'Destination IP',
		'land_sourceIp' : 'Source IP',
		'land_soucerMac' : 'Source MAC',
		'land_address' : 'Address >',
		'land_protol' : 'Protocol Filter >',
		'land_protolany' : 'Any',
		'land_class'	:'Class Assigned >',
		'land_highest'	:'Highest',
		'land_high'	:'High',
		'land_medium'	:'Medium',
		'land_low'	:'Low',
		'Lowest'	:'Lowest',
		'land_description' :'Description >',
		'land_protolprotol' : 'Port Protocol Filter >',
		'land_portnum'	:'Port List >',
		'land_portto' : 'Port Filter >',
		'land_portany' : 'Any',
		'land_portdest' : 'Destination Port',
		'land_portsource' : 'Source Port',
		'land_portdestsource' : 'Source or Destination'
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}  
}, 

'samba.html':{
	InnerHTML:{
		'lang_samba':'Media Features >Samba  Setup',
		'land_mode':'Samba Mode >',
		'land_usrname':'User Name >',
		'land_password':'Password >',
		'land_disable' : 'Disabled',
		'land_user' : 'User',
		'land_share' : 'Share'
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'ftpd_setting.html':{
	InnerHTML : {
		'lang_title' : 'Media Features > FTP Setup',
		'lang_ftp_setting':' Ftpd Setting',
		'lang_ftpd_option' : 'FTP Server',
		'lang_ftpd_en' : 'Enable FTP Server',
		'lang_ftpd_port' : 'FTP Server Port',
		
		'lang_ftp_manager'   : 'FTP Server Account Manager',
		'lang_ftpd_user': 'User Name',
		'lang_ftpd_paswd': 'Password',
		'lang_ftpd_ability' : 'Rights',
		'lang_view' : 'View',
		'lang_Upload' : 'Upload',
		'lang_Download': 'Download',
		'lang_userlist' : 'Account Table',
		'lang_userlist_no': 'No.',
		'lang_userlist_user' : 'User',
		'lang_userlist_paswd': 'Password',
		'lang_userlist_ability' : 'Rights',
		'lang_userlist_operation' : 'Operation',
		'lang_right_view' : 'View',
		'lang_right_upload': 'Upload',
		'lang_right_download' : 'Download'
	},
	value : {
		'submit' : 'Submit',
		'refresh' : 'Refresh',
		'add' : 'Append',
		'edit' : 'Edit',
		'del' : 'Delete',
		'Modify' : 'Modify',
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'usb_http.html':{
	InnerHTML : {
		'lang_title': 'Media Features > HTTP Access Storage ',
		'lang_enable':'Enable',
		'lang_access': 'Access Method',
		'lang_link': 'Link',
		'lang_port' : 'Port'
	},
	value : {
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'usb_dlna.html':{
	InnerHTML : {
		'lang_title': 'Media Features > DLNA',
		'lang_Disable' : 'Enable DLNA'
	},
	value : {
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'parent_control.html':{
	InnerHTML : {
		'lang_header':'Security Options > Parental Controls',
		'lang_parent_enable':'Parental Controls',
		'land_enable':'Enable',
		'land_disable':'Disable',
		'land_pcmac':'MAC address of the parent PC>',
		'land_manPc_mac':'MAC address of the PC >',
		'land_pccontrolTable':'Parental Control list >',
		'td_pccontrol_head3':'MAC Address',
		'td_pccontrol_head4':'Sites List',
		'td_pccontrol_head5':'Schedule ',
		'td_pccontrol_head6':'Status'
	},
	value:{
		'land_writeMac' : 'Set parents PC',
		'land_Add':'Add',
		'land_Edit':'Edit',
		'land_Delete':'Delete',
		'land_DisAl':'Disable all entries',
		'land_EnaAl':'Enable all entries',
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'		
	}
},

'parent_control_add.html':{
	InnerHTML : {
		'lang_header':'Security Options > Parental Controls',
		'land_cmac':'The child PC\'s MAC address >',
		'land_lanmac':'MAC address of the LAN PC >',
		'land_descript':'Description of the refused sites >',
		'land_urlcomment':'Refuse children access to the Domain Name >',
		'land_time':'Effect at which time >',
		'land_schedule':'Schedule Description >',
		'land_urlname0':'Domain Name 1 >',
		'land_urlname1':'Domain Name 2 >',
		'land_urlname2':'Domain Name 3 >',
		'land_urlname3':'Domain Name 4 >',
		'land_urlname4':'Domain Name 5 >',
		'land_urlname5':'Domain Name 6 >',
		'land_urlname6':'Domain Name 7 >',
		'land_urlname7':'Domain Name 8 >',
		'land_day':'Week',
		'land_day1':'MON',
		'land_day2':'TUE',
		'land_day3':'WED',
		'land_day4':'THU',
		'land_day5':'FRI',
		'land_day6':'SAT',
		'land_day7':'SUN',
		'land_everyday' :'Every day',
		'land_selectday':'Select the day of the week',
		'land_begintime':'Start time',
		'land_endtime':'End Time',
		'land_statue':'Status',
		'land_statueenable':'Enable',
		'land_statuedisable':'Disable'
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'fw_wansetup.html':{
	InnerHTML : {
		'lang_title'   : 'Security Options > WAN Setup',
		'idDisableDOSContext' : 'Disable Port Scan and DOS Protection',
		'idDisableSPIContext' : 'Disable SPI Firewall',
		'idDefaultDMZServerContext' : 'Default DMZ Server',
		'idRespondPingContext' : 'Respond to Ping on Internet Port',
		'idALGContext' : 'ALG Setup',
		'idMTUContext' : 'MTU Size',
		'idNATFilterContext' : 'NAT Filtering',
		'idNATSecuredContext' : 'Secured',
		'idNATOpenContext' : 'Open',
		'idDisableSIPALGContext' : 'Enable SIP ALG',
		'idDisableL2TPALGContext' : 'Enable L2TP ALG',
		'idDisablePPTPALGContext' : 'Enable PPTP ALG',
		'idDisableIPSECALGContext' : 'Enable IPSEC ALG',
		'idDisableFTPALGContext' : 'Disable FTP ALG',
		'idDisableTFTPALGContext' : 'Disable TFTP ALG',
		'idEnableIPv6Context' : 'Enable IPv6 Pass-Through'
	},
	value : {
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'fw_urlfilter.html':{
	InnerHTML : {
		'lang_BlockWebsite' : 'Security Options > Block Sites',
		'lang_KeywordBlocking' : 'Keyword Blocking',
		'lang_BlockTimesContextNever' : 'Never',
		'lang_BlockTimesContextPerSchedule' : 'Per Schedule',
		'lang_BlockTimesContextAlways' : 'Always',
		'lang_KeywordDomain' : 'Type Keyword or Domain Name Here.',
		'lang_KeywordListContext' : 'Block Sites Containing these Keywords or Domain Names',
		'lang_AllowTrustIPEnableContext' : 'Allow Trusted IP Address To Visit Blocked Sites',
		'lang_AllowTrustIP' : 'Trusted IP Address',
		'lang_maxofterms' : '(Max of items: 32)&nbsp;:'
	},
	value : {
		'idAddKeywordButton' : 'Add Keyword',
		'idKeywordListDeleteItem' : 'Delete Keyword',	
		'idKeywordListClearAll' : 'Clear List',
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'fw_macfilter.html':{
	InnerHTML:{
		'lang_BlockMACAddress' : 'Security Options > MAC Address Filtering',
		'lang_MACFilterEnable' : 'Enable MAC Address Filtering',
		'lang_mac_filtering_list' : 'MAC Address Filtering List >',
		'lang_host' : 'Host',
		'lang_mac_address' : 'MAC Address'
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel',	
		'block_addlist' : '<< Add',
		'block_delete' : 'Delete'
	}
},

'fw_ddns.html':{
	InnerHTML:{
		'lang_DynamicDNS' : 'Advanced Setup > DDNS',
		'lang_Ddns' : 'DDNS Service >',
		'lang_DnsOff' : 'Disabled',
		'lang_DynDns' : 'DynDNS',
		'lang_Ddns_Status' : 'DDNS Status >',
		'lang_user_name' : 'User Name >',
		'lang_password' : 'Password >',
		'lang_hostname' : 'Domain Name >'
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel',
		'lang_web_site' : 'Web Site'
	},
	dynamic:['Disable',
			'No update action, there is no IP address on the Internet port',
			'Update failed, the service provider is not reachable',
			'Update failed, host name is not correct.',
			'Authentication failed, user name or password is not correct',
			'Update successfully']
},

'fw_log.html':{
	InnerHTML:{
		'lang_security_log' : 'Utilities > System log',
		'lang_log_file' : 'Log File',
		'lang_syetem_log' : 'System log:',
		'lang_firewall_log' : 'Firewall log:'
	},
	value:{
		'lang_save' : 'Save',
		'lang_clear' : 'Clear',
		'lang_refresh' : 'Refresh',
		'lang_send' : 'Send Email'
	}
},

'fw_portmap.html':{
	InnerHTML:{
		'lang_portforwd' : 'Advanced Setup > Virtual Servers',
		'lang_add': 'Add',
		'lang_delete' : 'Clear entry',
		'lang_enable' : 'enable',
		'lang_description' : 'Description',
		'lang_inbound_port' : 'Inbound port',
		'lang_type' : 'Type',
		'lang_private_ip' : 'Private IP address',
		'lang_private_port' : 'Private port'
	},
	value:{
		'lang_cancle1' : 'Cancel',
		'lang_apply1' : 'Apply',
		'add' : 'Add',
		'delete': 'Clear'
	}
},

'fw_email.html':{
	InnerHTML:{
		'lang_Email' : 'Utilities > E-mail ',
		'lang_Email_tip1' : 'You can make changes to the E-mail setting policy here.',
		'lang_emailEnble' : 'Turn E-mail Notification On',
		'lang_Email_tip2' : 'Send Alerts and Logs via E-mail',
		'lang_OutgoingServer' : 'Your outgoing E-mail Server',
		'lang_ReceiveAccount' : 'Send to this E-mail address',
		'lang_outgongserver_need_auth' : 'Your E-mail server requires authentication',
		'lang_username': 'User Name',
		'lang_password': 'Password',
		'lang_Email_tip3' : 'Alerts sending strategy',
		'lang_alert_send_immediate' : 'send alerts immediately when someone attempts to visit a blocked site',
		'lang_Email_tip4' : 'Send logs according to this schedule',
		'lang_strategy' : 'Send Email : ',
		'lang_day' : 'Day: ',
		'lang_hour' : 'Hour: '
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'str_route.html':{
	InnerHTML : {
		'idStaticRouteHeader' : 'Advanced Setup > Static Routes',
		'idStaticRouteTable1' : '&nbsp;',
		'idMaxLimit':'Max of rules: 32',
		'idStaticRouteTable2' : '#',
		'idStaticRouteTable3' : 'Active',
		'idStaticRouteTable4' : 'Name',
		'idStaticRouteTable5' : 'Destination',
		'idstaticRouteTable6' : 'Gateway'
	},
	value : {
		'Add' : 'Add',
		'Edit' : 'Edit',
		'Delete' : 'Delete'
	}
},

'str_add.html':{
	InnerHTML : {
		'idStaticRouteHeader' : 'Advanced Setup > Static Routes',
		'idRouteName' : 'Route Name',
		'idPrivateContext' : 'Private',
		'idActiveContext' : 'Active',
		'idDestIPAddress' : 'Destination IP Address',
		'idSubnetMask' : 'IP Subnet Mask',
		'idGatewayIP' : 'Gateway IP Address',
		'idMetric' : 'Metric'
	},
	value : {
		'Apply' : 'Apply',
		'Cancel' : 'Cancel'
	}
},

'ut_reboot.html':{
	InnerHTML:{
		'lang_reboot_device' : 'Utilities > Router Reboot',
		'lang_restart' : 'Restart Router'
	},
	value:{
		'lang_reboot' : 'Restart Router'
	}
},

'restarting.html':{
	InnerHTML:{
		'lang_rebooting' : 'Router is rebooting',
		'lang_seconds' : ' seconds remaining.'
	},
	dynamic:['Utilities > Rebooting','Utilities > Backup Setup']
},

'ut_prev.html':{
	InnerHTML:{
		'lang_restore_setting' : 'Utilities > Backup Setup',
		'lang_save' : 'Save a Copy of Current Settings',
		'lang_restore_default' : "Revert to Factory Default Settings",
		'lang_update' : 'restore a previously saved configuration',
		'lang_Restoretip' : 'Utilities > Restore Previous Settings',
		'lang_updating' : 'Checking the file you just upload',
		'lang_second' : ' seconds remaining.'
	},
	value:{
		'config' : 'browse',
		'update' : 'Restore',
		'backupstting' : 'Save',
		'lang_restore' : 'Restore Defaults'
	}
},

'ut_firmware.html':{
	InnerHTML:{
		'lang_firmware_update' : 'Utilities > Firmware Update',
		'lang_firmware_version' : 'Firmware Version >',
		'lang_check_version' : 'Check For New Firmware Version >',
		'lang_locate_file' : 'Update Firmware >',
		'lang_check_uponlog' : '&nbsp;Check for New Version Upon Log-in',
		'lang_ClearConfig' : '&nbsp;Clear Config',
		'lang_updating' : 'Firmware update in progress',
		'fw_not_interrupt' : 'DO NOT INTERRUPT OR UNPLUG THE ROUTER, doing so could render the Router inoperable.',
		'lang_update' : 'Utilities > Firmware Update',
		'lang_second' : ' seconds remaining.'
	},
	value:{
		'checkVersionButton':'Check Firmware',
		'Upload' : 'Update'
	}
},

'ut_fw_checking.html':{
	InnerHTML:{
		'lang_check' : 'Checking for newer firmware...',
		'lang_check_noWan' : 'Cannot connect to the firmware information server,please double check the wan connection.',
		'lang_check_noFW' : 'There is no new firmware update available for this Router!'
	}
},

'ut_system_set.html':{
	InnerHTML:{
		'lang_system_set' : 'Utilities > System Settings ',
		'lang_admin_password' : 'Administrator Password',
		'lang_password_tip' : 'The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.',
		'lang_moreInfo1' : 'More Info',
		'lang_current_password' : 'Type in current Password>',
		'lang_new_password' : 'Type in new Password>',
		'lang_confirm_password' : 'Confirm new Password>',
		'lang_login_out' : 'Login Timeout>',
		'lang_time' : '1-99 minutes',
		'lang_curtime' : 'Time and Time Zone',
		'lang_date_tip' : 'The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.',
		'lang_moreInfo2' : 'More Info',
		'lang_timezone' : 'Time Zone >',
		'lang_daylight_saving' : 'Daylight Savings >',
		'lang_daylight_help' : 'Automatically Adjust Daylight Saving',
		'lang_firttime' : 'Primary NTP Server >',
		'lang_secondtime' : 'Secondary NTP Server >',
		'lang_Remo_Mana' : 'Remote Management',
		'lang_remote_tip1' : '<b>ADVANCED FEATURE!</b>',
		'lang_remote_tip2' : 'Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. Before you enable this function,<b>MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </b>',
		'lang_moreInfo3' : 'More Info',
		'lang_any_ip' : 'Any IP address can remotely manage the router.',
		'lang_only_ip' : 'Only this IP address can remotely manage the router',
		'lang_PortNumber' : 'Remote Access Port>',
		'lang_upnp' : 'UPnP Enabling:',
		'lang_upnp_tip1' : '<b>ADVANCED FEATURE!</b>',
		'lang_upnp_tip2' : 'Allows you to turn the UPnP feature of the Router on or off. If you use applications that support UPnP, enabling UPnP will allow these applications to automatically configure the router.',
		'lang_moreInfo4' : 'More Info',
		'lang_upnp_enable' : 'UPnP Enable / Disable >',
		'lang_upnp_On' : 'Enable',
		'lang_upnp_Off' : 'Disable',
		'lang_update_enable' : 'Auto Update Firmware Enabling',
		'lang_update_tip1' : '<b>ADVANCED FEATURE!</b>',
		'lang_update_tip2' : 'Allows you to automatically check the availability of firmware updates for your router.',
		'lang_moreInfo5' : 'More Info',
		'lang_fw_enable' : 'Auto Update Firmware Enable / Disable >',
		'lang_update_On' : 'Enable',
		'lang_update_Off' : 'Disable',
		'lang_moreInfo6' : 'More Info',
		'lang_eco_enable' : 'Eco Mode',
		'lang_TurnOn' : 'Turn Remote Management On',
		'lang_RemManAddr' : 'Remote Management Address :',
		'lang_AllowAccessBy' : 'Allow Remote Access By :',
		'lang_ThisComputer' : 'Only This Computer :',
		'lang_IpAddressRange' : 'IP Address Range :',
		'lang_Form' : 'From ',
		'lang_To' : 'To ',
		'lang_su' : 'Su ',
		'lang_mo' : 'Mo ',
		'lang_tu' : 'Tu ',
		'lang_we' : 'We ',
		'lang_th' : 'Th ',
		'lang_fr' : 'Fr ',
		'lang_sa' : 'Sa ',
		'lang_disable_radio' : 'Disable radio from',
		'exceptday' : 'except',
		'lang_Everyone' : 'Everyone'
	},
	value:{
		'lang_apply1' : 'Apply',
		'lang_cancle1' : 'Cancel',
		'lang_apply2' : 'Apply',
		'lang_cancle2' : 'Cancel'
	}
},

'ut_self_healing.html':{
	InnerHTML:{
		'lang_Schedules_title' : 'Utilities > Self Healing',
		'lang_Schedule_tips' : 'Regular router re-initialization is helpful in maintaining a more problem free network.',
		'lang_Auto_init' :'Auto initialize my router>',
		'lang_Set_days' : 'Set days>',
		'lang_Eve' : 'Every Day',
		'lang_Sun' : 'SUN',
		'lang_Mon' : 'MON',
		'lang_Tue' : 'TUE',
		'lang_Wed' : 'WED',
		'lang_Thu' : 'THU',
		'lang_Fri' : 'FRI',
		'lang_Sat' : 'SAT',
		'lang_Set_time' : 'Set time>',
		'lang_Init_On' : 'Enabled ',
		'lang_Init_Off' : 'Disabled', 
		'lang_ScheduleRulesDay' : 'Time of day to Block:(use 24-hour clock)',
		'lang_ALlDay' : 'All Day',
		'lang_LimitStartTime' : 'Start Blocking',
		'lang_LimitEndTime' : 'End Blocking',
		'lang_TimeZone' : 'Time Zone',
		'lang_AutoDaylightSaving' : 'Automatically Adjust for Daylight Saving Time',
		'lang_CurrentTime' : 'Current time:'
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
},

'login.html':{
	InnerHTML:{
		'lang_zh_cn'     : '简体中文', 
		'lang_en_us' : 'English',
		'land_password'  : 'Password:',
		'land_language'   : 'Language:'
	},
	value:{
		'Reset' : 'Reset',
		'uipostSubmit' : 'Login'
	}
},

'ut_ConfigLoadFaild.html':{
	InnerHTML:{
		'lang_reboot_device' : 'Utilities > Restore Previous Settings',
		'lang_restart' : 'Invalid Configuration file, please try again.'
	},
	value:{
		'lang_reboot' : 'Retry'
	}
},

'ut_SysUpgradeFaild.html':{
	InnerHTML:{
		'lang_reboot_device' : 'Utilities > Firmware Update',
		'lang_restart' : 'Upgrade Faild, Please Restart Router.'
	},
	value:{
		'lang_reboot' : 'Restart Router'
	}
},

'noUse.html':{
	InnerHTML:{'noUse' : 'for I18NCrystalSys'},
	value:{'noUse' : 'for I18NCrystalSys'},
	dynamic:['No use','for I18NCrystalSys']
},

'apply_wait.html':{
	InnerHTML:{
		'lang_apply' : 'Update Settings',
		'lang_applying' : 'Updating Settings,please wait...'
	}
},

'download_bt.html':{
	InnerHTML:{
		'lang_bt_tip'              			: 'Make sure your network is available, before you start one or more tasks. Please add a task of BT torrent, then you can manage the tasks with "start","pause","delete" button and so on.If the status of the tasks are not right, please click the "refresh" button.',
		'lang_download_dir'					: 'Save path',
		'lang_downloading_list_header' 		: 'Download Task Information Table',
		'td_downloading_head2'         		: 'No.',
		'td_downloading_head3'         		: 'File Name',
		'td_downloading_head4'         		: 'Size(MB)',
			'td_downloading_head5'         		: 'Speed(KB/s)',
			'td_downloading_head6'         		: 'Downloaded(%)',
			'td_downloading_head7'         		: 'status',
			'td_downloading_head8'         		: 'torrent name / url',
			'td_download_done_head2'					: 'No.',
			'td_download_done_head3'					: 'File Name',
			'td_download_done_head4'					: 'Size(MB)',
			'td_download_done_head5'					: 'Save path',
			'td_download_done_head6'					: 'torrent name / url',
			'lang_tw_downloader_page'         : 'Download offline',
			'lang_build_task'									: 'Add Task',
			'lang_torrent_dir'								: 'Add seeds (support BT seeds)',
			'lang_http_ftp'										: 'Paste the address (support http / https / ftp resources)',
			'lang_http_ftp_url'               : 'download address',
			'lang_http_ftp_user'							: 'usrname',
			'lang_http_ftp_password'					: 'password',
			'add_new_task_lable'							: 'Add Tasks',
			'finished_task_lable'							: 'Finished List',
			'unfinished_task_lable'						: 'Unfinished List',
			'Smart_Internet_lable'            : 'Smart Internet',
			'Smart_Internet_span'             : 'Switch Of Smart Internet'
		},
		value:{
			'lang_not_done_list_button'     : 'Unfinished List',
			'lang_done_list_button'					: 'Finished List',
			'lang_add_new_task_button'   		: 'add',	
			'lang_reset'										: 'reset',
			'lang_add_sure' 							  : 'Apply',
			'go_back'												: 'back',
			'land_begin'										: 'start',
			'land_pause'										: 'pause',
			'land_delete_downloading'				: 'delete',
			'land_fresh'										: 'refresh',
			'land_delete_done'							:	'delete',
			'Smart_Internet_sure'           : 'apply'
		}
	}

};

var optionText={
	start:{'NoUse':'No Use, for I18NCrystalSys'},
portmapservice:{
	'lang_services0':'Active Worlds',
	'lang_services1':'Age of Empires',
	'lang_services2':'Age of Empires Expansion: The Rise of Rome',
	'lang_services3':'Age of Empires II Expansion: The Conquerors',
	'lang_services4':'Age of Empires II: The Age of Kings',
	'lang_services5':'Age of Kings',
	'lang_services6':'Age of Wonders',
	'lang_services7':'Aliens vs. Predator',
	'lang_services8':'Anarchy Online (BETA)',
	'lang_services9':'AOL Instant Messenger',
	'lang_services10':'Audiogalaxy Satellite',
	'lang_services11':'Baldurs Gate',
	'lang_services12':'BattleCom',
	'lang_services13':'Battlefield Communicator',
	'lang_services14':'Black and White',
	'lang_services15':'Blizzard Battle.net',
	'lang_services16':'Buddy Phone',
	'lang_services17':'Bungie.net',
	'lang_services18':'Camerades',
	'lang_services19':'CART Precision Racing',
	'lang_services20':'Close Combat for Windows',
	'lang_services21':'Close Combat III: The Russian Front',
	'lang_services22':'Close Combat: A Bridge Too Far',
	'lang_services23':'Combat Flight Simulator 2: WWII Pacific Theater',
	'lang_services24':'Combat Flight Simulator: WWII Europe Series',
	'lang_services25':'Crimson Skies',
	'lang_services26':'CuSeeMe',
	'lang_services27':'Dark Reign',
	'lang_services28':'Dark Reign 2',
	'lang_services29':'Delta Force 2',
	'lang_services30':'Delta Three PC to Phone',
	'lang_services31':'Descent 3',
	'lang_services32':'Descent Freespace',
	'lang_services33':'Diablo (1.07+)',
	'lang_services34':'Diablo I',
	'lang_services35':'Diablo II',
	'lang_services36':'DialPad.Com',
	'lang_services37':'DirectX 7 Game',
	'lang_services38':'DirectX 8 Game',
	'lang_services39':'DNS Server',
	'lang_services40':'Doom',
	'lang_services41':'Dune 2000',
	'lang_services42':'Dwyco Video Conferencing',
	'lang_services43':'Elite Force',
	'lang_services44':'Everquest',
	'lang_services45':'F-16',
	'lang_services46':'F-22 Lightning 3',
	'lang_services47':'F-22 Raptor',
	'lang_services48':'F22 Raptor (Novalogic)',
	'lang_services49':'Falcon 4.0',
	'lang_services50':'Fighter Ace II',
	'lang_services51':'Flight Simulator 2000',
	'lang_services52':'Flight Simulator 98',
	'lang_services53':'Freetel',
	'lang_services54':'FTP Server',
	'lang_services55':'GNUtella',
	'lang_services56':'Golf 1998 Edition',
	'lang_services57':'Golf 1999 Edition',
	'lang_services58':'Golf 2001 Edition',
	'lang_services59':'Go2Call',
	'lang_services60':'Half Life',
	'lang_services61':'Half Life Server',
	'lang_services62':'Heretic II Server',
	'lang_services63':'I76',
	'lang_services64':'ICUII Client',
	'lang_services65':'Ivisit',
	'lang_services66':'IRC',
	'lang_services67':'IStreamVideo2HP',
	'lang_services68':'KaZaA',
	'lang_services69':'Kohan Immortal Sovereigns',
	'lang_services70':'LapLink Gold',
	'lang_services71':'Links 2001',
	'lang_services72':'Lotus Notes Server',
	'lang_services73':'Mail (POP3)',
	'lang_services74':'Mail (SMTP)',
	'lang_services75':'MechCommander 2.0',
	'lang_services76':'MechWarrior 3',
	'lang_services77':'MechWarrior 4',
	'lang_services78':'Media Player 7',
	'lang_services79':'Midtown Madness',
	'lang_services80':'Midtown Madness 2',
	'lang_services81':'Mig 29',
	'lang_services82':'Monster Truck Madness',
	'lang_services83':'Monster Truck Madness 2',
	'lang_services84':'Motocross Madness',
	'lang_services85':'Motocross Madness 2',
	'lang_services86':'Motorhead Server',
	'lang_services87':'MSN Gaming Zone',
	'lang_services88':'MSN Messenger',
	'lang_services89':'Myth',
	'lang_services90':'Myth II Server',
	'lang_services91':'Myth: The Fallen Lords',
	'lang_services92':'Need for Speed',
	'lang_services93':'NetMech',
	'lang_services94':'Netmeeting 2.0, 3.0, Intel Video Phone',
	'lang_services95':'Network Time Protocol (NTP)',
	'lang_services96':'News Server (NNTP)',
	'lang_services97':'OKWeb',
	'lang_services98':'OKWin',
	'lang_services99':'Outlaws',
	'lang_services100':'Pal Talk',
	'lang_services101':'pcAnywhere v7.5',
	'lang_services102':'PhoneFree',
	'lang_services103':'Polycom ViaVideo H.323',
	'lang_services104':'Polycom ViaVideo H.324',
	'lang_services105':'Quake',
	'lang_services106':'Quake II (Client and Server)',
	'lang_services107':'Quake III',
	'lang_services108':'RealAudio',
	'lang_services109':'Real Player 8 Plus',
	'lang_services110':'Red Alert',
	'lang_services111':'Rise of Rome',
	'lang_services112':'Roger Wilco',
	'lang_services113':'Rogue Spear',
	'lang_services114':'Secure Shell Server (SSH)',
	'lang_services115':'Secure Web Server (HTTPS)',
	'lang_services116':'ShoutCast',
	'lang_services117':'SNMP',
	'lang_services118':'SNMP Trap',
	'lang_services119':'Speak Freely',
	'lang_services120':'StarCraft',
	'lang_services121':'Starfleet Command',
	'lang_services122':'StarLancer',
	'lang_services123':'SWAT3',
	'lang_services124':'Telnet Server',
	'lang_services125':'The 4th Coming',
	'lang_services126':'Tiberian Sun: C&amp;C',
	'lang_services127':'Tiberian Sun: C&amp;C III',
	'lang_services128':'Total Annihilation',
	'lang_services129':'Ultima',
	'lang_services130':'Unreal Tournament',
	'lang_services131':'Urban Assault',
	'lang_services132':'VoxPhone 3.0',
	'lang_services133':'Warbirds 2',
	'lang_services134':'Web Server (HTTP)',
	'lang_services135':'WebPhone 3.0',
	'lang_services136':'Westwood Online',
	'lang_services137':'Windows 2000 Terminal Server',
	'lang_services138':'X Windows',
	'lang_services139':'Yahoo Pager',
	'lang_services140':'Yahoo Messenger Chat'
},

TimeZone:{
	'lang_TimeZone0' : '(GMT-12:00) International Date Line West',
	'lang_TimeZone1' : '(GMT-11:00) Midway Island, Samoa',
	'lang_TimeZone2' : '(GMT-10:00) Hawaii',
	'lang_TimeZone3' : '(GMT-09:00) Alaska',
	'lang_TimeZone4' : '(GMT-08:00) Pacific Time, Tijuana',
	'lang_TimeZone5' : '(GMT-07:00) Arizona, Mazatlan',
	'lang_TimeZone6' : '(GMT-07:00) Chihuahua, La Paz',
	'lang_TimeZone7' : '(GMT-07:00) Mountain Time',
	'lang_TimeZone8' : '(GMT-06:00) Central America',
	'lang_TimeZone9' : '(GMT-06:00) Central Time',
	'lang_TimeZone10' : '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
	'lang_TimeZone11' : '(GMT-06:00) Saskatchewan',
	'lang_TimeZone12' : '(GMT-05:00) Bogota, Lima, Quito',
	'lang_TimeZone13' : '(GMT-05:00) Eastern Time',
	'lang_TimeZone14' : '(GMT-05:00) Indiana',
	'lang_TimeZone15' : '(GMT-04:00) Atlantic Time',
	'lang_TimeZone16' : '(GMT-04:00) Caracas, La Paz',
	'lang_TimeZone17' : '(GMT-04:00) Santiago',
	'lang_TimeZone18' : '(GMT-03:30) Newfoundland',
	'lang_TimeZone19' : '(GMT-03:00) Brasilia',
	'lang_TimeZone20' : '(GMT-03:00) Buenos Aires, Georgetown',
	'lang_TimeZone21' : '(GMT-03:00) Greenland',
	'lang_TimeZone22' : '(GMT-02:00) Mid-Atlantic',
	'lang_TimeZone23' : '(GMT-01:00) Azores',
	'lang_TimeZone24' : '(GMT-01:00) Cape Verde Is',
	'lang_TimeZone25' : '(GMT-00:00) Casablanca, Monrovia',
	'lang_TimeZone26' : '(GMT-00:00) Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London',
	'lang_TimeZone27' : '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
	'lang_TimeZone28' : '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
	'lang_TimeZone29' : '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris',
	'lang_TimeZone30' : '(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
	'lang_TimeZone31' : '(GMT+01:00) West Central Africa',
	'lang_TimeZone32' : '(GMT+02:00) Athens, Istanbul, Minsk',
	'lang_TimeZone33' : '(GMT+02:00) Bucharest',
	'lang_TimeZone34' : '(GMT+02:00) Cairo',
	'lang_TimeZone35' : '(GMT+02:00) Harare, Pretoria',
	'lang_TimeZone36' : '(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
	'lang_TimeZone37' : '(GMT+02:00) Jerusalem',
	'lang_TimeZone38' : '(GMT+03:00) Baghdad',
	'lang_TimeZone39' : '(GMT+03:00) Kuwait, Riyadh',
	'lang_TimeZone40' : '(GMT+03:00) Moscow, St. Petersburg, Volgograd',
	'lang_TimeZone41' : '(GMT+03:00) Nairobi',
	'lang_TimeZone42' : '(GMT+03:30) Tehran',
	'lang_TimeZone43' : '(GMT+04:00) Abu Dhabi, Muscat',
	'lang_TimeZone44' : '(GMT+04:00) Baku, Tbilisi, Yerevan',
	'lang_TimeZone45' : '(GMT+04:30) Kabul',
	'lang_TimeZone46' : '(GMT+05:00) Ekaterinburg',
	'lang_TimeZone47' : '(GMT+05:00) Islamabad, Karachi, Tashkent',
	'lang_TimeZone48' : '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
	'lang_TimeZone49' : '(GMT+05:45) Kathmandu',
	'lang_TimeZone50' : '(GMT+06:00) Almaty, Novosibirsk',
	'lang_TimeZone51' : '(GMT+06:00) Astana, Dhaka',
	'lang_TimeZone52' : '(GMT+06:00) Sri Jayawardenepura',
	'lang_TimeZone53' : '(GMT+06:30) Rangoon',
	'lang_TimeZone54' : '(GMT+07:00) Bangkok, Hanoi, Jakarta',
	'lang_TimeZone55' : '(GMT+07:00) Krasnoyarsk',
	'lang_TimeZone56' : '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
	'lang_TimeZone57' : '(GMT+08:00) Irkutsk, Ulaan Bataar',
	'lang_TimeZone58' : '(GMT+08:00) Kuala Lumpur, Singapore',
	'lang_TimeZone59' : '(GMT+08:00) Perth',
	'lang_TimeZone60' : '(GMT+08:00) Taipei',
	'lang_TimeZone61' : '(GMT+09:00) Osaka, Sapporo, Tokyo',
	'lang_TimeZone62' : '(GMT+09:00) Seoul',
	'lang_TimeZone63' : '(GMT+09:00) Yakutsk',
	'lang_TimeZone64' : '(GMT+09:30) Adelaide',
	'lang_TimeZone65' : '(GMT+09:30) Darwin',
	'lang_TimeZone66' : '(GMT+10:00) Brisbane',
	'lang_TimeZone67' : '(GMT+10:00) Canberra, Melbourne, Sydney',
	'lang_TimeZone68' : '(GMT+10:00) Guam, Port Moresby',
	'lang_TimeZone69' : '(GMT+10:00) Hobart',
	'lang_TimeZone70' : '(GMT+10:00) Vladivostok',
	'lang_TimeZone71' : '(GMT+11:00) Magadan',
	'lang_TimeZone72' : '(GMT+11:00) Solomon Is., New Caledonia',
	'lang_TimeZone73' : '(GMT+12:00) Auckland, Wellington',
	'lang_TimeZone74' : '(GMT+12:00) Fiji, Kamchatka, Marshall Is'
},

NTPService:{
	'lang_first_ntpServer0' : '132.163.4.102-North America',
	'lang_first_ntpServer1' : '207.200.81.113-North America',
	'lang_first_ntpServer2' : '129.132.2.21-Europe',
	'lang_first_ntpServer3' : '130.149.17.8-Europe'
},
		
Dhcptime:{
	'lang_Dhcptime0' : 'Forever',
	'lang_Dhcptime1' : 'Half Hour  ',
	'lang_Dhcptime2' : 'One Hour ',
	'lang_Dhcptime3' : 'Two Hours ',
	'lang_Dhcptime4' : 'Half Day',
	'lang_Dhcptime5' : 'One Day ',
	'lang_Dhcptime6' : 'Two Days ',
	'lang_Dhcptime7' : 'One Week',
	'lang_Dhcptime8' : 'Two Weeks'
}
,
Week:{
	'1' : 'Monday',
	'2' : 'Tuesday',
	'3' : 'Wednesday',
	'4' : 'Thursday',
	'5' : 'Friday',
	'6' : 'Saturday',
	'7' : 'Sunday'
},

Emailtime:{
	'lang_cfAlert_Select0' : 'None',
	'lang_cfAlert_Select1' : 'When Log is Full',
	'lang_cfAlert_Select2' : 'Hourly',
	'lang_cfAlert_Select3' : 'Daily',
	'lang_cfAlert_Select4' : 'Weekly'
},

Region:{
	'ZA'  :   'Africa',
	'VN'  :   'Asia',
	'AU'  :   'Australia',
	'CA'  :   'Canada',
	'CN'  :   'China',
	'ES'  :   'Spain',
	'DE'  :   'Europe',
	'IL'  :   'Israel',
	'JP'  :   'Japan',
	'KR':   'Korea',
	'MX'  :   'Mexico',
	'IQ'  :   'Middle East',
	'CO'  :   'South America',
	'US'  :   'United States',				
	'PH'  :   'Philippines ',
	'RU'  :   'Russia'
},

end:{'NoUse':'No Use, for I18NCrystalSys'}
};
	
