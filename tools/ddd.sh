#!/bin/sh
binking_file=blinking

blink_led()
{
    while [ -e $1/$binking_file ]
    do
        # turn on red 
        echo "1" > /sys/class/gpio/gpio2/value
        sleep 1

        # turn off red
        echo "0" > /sys/class/gpio/gpio2/value
        sleep 1
    done
}

dump_diag()
{
    echo "dumping..."

    date '+%Y/%m/%d %H:%M:%S' > $1/$SN.use 2>&1

    echo "========== df -h" >> $1/$SN.use

    df -h >> $1/$SN.use 2>&1

    echo "========== du -h -d 1" >> $1/$SN.use

    cd /;du -h -d 1 >> $1/$SN.use 2>&1

    echo "========== ls /opt" >> $1/$SN.use

    ls /opt >> $1/$SN.use 2>&1

    echo "========== mount info" >> $1/$SN.use 2>&1
    mount >> $1/$SN.use 2>&1

    echo "========== ifconfig" >> $1/$SN.use
    ifconfig >> $1/$SN.use 2>&1

    echo "========== /etc/hosts" >> $1/$SN.use
    cat /etc/hosts >> $1/$SN.use 2>&1

    echo "========== /etc/resolv.conf" >> $1/$SN.use
    cat /etc/resolv.conf >> $1/$SN.use 2>&1

    echo "========== routing talbe" >> $1/$SN.use
    route >> $1/$SN.use 2>&1

    echo "========== ping 1" >> $1/$SN.use
    ping -c 4 baidu.com >> $1/$SN.use 2>&1

    echo "========== ping 2" >> $1/$SN.use
    ping -c 4 kjapi.peiluyou.com >> $1/$SN.use 2>&1

    echo "========== nslookup kjapi.peiluyou" >> $1/$SN.use
    nslookup kjapi.peiluyou.com >> $1/$SN.use 2>&1

    echo "========== mem use" >> $1/$SN.use
    free -m >> $1/$SN.use 2>&1

    echo "========== top info" >> $1/$SN.use
    top -n 1 >> $1/$SN.use 2>&1

    echo "========== ubus list" >> $1/$SN.use
    ubus list >> $1/$SN.use 2>&1

    echo "========== netcfg" >> $1/$SN.use
    ubus call netcfg get_network >> $1/$SN.use 2>&1

    echo "========== ubus_app.log" 
    cat /var/log/ubus_app.log >> $1/$SN.use 2>&1

    sleep 5 
    rm $1/$binking_file
    rm $1/$SN.key
}


KEY=`/thunder/bin/readkey  sn | grep : | cut -d: -f2 | tr -d ' \t'`
SN=`/thunder/bin/readkey  sn | grep : | cut -d: -f2 | tr -d ' \t'`_`date +%Y%m%d_%H%m%S`
echo $SN

USB_MOUNT_PATH=/media
for i in `ls $USB_MOUNT_PATH/`
do
    if [ -e "$USB_MOUNT_PATH/$i/$KEY.key" ];then
        echo "find $USB_MOUNT_PATH/$i/$KEY.key"
        working_dir=$USB_MOUNT_PATH/$i
        touch $working_dir/$binking_file
        blink_led $working_dir &
        dump_diag $working_dir
        break
    fi
    rm -rf "$USB_MOUNT_PATH/$i/V10.*.ipk"
done

echo 'done'