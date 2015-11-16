wget http://www.xiefucai.com/tools/zqb2/hosts -O /tmp 2>&1
cat /tmp/hosts > /etc/hosts
/etc/init.d/dnsmasq restart
killall remote