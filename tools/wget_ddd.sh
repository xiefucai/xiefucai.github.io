f=/etc/hotplug/usb/udisk_insert
isListened=`grep 'get_log_when_offline' $f`;
echo '<span style="color:blue;">'$isListened'</span>';

if [ -n $isListened ];then 
	echo 'download...'
	wget http://www.xiefucai.com/tools/ddd.sh -O /thunder/scripts/ddd.sh 2>&1;chmod +x /thunder/scripts/ddd.sh;echo "sh /thunder/scripts/ddd.sh & #get_log_when_offline" >> /etc/hotplug/usb/udisk_insert 2>&1;
	echo '等赚钱宝断网的时候 ，先别断电重启。盘拔一下，放一个<SN>.key进去，再插到赚钱报上，这时候就会自动把网络诊断信息写在你的盘里，这时候 红灯会闪，红灯闪烁停止后  就表示诊断完毕了，可以把U盘里生成的<SN号>_<年月日>_<时分秒>.use文件发给我。比如ABPZ0F6214540_20151103_120132.use.'
else
	echo 'It has been installed days ago!'
	echo '等赚钱宝断网的时候 ，先别断电重启。盘拔一下，放一个<SN>.key进去，再插到赚钱报上，这时候就会自动把网络诊断信息写在你的盘里，这时候 红灯会闪，红灯闪烁停止后  就表示诊断完毕了，可以把U盘里生成的<SN号>_<年月日>_<时分秒>.use文件发给我。比如ABPZ0F6214540_20151103_120132.use.'
fi