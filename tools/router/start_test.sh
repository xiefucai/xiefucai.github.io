#!/bin/sh

#wan0_dns=192.168.8.136 192.168.8.137

#获取路由器的局域网ip
ip=`nvram show | grep 'lan_gateway' | awk -F'=' '{print $2}'`
#获取路由器设置的主选DNS
dns=`nvram show|grep wan0_dns=|awk -F'=' '{print $2}'|awk -F' ' '{print $1}'`

echo 'router ip is:'${ip}
cd /tmp/userdata
rm -rf hosts

wget http://www.xiefucai.com/tools/router/hosts
cat hosts > /etc/hosts

#重置dns
echo "nameserver ${ip}">/etc/resolve.conf
echo "nameserver ${dns}">>/etc/resolve.conf