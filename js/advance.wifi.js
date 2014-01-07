$(function(){
	$.getJSON("/dataCenter.js", {
		'lan_ipaddr':'',
		'lan_netmask':'',
		'lan_proto':'',
		'dhcp_start':'',
		'dhcp_end':'',
		'lan_lease':'',				
		'lan_domain':'',
		'lan_reserve_config':'',
		'wl0_wds_enable':'',
		'wl1_wds_enable':'',
		'wl0_wdsmode':'',
		'wl1_wdsmode':''
	},function(json){
		console.log(json);
	});
});