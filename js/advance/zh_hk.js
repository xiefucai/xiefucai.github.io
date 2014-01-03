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
	'1101' : 'LAN IP confilct with guest network',
	'1102' : 'LAN IP confilct with WAN',
	'1103' : 'DHCP Pool out of range',
	'1104' : 'Invaild DHCP pool address',
	'1105' : 'DHCP Pool changed in AP mode',
	'1106' : 'DHCP lease time changed in AP mode',
	'1107' : 'Local Domain Name changed in AP mode',
	'1108' : 'DHCP switch modifiyed in AP mode',
	'1109' : 'Local IP address in DHCP Pool',
	'1201' : 'PPPoE account length must between 0 - 255',
	'1202' : 'PPPoE password length must between 0 - 255',
	'1205' : 'Invalid MRU, must be between 616-1492',
	'1206' : 'Invalid MTU, must be between 616-1492',
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
	'1801' : 'end time cannot be less than the start time.',
	'2001' : 'wrong username.',
	'2002' : 'wrong password.',
	'2004' : 'Current Password is invalid.',
	'2005' : 'The new passwords you entered do not match.  Please try again.',
	'2006' : 'Idle time of the numbers you entered are invalid. The number has to be an integer between 1-99.',
	'2701' : 'FTP account has more than 10 accounts',
	'2702' : 'FTP accounts have been registered',
	'1201':'To be continued'//未完待续
};

var alertErrorCode={
	'fw_ddnsWebsite':"No DDNS Service selected.",
	'fw_portmapNoSpace': "All entries are full.Please remove some entries then try again.",
	'lang_DeleteWaring':"Do you want to clear entry?",
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
    'TurnOnWpsConficssidwepsecurity':'Turning on WPS will un_hide your network name(SSID) and change your security type to WPA/WPA2.Your current network password will work just fine',
    'TurnOnWpsConficssid':'Turning on WPS will un_hide your network name(SSID)',
    'TurnOnWpsConficwepsecurity':'Turning on WPS will change your security type to WPA/WPA2.Your current network password will work just fine',
    'InvalidPin':'Invalid PIN! The device PIN is eight numeric digits. Please verify and enter again',
    'PinChecksumFailed':'PIN checksum failed! Please verify and enter a valid PIN.',
    'ut_dmzInputServerBlank':"Please enter the IP address before enabling DMZ.",
	'ut_dmzInputServerWrongIp':"The number in ip address entry box should be between 0 - 255.",
	'ut_dmzInputServerConflitIp':"The host IP address is invalid. It should not be the Router's LAN IP.",
	'qos_delete' : 'Please select items to delete.',
	'qos_edit' : 'Please select an item to edit.',
	'PWDTooShort':'Password length is invalid. The maximum password length is 12 and the minimum password length is 3.',
	'NewAndConfirmPasswdNotSame':'New Password and Confirm New Password fields do not match',
	'WebIdleTimeOutInvalid':'Idle time of the numbers you entered are invalid. The number has to be an integer between 1-99'
};
var left_menu={
	'lang_status'				: "Running Status",
	'lang_routerstatus'			: "Router Status",
	'lang_dhcp'					: "Client List",
	
	'lang_lansetup'				: "LAN Setup",
	'lang_lansetting'          	: "LAN Settings",
	
	'lang_wansetup_new'			: "Internet WAN Setup",
	'lang_wansetup'				: "Internet WAN",
	'lang_connection_type'		: "Connection Type",
	'lang_dns'					: "DNS",
	'lang_mac'					: "MAC Address",
	
	'lang_parental_controls'    : "Parental Controls",
	'lang_website_filters'      : "Website Filters",
	
	'lang_wirelessmain'			: "Wireless",
	'lang_wirelesssetup' 		: 'Channel and SSID',
	'lang_security'				: "Security",
	'lang_WifiProtected'		: "Wi-Fi Protected Setup",
	'lang_wirelessguest'        : "Guest Access",
	'lang_AccessPoint'			: "Use as an Access Point",
	
	'lang_qosmain' 				: "Media Features ",
	'land_qosservice' 			:  "QOS Setup",
	
	'lang_firewall'				: "Firewall",
	'lang_firewall2'				: "Firewall",
	'lang_firewallSwitch'		: "Firewall",
	'lang_VirtualServers'		: "Virtual Servers",
	'lang_macfiltering'			: "MAC Address Filtering",
	'lang_dmz'					: "DMZ",
	'lang_ddns'					: "DDNS",
	'lang_PingBlocking'			: "WAN Ping Blocking",
	'lang_SecurityLog'			: "Security Log",
	
	'lang_utilities'			: "Utilities",
	'lang_reboot'				: "Restart Router",
	'lang_restore'				: "Restore Factory Defaults",
	'lang_backuosettings'		: "Save//Backup Settings",
	'lang_restrore_setting'		: "Restore Previous Settings",
	'lang_FirmwareUpdate'		: "Firmware Update",
	'lang_SystemSetting'		: "System Settings",
	'lang_SelfHealing'			: "Self Healing"
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
	'lang_zh_cn'				: '中文',
	'lang_en_us'				: 'English',
	'lang_language_select'		: 'Language:'
	
};

var variable={

	'lang_yes' : 'Enabled',
	'lang_no'  : 'Disabled',
	'land_both': 'BOTH',
	'land_delete': 'Delete',
	'land_auto':'Auto',
	'land_toomany1' : 'Duplicate Administrator',
	'land_toomany2' :	'This device is managed by',
	'land_toomany3' :	'currently!!',
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
	'land_qosClass5'	:'Lowest'

};

var data_language={
'deviceinfo.html':{
 	InnerHTML:{
		'lang_deviceinfo' : 'Status>Router Status',
		'lang_IndexTip' : 'You will need to log in before you can change any settings.',
		'lang_language' : 'Language',
		'lang_current_language' : 'Current Language',
		'lang_all_language' : 'Avaliable Languages',
		'lang_en_us' : 'English',
		'lang_zh_cn' : '中文',
		'lang_version_info' : 'Version Info',
		'lang_SysFirmwareVersion' : 'Firmware Version',
		'lang_BootVersion' : 'Boot Version',
		'lang_HardwareVersion' : 'Hardware',
		'lang_serial' : 'Serial No.',
		
		'lang_lan_set' : 'LAN Settings',
		'lang_LanMACAddress' : 'LAN//WLAN MAC',
		'lang_LanIPAddress' : 'IP Address',
		'lang_LanSubnetMask' : 'Subnet Mask',
		'lang_dhcp_server' : 'DHCP Server',
		
		'lang_wan_set' : 'Internet Settings',
		'lang_WanFacDefMACAddr' : 'WAN MAC Address',
		'lang_WanNetLink' : 'Connection Type',
		'lang_WanIPAddress' : 'Wan IP',
		'lang_WanSubnetMask' : 'Subnet Mask',
		'lang_WanDefaultGateway' : 'Default Gateway',
		'lang_WanDomainNameServer' : 'DNS Address',
		
		'lang_features' : 'Features',
		'lang_firewall_set' : 'Firewall Settings', 
		'lang_WirelessNetworkName' : 'SSID',
		'lang_WirelessSecurityMode' : 'Security',
		'lang_upnp' : 'Upnp',
		'lang_remote_mgment' : 'Remote Management',
		'lang_WirelessWPSEnable' : 'WPS',
		'lang_time' : 'Time',
		'lang_GuestAccessEnable' : 'Guest Access',
		'lang_GuestAccessSsid' : '  SSID',
		'lang_GuestAccessPwd' : '  Password/PSK'
	},
	dynamic:['Disabled','WPA/WPA2-Personal(PSK)','128bit WEP','64bit WEP']
  },
  
'lan_main.html':{
	InnerHTML:{
		'lang_lan' : 'LAN >',
		'lang_lan_tip1' : 'Your Router is equipped with a DHCP server that will automatically assign IP addresses to each computer on your network. The factory default settings for the DHCP server will work in most any application. If you need to make changes to the settings, you can do so. ',
		'lang_lan_tip2' : 'The changes that you can make are:',
		'lang_ip' : '- Change the Internal IP address of the Router. The default = 192.168.2.1',
		'lang_mask' : '- Change the Subnet Mask. The default = 255.255.255.0',
		'lang_dhcp' : '- Enable//Disable the DHCP Server Function. Default= ON (Enabled)',
		'lang_pool_address' : '- Specify the Starting and Ending IP Pool Address. Default = Starting: 2 // Ending: 100',
		'lang_lease_time' : '- Specify the IP address Lease Time. Default= Forever',
		'lang_domain_name' : '- Specify a local Domain Name.',
		'lang_lan_tip3' : 'To make changes, click "LAN Settings" on the LAN tab to the left.',
		'lang_lan_tip4' : 'The Router will also provide you with a list of all client computers connected to the network. To view the list, click "DHCP Client List" on the LAN tab to the left.'
	}
 },
   
'lan_set.html':{
 	InnerHTML:{
		'lang_lan_set1' : 'LAN > LAN Settings ',
		'lang_lan_tip' : ' 	You can make changes to the Local Area Network (LAN) here. For changes to take effect, you must press the "Apply" button at the bottom of the screen.',
		'lang_routerIPaddr' : 'IP Address >',
		'lang_submask' : 'Subnet Mask >',
		'lang_DhcpServer' : 'DHCP server >',
		'lang_DHCPServerOn' :'On',
		'lang_DHCPServerOff' :'Off',
		'lang_dhcp_tip' :'The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. It is not necessary to make any changes here.', 
		'lang_moreInfo1' :'More Info',
		'lang_moreInfo2' :'More Info',
		'lang_moreInfo3' :'More Info',
		'lang_moreInfo4' :'More Info',
		'lanName1' :'A feature that lets you assign a name to your network.',
		'lang_lanName1': 'Local Domain Name >',
		'lang_lanName2': '(Optional)',
		'lang_dhcpTime' :' 	 The length of time the DHCP server will reserve the IP address for each computer. ', 
		'DhcpipaddrStart' : 'IP Pool Starting Address >',
		'DhcpipaddrEnd' : 'IP Pool Ending Address >',
		'DhcpleaseT' : 'Lease Time >'
	},

	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  
 'lan_dhcp.html':{
    InnerHTML:{
		'lang_dhcp_header' : 'LAN > Client List',
		'lang_dhcptips' : 'This page shows you the IP address, Host Name and MAC address of each computer that is connected to your network. If the computer does not have a host name specified, then the Host Name field will be blank. Pressing "Refresh" will update the list',
		'td_lanClients_head2' : 'IP Address',
		'td_lanClients_head1' : 'Host Name',
		'td_lanClients_head3' : 'MAC Address'
	},
	 value:{
		'refresh' : 'Refresh'
    }
  },
  
'wan_main.html':{
	InnerHTML:{
		'lang_internet_wan' : 'Internet WAN >',
		'lang_wan_tip1' : 'The Internet/WAN Tab is where you will set up your Router to connect to your Internet Service Provider. The Router is capable of connecting to virtually any Internet Service Provider\'s system provided that you have correctly configured the Router\'s settings for your ISP\'s connection type. To configure the Router to connect to your ISP, click on "Connection type" on the Internet/WAN Tab on the left of the screen.',
		'lang_wan_tip2' : 'Connection types supported: ',
		'lang_dynamic' : 'Dynamic IP address',
		'lang_dynamic_help' : 'including ISPs that require a host name and ISPs that bind the connection to a specific MAC address.',
		'lang_static' : 'Static IP address',
		'lang_static_help' : 'the Router supports a connection to an ISP which assigns a static IP address.',
		'lang_pppoe' : 'PPPoE',
		'lang_pppoe_help' : 'the Router supports a dynamic connection type which requires a PPPoE login for authentication.',
		'lang_pptp' : 'PPTP',
		'lang_pptp_help' : 'For European users ONLY. The Router supports connections to European ISPs which connect via PPTP.',
		'lang_l2tp' : 'L2TP',
		'lang_l2tp_help' : 'For European users ONLY. The Router supports connections to European ISPs which connect via L2TP.',
		'lang_telstra' : 'Telstra Bigpond/OptusNet Cable',
		'lang_telstra_help' : 'Use this option for Bigpond <font color="red">Cable</font> and OptusNet <font color="red">Cable</font> connections only.'
	}
  },
  
'wan_dyna.html':{
    InnerHTML:{
		'lang_type_dynamicIP' : 'WAN > Connection Type > Dynamic IP',
		'lang_dynamicIP_tip' : 'To enter your Dynamic IP settings, type in your information below and click "Apply".',
		'lang_moreInfo' : 'More Info',
		'lang_hostName' : 'Host Name >',
		'lang_hostName_tip' : 'Host Name = A name that some Internet Service Providers require for connection to their system.',
		'lang_link_mac' : 'Change WAN MAC Address'
	},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  
'wan_stat.html':{
    InnerHTML:{
		'lang_type_staticIP' : 'WAN > Connection Type > Static IP',
		'lang_staticIP_tip' : 'To enter your Static IP settings, type in your information below and click "Apply".',
		'lang_moreInfo' : 'More Info',
		'lang_ip_addr' : 'IP Address >',
		'lang_sub_mask' : 'Subnet Mask >',
		'lang_isp_gateway' : 'ISP Gateway Address >',
		'lang_link_dns' : 'Click here to enter your DNS Settings'
	},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  
'wan_ppoe.html':{
	InnerHTML:{
		'lang_type_pppoe' : 'WAN > Connection Type > PPPoE',
		'lang_PPPoE_tip' : 'To enter your PPPoE settings, type in your information below and click "Apply".',
		'lang_moreInfo1' : 'More Info',
		'lang_user_name' : 'User Name >',
		'lang_password' : 'Password >',
		'lang_retype_password' : 'Retype Password >',
		'lang_service_name' : 'Service Name (Optional) >',
		'lang_ip_byIsp' : 'IP assigned by ISP >',
		'lang_ip_addr' : 'IP Address >',
		'lang_ipMode_on' : 'YES',
		'lang_ipMode_off' : 'NO',
		'lang_mtu' : 'MTU (616-1492) >',
		'lang_mtu_tip' : 'Do not make changes to the MTU setting unless your ISP specifically requires a different setting than 1492.',
		'lang_moreInfo2' : 'More Info',
		'lang_moreInfo3' : 'More Info',
		'lang_isp_gateway' : 'ISP Gateway Address >',
		'lang_dis_tip1' : 'Disconnect after',
		'lang_dis_tip2' : 'minutes of no activity.',
		'lang_dis_tip3' : '(1-60)'
	},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  
'wan_pptp.html':{
    InnerHTML:{
		'lang_hostName':'Host Name',
		'lang_type_pptp' : 'WAN > Connection Type > PPTP',
		'lang_moreInfo1' : 'More Info',
		'lang_pptp_account' : 'PPTP Account >',
		'lang_pptp_password' : 'PPTP Password >',
		'lang_retype_password' : 'Retype Password >',
		'lang_service_ip' : 'Service Address >',
		'lang_ip_assignment' : 'IP Address Assignment &gt;',
		'lang_dynaMode' : 'Get Dynamically From ISP',
		'lang_statMode' : 'Use Static IP Address',
		'lang_my_IP' : 'My IP Address >',
		'lang_my_submask' : 'My Subnet Mask &gt;',
		'lang_default_gateway' : 'Default Gateway &gt;',
		'lang_connection_id' : 'Connection ID (optional) >',
		'lang_dis_tip1' : '&nbsp;Disconnect after&nbsp;',
		'lang_dis_tip2' : '&nbsp;minutes of no activity.&nbsp',
		'lang_moreInfo2' : 'More Info',
		'lang_link_dns' : 'Click here to enter your DNS Settings'
	},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  
'wan_l2tp.html':{
    InnerHTML:{
		'lang_hostName':'Host Name',
		'lang_type_l2tp' : 'WAN > Connection Type > L2TP',
		'lang_moreInfo1' : 'More Info',
		'lang_l2tp_account' : 'L2TP Account >',
		'lang_l2tp_password' : 'L2TP Password >',
		'lang_retype_password' : 'Retype Password >',
		'lang_service_ip' : 'Service Address >',
		'lang_ip_assignment' : 'IP Address Assignment &gt;',
		'lang_dynaMode' : 'Get Dynamically From ISP',
		'lang_statMode' : 'Use Static IP Address',
		'lang_my_IP' : 'My IP Address >',
		'lang_my_submask' : 'My Subnet Mask &gt;',
		'lang_default_gateway' : 'Default Gateway &gt;',
		'lang_connection_id' : 'Connection ID (optional) >',
		'lang_dis_tip1' : '&nbsp;Disconnect after&nbsp;',
		'lang_dis_tip2' : '&nbsp;minutes of no activity.&nbsp',
		'lang_moreInfo2' : 'More Info',
		'lang_link_dns' : 'Click here to enter your DNS Settings'
	},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  
'wan_bpa.html':{
    InnerHTML:{
		'lang_type_cable' : 'WAN > Connection Type > Telstra Bigpond/OptusNet Cable',
		'lang_bpa_tip' : 'Use this option for Bigpond <font color="red">Cable</font> and OptusNet <font color="red">Cable</font> connections only.',
		'lang_moreInfo' : 'More Info',
		'lang_info1' : 'IMPORTANT:',
		'lang_info2' : 'Clicking Apply will reboot the router. Once the router has rebooted you will need to do the following:',
		'lang_info3' : '1) Unplug the power cable from both the Cable Modem and the Router',
		'lang_info4' : '2) Re-connect the power cable to the Cable Modem, wait until all the lights on the modem have stopped flashing',
		'lang_info5' : '3) Re-connect the power cable to the Router',
		'lang_info6' : 'To confirm you are successfully connected to the Internet, open an Internet browser such as Internet Explorer, Firefox and Safari and ensure that you can browse web pages.'
	},
	
	value:{
		'lang_apply' : 'Apply'
	}
  },
  
'wan_conn.html':{
    InnerHTML:{
		'lang_wan_conn' : 'WAN > Connection Type',
		'lang_select_type' : 'Select your connection type:',
		'lang_dynamic' : 'Dynamic',
		'lang_dynamic_tip' : 'A Dynamic type of connection is the most common. If you use a cable modem, then most likely you will have a dynamic connection. If you have a cable modem or you are not sure of your connection type, use this.',
		'lang_static' : 'Static',
		'lang_static_tip' : 'A Static IP address connection type is less common than others. Use this selection only if your ISP gave you an IP address that never changes.',  
		'lang_pppoe' : 'PPPoE',
		'lang_pppoe_tip' : 'If you use a DSL modem and/or your ISP gave you a User Name and Password, then your connection type is PPPoE. Use this connection type.',
		'lang_pptp' : 'PPTP',
		'lang_pptp_tip' : '[European Countries Only]. This type of connection is most common in European countries. If your ISP has specifically told you that you use PPTP and has supplied you with the proper PPTP information, then use this option.',
		'lang_l2tp' : 'L2TP',
		'lang_l2tp_tip' : '[European Countries Only]. This type of connection is most common in European countries. If your ISP has specifically told you that you use L2TP and has supplied you with the proper L2TP information, then use this option.',
		'lang_telstra' : 'Telstra Bigpond/OptusNet Cable',
		'lang_telstra_tip' : 'Use this option for Bigpond <font color="red">Cable</font> and OptusNet <font color="red">Cable</font> connections only.'
	},

	value:{
		'lang_next' : 'Next'
	}
  },
  
'wan_dns.html':{
    InnerHTML:{
		'lang_wan_dns' : 'WAN > DNS',
		'lang_Wan_DnsTips' : 'If your ISP provided you with a specific DNS address to use, enter the address in this window and click "Apply".',
		'lang_Isp' : 'Automatic from ISP',
		'lang_DnsAddress' : 'DNS Address >',
		'lang_Secondary_DnsAddress' : 'Secondary DNS Address >',
		'lang_dns_tips' : 'DNS = Domain Name Server. A server located on the Internet that translates URL\'s (Uniform Resource Locator) to IP addresses.You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function',
		'lang_moreInfo1' : 'More info'
	},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'	
		}	
  },
   
'wan_mac.html':{
    InnerHTML:{
		'lang_Mac' : 'WAN > MAC Address',
		'lang_Wan_MacTips' : 'Some ISPs require that you clone (copy) the MAC address of your computer\'s network card into the Router. If you are not sure then simply clone the MAC address of the computer that was originally connected to the modem before installing the Router. Cloning your MAC address will not cause any problems with your network.',
		'lang_MacAddress' : 'WAN MAC Address >',
		'lang_Clone_MacAddress' : 'Clone Computer\'s MAC Address >',
		'lang_Use_Default_MacAddress' : 'Use Default MAC Address >',
		'lang_moreInfo1' : 'More info',
		'lang_applyChange' : 'Applied Changes',
		'lang_seconds' : 'seconds remaining.'
	},
	
	value:{
		'lang_clone' : 'Clone',
		'lang_default_mac' : 'Default',
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'	
		}	
  },
  
'pc_website_filter.html':
  {
    InnerHTML:{
		'lang_pc_title' : 'Parental Controls > Website Filters',
		'lang_pc_tips' : 'Provides a first layer of whole-home internet protection to guard you from unsafe and inappropriate websites on any device on your network.',
		'land_option' : 'Filtering Options >',
		'lang_block_a' :'Block Malicious Sites',
		'land_disciption1' : 'Blocks malware, phishing and scam sites',
		'lang_block_b' : 'Block Malicious and Adult Sites',
		'land_disciption2' : 'Blocks malware, phishing, scam sites and sites that contain sexually explicit content',
		'lang_block_c' : 'Block Malicious, Adult and other non-family friendly Sites',
		'land_disciption3' : 'Blocks malware, phishing, and scam sites and also sites that contain sexually explicit material, mature content, abortion, alcohol, tobacco, crime, cult, drugs, gambling, hate, suicide or violence.',
		'lang_block_none' : 'No Filters',
		'land_disciption4' : 'To change your DNS address please continue to Internet WAN > <a class="reflink1" href="wan_dns.html">DNS</a>'
	},
	
	value:{
			'lang_apply' : 'Apply'
	}
  },
   
'wireless_main.html':{
    InnerHTML:{
		'lang_wireless' : 'Wireless >',
		'lang_wireless_tip1' : 'In this tab you can adjust settings to the Wireless section of the Router.',
		'lang_channel' :'Channel and SSID',
		'lang_channel_help' : 'Make adjustments to the wireless channel and SSID(wireless network name)',
		'lang_security' : 'Securtity',
		'lang_security_help' : 'Change the wireless security settings such as WPA settings or WEP settings.',
		'lang_wps' : 'Wi-Fi Protected Setup',
		'lang_wps_help' : 'Wi-Fi Protected Setup (WPS) is the industry standard method to simplify the security setup and management of Wi-Fi networks.',
		'lang_ap' : 'Use as an Access Point',
		'lang_ap_help' : 'Set the operating mode of the Router to AP mode '
	}
  },
 
'wireless_basic.html':{
    InnerHTML:{
		'lang_basic' : 'Wireless > Channel and SSID',
		'lang_wirelessset' : ' 	 To make changes to the wireless settings of the router, make the changes here. Click "Apply" to save the settings. ',
		'lang_channel' : 'Wireless Channel >',
		'lang_other_channel' : 'Extension Channel >',
		'lang_SSID' : 'SSID >',
		'lang_mode' : 'Wireless Mode >',
		'lang_2040' : 'Bandwidth >',
		'langEnableSSIDContext':'Broadcast SSID >',
		'langEnableIsolatedContext':'Protected Mode >',	
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
		'lang_moreInfo1' : 'More Info',
		'lang_moreInfo2' : 'More Info',
		'lang_moreInfo3' : 'More Info',
		'lang_moreInfo4' : 'More Info',
		'lang_moreInfo5' : 'More Info'
		},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  
'wireless_security.html':{
    InnerHTML:{
		'lang_wireless_security' : 'Wireless > Security',
		'lang_security_mode' : 'Security Mode >',
		'lang_mode0' : 'Disabled',
		'lang_mode1' : 'WPA/WPA2-Personal(PSK)',
		'lang_mode2' : '128bit WEP',
		'lang_mode3' : '64bit WEP',
		'lang_mode50' : 'Disabled',
		'lang_mode51' : 'WPA/WPA2-Personal(PSK)',
		'lang_mode52' : '128bit WEP',
		'lang_mode53' : '64bit WEP',
		'lang_disabled_tip' : 'You can configure wireless security/encryption settings here. Security should be enabled to assure maximum wireless security. WPA (Wireless Protected Access) provides dynamic key changes and constitutes the best security solution. In wireless environments, where not all devices support WPA, WEP (Wired Equivalent Privacy) should be used.',
		'lang_moreInfo1' : 'More Info',
		'lang_authentication' : 'Authentication >',
		'lang_encryption_technique' : 'Encryption Technique >',
		'lang_Psk' : 'PSK >',
		'lang_obscure_psk' : 'Obscure PSK',
		'lang_obscure_psk5' : 'Obscure PSK',
		'lang_psk_tip3' : 'WPA-PSK (no server):',
		'lang_psk_tip4': 'Wireless Protected Access with a Pre-Shared Key: The key is a password, in the form of a word, phrase or series of letters and numbers. The key must be between 8 and 63 characters long and can include spaces and symbols, or 64 Hex (0-F) only. Each client that connects to the network must use the same key (Pre-Shared Key).',
		'lang_moreInfo2' : 'More Info',
		'lang_moreInfo3' : 'More Info',
		'lang_psk_help' : '(13 hex digit pairs)',
		'lang_psk_help5' : '(13 hex digit pairs)',
		'lang_psk_note' : 'NOTE:',
		'lang_psk_tip1' : 'To automatically generate hex pairs using a PassPhrase, push the button on the right and input the passphrase here',
		'lang_passphrase_1' : 'PassPhrase',
		'lang_passphrase_15' : 'PassPhrase',
		'lang_wep_help' : '(hex digit pairs)',
		'lang_wep_help5' : '(hex digit pairs)',
		'lang_psk_note1' : 'NOTE:',
		'lang_psk_tip2' : 'To automatically generate hex pairs using a PassPhrase, push the button on the right and input the passphrase here',
		'lang_passphrase_2' : 'PassPhrase',
		'lang_key1' : 'Key 1: ',
		'lang_security_WPA_PSK' : 'Security Options(WPA-PSK)',
		'lang_wpa_passphrase' : 'PassPhrase :',
		'lang_wpa_note' : '(8-63 characters or 64 hex digits)',
		'lang_security_WPA2_PSK' : 'Security Options(WPA2-PSK)',
		'lang_wpa2_passphrase' : 'PassPhrase :',
		'lang_wpa2_note' : '(8-63 characters or 64 hex digits)',
		'lang_security_WPA_WPA2_PSK' : 'Security Options(WPA-PSK+WPA2-PSK)',
		'lang_wpa_wpa2_passphrase' : 'PassPhrase :',
		'lang_wpa_wpa2_note' : '(8-63 characters or 64 hex digits)',
		'lang_length64' : '64-bit',
		'lang_length128' : '128-bit',
		'lang__psk_enable' : 'Enable',
		'lang__psk_enable5' : 'Enable',
		'lang__psk_enable1' : 'Enable',
		'lang__psk_enable15' : 'Enable'
	},
	value:{
		'lang_supply' : 'Apply',
		'lang_cancel' : 'Cancel',
		'lang_generate_1' : 'Generate',
		'lang_generate_15' : 'Generate',
		'lang_generate_2' : 'Generate',
		'lang_generate_25' : 'Generate'
	}
  },
  
'wireless_wps.html':{
    InnerHTML:{
		'lang_Wps' : 'Wireless > Wi-Fi Protected Setup(WPS)',
		'lang_wps_setup' : 'Wi-Fi Protected Setup (WPS)',
		'lang_wps_off' : 'Disabled',
		'lang_wps_on' : 'Enabled',
		'lang_wps_button' : 'WPS hardware button',
		'lang_wps_ButtonOn' : 'Enabled',
		'lang_wps_ButtonOff' : 'Disabled',
		'lang_wps_tip1' : 'Wi-Fi Protected Setup (WPS) is the industry standard method to simplify the security setup and management of the Wi-Fi networks. You now can easily setup and connect to a WPA-enabled 802.11 network with WPS-certificated devices using either Personal Information Number (PIN) or Push Button Configuration (PBC) method. Legacy devices without WPS can be added to the network using the traditional manual configuration method.',
		'lang_moreInfo1' : 'More Info',
		'lang_wps_method1' : '1) Personal Information Number (PIN) Method',
		'lang_wps_tip2' : 'Enter the PIN from the client device and click "Enroll". Then start WPS on the client device from its wireless utility or WPS application within 2 minutes.',
		'lang_wps_tip3' : 'Enter Client Device PIN',
		'lang_wps_tip4' : 'If an external registrar is available, you can also enter Router\'s PIN at the external registrar. To change Router\'s PIN, click "Generate New PIN". Or click "Restore Default PIN" to reset the PIN to factory default.',
		'lang_routerpin' : 'Router PIN:',
		'lang_wps_method2' : '2) Push Button Configuration (PBC) Method',
		'lang_wps_tip5' : 'Push and hold PBC button on your Router for 3 seconds or click "Start PBC". Then start PBC on the device you want to connect to the Router within 2 minutes.',
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
  
  'wireless_guest.html':{
    InnerHTML:{
		'lang_guesttip' : ' 	 To make changes to the wireless settings of the router, make the changes here. Click "Apply" to save the settings. ',
		'lang_guest' : 'Wireless > Guest Access',
		'lang_guestaccess' : 'Guest Access>',
		'lang_enable' : 'Enabled',
		'lang_diable' : 'Disabled',
		'lang_style' : 'Type>',
		'lang_cafe' : 'Cafe-style(guest log in via a webpage)',
		'lang_wpa' : 'WPA/WPA2 PSK',
		'lang_wep' : 'WEP',
		'lang_open' : 'Open',
		'lang_ssid' : 'Network Name (SSID)>',
		'lang_help1' : 'maximum 32 characters, no space',
		'lang_help2' : '8 to 63 characters',
		'lang_help3' : '10 hex digits',
		'lang_password' : 'Password(PSK)&nbsp;&gt;',
		'lang_password1' : 'Password&nbsp;&gt;',
		
	    'lang_enable5' : 'Enabled',
		'lang_diable5' : 'Disabled',
		'lang_cafe5' : 'Cafe-style(guest log in via a webpage)',
		'lang_wpa5' : 'WPA/WPA2 PSK',
		'lang_wep5' : 'WEP',
		'lang_open5' : 'Open',
		'lang_help15' : 'maximum 32 characters, no space',
		'lang_help25' : '8 to 63 characters',
		'lang_help35' : '10 hex digits'
		},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  
'login_guest.html':{
    InnerHTML:{
        'lang_login' : 'Login',
        'lang_login_tip' : 'Guest Access is a feature that allows users to access the Internet but limits access to the home network. Please ask the network administrator for the Guest Access password and enter it below.',
        'lang_login_pwd' : 'Password',
        'lang_login_failed' :'Login Error !!'
    },
    value:{
		'lang_apply' : 'Submit',
		'lang_cancle' : 'Clear'
	}
  },
'login_guest_success.html':{
    InnerHTML:{
        'lang_login_guest_success' : 'Success! You may now open a web browser and surf the Internet.'
    }
  },  
  
'ap_enable.html':{
    InnerHTML:{
		'lang_mode_settings' : 'Wireless > Use as an Access Point',
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
		'land_highestmin'		: '(%min)',
		'land_highestmax'	    : '(%max)',
		'land_highmin'		: '(%min)',
		'land_highmax'	    : '(%max)',
		'land_mediumhmin'		: '(%min)',
		'land_mediummax'	    : '(%max)',
		'land_lowmin'       : '(%min)',
		'land_lowmax'       : '(%max)',
		'land_outlowband'	: 'Low >',
		'land_outlowestband' : 'Lowest >',
		'land_lowestmin'       : '(%min)',
		'land_lowestmax'       : '(%max)',
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
		  'lang_qoslist_header':'QOS List',
		  'td_qoslist_head3' : 'Address Type',
		  'td_qoslist_head4' : 'Address',
		  'td_qoslist_head5' : 'Protocol',
		  'td_qoslist_head6' : 'Port Filte',
		  'td_qoslist_head7' : 'Port Number',
		  'td_qoslist_head8' : 'Class',
		  'td_qoslist_head9' : 'Description'    
		  },
		  value:
		  {
			'land_edit'  :'Edit',
			'land_delete' : 'Delete',
			'land_add' : 'Add Priority Rule'  		  
		}
	  
	  
	},
	'qos_add.html':{
	  InnerHTML:{
		  'lang_qosadd_header':'Qos Rule Add',
		  'land_macfilter' : 'IP/MAC Address Filte >',
		  'land_any' : 'Any',
		  'land_destIp' : 'Destination IP',
		  'land_sourceIp' : 'Source IP',
		  'land_soucerMac' : 'Source MAC',
		  'land_address' : 'Address >',
		  'land_protol' : 'Protocol Filter >',
		  'land_class'	:'Class Assigned >',
		  'land_highest'	:'Highest',
		  'land_high'	:'High',
		  'land_medium'	:'Medium',
		  'land_low'	:'Low',
		  'Lowest'	:'Lowest',
		  'land_description' :'Description >',
		  'land_protolprotol' : 'Port Filter >',
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
  
'wireless_wps_show.html':{
	value:{
		'lang_ok' : 'Ok',
		'lang_close' : 'Cancel'
	},
    dynamic:['Initiating - Please start WPS in client device within 2 minutes.','Error Detected - Please try again.','Time out - No client connects to the Router','Success - The device is connected to the Router']
  },
'fw_dmz.html':{
	  InnerHTML:{
		'lang_DMZ' : 'Firewall > DMZ',
		'lang_DmzTips1' : 'The DMZ feature allows you to specify one computer on your network to be placed outside of the NAT firewall. This may be necessary if the NAT feature is causing problems with an application such as a game or video conferencing application. Use this feature on a temporary basis.',
		'lang_DmzTips2' : 'The computer in the DMZ is not protected from hacker attacks.',
		'lang_DmzTips3' : 'To put a computer in the DMZ, enter the last digits of its IP address in the field below and select "Enable". Click "Apply" for the change to take effect.',
		'lang_moreInfo1' : 'More Info',
		'lang_DmzIP' : 'IP Address of Virtual DMZ Host >',
		'lang_StaticIP' : 'Static IP',
		'lang_PrivateIP' : 'Private IP',
		'INPUTDMZServerIpAddr' : '192.168.3.',
		'lang_Enable' : 'Enable'
		},
	
	value:{
	    
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  'fw_main.html':{
	 InnerHTML:{
		'lang_firewall' : 'Firewall >',
		'lang_fire_Tips' : 'Your Router is equipped with a firewall that will protect your network from a wide array of common hacker attacks including Ping of Death (PoD) and Denial of Service (DoS) attacks. You can turn the firewall function off if needed. Turning off the firewall protection will not leave your network completely vulnerable to hacker attacks, but it is recommended that you turn the firewall on whenever possible.',
		'lang_firewall_enable' : 'Firewall Enable / Disable >',
		'lang_FirewallOn': 'Enable',
		'lang_FirewallOff' : 'Disable'
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
  },
  'fw_macfilter.html':{
	InnerHTML:{
		'lang_BlockMACAddress' : 'Firewall > MAC Address Filtering',
		'lang_MacTips' : 'This feature lets you set up a list of allowed clients. When you enable this feature, you must enter the MAC address of each client on your network to allow network access to each. ',
		'lang_moreInfo1' :'More Info',
		'lang_MACFilterEnable' : 'Enable MAC Address Filtering >',
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
		'lang_DynamicDNS' : 'Firewall > DDNS',
		'lang_ddns_tip1' : 'Dynamic DNS allows you to provide Internet users with a fixed domain name (instead of an IP address which may periodically change), allowing your router and applications set up in your router\'s virtual servers to be accessed from various locations on the Internet without knowing your current IP address. Your Wireless Router supports dynamic DNS through DynDNS.org(<a href="http://www.dyndns.org/"><b>http://www.dyndns.org</b></a>)',
		'lang_ddns_tip2' : 'You must create an account before using this service.',
		'lang_moreInfo1' : 'More Info',
		'lang_Ddns' : 'DDNS Service >',
		'lang_DnsOff' : 'Disabled',
		'lang_DynDns' : 'DynDNS',
		'lang_Ddns_Status' : 'DDNS Status >',
		'lang_user_name' : 'User Name >',
		'lang_password' : 'Password >',
		'lang_hostname' : 'Domain Name >'
	},
	value:{
		'lang_apply' : 'Update Dynamic DNS',
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
		'lang_security_log' : 'Firewall > Security log',
		'lang_logtips' : 'The router keeps a log of all activity within the router such as computers logging in and out and any attempts from the Internet to access the router. The log is viewable below.',
		'lang_log_file' : 'Log File',
		'lang_syetem_log' : 'System log:',
		'lang_firewall_log' : 'Firewall log:'
	},
	
	value:{
		'lang_save' : 'Save',
		'lang_clear' : 'Clear',
		'lang_refresh' : 'Refresh'
	}
 },
 'fw_disping.html':{
	InnerHTML:{
		'langWANSetup' : 'Firewall > WAN Ping Blocking ',
		'lang_moreInfo1' :'More Info',
		'idDisablePingContext' : 'Block ICMP Ping >',
		'lang_ping' : '<b>ADVANCED FEATURE!</b> You can configure the Router not to respond to an ICMP Ping (ping to the WAN port). This offers a heightened level of security.'
	},
	
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
 },
  'fw_portmap.html':{
	InnerHTML:{
		'lang_portforwd' : 'Port Forwarding',
		'lang_VserverTips' : '	This function will allow you to route external (Internet) calls for services such as a web server (port 80), FTP server (Port 21), or other applications through your Router to your internal network.',
		'lang_moreInfo1' :'More Info',
		'lang_add': 'add',
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
			'lang_cancle2' : 'Cancel',
			'lang_apply2' : 'Apply',
			'add' : 'Add',
			'delete': 'Clear'
		}
	 },
	  'ut_main.html':{
		  InnerHTML :{
			'lang_ut' : 'Utilities >',
			'lang_ut_tip' : 'This screen lets you manage different parameters of the Router and perform certain administrative functions.',
			'lang_reboot' : 'Restart Router',
			'lang_reboot_help' : 'Sometimes it may be necessary to Reset or Reboot the Router if it begins working improperly. Resetting or Rebooting the Router will not delete any of your configuration settings. ',
			'lang_restore' : 'Restore Factory Defaults',
			'lang_restore_help' : 'Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults.',
			'lang_save' : 'Save/Backup Current Settings',
			'lang_save_help' : 'You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.',
			'lang_prev' : 'Restore Previous Saved Settings',
			'lang_prev_help' : 'This option will allow you to restore a previously saved configuration.',
			'lang_firmware' : 'Firmware Update',
			'lang_firmware_help' : 'From time to time, we may release new versions of the Router\'s firmware. Firmware updates contain feature improvements and fixes to problems that may have existed.',
			'lang_remote' : 'System Settings',
			'lang_remote_help' : 'The System Settings page is where you can enter a new administrator password, set the time zone, enable remote management and turn on and off the NAT function of the Router.',
			'lang_selfheal' : 'Self Healing',
			'lang_selfheal_help' : 'Regular router re-initialization is helpful in maintaining a more problem free network.'
		}
  },
   'ut_reboot.html':{
		InnerHTML:{
			'lang_reboot_device' : 'Utilities > Restart Router',
			'lang_restart' : 'Sometimes it may be necessary to Restart or Reboot the Router if it begins working improperly. Restarting or Rebooting the Router will not delete any of your configuration settings. Click the "Restart Router" button below to Restart the Router.'
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
	    dynamic:['Utilities > Rebooting','Utilities > Restore factory defaults Successfully','Utilities > Restore Previous Saved Settings Successfully']
    },
   'ut_restore.html':{
	 InnerHTML:{
		'lang_revert_default' : 'Utilities > Restore Factory Defaults',
		'lang_restore_default' : "Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults. To restore the factory default settings, click the \"Restore Defaults\" button below."
	},
	value:{
		'lang_restore' : 'Restore Defaults'
	}
   },
    'ut_save.html':{
		InnerHTML:{
			'lang_save_setting' : 'Utilities > Save/Backup Current Settings',
			'lang_save' : 'You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.'
		},
		value:{
			'backupstting' : 'Save'
		}
   },
   'ut_prev.html':{
		InnerHTML:{
			'lang_restore_setting' : 'Utilities > Restore Previous Saved Settings',
			'lang_update' : 'This option will allow you to restore a previously saved configuration.'
		},
		value:{
			'config' : 'browse',
			'update' : 'Restore'
		}
   },
    'ut_firmware.html':{
		InnerHTML:{
			'lang_firmware_update' : 'Utilities > Firmware Update',
			'lang_Firmware_UpdateTips' : 'From time to time, we may release new versions of the Router\'s firmware. Firmware updates contain improvements and fixes to problems that may have existed. Click the link below to see if there is a new firmware update available for this Router. ',
			'lang_waring1' : 'NOTE: Please backup your current settings before updating to a new version of firmware.',
			'lang_click' : 'Click Here',
			'lang_waring2' : ' to go to the Save/Backup current settings page.',
			'lang_firmware_version' : 'Firmware Version >',
			'lang_check_version' : 'Check For New Firmware Version >',
			'lang_locate_file' : 'Update Firmware >',
			'lang_check_uponlog' : '&nbsp;Check for New Version Upon Log-in',
			'lang_ClearConfig' : '&nbsp;Clear Config',
			'fw_update' : 'Firmware update in progress',
			'fw_not_interrupt' : 'DO NOT INTERRUPT OR UNPLUG THE ROUTER, doing so could render the Router inoperable.',
			'lang_update' : 'Utilities > Firmware Update',
		    'lang_updating' : 'Router is programing',
		    'lang_second' : ' seconds remaining.'
		},
		
		value:{
			'checkVersionButton':'Check Firmware',
			'Upload' : 'Update'
		}
	},
	
    'upgrading.html':{
      InnerHTML:{
		'lang_update' : 'Utilities > Firmware Update Successfully',
		'lang_updating' : 'Router is rebooting',
		'lang_second' : ' seconds remaining.'
		}
    },
	'ut_system_set.html':{
		InnerHTML:{
		'lang_system_set' : 'Utilities > System Settings ',
		'lang_admin_password' : 'Administrator Password:',
		'lang_password_tip' : 'The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.',
		'lang_moreInfo1' : 'More Info',
		'lang_current_password' : 'Type in current Password>',
		'lang_new_password' : 'Type in new Password>',
		'lang_confirm_password' : 'Confirm new Password>',
		'lang_login_out' : 'Login Timeout>',
		'lang_time' : '1-99 minutes',
		'lang_curtime' : 'Time and Time Zone:',
		'lang_date_tip' : 'The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.',
		'lang_moreInfo2' : 'More Info',
		'lang_timezone' : 'Time Zone >',
		'lang_daylight_saving' : 'Daylight Savings >',
		'lang_daylight_help' : 'Automatically Adjust Daylight Saving',
		'lang_firttime' : 'Primary NTP Server >',
		'lang_secondtime' : 'Secondary NTP Server >',
		'lang_Remo_Mana' : 'Remote Management:',
		'lang_remote_tip1' : '<b>ADVANCED FEATURE!</b>',
		'lang_remote_tip2' : 'Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. Before you enable this function,',
		'lang_remote_tip3' : '<b>MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </b>',
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
		'lang_update_enable' : 'Auto Update Firmware Enabling:',
		'lang_update_tip1' : '<b>ADVANCED FEATURE!</b>',
		'lang_update_tip2' : 'Allows you to automatically check the availability of firmware updates for your router.',
		'lang_moreInfo5' : 'More Info',
		'lang_fw_enable' : 'Auto Update Firmware Enable / Disable >',
		'lang_update_On' : 'Enable',
		'lang_update_Off' : 'Disable',
		'lang_moreInfo6' : 'More Info',
		'lang_eco_enable' : 'Eco Mode:',
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
		'lang_Schedules_title' : 'Health > Regular Maintenance',
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
		'lang_CurrentTime' : 'Current time:',
		'lang_Hour1' : 'Hour',
		'lang_Minute1' : 'Minute',
		'lang_Hour2' : 'Hour',
		'lang_Minute2' : 'Minute'
	},
	value:{
		'lang_apply' : 'Apply',
		'lang_cancle' : 'Cancel'
	}
	},
	'login.html':{
		InnerHTML:{
		'lang_Login'     : 'Login', 
		'lang_LoginInfo' : 'Before you can change any settings, you need to log in with a password. If you have not yet set a custom password, then leave this field blank and click "Submit."',
		'lang_password'  : 'Password',
		'lang_Default'   : 'Default = admin '
	},
	value:{
		'Clear' : 'Clear',
		'uipostSubmit' : 'Submit'
	}
	},
	'noUse.html':{InnerHTML:{'noUse' : 'for I18NCrystalSys'},value:{'noUse' : 'for I18NCrystalSys'},dynamic:['No use','for I18NCrystalSys']}
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
	},
end:{'NoUse':'No Use, for I18NCrystalSys'}

};
	
