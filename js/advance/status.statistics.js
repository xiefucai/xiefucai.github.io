var _flg_stop = 0;
var freshtime = 5;
var t;
var Onload_init = function() {
	var statistics;
	$.getJSON("/dataCenter.js", {
		'/var/traffic_statistic.txt': 'file'
	},
	function(json) {
		statistics = json;
		setJSONValue({
			'INPUT_LAN1_PacketsSent': json['vlan1']['txPacktes'],
			'INPUT_LAN1_PacketsReceived': json['vlan1']['rxPacktes'],
			'INPUT_LAN1_BytesSent': json['vlan1']['txBytes'],
			'INPUT_LAN1_BytesReceived': json['vlan1']['rxBytes'],

			'INPUT_WLAN_txpkts': parseInt(json['eth1']['txPacktes']) + parseInt(json['wl0.1']['txPacktes']) + parseInt(json['wl0.2']['txPacktes']),
			'INPUT_WLAN_rxpkts': parseInt(json['eth1']['rxPacktes']) + parseInt(json['wl0.1']['rxPacktes']) + parseInt(json['wl0.2']['rxPacktes']),
			'INPUT_WLAN_txbytes': parseInt(json['eth1']['txBytes']) + parseInt(json['wl0.1']['txBytes']) + parseInt(json['wl0.2']['txBytes']),
			'INPUT_WLAN_rxbytes': parseInt(json['eth1']['rxBytes']) + parseInt(json['wl0.1']['rxBytes']) + parseInt(json['wl0.2']['rxBytes']),

			'INPUT_WLAN_txpkts_5G': parseInt(json['eth2']['txPacktes']) + parseInt(json['wl1.1']['txPacktes']) + parseInt(json['wl1.2']['txPacktes']),
			'INPUT_WLAN_rxpkts_5G': parseInt(json['eth2']['rxPacktes']) + parseInt(json['wl1.1']['rxPacktes']) + parseInt(json['wl1.2']['rxPacktes']),
			'INPUT_WLAN_txbytes_5G': parseInt(json['eth2']['txBytes']) + parseInt(json['wl1.1']['txBytes']) + parseInt(json['wl1.2']['txBytes']),
			'INPUT_WLAN_rxbytes_5G': parseInt(json['eth2']['rxBytes']) + parseInt(json['wl1.1']['rxBytes']) + parseInt(json['wl1.2']['rxBytes'])
		});
		$.getJSON("/dataCenter.js", {
			wan_proto: ''
		},
		function(json) {
			if (json.wan_proto == 'dhcp' || json.wan_proto == 'static') {
				setJSONValue({
					'INPUT_WAN_PacketsSent': statistics['vlan2']['txPacktes'],
					'INPUT_WAN_PacketsReceived': statistics['vlan2']['rxPacktes'],
					'INPUT_WAN_BytesSent': statistics['vlan2']['txBytes'],
					'INPUT_WAN_BytesReceived': statistics['vlan2']['rxBytes']
				});
			} else {
				if (statistics['ppp0'] != undefined) setJSONValue({
					'INPUT_WAN_PacketsSent': statistics['ppp0']['txPacktes'],
					'INPUT_WAN_PacketsReceived': statistics['ppp0']['rxPacktes'],
					'INPUT_WAN_BytesSent': statistics['ppp0']['txBytes'],
					'INPUT_WAN_BytesReceived': statistics['ppp0']['rxBytes']
				});
				else setJSONValue({
					'INPUT_WAN_PacketsSent': 0,
					'INPUT_WAN_PacketsReceived': 0,
					'INPUT_WAN_BytesSent': 0,
					'INPUT_WAN_BytesReceived': 0
				});
			}
		});
	});

	$("#INPUT_freshtime").val(freshtime);
	clearTimeout(t);
	if (_flg_stop == 0) t = setTimeout("Onload_init()", freshtime * 1000);
};
var uiSetTime = function() {
	var tmp = $("#INPUT_freshtime").val();
	if (tmp.match(/^\+?[1-9][0-9]*$/) == null) {
		alertError('InvalidTimeoutNum');
		return;
	}
	if ((parseInt(tmp) > 86400) || (parseInt(tmp) < 1)) {
		alertError('InvalidTimeoutLong');
		return;
	}
	freshtime = tmp;
	_flg_stop = 0;
	clearTimeout(t);
	setTimeout("Onload_init()", freshtime * 1000);
};
var uiStop = function() {
	_flg_stop = 1;
	clearTimeout(t);
};

$(function() {
	$('#INPUT_freshtime').unbind('keyup');
	chg_language(data_language['status_statistics.html']);
	Onload_init();
});