var errorCode={
	'255': '',
	'256': '未知错误, 请联系开发者',
	'1001':'内存不足, 请联系开发者',
	'1002':'空指针错误, 请联系开发者',
	'1003':'变量超长, 请联系开发者',
	'1004':'变量长度不足, 请联系开发者',
	'1005':'变量不在范围内',
	'1006':'模块名未匹配, 请联系开发者',
	'1007':'非法IP地址',
	'1008':'IP地址超出范围',
	'1009':'非法MAC地址',
	'1010':'IP地址与Mac地址未匹配',
	'1011':'非法子网掩码',
	'1012':'Action 动作未匹配, 请联系开发者',
	'1013':'主机名格式错误',
	'1014':'桥模式下不允许配置WAN链连接',
	'1015':'错误的生效参数, 请联系开发者',
	'1016':'非法网关地址',
	'1017':'端口号范围错误（1-65535）',
	'1018':'协议不支持',
	'1019':'非法的输入值,必须为正整数!',
	'1101':'LAN 地址与访客网络地址属于同一网段',
	'1102':'LAN WAN地址属于同一网段',
	'1103':'DHCP 地址池超出范围',
	'1104':'非法的DHCP地址池地址',
	'1105':'在桥模式下禁止修改DHCP地址池',
	'1106':'在桥模式下禁止修改DHCP租约时间',
	'1107':'在桥模式下禁止修改本地域名',
	'1108':'在桥模式下禁止修改DHCP开关',
	'1109' : 'LAN地址在DHCP地址池中',
	'1110' : '保留IP地址超出DHCP地址池范围！',
	'1201' : '账号长度必须介于 1 - 255 之间',
	'1202' : '密码长度必须介于 1 - 255 之间',
	'1205' : '不正确的MRU值，其需介于616…1492',
	'1206' : '不正确的MTU值，其需介于616…1492',
	'1207' : '您所输入的闲置时间是不正确的。这个时间介于1-60',
	'1208' : '不正确的MRU值，其需介于616…1436',
	'1209' : '不正确的MTU值，其需介于616…1436',
	'1210' : '不正确的MRU值，其需介于616…1430',
	'1211' : '不正确的MTU值，其需介于616…1430',
	'1401' : '端口超出范围（1-65535）',
	'1402' : '需指定一个源端口范围',
	'1403' : '需指定一个内网地址ip',
	'1404' : '需指定一个目的端口范围',
	'1405' : '源端口的起始端口号要求小于或等于源端口未尾端口号',
	'1406' : '目的端口的起始端口号要求小于或等于目的端口未尾端口号',
	'1407' : '源端口号与目的端口的范围大小需相同',
	'1408' : 'tcp,udp,tcp/udp 协议非法',
	'1409' : '非法ip地址',
	'1410' : '不是内网地址ip',
	'1411' : '不能是外网地址ip',
	'1412' : '不能是广播地址ip',
	'1413' : '端口冲突',
	'1501' : '非法网关地址',
	'1502' : 'LAN WAN地址属于同一网段',
	'1503' : 'WAN 地址与访客网络地址属于同一网',
	'1601' : '无线2G信道值设置错误',
	'1602' : '无线5G信道值设置错误',
	'1603' : 'ssid名发现无效字符。有效字符包括0-9、a-z、A-Z、`~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
	'1604' : 'wep key1密钥设置错误. 您可能未输入全部的十六进制数字或是部分您所输入的十六进制数字是不正确的。一个十六进制数字应为0至9或是A至F的字母',
	'1605' : 'wep key2密钥设置错误. 您可能未输入全部的十六进制数字或是部分您所输入的十六进制数字是不正确的。一个十六进制数字应为0至9或是A至F的字母',
	'1606' : 'wep key3密钥设置错误. 您可能未输入全部的十六进制数字或是部分您所输入的十六进制数字是不正确的。一个十六进制数字应为0至9或是A至F的字母',
	'1607' : 'wep key4密钥设置错误. 您可能未输入全部的十六进制数字或是部分您所输入的十六进制数字是不正确的。一个十六进制数字应为0至9或是A至F的字母',
	'1608' : 'psk密钥长度必须介于8至63个字符之间，可以包含空格和符号，或者只能是64个十六进制数字(0-F)',
	'1609' : '所设置的ssid名和其他的重复',
	'1610' : 'SSID 长度不正确，最短1个字符，最长32个',
	'1611' : 'wep key密钥设置错误. 您可能未输入全部的十六进制数字或是部分您所输入的十六进制数字是不正确的。一个十六进制数字应为0至9或是A至F的字母',
	'1612':'密钥无效。\n密钥应为10位十六进制（0到9及A到F）字符。\n 默认密钥必须有值，其他密钥可以为空。',
	'1613':'密钥无效。\n密钥应为26位十六进制（0到9及A到F）字符。\n 默认密钥必须有值，其他密钥可以为空。',
	'1801' : '结束时间不能小于开始时间',
	'2001' : '用户名错误',
	'2002' : '密码错误',
	'2004' : '旧密码错误.',
	'2005' : '您输入的新密码不匹配。请再试一次',
	'2006' : '闲置时间必须是 1-99 之间的整数。',
	'2007' : '权限不足',
	'2201' : '无效的端口范围(结束端口>开始端口)!',
	'2202' : '不是内网地址ip',
	'2203' : '与管理IP冲突',
	'2301' : 'ip地址重复',
	'2302' : 'MAC地址重复',
	'2501' : '无效网关',
	'2502' : '非法度量值',
	'2503' : '路由冲突',
	'2504' : '无效的IP地址或子网掩码',
	'2505' : '无效路由名称',
	'2506' : '无法解析的目的IP',
	'2507' : '添加静态路由规则失败',
	'2601' : '邮件服务器地址无效',
	'2602' : '邮件地址无效',
	'2701' : 'FTP账号已超过10个账号',
	'2702' : 'FTP账号已注册',
	'2801' : '域名格式错误，不需要http字样',
	'2802' : '域名长度为4-64个字符'
	
};

var alertErrorCode={
	'fw_ddnsWebsite':"没有选择DDNS服务.",
	'fw_portmapNoSpace': "所有的输入记录已满，请清除部分输入记录并再试一次",
	'lang_DeleteWaring':"您要清除输入记录吗",
	'fw_portmapDeleteWaring':'您要清除所有输入记录吗？',
	'fw_macFilterBroad':'不正确的MAC地址，其为一广播地址',
	'fw_macFilterBlank':'您可能未输入全部的十六进制数字或部分所输入的十六进制数字是不正确的。一个十六进制数字应为0至9或是A(a)至F(f)的字母。',
	'fw_macFilterMulticastAddress':'不正确的MAC地址，其为组播播地址',
	'fw_macFilterConflit':'这个MAC地址已经加入。',
	'pppoe_RetypePWDFaild' : '两次输入的密码不一致',
	'InvalidPin':'不正确PIN码! 装置PIN码应是八位数字。请检查及重新输入。',
	'PinChecksumFailed':'不正确PIN码! 请检查及重新输入。',
	'WpsConficWep':'如果你更改加密类型，WPS 会被禁用',
	'WpsConficchecboxssid':'隐藏您的网络名称将禁用WPS',
	'WpsConficWepconfirm':'由于您的无线网络安全类型,WPS将被禁用',
	'WpsConficWepSsid':'WPS 不能使用是因为你已经隐藏了网络名（SSID）或因为你的无线加密类型',
	'WpsConficSsid':'WPS 不能使用是因为你已经隐藏了网络名（SSID）',
	'WpsConficwepsecurity':'WPS不能使用是由于你的无线加密类型',
	'TurnOnWpsConficssidwepsecurity':'开启WPS 将显示你的网络名（SSID）并更改你的加密类型为WPA-PSK[TKIP]+WPA2-PSK[AES].. 你当前的网络密匙依然可用',
	'TurnOnWpsConficssid':'开启WPS 将显示你的网络名（SSID）',
	'TurnOnWpsConficwepsecurity':'开启WPS 将更改你的加密类型为 WPA-PSK[TKIP]+WPA2-PSK[AES]. 你当前的网络密匙依然可用',
	'PassPhrase_Blank' : '请输入一个密码!',
	'ut_dmzInputServerBlank':"请在启用DMZ前输入IP地址",
	'ut_dmzInputServerWrongIp':"IP地址的数字应介于0至255之间。",
	'ut_dmzInputServerConflitIp':"主机IP地址不正确。它不是路由器局域网络IP地址.",
	'qos_delete' : '请选择待删除项目。',
	'qos_edit' : '请选择一个待编辑项目。',
	'qos_blank' : '请输入一个数字!',
	'qos_comment_blank' : '请输入不允许的网站列表描述!',
	'qos_timeschedname_blank' : '请输入日程描述!',
	'qos_invalid' : '不正确的数字,必须为0123456789!',
	'qos_limit' : '不正确的数字，这个数字应该大于0小于100',
	'qos_minmax' : '不正确的数字, %最小 不能大于 %最大!',
	'qos_sum' : '所有 %最小 的总和不能大于100!',
	'site_name' : '请输入网站域名',
	'PWDTooShort':'密码长度不正确，最短3个数字，最长12个',
	'NewAndConfirmPasswdNotSame':'"新密码"与"确认新密码"字段不一致',
	'WebIdleTimeOutInvalid':'你输入的数字不正确，请输入1-99之间的数字',
	'DdnsInvalidHostname':'域名无效',
	'SysUpgradeCRCFaild' : '文件校验失败, 请重启路由器后再试.',
	'SysUpgradeWrongIMG' : '错误的升级文件',
	'SysUpgradeFail' : '升级img文件失败',
	'SysUpgradeUnknow' : '未知错误, 请联系开发者',
	'ConfigLoadFaild' : '错误的配置文件',
	'pleasechooseanitemedit' : '请选择一个待编辑项目。',
	'pleasechooseanitemedelete' : '请选择一个待删除项目。',
	'URLBlankDetected' : '关键字含有空格。',
	'URLERROR1' : '关键字不能是单个字符.',
	'DoubleURL' : '此规则在限制列表中已经存在。',
	'UrlAllNumbers' : '全部填写数字作为关键字可能导致某些网站访问受限，建议您填写完整域名',
	'UrlInvaildKeywords' : '非法的关键字，请输入正确的域名或URL',
	'downloader_U_bigger' : 'U盘容量不足.',
	'downloader_U_existent' : 'U盘不存在.',
	'downloader_max_num' : '已经达到最大任务数，不能再添加新任务.',
	'downloader_right_file': '请添加正确的种子文件.',
	'downloader_file_existent' : '任务已经存在.',
	'downloader_select'				 : '未选中任何文件',
	'downloader_wan_status'    : 'WAN口没插上网线或者网络状态不正常',
	'WlreNotAuto'  : '无线中继功能不能使用自动频道. \n请先更改您的频道设置再开启无线中继功能。',
	'InvalidCharacter':'发现无效字符">"!',
	'DeviceNameBlank':'设备名称不能为空。',
	'DeviceNameDul':'名称重复!',
	'InvalidTimeoutNum':'只能输入正整数。',
	'InvalidTimeoutLong':'刷新时间太短或者太长。',
	'OutOfRules':'超出了最大规则数。',
	'DomainLength' : '域名长度至少2位'
};
var left_menu={
'lang_status'				: "运行状态",
	'lang_routerstatus'			: "路由器状态",
	'lang_dhcp'					: "客户端列表",
	
	'lang_wizard'      			: "设置向导" ,
	
	'lang_wansetup_new'			: "网络设置",
	'lang_lansetup'				: "局域网设置",
	'lang_adsl'			        : "广域网设置",
	
	'lang_wirelessmain'			: "无线设置",
	'lang_wirelesssetup'		: "基本设置",
	'lang_wirelessguest'        : "访客网络",
	'lang_WifiProtected'		: "WPS设置",
	'lang_wirelessadvanced'     : "高级设置",
	'lang_wirelessrepeater'     : "中继功能",
	'lang_AccessPoint'			: "设定为AP（接入点）",
	'lang_wirelesssta'          : "设定为STA",
	'lang_wirelessmode'          : "高级模式",
	
	'lang_qosmain' 				: "媒体特性 ",
	'land_qosservice' 			: "QOS设置",
	'land_samba'				: "Samba设置",
	'lang_ftpdsetting'          : "FTP 服务器设置",
	'lang_usbhttp'              : "HTTP访问存储",
	'lang_usbdlna'              : "DLNA",
	
	'lang_firewall'				: "安全功能",
	'land_parent_control'		:'家长控制',
	'lang_wansetup'             :'WAN设置',
	'lang_macfiltering'			: "MAC地址过滤",
	'lang_urlfilter'            : "站点限制",
	
	'lang_advanced'             : "高级设置",
	'lang_VirtualServers'		: "虚拟服务器",
	'lang_ddns'					: "DDNS",
	'lang_staticroute'			: "静态路由",
	'lang_upnp'					: "UPNP设置",
	'lang_porttrigger'          : "端口触发",
	
	'lang_utilities'			: "工具程式",
	'lang_SecurityLog'			: "系统日志",
	'lang_reboot'				: "路由器重启",
	'lang_restrore_setting'		: "备份设置",
	'lang_FirmwareUpdate'		: "固件更新",
	'lang_Email'				: "电子邮件",
	'lang_SystemSetting'		: "系统设定",
	'lang_SelfHealing'			: "定期检修",
	
	'lang_download'				: "下载",
	'lang_logout'    		    : '注销'
};

var top_menu={
	'lang_Home'                 : '首页',
	'lang_Help'    			    : '帮助',
	'lang_Login'                : '登录',
	'lang_Status'    			: '因特网状态',
	'lang_wanConnStatusDown'    : '无连接',
	'lang_wanConnStatusUp'      : '已连接',
	'lang_zh_cn'				: '简体中文',
	'lang_en_us'				: 'English',
	'lang_logoWelcome'			: '欢迎',
	'lang_language_select'		: '语言:'
};

var footer={
	'lang_hareware_version'		:'硬件版本：	V 1.0.0',
	'lang_software_version'		: '软件版本:	V 1.0.0',
	'lang_rights_reserved'		: '2013 &copy; 保留所有版权'
};

var title_show = {
	'login.html'    					: "登录",
	
	'deviceinfo.html'    			    : "运行状态 > 路由器状态",
	'lan_dhcp.html'						: "运行状态 > 客户端列表",
	
	'WIZ_sel.html'                      : "设置向导" ,
	
	'lan_set.html'						: "网络设置 > 局域网设置",
	'wan_adsl.html'						: "网络设置 > 广域网设置",
	
	'wireless_basic.html'				: "无线设置 > 基本设置",
	'wireless_guest.html'               : "无线设置 > 访客网络",
	'wireless_wps.html'					: "无线设置 > WPS设置",
	'wireless_advanced.html'		    : "无线设置 > 高级设置",
	'wireless_repeater.html'		    : "无线设置 > 中继功能",
	'ap_enable.html'					: "无线设置 > 设定为AP（接入点）",
	'wirelesssta.html'					: "无线设置 > 设定为STA",
	
	'qos_service.html'					: "媒体特性 > QoS 设置",
	'samba.html'					    : "媒体特性 > Samba 设置",
	'ftpd_setting.html'					: "媒体特性 > FTP 服务器设置",
	'usb_http.html'					    : "媒体特性 > HTTP访问存储",
	'usb_dlna.html'					    : "媒体特性 > DLNA",
	
	'parent_control.html'				: "安全功能 > 家长控制",
	'fw_wansetup.html'					: "安全功能 > WAN 设置",
	'fw_macfilter.html'					: "安全功能 > MAC地址过滤",
	'fw_urlfilter.html'                 : "安全功能 > 站点限制",
	
	'fw_portmap.html'					: "高级设置 > 虚拟服务器",
	'fw_ddns.html'						: "高级设置 > DDNS",
	'upnp.html'							: "高级设置 > UPNP设置",
	'porttrigger.html'                  : "高级设置 > 端口触发",
	'str_route.html'                    : "高级设置 > 静态路由",
	
	'ut_reboot.html'					: "工具程式 > 路由器重启",
	'ut_prev.html'						: "工具程式 > 备份设置",
	'ut_firmware.html'					: "工具程式 > 固件更新",
	'fw_email.html'						: "工具程式 > 电子邮件",
	'fw_log.html'						: "工具程式 > 系统日志",
	'ut_system_set.html'				: "工具程式 > 系统设定",
	'ut_self_healing'				    : "工具程序 > 定期检修",
	'download_bt.html'                  : "脱机下载",
	'login_guest.html'    				: "访客登录",
	'login_guest_success.html'    		: "访客登录 > 成功"
}  

var variable={
	'lang_yes' : '启用',
	'lang_no'  : '关闭',
	'lang_none': '无',
	'land_both': '两者均用',
	'land_delete': '删除',
	'land_auto':'自动',
	'land_off':'关闭',
	'land_toomany1':'复制管理员',
	'land_toomany2':'',
	'land_toomany3':'正在管理该设备',
	'land_qosRuleType' : '下行',
	'land_qosRuleType1' : '上行',
	'land_qosAddressType1': '目的 IP',
	'land_qosAddressType2': '源 IP',
	'land_qosAddressType3': '源 MAC',
	'land_qosAddressType4': '任何',
	'land_qosAddrFilter1' : '目的',
	'land_qosAddrFilter2' : '源',
	'land_qosAddrFilter3' : '目的或源',
	'land_qosAddrFilter4' : '任何',
	'land_qosClass1'	:'最高',
	'land_qosClass2'	:'高',
	'land_qosClass3'	:'中',
	'land_qosClass4'	:'低',
	'land_qosClass5'	:'最低',
	'land_dhcp' : '动态',
	'land_stat' : '静态',
	'land_pppoe' : 'PPPOE',
	'land_pptp' : 'PPTP',
	'land_l2tp' : 'L2TP',
	'land_bt_pause' : '暂停',
	'land_bt_begin' : '正在下载',
	'land_bt_wait'  : '等待',
	'land_option'	:'--请选择--',
	'land_enable'	:'生效',
	'land_disable'	:'失效',
	'land_yes' : '是',
	'land_no'  : '否',
	'lang_mtu_limit_pppoe':'(616~1492字节)',
	'lang_mtu_limit_pptp':'(616~1436字节)',
	'lang_mtu_limit_l2tp':'(616~1430字节)'
};

var data_language={
'deviceinfo.html':{
	InnerHTML:{
		'lang_deviceinfo' : '运行状态 > 路由器状态',
		
		'lang_version_info' : '系统信息',
		'lang_HardwareVersion' : '硬件版本',
		'lang_SysFirmwareVersion' : '固件版本',
		'lang_BootVersion' : '启动版本',
		'lang_serial' : '序号',
		'lang_time' : '时间和日期',
		
		'lang_lan_set' : '局域网端口',
		'lang_LanMACAddress' : 'MAC地址',
		'lang_LanIPAddress' : 'IP地址',
		'lang_LanSubnetMask' : 'IP子网掩码',
		'lang_dhcp_server' : 'DHCP服务器',
				
		'lang_wan_set' : '因特网端口',
		'lang_WanFacDefMACAddr' : 'MAC地址',
		'lang_WanNetLink' : '因特网接入方式',
		'lang_WanIPAddress' : 'IP地址',
		'lang_WanSubnetMask' : 'IP子网掩码',
		'lang_WanDefaultGateway' : '默认网关',
		'lang_WanDomainNameServer' : '域名服务器',
		
		'lang_WirelessPort_2G' : '无线端口(2G)',
		'lang_WirelessPort_5G' : '无线端口(5G)',
		'lang_WirelessNetworkName_2G' : '无线网络标识(主SSID)',
		'lang_WirelessNetworkName_5G' : '无线网络标识(主SSID)',
		'lang_WirelessRegulatory_2G' : '地区',
		'lang_WirelessRegulatory_5G' : '地区',
		'lang_WirelessChannel_2G' : '频道',
		'lang_WirelessChannel_5G' : '频道',
		'lang_Mode_2G' : '模式',
		'lang_Mode_5G' : '模式',
		'lang_WirelessRadio_2G' : '无线功能',
		'lang_WirelessRadio_5G' : '无线功能',
		'lang_WirelessSSIDBroad_2G' : '广播名称',
		'lang_WirelessSSIDBroad_5G' : '广播名称',
		'lang_WirelessAPIsolate_2G' : '无线隔离 ',
		'lang_WirelessAPIsolate_5G' : '无线隔离 ',
		'lang_WirelessWPSEnable_2G' : 'Wi-Fi保护设置(WPS) ',
		'lang_WirelessWPSEnable_5G' : 'Wi-Fi保护设置(WPS) ',
		'lang_WirelessSecurityMode_2G' : '无线安全模式',
		'lang_WirelessSecurityMode_5G' : '无线安全模式'
	},
	value : {
		'lang_ShowStatistics' : '显示统计信息',
		'Connect_Status' : '连接状态'
	}
},

'status_statistics.html':{
	InnerHTML :{     
	    'lang_statistic_information' :'统计信息',
		'lang_SysUpTime' : '系统启动时间',
		'lang_port' : '端口',
		'lang_status' : '状态',
		'lang_txpkts' : '数据包发送数目',
		'lang_rxpkts' : '数据包接收数',
		'lang_collisions' : '冲突数目',
		'lang_txbs' : '发送字节数',
		'lang_rxbs' : '接收字节数',
		'lang_up_Time' : '启动时间',
		'lang_wan' : '广域网',
		'lang_lan1' : '局域网',
		'lang_lan2' : '局域网 2',
		'lang_lan3' : '局域网 3',
		'lang_lan4' : '局域网 4',
		'lang_wlan_2G' : '无线局域网 (2.4G)',
		'lang_wlan_5G' : '无线局域网 (5G)',
		'lang_poll_interval' : '轮询时间间隔',
		'lang_secs' : '(1~86400 秒)'
	},
	value : {
		'submit' : '设置时间间隔',
		'button' : '停止'
	}
},
  
'lan_set.html':{
	InnerHTML:{
		'lang_lan_set1' : '局域网设置',
		'lang_lan_tcpip' : '局域网TCP/IP设置',
		'lang_routerIPaddr' : 'IP地址 >',
		'lang_submask' : '子网掩码 >',
		'lang_DhcpServer' : '将路由器用作DHCP服务器 ',
		'lang_lanName1': '本地网域名称 >',
		'DhcpipaddrStart' : 'IP地址池开始地址 >',
		'DhcpipaddrEnd' : 'IP地址池结束地址 >',
		'DhcpleaseT' : '租赁时间 >',
		'lang_AddressReservation' : '地址保留',
		'lang_IpAddr' : 'IP地址',
		'lang_DeviceName' : '设备名称',
		'lang_MacAddr' : 'MAC 地址'
	},
	value:{	
		'Add' : '添加',
		'Edit' : '编辑',
		'Delete' : '删除',
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},
  
'lan_reserv_add.html':{
	InnerHTML : {
		'lang_AddressReservation' : '局域网设置 > 地址保留',
		'editresever_show'  :  '地址保留表',
		'td_addr_reser_head2' : 'IP地址',
		'td_addr_reser_head3' : '设备名称',
		'td_addr_reser_head4' : 'MAC 地址',
		'lang_edit_ip' : 'IP地址',
		'Dv_mac_addr_show' : 'MAC 地址',
		'Dv_name_show' : '设备名称'
	},
	value : {
		'Refresh' : '刷新',
		'Cancel' : '取消',
		'Add' : '添加'
	}
},
  
'lan_dhcp.html':{
	InnerHTML:{
		'lang_dhcp_header' : '运行状态 > 客户端列表',
		'lang_header' : '客户端列表',
		'lang_wired_devices' : '有线设备',
		'td_lanClients_head2' : 'IP地址',
		'td_lanClients_head1' : '主机名',
		'td_lanClients_head3' : 'MAC地址'
	},
	value:{
		'refresh' : '刷新'
	}	
},
  
'WIZ_sel.html':{
	InnerHTML : {
		'lang_title' : '设置向导',
		'lang_introduction' : '智能设置向导可检测你所进行的因特网连接类型。现在是否需要“智能设置向导”检测连接类型？',
		'lang_yes':'&nbsp;是。',
		'lang_no':'&nbsp;否。我自己配置路由器。'
	},
	value : {
		'lang_next' : '下一步'
	}
},

'WIZ_cfm.html':{
	InnerHTML : {
		'lang_title' : '设置向导',
		'lang_link_status' : '请务必将电缆牢固插入宽带调制解调器端口及路由器的英特网端口。',
		'lang_wait_moment' : '正在检测英特网连接!!!该过程需要花费一至两分钟的时间. 请稍等...'
	},
	value : {
		'lang_Retry' : '重试',
		'quit' : '退出'
	}
},

'WIZ_wait.html':{
	InnerHTML : {
		'lang_title':'设置向导',
		'lang_wait_moment' : '该过程需要花费一至两分钟时间；请稍候...'
	}
}, 

'WIZ_fix.html':{
	InnerHTML : {
		'lang_title':'设置向导',
		
		'lang_dhcp_detected' : '检测到动态IP(DHCP)',
		'langHostName':'帐户名(如果需要)',
		
		'lang_pppoe_detected' : '检测到PPPoE连接类型',
		'langLoginName':'登录名',
		'langLoginPassword':'密码',

		'lang_staticip_detected' : '检测到静态IP（Fixed）',
		'langStaticIPADD':'因特网IP地址',
		'langStaticIPAddress':'IP地址',
		'langStaticIPSubnetMask':'IP子网掩码',
		'langStaticIPDefaultGateway':'网关IP地址',
		'langStaticIPDNS':'域名服务器(DNS)地址',
		'langStaticIPPDNS':'主域名服务器',
		'langStaticIPSDNS':'从域名服务器'
	},
	value : {
		'Cancel' : '取消',
		'Apply':'应用'
	}
},  

'BRS_success.html':{
	InnerHTML : {
		'lang_title':'设置向导',
		'lang_ssid':'无线网络标识(SSID)',
		'lang_password':'网络密钥（密码)',
		'lang_ssid5':'无线网络标识(SSID)',
		'lang_password5':'网络密钥（密码)'
	},
	value : {
		'lang_to_internet' : '带我畅游网络'
	}
}, 

'WIZ_wireless.html':{
	InnerHTML : {
		'lang_title':'设置向导',
		'lang_ssid':'无线网络标识(SSID)',
		'lang_password':'网络密钥（密码)',
		'lang_ssid5':'无线网络标识(SSID)',
		'lang_password5':'网络密钥（密码)',
		'lang_help1':'8-63位的字符串',
		'lang_help2':'8-63位的字符串'
	},
	value : {
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'wanadsl.html':{
	InnerHTML : {
		'langWan' : '广域网设置',
		'idLoginContext' : '您的因特网连接需要登录吗？',
		'idLoginYesContext' : '是',
		'idLoginNoContext' : '否',
		'langTypeConfig' : '因特网服务提供商',
		'idAccountNameRequiredContext' : '帐户名',
		'idDomainNameRequiredContext' : '域名(如果需要)',
		'idL2TPPPTPLoginContext' : '登录名',
		'idL2TPPPTPPasswordContext' : '密码',
		'idPPPOEServiceNameContext' : '服务名 (如果需要)',
		'idL2TPPPTPModeContext' :'连接模式',
		'idL2TPPPTPTimoutContext' : '闲置超时(分钟)',
		'idL2TPPPTPIPAddressContext' : '我的IP地址',
		'idL2TPPPTPSubnetContext' : '子网掩码',
		'idL2TPPPTPServerAddressContext' : '服务器地址',
		'idL2TPPPTPGatewayContext' : '网关IP地址',
		'idL2TPPPTPIdNameContext' : '连接ID/名称',
		'idInternetIPAddressContext' : '因特网IP地址',
		'idUseDHCPContext' : '从ISP处动态获取',
		'idUseStatcContext' : '使用静态IP地址',
		'idStaticIPAddressContext' : 'IP地址',
		'idPPPOEDualIPContext' :'使用双IP地址',
		'idPPPOEIPAddress2' : 'IP地址',
		'idStaticSubnetMaskContext' : 'IP子网掩码',
		'idStaticGatewayContext' : '网关IP地址',
		'idDNSContext' : '域名服务器(DNS)地址',
		'idDNSAutomatically' : '从ISP处动态获取',
		'idDNSManually' : '使用下面的DNS服务器',
		'idDNSPrimaryContext' : '主域名服务器',
		'idDNSSecondaryContext' : '从域名服务器',
		'idMACAddressContext' : '路由器MAC地址',
		'idMacDefault' : '使用缺省地址',
		'idMacComputer' : '使用计算机MAC地址',
		'idMacThis' : '使用MAC地址',
		'idAlwaysOn' : '一直连接',
		'idDialOnDemand' : '需要时连接',
		'idManuallyConnect' : '手动连接',
		'lang_mtu':'MTU大小'
	},
	value : {
		'idApply' : '应用',
		'idCancel' : '取消'
	}
},
  
'wireless_basic.html':{
	InnerHTML:{
		'lang_basic' : '无线设置 > 基本设置',
		'lang_basic_introduction' : '区域选择',
		'lang_Network_Adapter' : '网卡 > ',
		'lang_Region' : '地区 > ',
		'lang_wireless_network' : '无线网络',
		'lang_channel' : '无线频道 >',
		'lang_other_channel' : '延伸频道 >',
		'lang_SSID' : 'SSID >',
		'lang_mode' : '无线模式 >',
		'lang_2040' : '带宽 >',
		'langEnableRadioContext':'启用无线网络',
		'langEnableSSIDContext':'启用SSID广播',
		'langEnableIsolatedContext1':'启用无线隔离',
		'langEnableRadioContext5':'启用无线网络',
		'langEnableSSIDContext5':'启用SSID广播',
		'langEnableIsolatedContext15':'启用无线隔离',
		'langEnableIsolatedContext':'保护模式 >',
		'lang_channel5' : '无线频道 >',
		'lang_other_channel5' : '延伸频道 >',
		'lang_SSID5' : 'SSID >',
		'lang_mode5' : '无线模式 >',
		'lang_20405' : '带宽 >',
		'langEnableIsolatedContext5':'保护模式 >',
		'lang_IsolatedOff' : '关闭',
		'lang_IsolatedOn' : '启用',
		'lang_WmmOn' :'启用',
		'lang_WmmOff' : '关闭',
		'lang_off' : '关闭',
		'lang_off5' : '关闭',
		'lang_IsolatedOff5' : '关闭',
		'lang_IsolatedOn5' : '启用',
		'lang_WmmOn5' :'启用',
		'lang_WmmOff5' : '关闭',
		'lang_Rate' : '最大传输速率:',
		'lang_Rate5' : '最大传输速率:',
		
		
		'lang_Profile_securitynum' : '安全选项--方案 ',
		'lang_SecurityOptions' : '安全选项：',
		'lang_SecurityEncryptionWep' : '安全加密(WEP)',
		'lang_AuthenticationType' : '认证方式：',
		'lang_EncryptionStrength' : '加密强度：',
		'lang_SecurityEncryptionWepKey' : '安全加密密钥',
		'lang_key1' : '密钥1',
		'lang_key2' : '密钥2',
		'lang_key3' : '密钥3',
		'lang_key4' : '密钥4',
		'lang_SecurityOptionsWpaPsk' : '安全选项(WPA-PSK)',
		'lang_PassPhraseWpaPsk' : '密码：',
		'lang_charactersWpaPsk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpa2Psk' : '安全选项(WPA2-PSK)',
		'lang_PassPhraseWpa2Psk' : '密码：',
		'lang_charactersWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpaPskWpa2Psk' : '安全选项(WPA-PSK+WPA2-PSK)',
		'lang_PassPhraseWpaPskWpa2Psk' : '密码：',
		'lang_charactersWpaPskWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_automatic' : '自动',
		'lang_shared' : '共享密钥',
		'lang_length64' : '64位',
		'lang_length128' : '128位',
		'lang_passphrase' : '密码短语： '
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消',
		'lang_generate' : '启用'
	}
},

'wireless_repeater_basic.html':{
	InnerHTML:{
		'lang_basic' : '无线设置 > 基本设置',
		'lang_basic_introduction' : '区域选择',
		'lang_Network_Adapter' : '网卡 > ',
		'lang_Region' : '地区 > ',
		'lang_wireless_network' : '无线网络',
		'lang_channel' : '无线频道 >',
		'lang_other_channel' : '延伸频道 >',
		'lang_SSID' : 'SSID >',
		'lang_mode' : '无线模式 >',
		'lang_2040' : '带宽 >',
		'langEnableRadioContext':'启用无线网络',
		'langEnableSSIDContext':'启用SSID广播',
		'langEnableIsolatedContext1':'启用无线隔离',
		'langEnableRadioContext5':'启用无线网络',
		'langEnableSSIDContext5':'启用SSID广播',
		'langEnableIsolatedContext15':'启用无线隔离',
		'langEnableIsolatedContext':'保护模式 >',
		'lang_channel5' : '无线频道 >',
		'lang_other_channel5' : '延伸频道 >',
		'lang_SSID5' : 'SSID >',
		'lang_mode5' : '无线模式 >',
		'lang_20405' : '带宽 >',
		'langEnableIsolatedContext5':'保护模式 >',
		'lang_IsolatedOff' : '关闭',
		'lang_IsolatedOn' : '启用',
		'lang_WmmOn' :'启用',
		'lang_WmmOff' : '关闭',
		'lang_off' : '关闭',
		'lang_off5' : '关闭',
		'lang_IsolatedOff5' : '关闭',
		'lang_IsolatedOn5' : '启用',
		'lang_WmmOn5' :'启用',
		'lang_WmmOff5' : '关闭',
		'lang_Rate' : '最大传输速率:',
		'lang_Rate5' : '最大传输速率:',
		
		
		'lang_Profile_securitynum' : '安全选项--方案 ',
		'lang_SecurityOptions' : '安全选项：',
		'lang_SecurityEncryptionWep' : '安全加密(WEP)',
		'lang_AuthenticationType' : '认证方式：',
		'lang_EncryptionStrength' : '加密强度：',
		'lang_SecurityEncryptionWepKey' : '安全加密密钥',
		'lang_key1' : '密钥1',
		'lang_key2' : '密钥2',
		'lang_key3' : '密钥3',
		'lang_key4' : '密钥4',
		'lang_SecurityOptionsWpaPsk' : '安全选项(WPA-PSK)',
		'lang_PassPhraseWpaPsk' : '密码：',
		'lang_charactersWpaPsk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpa2Psk' : '安全选项(WPA2-PSK)',
		'lang_PassPhraseWpa2Psk' : '密码：',
		'lang_charactersWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpaPskWpa2Psk' : '安全选项(WPA-PSK+WPA2-PSK)',
		'lang_PassPhraseWpaPskWpa2Psk' : '密码：',
		'lang_charactersWpaPskWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_automatic' : '自动',
		'lang_shared' : '共享密钥',
		'lang_length64' : '64位',
		'lang_length128' : '128位',
		'lang_passphrase' : '密码短语： '
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消',
		'lang_generate' : '启用'
	}
},
  
'wireless_wps.html':{
	InnerHTML:{
		'lang_Wps' : '无线设置 > WPS 设置',
		'lang_Network_Adapter' : '网卡 > ',
		'lang_wps_setup' : 'Wi-Fi保护型设定程式(WPS)',
		'lang_wps_off' : '关闭',
		'lang_wps_on' : '启用',
		'lang_wps_button' : 'WPS按钮',
		'lang_wps_ButtonOn' : '启用',
		'lang_wps_ButtonOff' : '关闭',
		'lang_wps_method1' : '1) 私人密码(PIN)方法',
		'lang_wps_tip3' : '输入用户装置PIN',
		'lang_routerpin' : '路由器PIN码',
		'lang_wps_method2' : '2) 按钮组态(PBC)方法',
		'lang_wps_method3' : '3) 手动组态方法',
		'lang_wps_tip6' : '没有WPS的附设装置和手动组态装置用以下方法设定:',
		'lang_network_name' : '网路名称(SSID):',
		'lang_wireless_security' : '无线安全:',
		'lang_configure_security' : '请配置无线安全',
		'lang_network_authentication' : '网络确认:',
		'lang_data_encryption' : '资料加密:',
		'lang_network_key' : '网络密匙',
		'lang_wl_security' : '无线安全',
		'lang_network_name5' : '网路名称(SSID):',
		'lang_wireless_security5' : '无线安全:',
		'lang_configure_security5' : '请配置无线安全',
		'lang_network_authentication5' : '网络确认:',
		'lang_data_encryption5' : '资料加密:',
		'lang_network_key5' : '网络密匙',
		'lang_wl_security5' : '无线安全'
	},
	value:{	
		'genrate_pin' : '产生新PIN码',
		'restore_pin' : '恢复PIN码设定值',
		'lang_apply' : '应用',
		'start_PBC' : '开始PBC',
		'enroll' : '登记',
		'BUTTON_NEXT' : '下一步'
	},
	dynamic:['组态未完成','组态完成','自动']
},

'wireless_wps_show.html':{
	value:{
		'lang_ok' : '确定',
		'lang_close' : '取消'
	},
	dynamic:['初始中 - 请在两分钟之内开始附设装置中的WPS','开始WPS进程...','成功 - 设备已经连接到路由器','由于WPS消息交换错误失败！','由于WPS超时失败！','由于WPS会话重置失败','与接入点相关联...']
},

'wireless_guest.html':{
	InnerHTML : {
		'lang_guest' : '无线设置 > 访客网络',
		'lang_NetworkProfiles' : '网络方案',
		'lang_Network_Adapter' :  '网卡：',
		'lang_Scheme' : '方案',
		'lang_SSID' : 'SSID',
		'lang_Security' : '安全',
		'lang_Apply' : '应用',
		'lang_BroadcastSSID' : '广播SSID',
		'lang_EnableGuestNetwork' : '启用访客网络',
		'lang_EnableSSIDBroadcast' : '启用SSID广播',
		'lang_Profile_wireless' : '无线设置--方案 ',
		'lang_Profile_securitynum' : '安全选项--方案 ',
		'lang_AllowGuest' : '允许访客访问本地网络',
		'lang_EnableIsolation' : '启用无线隔离',
		'lang_EnableWmf' : '启用 WMF',
		'lang_GuestName' : '访客无线网络名称(SSID):',
		'lang_SecurityOptions' : '安全选项：',
		'lang_SecurityEncryptionWep' : '安全加密(WEP)',
		'lang_AuthenticationType' : '认证方式：',
		'lang_EncryptionStrength' : '加密强度：',
		'lang_SecurityEncryptionWepKey' : '安全加密密钥',
		'lang_key1' : '密钥1',
		'lang_key2' : '密钥2',
		'lang_key3' : '密钥3',
		'lang_key4' : '密钥4',
		'lang_passphrase' : '密码短语：',
		'lang_SecurityOptionsWpaPsk' : '安全选项(WPA-PSK)',
		'lang_PassPhraseWpaPsk' : '密码：',
		'lang_charactersWpaPsk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpa2Psk' : '安全选项(WPA2-PSK)',
		'lang_PassPhraseWpa2Psk' : '密码：',
		'lang_charactersWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpaPskWpa2Psk' : '安全选项(WPA-PSK+WPA2-PSK)',
		'lang_PassPhraseWpaPskWpa2Psk' : '密码：',
		'lang_charactersWpaPskWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_automatic' : '自动',
		'lang_shared' : '共享密钥',
		'lang_length64' : '64位',
		'lang_length128' : '128位'
	},
	value:{
		'lang_apply1' : '应用',
		'lang_cancle' : '取消',
		'lang_generate' : '启用'
	}
},

'login_guest.html':{
	InnerHTML:{
		'lang_zh_cn' : '中文 ', 
		'lang_en_us' : 'English',
		'land_password'  : '密码:',
		'land_language'   : '语言:',
		'lang_login_failed' : '登录错误!!',
		'lang_login_tip' : '访客存取功能允许用户访问网络，但限制用户访问家庭网络。请询问网络管理员获取访客存取的密码，并在以下位置进行输入。'
	},
	value:{
		'lang_apply' : '登录',
		'lang_cancle' : '重设'
	}
},

'login_guest_success.html':{
	InnerHTML:{
		'lang_login_guest_success' : '成功！您现在就可打开网页浏览器并上网冲浪.'
	}
},

'wireless_advanced.html':{
	InnerHTML : {
		'lang_AdvancedWireless' : '无线设置 > 高级设置',
		'lang_Network_Adapter' : '网卡 : ',
		'lang_EnableBcmAcs' : '启用 ACS',
		'lang_EnableWMF' : '启用 WMF',
		'lang_EnableXPress' : '启用 XPress&#8482; 技术',
		'lang_EnablePhyWatchdog' : '启用 PHY 看门狗',
		'lang_FragmentationLength' : '碎片限值(256-2346):',
		'lang_CTS_RTS_Threshold' : 'CTS/RTS限值(1-2347):',
		'langPower':'调节发射功率',
		'idShortPreamble':'短报头',
		'idLongPreamble':'长报头',
		'lang_PreambleMode' : '报头模式',
		'lang_list_disc':'无线网卡访问列表'
	},
	value : {
		'wiread_apply' : '应用',
		'wiread_cancel' : '取消',
		'BUTTON_SetupList':'设置访问列表'
	}	
},
  
'wireless_advanced_list.html':{
	InnerHTML : {
		'lang_AdvancedWireless' : '无线设置 > 高级设置 > 无线网卡访问列表',
		'lang_AccessControl' : '打开无线访问控制',
		'lang_MacAddress' : 'MAC 地址',
		'lang_Description' : '设备名称'
	},
	value : {
		'wiread_apply' : '应用',
		'wiread_cancel' : '取消',
		'wiread_add' : '添加',
		'wiread_edit' : '编辑',
		'wiread_delete' : '删除'
	}	
},

'wireless_advanced_edit.html':{
	InnerHTML : {
		'lang_AdvancedWireless' : '无线设置 > 高级设置 > 无线网卡访问设置',
		'lang_disc' : '可用的无线网卡',
		'lang_MacAddress2' : 'MAC地址',
		'lang_Description2' : '设备名称',
		'lang_disc_2':'输入无线网卡（最多条数：16）',
		'idDeviceName':'设备名称',
		'idMACAddress':'MAC地址'
	},
	value : {
		'wiread_addlist' : '添加',
		'wiread_canceladd' : '取消',
		'wiread_refresh' : '刷新',
		'edit_accept':'修改',
		'edit_cancel':'取消'
	}	
},
  
'wireless_repeater.html':{
	InnerHTML : {
		'lang_disc' : '无线设置 > 中继功能',
		'lang_repeater_context' : '此页面指引您设置无线中继的功能。当有一个无线路由工作在中心基站模式，您可以把此路由器设置成中继模式来扩大中心基站的无线信号覆盖范围，以允许更多的人接入到您的无线网络里。',
		'lang_Network_Adapter' : '网卡：',
		'lang_enable_repeater' : '启用无线中继功能',
		'lang_disable_clients' : '禁止无线客户端接入',
		'lang_wireless_mac' : '路由器的无线MAC地址：',
		'lang_repeater_mode' : '无线中继模式',
		'lang_repeater_ip_addr' : '中继器IP地址：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
		'lang_central_MAC' : '中心基站MAC地址：',
		'lang_central_mode' : '中心基站模式',
		'lang_repeater1_MAC' : '中继器MAC地址1：',
		'lang_repeater2_MAC' : '中继器MAC地址2：',
		'lang_repeater3_MAC' : '中继器MAC地址3：',
		'lang_repeater4_MAC' : '中继器MAC地址4：',
		'lang_security1' : '无线安全选项',
		'lang_security2' : '安全选项：',
		'Security_Encryption_WEP' : '安全加密(WEP)',
		'lang_auth_type' : '认证类型：',
		'lang_enc_strength' : '加密强度：',
		'lang_enc_key' : '密钥（WEP）',
		'lang_key' : '密钥：',
		'lang_security_WPA_PSK' : '安全配置(WPA-PSK)',
		'lang_wpa_passphrase' : '密码：',
		'lang_wpa_note' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_security_WPA2_PSK' : '安全配置(WPA2-PSK)',
		'lang_wpa2_passphrase' : '密码：',
		'lang_wpa2_note' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_security_WPA_WPA2_PSK' : '安全配置(WPA-PSK+WPA2-PSK)',
		'lang_wpa_wpa2_passphrase' : '密码：',
		'lang_wpa_wpa2_note' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_length64' : '64位',
		'lang_length128' : '128位'
	},
	
	value : {
		'submit' : '应用',
		'cancel' : '取消'
	}
},

'ap_enable.html':{
	InnerHTML:{
		'lang_mode_settings' : '无线设置 > 设定为AP（接入点）',
		'lang_advanced_feature' : '进阶功能 路由器可以只限定用为一个AP无线接入点，屏蔽所有路由和防火墙功能。您可以选取"启用" 然后输入您想给AP指定的IP地址即可',
		'lang_moreInfo1' : '更多信息',
		'lang_ApEnable' : '启用/关闭>',
		'lang_ApOn' : '开启',
		'lang_ApOff' : '关闭',
		'lang_SpecifyIP' : '指定IP地址 >',
		'lang_Submask' : '子网掩码 >',
		'lang_applyChange':'应用成功',
		'lang_seconds':'所剩秒数.'
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'wireless_sta.html':{
	InnerHTML:{
		'lang_title' : '无线设置 > 设定为STA',
		'lang_Enable' : ' 设定为STA',
		'lang_conn' : '连接到SSID',
		'lang_conn_status' : '关联状态',
		'lang_Network_Adapter' : '选择模式',
		'lang_Profile_securitynum' : '安全选项--方案 ',
		'lang_SecurityOptions' : '安全选项',
		'lang_SecurityEncryptionWep' : '安全加密(WEP)',
		'lang_AuthenticationType' : '认证方式：',
		'lang_EncryptionStrength' : '加密强度：',
		'lang_SecurityEncryptionWepKey' : '安全加密密钥',
		'lang_key1' : '密钥1',
		'lang_key2' : '密钥2',
		'lang_key3' : '密钥3',
		'lang_key4' : '密钥4',
		'lang_SecurityOptionsWpaPsk' : '安全选项(WPA-PSK)',
		'lang_PassPhraseWpaPsk' : '密码：',
		'lang_charactersWpaPsk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpa2Psk' : '安全选项(WPA2-PSK)',
		'lang_PassPhraseWpa2Psk' : '密码：',
		'lang_charactersWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpaPskWpa2Psk' : '安全选项(WPA-PSK+WPA2-PSK)',
		'lang_PassPhraseWpaPskWpa2Psk' : '密码：',
		'lang_charactersWpaPskWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_automatic' : '自动',
		'lang_shared' : '共享密钥'
	},
	value:{
		'lang_apply' : '应用',
		'lang_apply1' : '连接',
		'lang_cancle' : '取消',
		'lang_generate' : '启用'		
	}
},
'advancemode.html':{
	InnerHTML:{
		'lang_title' : '无线设置 > 高级模式',
		'lang_mode':'模式选择',
		'lang_Enable' : ' 设定为STA',
		'lang_conn' : '连接到SSID',
		'lang_conn_status' : '关联状态',
		'lang_Network_Adapter' : '选择模式',
		'lang_Profile_securitynum' : '安全选项--方案 ',
		'lang_SecurityOptions' : '安全选项',
		'lang_SecurityEncryptionWep' : '安全加密(WEP)',
		'lang_AuthenticationType' : '认证方式：',
		'lang_EncryptionStrength' : '加密强度：',
		'lang_SecurityEncryptionWepKey' : '安全加密密钥',
		'lang_key1' : '密钥1',
		'lang_key2' : '密钥2',
		'lang_key3' : '密钥3',
		'lang_key4' : '密钥4',
		'lang_SecurityOptionsWpaPsk' : '安全选项(WPA-PSK)',
		'lang_PassPhraseWpaPsk' : '密码：',
		'lang_charactersWpaPsk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpa2Psk' : '安全选项(WPA2-PSK)',
		'lang_PassPhraseWpa2Psk' : '密码：',
		'lang_charactersWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_SecurityOptionsWpaPskWpa2Psk' : '安全选项(WPA-PSK+WPA2-PSK)',
		'lang_PassPhraseWpaPskWpa2Psk' : '密码：',
		'lang_charactersWpaPskWpa2Psk' : '(8-63 个字符 或 64 位长的十六进制数)',
		'lang_automatic' : '自动',
		'lang_shared' : '共享密钥',
		'lang_advanced_feature' : '进阶功能 路由器可以只限定用为一个AP无线接入点，屏蔽所有路由和防火墙功能。您可以选取"启用" 然后输入您想给AP指定的IP地址即可',
		'lang_moreInfo1' : '更多信息',
		'lang_ApEnable' : '启用/关闭>',
		'lang_ApOn' : '开启',
		'lang_ApOff' : '关闭',
		'lang_SpecifyIP' : '指定IP地址',
		'lang_Submask' : '子网掩码',
		'lang_applyChange':'应用成功',
		'lang_seconds':'所剩秒数.',
		'lang_repeaterSpecifyIP':'指定IP地址',
		'lang_repeaterSubmask':'子网掩码',
		'lang_Network_repeaterAdapter':'选择模式',
		'repeater_25G':'2G and 5G',
		'lang_repeaterconn':'连接到SSID',
		'lang_repeater_conn_status':'关联状态',
		'lang_repeater_SecurityOptions':'安全选项',
		'lang_repeater_SecurityEncryptionWep':'安全加密(WEP)',
		'lang_repeater_AuthenticationType':'认证方式：',
		'lang_repeater_SecurityEncryptionWepKey':'安全加密密钥',
		'lang_repeater_SecurityOptionsWpaPsk':'安全选项(WPA-PSK)',
		'lang_repeater_PassPhraseWpaPsk':'密码:',
		'lang_repeater_charactersWpaPsk':'(8-63 个字符 或 64 位长的十六进制数)',
		'lang_repeater_SecurityOptionsWpa2Psk':'安全选项(WPA2-PSK)',
		'lang_repeater_PassPhraseWpa2Psk':'密码:',
		'lang_repeater_charactersWpa2Psk':'(8-63 个字符 或 64 位长的十六进制数)',
		'lang_repeater_SecurityOptionsWpaPskWpa2Psk':'安全选项(WPA-PSK+WPA2-PSK)',
		'lang_repeater_PassPhraseWpaPskWpa2Psk':'密码:',
		'lang_repeater_charactersWpaPskWpa2Psk':'(8-63 个字符 或 64 位长的十六进制数)',
		'land_modeap':'AP模式',
		'land_modesta':'STA模式',
		'land_moderepeater':'Repeater模式',
		'land_moderouter':'路由模式'
		
		
		
		},
		
	value:{
		'lang_apply' : '应用',
		'lang_apply1' : '连接',
		'repeaterlang_apply1':'连接',
		'lang_cancle' : '取消',
		'lang_generate' : '启用',
		'stascan':'扫描',
		'scan':'扫描'
	}
	
	
	
	
},

'upnp.html':{
	InnerHTML:{
		'lang_upnp'     : '高级设置 > UPnP', 
		'lang_enable' : '打开UPnP',
		'lang_UPnPPeriod' : '广播时间间隔',
		'lang_UPnPTTL' : '广播存活时间数',
		'lang_inMimutes' : '(分钟)',
		'lang_inHops' : '(跳数)',
		'land_UPnPTable' : 'UPnP端口映射表',
		'land_UPnPTable1':'活动',
		'land_UPnPTable2':'协议',
		'land_UPnPTable3':'内部端口',
		'land_UPnPTable4':'外部端口',
		'land_UPnPTable5':'IP地址',
		'land_UPnPTable6':'描述',
		'broadcast_time_range' : '(1-1440)',
		'hop_count' : '(1-255)'
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消',
		'lang_Refresh':'刷新'
	}
},
 
'porttrigger.html':{
	InnerHTML : {
		'lang_portforwd' : '高级设置 > 端口触发',
		'lang_EnablePortTrigger' : '开启端口触发',
		'lang_timeout' : '端口触发超时(分钟)',
		'timeout_range' : '(1-9999)',
		'idServerName' : '服务名',
		'idServiceType' : '服务类型',
		'idRequiredConnection' : '输入连接',
		'idMaxrules':'最大规则数：32',
		'idServiceUser' : '服务用户'
	},
	value : {
		'submit' : '添加服务',
		'edit' : '编辑服务',
		'delete':'删除服务',
		'apply' : '应用',
		'cancel' : '刷新'
	}
},
  
'porttrigger_edit.html':{
	InnerHTML : {
		'lang_custum_service' : '高级设置 > 端口触发 >　端口触发--服务',
		'lang_servicename' : '服务名',
		'lang_serviceuser' : '服务用户',
		'lang_any' : '任何',
		'lang_singleaddress' : '单一地址',
		'lang_servicetype' : '服务类型',
		'lang_triggerstartport' : '触发起始端口',
		'lang_triggerendport' : '触发结束端口',
		'idRequiredInboundConnection' : '输入连接',
		'lang_contype' : '协议类型',
		'lang_startport' : '起始端口',
		'lang_endport' : '结束端口'
	},
	value : {
		'submit' : '应用',
		'cancel' : '取消'
	}
},

'qos_service.html':{
	InnerHTML:{		
		'lang_Qos' : '媒体特性 > QoS设置',
		'land_qosEnable' : 'QOS启用 >',
		'land_qosOn' : '启用',
		'land_qosOff' :'关闭',
		'land_ackEnable' : 'ACK优先',
		'land_ackOn'	: '启用',
		'land_ackOff'	: '关闭',
		'land_icmpEnable': '优先 ICMP >',
		'land_icmpOn'	: '启用',
		'land_icmpOff'	: '关闭',
		'land_qosdefault' : '默认类别优先级 >',
		'land_highest'		: '最高',
		'land_high'		: '高',
		'land_medium'		: '中',
		'land_low'		: '低',
		'land_lowest'		: '最低',
		'land_Inboundmain'	: '下行带宽控制',
		'land_inboundMax'	: '最大下行带宽 >',
		'land_inhighestband' : '最高 >',
		'land_inhighband'			: '高 >',
		'land_inmediumband'	:	'中 >',
		'land_inlowband'	: '低 >',
		'land_inlowestband' :'最低 >',
		'land_outboundmain' :'上行带宽控制',
		'land_outboundMax'  : '最大上行带宽>',
		'land_outhighestband' : '最高 >',
		'land_outboundhighband': '高 >',
		'land_outMediumhband' :'中 >',
		'land_in_highestmin'		: '(%最小)',
		'land_in_highestmax'	    : '(%最大)',
		'land_in_highmin'		: '(%最小)',
		'land_in_highmax'	    : '(%最大)',
		'land_in_mediumhmin'		: '(%最小)',
		'land_in_mediummax'	    : '(%最大)',
		'land_in_lowmin'       : '(%最小)',
		'land_in_lowmax'       : '(%最大)',
		'land_in_lowestmin'       : '(%最小)',
		'land_in_lowestmax'       : '(%最大)',
		
		'land_highestmin'		: '(%最小)',
		'land_highestmax'	    : '(%最大)',
		'land_highmin'		: '(%最小)',
		'land_highmax'	    : '(%最大)',
		'land_mediumhmin'		: '(%最小)',
		'land_mediummax'	    : '(%最大)',
		'land_lowmin'       : '(%最小)',
		'land_lowmax'       : '(%最大)',
		'land_lowestmin'       : '(%最小)',
		'land_lowestmax'       : '(%最大)',
		'land_outlowband'	: '低 >',
		'land_outlowestband' : '最低 >',
		'land_qosSetup'		:'QoS优先权规则列表 >'							
	},
	value:{
		'land_listqos' : '设置QoS',
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'qos_list.html':{
	InnerHTML:{
		'lang_qoslist_header':'媒体特性 > QoS设置 > QOS 列表',
		'td_qoslist_head3' : '地址类型',
		'td_qoslist_head4' : '地址',
		'td_qoslist_head5' : '协议过滤',
		'td_qoslist_head6' : '端口过滤',
		'td_qoslist_head7' : '端口号',
		'td_qoslist_head8' : '优先级',
		'td_qoslist_head9' : '描述' ,
		'td_qoslist_head10' : '规则类型' 
	},
	value:{
		'land_edit'  :'编辑',
		'land_delete' : '删除',
		'land_add' : '添加',  
		'land_refresh' : '刷新',
		'land_cancel' : '取消'
	}
},
	
'qos_add.html':{
	InnerHTML:{
		'lang_qosadd_header':'媒体特性 > QoS设置 > QOS优先规则',
		'land_macfilter' : 'IP/MAC 地址类型 >',
		'land_ruleType':'规则类型',
		'land_uplink':'上传',
		'land_downlink':'下载',
		'land_any' : '任何',
		'land_destIp' : '目的 IP',
		'land_sourceIp' : '源 IP',
		'land_soucerMac' : '源 MAC',
		'land_address' : '地址 >',
		'land_protol' : '协议过滤 >',
		'land_protolany' : '任何',
		'land_class'	:'优先级 >',
		'land_highest'	:'最高',
		'land_high'	:'高',
		'land_medium'	:'中',
		'land_low'	:'低',
		'Lowest'	:'最低',
		'land_description' :'描述 >',
		'land_protolprotol' : '协议过滤 >',
		'land_portnum'	:'端口号 >',
		'land_portto' : '端口过滤 >',
		'land_portany' : '任何',
		'land_portdest' : '目的端口',
		'land_portsource' : '源端口',
		'land_portdestsource' : '源或目的端口'
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}  
}, 

'samba.html':{
	InnerHTML:{
		'lang_samba':'媒体特性  >Samba设置',
		'land_mode':'Samba模式 >',
		'land_usrname':'用户名 >',
		'land_password':'密码 >',
		'land_disable' : '关闭',
		'land_user' : '用户',
		'land_share' : '分享'
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'ftpd_setting.html':{
	InnerHTML : {
		'lang_title'     :'媒体特性  > FTP 服务器设置',
		
		'lang_ftp_setting':' FTP 服务器设置',
		'lang_ftpd_option': 'FTP 服务器',
		'lang_ftpd_en': '启动 FTP 服务器',
		'lang_ftpd_port' : 'FTP 服务器端口',
		
		'lang_ftp_manager'   : 'FTP 服务器账户管理',
		'lang_ftpd_status ': 'FTP 服务器状态',
		'lang_ftpd_user' : '用户名',
		'lang_ftpd_paswd' : '密码',
		'lang_ftpd_ability': '权限',
		'lang_view': '浏览',
		'lang_Upload' : '上传',
		'lang_Download' : '下载',
		'lang_userlist' : '帐号列表',
		'lang_userlist_no' : '序号',
		'lang_userlist_user': '用户名',
		'lang_userlist_paswd' : '密码',
		'lang_userlist_ability': '权限',
		'lang_userlist_operation' : '操作',
		'lang_right_view': '浏览',
		'lang_right_upload' : '上传',
		'lang_right_download' : '下载'
	},
	value : {
		'submit' : '提交',
		'refresh' : '刷新',
		'add' : '添加',
		'edit' : '编辑',
		'del' : '删除',
		'Modify' : '修改',
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'usb_http.html':{
	InnerHTML : {
		'lang_title': '媒体特性 > HTTP访问存储',
		'lang_enable':'启用',
		'lang_access': '访问方法',
		'lang_link': '链接',
		'lang_port' : '端口'
	},
	value : {
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'usb_dlna.html':{
	InnerHTML : {
		'lang_title': '媒体特性 > DLNA',
		'lang_Disable' : '启用 DLNA'
	},
	value : {
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'parent_control.html':{
	InnerHTML : {
		'lang_header':'安全功能 > 家长控制',
		'lang_parent_enable':'家长控制',
		'land_enable':'启用',
		'land_disable':'不启用',
		'land_pcmac':'家长PC的MAC地址 >',
		'land_manPc_mac':'当前管理PC的MAC地址 >',
		'land_pccontrolTable':'家长控制列表 >',
		'td_pccontrol_head3':'MAC 地址',
		'td_pccontrol_head4':'网站列表',
		'td_pccontrol_head5':'日程计划',
		'td_pccontrol_head6':'状态'
	},
	value:{
		'land_writeMac' : '设为家长PC',
		'land_Add':'增加',
		'land_Edit':'编辑',
		'land_Delete':'删除',
		'land_DisAl':'使所有条目失效',
		'land_EnaAl':'使所有条目生效',
		'lang_apply' : '应用',
		'lang_cancle' : '取消'		
	}
},

'parent_control_add.html':{
	InnerHTML : {
		'lang_header':'安全功能 > 家长控制',
		'land_cmac':'小孩PC的MAC地址 >',
		'land_lanmac':'当前局域网中PC的MAC地址 >',
		'land_descript':'给不允许的网站列表一个描述 >',
		'land_urlcomment':'不允许小孩访问的网站域名 >',
		'land_time':'希望在哪些时候生效 >',
		'land_schedule':'日程描述 >',
		'land_urlname0':'网站域名1 >',
		'land_urlname1':'网站域名2 >',
		'land_urlname2':'网站域名3 >',
		'land_urlname3':'网站域名4 >',
		'land_urlname4':'网站域名5 >',
		'land_urlname5':'网站域名6 >',
		'land_urlname6':'网站域名7 >',
		'land_urlname7':'网站域名8 >',
		'land_day':'星期',
		'land_day1':'星期一',
		'land_day2':'星期二',
		'land_day3':'星期三',
		'land_day4':'星期四',
		'land_day5':'星期五',
		'land_day6':'星期六',
		'land_day7':'星期天',
		'land_everyday' :'每天',
		'land_selectday':'选择星期',
		'land_begintime':'开始时间',
		'land_endtime':'结束时间',
		'land_statue':'状态',
		'land_statueenable':'生效',
		'land_statuedisable':'失效'
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'fw_wansetup.html':{
	InnerHTML : {
		'lang_title'   : '安全功能 > WAN 设置',
		'idDisableDOSContext' : '禁用端口扫描和DOS保护',
		'idDisableSPIContext' : '禁用SPI防火墙',
		'idDefaultDMZServerContext' : '缺省DMZ服务器',
		'idRespondPingContext' : '响应因特网端口Ping命令',
		'idALGContext' : 'ALG 设置',
		'idMTUContext' : 'MTU大小',
		'idNATFilterContext' : 'NAT过滤',
		'idNATSecuredContext' : '安全',
		'idNATOpenContext' : '开放',
		'idDisableSIPALGContext' : '启用SIP ALG',
		'idDisableL2TPALGContext' : '启用 L2TP ALG',
		'idDisablePPTPALGContext' : '启用 PPTP ALG',
		'idDisableIPSECALGContext' : '启用 IPSEC ALG',
		'idEnableIPv6Context' : '启用IPv6穿透功能'
	},
	value : {
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'fw_urlfilter.html':{
	InnerHTML : {
		'lang_BlockWebsite' : '安全功能 > 站点限制',
		'lang_KeywordBlocking' : '关键字限制',
		'lang_BlockTimesContextNever' : '从不',
		'lang_BlockTimesContextPerSchedule' : '按时间安排',
		'lang_BlockTimesContextAlways' : '始终',
		'lang_KeywordDomain' : '请在下面输入关键字或域名',
		'lang_KeywordListContext' : '对包含以下关键字或域名的网站进行限制',
		'lang_AllowTrustIPEnableContext' : '允许可信IP地址访问被限制的网站',
		'lang_AllowTrustIP' : '可信IP地址',
		'lang_maxofterms' : '（最大条数：32）：'
	},
	value : {
		'idAddKeywordButton' : '添加关键字',
		'idKeywordListDeleteItem' : '删除关键字',	
		'idKeywordListClearAll' : '清除列表',
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'fw_macfilter.html':{
	InnerHTML:{
		'lang_BlockMACAddress' : '安全功能 > MAC地址过滤 ',
		'lang_MacTips' : '此项功能能让您设定准许用户清单。当您启用此项功能，您必须在您的网络中输入每一位使用者的MAC地址，这样每一位使用者才能存取网络中的资料',
		'lang_moreInfo1' :'更多信息',
		'lang_MACFilterEnable' : '启用MAC地址过滤',
		'lang_mac_filtering_list' : 'MAC地址过滤清单 >',
		'lang_host' : '主机',
		'lang_mac_address' : 'MAC地址'
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消',	
		'block_addlist' : '<< 加入',
		'block_delete' : '删除'
	}
},

'fw_ddns.html':{
	InnerHTML:{
		'lang_DynamicDNS' : '高级设置 > DDNS',
		'lang_Ddns' : '动态DNS服务 >',
		'lang_DnsOff' : '关闭',
		'lang_DynDns' : 'DynDNS',
		'lang_Ddns_Status' : '动态DNS状况 >',
		'lang_user_name' : '用户名 >',
		'lang_password' : '密码 >',
		'lang_hostname' : '域名 >'
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消',
		'lang_web_site' : '网站'
	},
	dynamic:['关闭',
	   '无更新活动，在因特网端口无IP地址',
	   '更新失败，服务提供商不可用',
	   '更新失败，主机名不正确',
	   '认证失败，用户名/密码不正确',
	   '更新成功']
},

'fw_log.html':{
	InnerHTML:{
		'lang_security_log' : '工具程序 > 系统日志 ',
		'lang_logtips' : '此路由器保存所有登入与登出之记录，以及所有网络上的攻击，记录可在下方查阅',
		'lang_log_file' : '记录档案',
		'lang_syetem_log' : '系统记录:',
		'lang_firewall_log' : '防火墙记录:'
	},
	value:{
		'lang_save' : '存档',
		'lang_clear' : '清除',
		'lang_refresh' : '重新整理',
		'lang_send' : '邮件通知'
	}
},

'fw_portmap.html':{
	InnerHTML:{
		'lang_portforwd' : '高级设置 > 虚拟服务器 ',
		'lang_VserverTips' : '这项功能能够让您追踪外部(因特网)的服务连接，例如网络服务器(端口80)，FTP服务器(端口21)或其他应用程式借由路由器到达您內部网络的其他程式 ',
		'lang_moreInfo1' :'更多信息',
		'lang_add': '加入',
		'lang_delete' : '清除记录',
		'lang_enable' : '开启',
		'lang_description' : '说明',
		'lang_inbound_port' : '内传端口',
		'lang_type' : '类型',
		'lang_private_ip' : '私人IP地址',
		'lang_private_port' : '私人端口'
	},
	value:{
		'lang_cancle1' : '取消',
		'lang_apply1' : '应用',
		'lang_cancle2' : '取消',
		'lang_apply2' : '应用',
		'add' : '加入',
		'delete': '清除'
	}
},

'fw_email.html':{
	InnerHTML:{
		'lang_Email' : '工具程序 > 电子邮件 ',
		'lang_Email_tip1' : '您可以在此设置邮件发送策略',
		'lang_emailEnble' : '打开邮件提醒',
		'lang_Email_tip2' : '发送警告和日志信息',
		'lang_OutgoingServer' : '邮件发送服务器',
		'lang_ReceiveAccount' : '接收邮件账户',
		'lang_outgongserver_need_auth' : '您的发送邮件服务器需要认证',
		'lang_username' : '用户名',
		'lang_password' : '密码',
		'lang_Email_tip3' : '警告发送策略',
		'lang_alert_send_immediate' : '当有人访问过滤网站时，立即发送警告信息',
		'lang_Email_tip4' : '按照下面的时间表发送日志',
		'lang_strategy' : '发送邮件：',
		'lang_day' : '星期: ',
		'lang_hour' : '小时: '
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'str_route.html':{
	InnerHTML : {
		'idStaticRouteHeader' : '高级设置 > 静态路由',
		'idStaticRouteTable1' : '&nbsp;',
		'idStaticRouteTable2' : '#',
		'idStaticRouteTable3' : '活动',
		'idStaticRouteTable4' : '名称',
		'idStaticRouteTable5' : '目的',
		'idstaticRouteTable6' : '网关',
		'idMaxLimit':'最大规则数：32'
	},
	value : {
		'Add' : '添加',
		'Edit' : '编辑',
		'Delete' : '删除'
	}
},

'str_add.html':{
	InnerHTML : {
		'idStaticRouteHeader' : '高级设置 > 静态路由 > 静态路由设置',
		'idRouteName' : '路由名称',
		'idPrivateContext' : '私有',
		'idActiveContext' : '活动',
		'idDestIPAddress' : '目的IP地址',
		'idSubnetMask' : 'IP子网掩码',
		'idGatewayIP' : '网关IP地址',
		'idMetric' : '度量',
		'lang_config_interface':'接口'
	},
	value : {
		'Apply' : '应用',
		'Cancel' : '取消'
	}
},

'ut_reboot.html':{
	InnerHTML:{
		'lang_reboot_device' : '工具程式 > 路由器重启',
		'lang_restart' :'重新启动路由器'
	},
	value:{
		'lang_reboot' : '重新启动路由器'
	}
},

'restarting.html':{
	InnerHTML:{
		'lang_rebooting' : '路由器正在启动中',
		'lang_seconds' : ' 所剩秒数'
	},
	dynamic:['工具程式 > 设备重启中','工具程式 > 备份设置']
},

'ut_prev.html':{
	InnerHTML:{
		'lang_restore_setting' : '工具程式 >备份设置',
		'lang_save' : '保存一份当前设置',
		'lang_update' : '恢复先前所储存的配置设定',
		'lang_updating' : '正在检查您上传的文件',
		'lang_restore_default' : "恢复出厂设置"
	},
	value:{
		'backupstting' : '存档',
		'config' : '浏览文件',
		'update' : '恢复',
		'lang_restore' : '恢复默认值'
	}
},

'ut_firmware.html':{
	InnerHTML:{
		'lang_firmware_update' : '工具程式 > 固件更新',
		'lang_firmware_version' : '固件版本 >',
		'lang_check_version' : '按此获得新的固件版本',
		'lang_locate_file' : '更新固件',
		'lang_check_uponlog' : '&nbsp;在登录时检测新版本 ',
		'lang_ClearConfig' : '&nbsp;清除配置',
		'lang_updating' : '固件更新进行中',
		'fw_not_interrupt' : '切勿中断路由器运行或拔出路由器的插头，此类操作会导致路由器不能工作',
		'lang_update' : '工具程式 > 固件更新',
		'lang_second' : ' 所剩秒数'
	},
	value:{
		'checkVersionButton':'检查固件',
		'Upload' : '更新',
		'Check'  : '检测'
	}
},

'ut_fw_checking.html':{
	InnerHTML:{
		'lang_check' : '检查新固件…',
		'lang_check_noWan' : '无法与固件信息服务器连接，请检查无线网络连接',
		'lang_check_noFW' : '没有更新的固件可用'
	}
},

'upgrading.html':{
	InnerHTML:{
		'lang_update' : '工具程式 > 固件升级成功',
		'lang_updating' : '路由器正在启动中',
		'lang_second' : ' 所剩秒数'
	}
},

'ut_system_set.html':{
	InnerHTML:{
		'lang_system_set' : '工具程式 > 系统设定', 
		'lang_admin_password' : '管理者密码',
		'lang_password_tip' : '此路由器并未设定任何密码，为了确保安全，您可以在此设定一组密码',
		'lang_moreInfo1' : '更多信息',
		'lang_current_password' : '输入现在的密码>',
		'lang_new_password' : '输入新的密码>',
		'lang_confirm_password' : '确认新的密码>',
		'lang_login_out' : '登录持续时间>',
		'lang_time' : '1-99 分钟',
		'lang_curtime' : '时间和时区',
		'lang_date_tip' : '请设定您所在的时区。如果您在夏时制时区(指在夏季把标准時间拨早1小時的时区)，请按此处',
		'lang_moreInfo2' : '更多信息',
		'lang_timezone' : '时区  >',
		'lang_daylight_saving' : '日光节约  >',
		'lang_daylight_help' : '自动调整到节约日光时区',
		'lang_firttime' : '主 NTP 服务器 >',
		'lang_secondtime' : '备用 NTP 服务器 >',
		'lang_Remo_Mana' : '远程管理',
		'lang_remote_tip1' : '进阶功能',
		'lang_remote_tip2' : '远程管理能让您从网络上的任何地方更改路由器的设定，在您开启此功能前，请确认您已设定管理者密码',
		'lang_moreInfo3' : '更多信息',
		'lang_any_ip' : '任何IP地址皆可远程管理路由器',
		'lang_only_ip' : '只有此IP地址可远程管理路由器>',
		'lang_PortNumber' : '远程访问端口>',
		'lang_upnp' : 'UPnP启用',
		'lang_upnp_tip1' : '进阶功能',
		'lang_upnp_tip2' : '允许您开启或关闭UPnP功能。如果您使用此项功能来支持UPnP，开启UPnP能让这些应用程序自动安装到路由器 ',
		'lang_moreInfo4' : '更多信息',
		'lang_upnp_enable' : 'UPnP启用 / 关闭',
		'lang_upnp_On' : '开启',
		'lang_upnp_Off' : '关闭',
		'lang_update_enable' : '自动更新固件开启',
		'lang_update_tip1' : '进阶功能',
		'lang_update_tip2' : '允许您自动检查路由器固件更新',
		'lang_moreInfo5' : ' 更多信息',
		'lang_moreInfo6' : ' 更多信息',
		'lang_fw_enable' : '自动更新 固件开启 / 关闭 >',
		'lang_update_On' : '开启',
		'lang_update_Off' : '关闭',
		'lang_eco_enable' : 'Eco 模式',
		'lang_TurnOn' : '打开远程管理',
		'lang_RemManAddr' : '远程管理访问:',
		'lang_AllowAccessBy' : '允许从下列地址进行远程访问:',
		'lang_ThisComputer' : '仅本计算机:',
		'lang_IpAddressRange' : 'IP地址范围:',
		'lang_Form' : '从 ',
		'lang_To' : '到',
		'lang_su' : '周日',
		'lang_mo' : '周一 ',
		'lang_tu' : '周二 ',
		'lang_we' : '周三 ',
		'lang_th' : '周四 ',
		'lang_fr' : '周五 ',
		'lang_sa' : '周六 ',
		'lang_disable_radio' : '禁用来自下方的无线电',
		'exceptday' : '除了',
		'lang_Everyone' : '所有人'
	},
	value:{
		'lang_apply1' : '应用',
		'lang_cancle1' : '取消',
		'lang_apply2' : '应用',
		'lang_cancle2' : '取消'
	}
},

'ut_self_healing.html':{
	InnerHTML:{
		'lang_Schedules_title' : '工具程序 > 定期检修',
		'lang_Schedule_tips' : '定期路由器重新初始化有助于保持一个更加自由的网络问题。',
		'lang_Auto_init' :'我的路由器自动初始化>',
		'lang_Set_days' : '设置时间>',
		'lang_Eve' : '每天',
		'lang_Sun' : '星期天',
		'lang_Mon' : '星期一',
		'lang_Tue' : '星期二',
		'lang_Wed' : '星期三',
		'lang_Thu' : '星期四',
		'lang_Fri' : '星期五',
		'lang_Sat' : '星期六',
		'lang_Set_time' : '设置时间>',
		'lang_Init_On' : '启用',
		'lang_Init_Off' : '关闭',
		'lang_ScheduleRulesDay' : '在下列时间进行限制:(24小时计时)',
		'lang_ALlDay' : '全天',
		'lang_LimitStartTime' : '限制开始时间',
		'lang_LimitEndTime' : '限制结束时间',
		'lang_TimeZone' : '时区',
		'lang_AutoDaylightSaving' : '自动进行夏令时调整',
		'lang_CurrentTime' : '当前时间:'
	},
	value:{
		'lang_apply' : '应用',
		'lang_cancle' : '取消'
	}
},

'login.html':{
	InnerHTML:{
		'lang_zh_cn'     : '简体中文 ', 
		'lang_en_us' : 'English',
		'land_password'  : '密码:',
		'land_language'   : '语言:'
	},
	value:{
		'Reset' : '重设',
		'uipostSubmit' : '登录'
	}
},

'ut_ConfigLoadFaild.html':{
	InnerHTML:{
		'lang_reboot_device' : '工具程式 > 恢复之前的设置',
		'lang_restart' :'配置文件异常, 请重试'
	},
	value:{
		'lang_reboot' : '重试'
	}
},

'ut_SysUpgradeFaild.html':{
	InnerHTML:{
		'lang_reboot_device' : '工具程式 > 固件更新',
		'lang_restart' :'升级失败. 建议您重新启动路由器'
	},
	value:{
		'lang_reboot' : '重新启动路由器'
	}
},

'noUse.html':{
	InnerHTML:{'noUse' : 'for I18NCrystalSys'},
	value:{'noUse' : 'for I18NCrystalSys'},
	dynamic:['No use','for I18NCrystalSys']
},

'apply_wait.html':{
	InnerHTML:{
		'lang_apply' : '更新设置',
		'lang_applying' : '正在更新设置,请稍等...'
	}
},

'download_bt.html':{
	InnerHTML:{
		'lang_bt_tip'              			: '在您开始一个或多个任务前，请确定你的网络是可用的，否则任务的状态可能不正常。添加一个BT种子任务，然后您就可以对该任务进行相应的操作了。如果任务的状态显示不正常，请您手动点击“刷新”按键。',
		'lang_download_dir'					: '存放路径',
		'lang_upload_file'   				: '上传文件中',
		'lang_second'						:	'所剩秒数',
		'lang_downloading_list_header' 		: '下载任务列表',
		'td_downloading_head2'         		: '序号',
		'td_downloading_head3'         		: '文件名字',
			'td_downloading_head4'         		: '大小(MB)',
			'td_downloading_head5'         		: '速度(KB/s)',
			'td_downloading_head6'         		: '进度(%)',
		'td_downloading_head7'         		: '状态',
			'td_downloading_head8'         		: '种子/路径',
		'td_download_done_head2'			: '序号',
		'td_download_done_head3'			: '文件名字',
			'td_download_done_head4'					: '大小',
		'td_download_done_head5'			: '存放路径',
			'td_download_done_head6'					: '种子/路径',
			'lang_tw_downloader_page'         : '脱机下载',
			'lang_build_task'									: '添加任务',
			'lang_torrent_dir'								: '添加种子 (支持BT种子)',
			'lang_http_ftp'										: '粘贴地址 (支持http/https/ftp资源)',
			'lang_http_ftp_url'               : '下载地址',
			'lang_http_ftp_user'							: '用户名',
			'lang_http_ftp_password'					: '用户密码',
			'add_new_task_lable'							: '添加任务',
			'finished_task_lable'							: '已完成列表',
			'unfinished_task_lable'						: '未完成列表',
			'Smart_Internet_lable'            : '智能上网',
			'Smart_Internet_span'             : '智能上网开关'
		},
		value:{
			'lang_not_done_list_button'     : '未完成列表',
			'lang_done_list_button'					: '已完成列表',
			'lang_add_new_task_button'   		: '添加',	
			'land_begin'										: '开始',
			'land_pause'										: '暂停',
			'land_delete_downloading'				: '删除',
			'land_fresh'										: '刷新',
			'land_delete_done'							:	'删除历史任务',
			'lang_reset'										: '取消',
			'lang_add_sure' 							  : '确定',
			'go_back'												: '返回',
			'Smart_Internet_sure'           : '确定'
	}
}
//end
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
	    'lang_services37':'DirectX 7 游戏',
	    'lang_services38':'DirectX 8 游戏',
	    'lang_services39':'DNS服务器',
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
	    'lang_services54':'FTP 服务器',
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
	    'lang_services72':'Lotus Notes 服务器',
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
	    'lang_services124':'Telnet 服务器',
	    'lang_services125':'The 4th Coming',
	    'lang_services126':'Tiberian Sun: C&amp;C',
	    'lang_services127':'Tiberian Sun: C&amp;C III',
	    'lang_services128':'Total Annihilation',
	    'lang_services129':'Ultima',
	    'lang_services130':'Unreal Tournament',
	    'lang_services131':'Urban Assault',
	    'lang_services132':'VoxPhone 3.0',
	    'lang_services133':'Warbirds 2',
	    'lang_services134':'WEB服务器(HTTP)',
	    'lang_services135':'WebPhone 3.0',
	    'lang_services136':'Westwood Online',
	    'lang_services137':'Windows 2000 Terminal Server',
	    'lang_services138':'X Windows',
	    'lang_services139':'Yahoo Pager',
	    'lang_services140':'Yahoo Messenger Chat'
},
TimeZone:{'lang_TimeZone0' : '(GMT-12:00) 国际日期变更线以西',
		'lang_TimeZone1' : '(GMT-11:00) 中途岛，萨摩亚',
		'lang_TimeZone2' : '(GMT-10:00) 夏威夷',
		'lang_TimeZone3' : '(GMT-09:00) 阿拉斯加州',
		'lang_TimeZone4' : '(GMT-08:00) 太平洋时间，蒂华纳',
		'lang_TimeZone5' : '(GMT-07:00) 亚利桑那州，马萨特兰',
		'lang_TimeZone6' : '(GMT-07:00) 奇瓦瓦，拉巴斯',
		'lang_TimeZone7' : '(GMT-07:00) 山地时间',
		'lang_TimeZone8' : '(GMT-06:00) 中美洲',
		'lang_TimeZone9' : '(GMT-06:00) 中部时间',
		'lang_TimeZone10' : '(GMT-06:00) 瓜达拉哈拉，墨西哥城，蒙特雷',
		'lang_TimeZone11' : '(GMT-06:00) 萨斯喀彻温省',
		'lang_TimeZone12' : '(GMT-05:00) 波哥大，利马，基多',
		'lang_TimeZone13' : '(GMT-05:00) 东部时间',
		'lang_TimeZone14' : '(GMT-05:00) 印第安那州',
		'lang_TimeZone15' : '(GMT-04:00) 太平洋时间',
		'lang_TimeZone16' : '(GMT-04:00) 加拉加斯，拉巴斯',
		'lang_TimeZone17' : '(GMT-04:00) 圣地亚哥',
		'lang_TimeZone18' : '(GMT-03:30) 纽芬兰',
		'lang_TimeZone19' : '(GMT-03:00) 巴西利亚',
		'lang_TimeZone20' : '(GMT-03:00) 布宜诺斯艾利斯，乔治敦',
		'lang_TimeZone21' : '(GMT-03:00) 格陵兰',
		'lang_TimeZone22' : '(GMT-02:00) 中大西洋',
		'lang_TimeZone23' : '(GMT-01:00) 亚速尔群岛',
		'lang_TimeZone24' : '(GMT-01:00) 佛得角群岛',
		'lang_TimeZone25' : '(GMT-00:00) 卡萨布兰卡，蒙罗维亚',
		'lang_TimeZone26' : '(GMT-00:00) 格林威治标准时间：都柏林，爱丁堡，里斯本，伦敦',
		'lang_TimeZone27' : '(GMT+01:00) 阿姆斯特丹，柏林，伯尔尼，罗马，斯德哥尔摩，维也纳',
		'lang_TimeZone28' : '(GMT+01:00) 贝尔格莱德，布拉迪斯拉发，布达佩斯，卢布尔雅那，布拉格',
		'lang_TimeZone29' : '(GMT+01:00) 布鲁塞尔，哥本哈根，马德里，巴黎',
		'lang_TimeZone30' : '(GMT+01:00) 萨拉热窝，斯科普里，华沙，萨格勒布',
		'lang_TimeZone31' : '(GMT+01:00) 中非西部',
		'lang_TimeZone32' : '(GMT+02:00) 雅典，伊斯坦布尔，明斯克',
		'lang_TimeZone33' : '(GMT+02:00) 布加勒斯特',
		'lang_TimeZone34' : '(GMT+02:00) 开罗',
		'lang_TimeZone35' : '(GMT+02:00) 哈拉雷，比勒陀利亚',
		'lang_TimeZone36' : '(GMT+02:00) 赫尔辛基，基辅，里加，索非亚，塔林，维尔纽斯',
		'lang_TimeZone37' : '(GMT+02:00) 耶路撒冷',
		'lang_TimeZone38' : '(GMT+03:00) 巴格达',
		'lang_TimeZone39' : '(GMT+03:00) 科威特，利雅得',
		'lang_TimeZone40' : '(GMT+03:00) 莫斯科，圣彼得堡，伏尔加格勒',
		'lang_TimeZone41' : '(GMT+03:00) 内罗毕',
		'lang_TimeZone42' : '(GMT+03:30) 德黑兰',
		'lang_TimeZone43' : '(GMT+04:00) 阿布扎比，马斯喀特',
		'lang_TimeZone44' : '(GMT+04:00) 巴库，第比利斯，埃里温',
		'lang_TimeZone45' : '(GMT+04:30) 喀布尔',
		'lang_TimeZone46' : '(GMT+05:00) 叶卡捷琳堡',
		'lang_TimeZone47' : '(GMT+05:00) 伊斯兰堡，卡拉奇，塔什干',
		'lang_TimeZone48' : '(GMT+05:30) 钦奈，加尔各答，孟买，新德里',
		'lang_TimeZone49' : '(GMT+05:45) 加德满都',
		'lang_TimeZone50' : '(GMT+06:00) 阿拉木图，新西伯利亚',
		'lang_TimeZone51' : '(GMT+06:00) 阿斯塔纳，达卡',
		'lang_TimeZone52' : '(GMT+06:00) 斯里兰卡 科伦坡科特',
		'lang_TimeZone53' : '(GMT+06:30) 仰光',
		'lang_TimeZone54' : '(GMT+07:00) 曼谷，河内，雅加达',
		'lang_TimeZone55' : '(GMT+07:00) 克拉斯诺亚尔斯克',
		'lang_TimeZone56' : '(GMT+08:00) 北京，重庆，香港，乌鲁木齐',
		'lang_TimeZone57' : '(GMT+08:00) 伊尔库茨克，乌兰巴托',
		'lang_TimeZone58' : '(GMT+08:00) 吉隆坡，新加坡',
		'lang_TimeZone59' : '(GMT+08:00) 珀斯',
		'lang_TimeZone60' : '(GMT+08:00) 台北',
		'lang_TimeZone61' : '(GMT+09:00) 大阪，札幌，东京',
		'lang_TimeZone62' : '(GMT+09:00) 汉城',
		'lang_TimeZone63' : '(GMT+09:00) 雅库茨克',
		'lang_TimeZone64' : '(GMT+09:30) 阿德莱德',
		'lang_TimeZone65' : '(GMT+09:30) 达尔文',
		'lang_TimeZone66' : '(GMT+10:00) 布里斯班',
		'lang_TimeZone67' : '(GMT+10:00) 堪培拉，墨尔本，悉尼',
		'lang_TimeZone68' : '(GMT+10:00) 关岛，莫尔兹比港',
		'lang_TimeZone69' : '(GMT+10:00) 霍巴特',
		'lang_TimeZone70' : '(GMT+10:00) 海参崴',
		'lang_TimeZone71' : '(GMT+11:00) 马加丹',
		'lang_TimeZone72' : '(GMT+11:00) 所罗门群岛。，新喀里多尼亚',
		'lang_TimeZone73' : '(GMT+12:00) 奥克兰，惠灵顿',
		'lang_TimeZone74' : '(GMT+12:00) 斐济，堪察加半岛，马绍尔群岛'
	},
NTPService:{
		'lang_first_ntpServer0' : '132.163.4.102-北美',
		'lang_first_ntpServer1' : '207.200.81.113-北美',
		'lang_first_ntpServer2' : '129.132.2.21-欧洲',
		'lang_first_ntpServer3' : '130.149.17.8-欧洲'
	},
Dhcptime:{
		'lang_Dhcptime0' : '永远',
		'lang_Dhcptime1' : '半小时',
		'lang_Dhcptime2' : '一小时',
		'lang_Dhcptime3' : '两小时',
		'lang_Dhcptime4' : '半天',
		'lang_Dhcptime5' : '一天',
		'lang_Dhcptime6' : '两天',
		'lang_Dhcptime7' : '一周',
		'lang_Dhcptime8' : '两周'
},
Week:{
	'1' : '星期一',
	'2' : '星期二',
	'3' : '星期三',
	'4' : '星期四',
	'5' : '星期五',
	'6' : '星期六',
	'7' : '星期日'
},
Emailtime:{
	'lang_cfAlert_Select0' : '无',
	'lang_cfAlert_Select1' : '日志已满',
	'lang_cfAlert_Select2' : '每小时',
	'lang_cfAlert_Select3' : '每天',
	'lang_cfAlert_Select4' : '每星期'
},

Region:{
	'ZA'  :   '非洲',
	'VN'  :   '亚洲',
	'AU'  :   '澳大利亚',
	'CA'  :   '加拿大',
	'CN'  :   '中国',
	'ES'  :   '西班牙',
	'DE'  :   '欧洲',
	'IL'  :   '以色列',
	'JP'  :   '日本',
	'KR'  :   '韩国',
	'MX'  :   '墨西哥',
	'IQ'  :   '中东',
	'CO'  :   '南美洲',
	'US'  :   '美国',				
	'PH'  :   '菲律宾',
	'RU'  :   '俄罗斯'
},

end:{'NoUse':'No Use, for I18NCrystalSys'}
}
