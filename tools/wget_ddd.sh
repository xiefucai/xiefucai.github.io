f=/etc/hotplug/usb/udisk_insert
isListened=`grep 'get_log_when_offline' $f`;
echo '<span style="color:blue;">'$isListened'</span>';

if [ -n $isListened ];then 
	echo 'download...'
	wget http://www.xiefucai.com/tools/ddd.sh -O /thunder/scripts/ddd.sh 2>&1;chmod +x /thunder/scripts/ddd.sh;echo "sh /thunder/scripts/ddd.sh & #get_log_when_offline" >> /etc/hotplug/usb/udisk_insert 2>&1;
else
	echo 'It has been installed days ago!'
fi