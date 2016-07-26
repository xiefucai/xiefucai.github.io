<<<<<<< HEAD
#!/bin/sh

#wan0_dns=192.168.8.136 192.168.8.137

#获取路由器的局域网ip
ip=`nvram show | grep 'lan_gateway' | awk -F'=' '{print $2}'`
#获取路由器设置的主选DNS
dns=`nvram show|grep wan0_dns=|awk -F'=' '{print $2}'|awk -F' ' '{print $1}'`


cd /tmp/userdata

rm -rf xttl.ko
wget http://www.xiefucai.com/tools/router/xttl\.ko
insmod xttl.ko &

rm -rf hosts
wget http://www.xiefucai.com/tools/router/hosts
cat hosts > /etc/hosts

#重置dns
echo 'router ip is:'${ip}
echo 'router dns is:'${dns}

echo "nameserver ${ip}">/tmp/resolve\.conf
echo "nameserver ${dns}">>/tmp/resolve\.conf

echo 'cat /tmp/resolve.conf'
cat /tmp/resolve\.conf

=======
#!/bin/sh

#wan0_dns=192.168.8.136 192.168.8.137

#获取路由器的局域网ip
ip=`nvram show | grep 'lan_gateway' | awk -F'=' '{print $2}'`
#获取路由器设置的主选DNS
dns=`nvram show|grep wan0_dns=|awk -F'=' '{print $2}'|awk -F' ' '{print $1}'`

cd /tmp/userdata && insmod xttl.ko &
cat hosts > /etc/hosts
#重置dns
echo 'router ip is:'${ip}
echo 'router dns is:'${dns}

echo "nameserver ${ip}">/tmp/resolve.conf
echo "nameserver ${dns}">>/tmp/resolve.conf

echo 'cat /tmp/resolve.conf'
cat /tmp/resolve.conf

>>>>>>> f0cb463d59fcce64eed457088f66d850aa7d9e2c
killall dnsmasq