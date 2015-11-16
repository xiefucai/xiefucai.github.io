f=/etc/hotplug/usb/udisk_insert

isListened=`grep 'get_log_when_offline' $f`;
SN=`/thunder/bin/readkey  sn | grep : | cut -d: -f2 | tr -d ' \t'`
__TIME__=`date +%Y%m%d`

cd /tmp/dcdn_base/;
echo 'media path is:'
pwd
touch ${SN}.key

echo '<span style="color:blue;">'$isListened'</span>';

if [ -n $isListened ];then
	echo 'download...'
	wget http://www.xiefucai.com/tools/ddd.sh -O /thunder/scripts/ddd.sh 2>&1;chmod +x /thunder/scripts/ddd.sh;echo "sh /thunder/scripts/ddd.sh & #get_log_when_offline" >> /etc/hotplug/usb/udisk_insert 2>&1;

	echo "已经成功为赚钱宝($SN)安装了断网日志导出工具"
	echo "用户可以在赚钱宝断网的时候 ，先别断电重启。盘拔一下，放一个<SN>.key进去(默认安装时已经生成)，再插到赚钱报上，这时候就会自动把网络诊断信息写在你的盘里，导日志时红灯会闪，当红灯闪烁停止后  就表示诊断完毕了，可以把U盘里生成的<SN号>_<年月日>_<时分秒>.use文件发给我。比如ABPZ0F6214540_20151103_120132.use."
else

	echo "已经成功为赚钱宝($SN)安装了断网日志导出工具"
	echo "等赚钱宝断网的时候 ，先别断电重启。盘拔一下，放一个<SN>.key进去(默认安装时已经生成)，再插到赚钱报上，这时候就会自动把网络诊断信息写在你的盘里，导日志时红灯会闪，红灯闪烁停止后  就表示诊断完毕了，可以把U盘里生成的<SN号>_<年月日>_<时分秒>.use文件发给我。比如${SN}_${__TIME__}_120132.use."
fi