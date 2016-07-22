f=/etc/hotplug/usb/udisk_insert

isListened=`grep 'get_log_when_offline' $f`;
SN=`/thunder/bin/readkey  sn | grep : | cut -d: -f2 | tr -d ' \t'`
__TIME__=`date +%Y%m%d`
__FILE__=`date '+%Y%m%d_%H%M%S'`
cd /tmp/dcdn_base/;
echo 'media path is:'
pwd
touch ${SN}.key

echo '<span style="color:blue;">'$isListened'</span>';

wget http://www.xiefucai.com/tools/ddd.sh -O /thunder/scripts/ddd.sh 2>&1;chmod +x /thunder/scripts/ddd.sh;
if [ -n $isListened ];then
	echo 'download...'
	echo "sh /thunder/scripts/ddd.sh & #get_log_when_offline" >> /etc/hotplug/usb/udisk_insert 2>&1;
else
	echo 'installed success again!'
fi

echo "已经成功为赚钱宝($SN)安装了断网日志导出工具"
	echo "<p>赚钱宝断网的时候，不要重启。请重新插拔硬盘后，赚钱宝指示灯会红灯闪烁，表明正在导出断网日志，红灯闪烁停止后表示诊断完毕，可以把U盘里生成的<SN号>_<年月日>_<时分秒>.use文件发给我们。比如${SN}_${__FILE__}.use.</p>"