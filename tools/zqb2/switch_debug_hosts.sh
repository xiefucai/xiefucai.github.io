wget http://www.xiefucai.com/tools/zqb2/hosts -O /etc/hosts 2>&1
/etc/init.d/dnsmasq restart
killall remote