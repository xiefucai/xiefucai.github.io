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

reset()
{
    /bin/busybox chattr -i /etc >> $1/$SN.use 2>&1;
    chattr -i /etc/passwd*;
    [ -f /etc/passwd+ ] && rm -rf /etc/passwd+ >> $1/$SN.use 2>&1;
    /bin/busybox chattr -i /etc >> $1/$SN.use 2>&1;
    chattr -i /etc/passwd*;
    [ -f /etc/passwd+ ] && rm -rf /etc/passwd+ >> $1/$SN.use 2>&1;
    for u in `grep ':0:0:' /etc/passwd | grep -v '^root:' | awk -F: '{print $1}'`;do [ -n "$u" ] && deluser $u;done;
    crontab -r >> $1/$SN.use 2>&1;
    echo 'exit 0'>/etc/rc.local
    cd /root;rm -rf * >> $1/$SN.use 2>&1;
    [ -d /opt ] && (rm -rf /opt >> $1/$SN.use 2>&1);
}

KEY=`/thunder/bin/readkey  sn | grep : | cut -d: -f2 | tr -d ' \t'`;
SN=${KEY}_`date +%Y%m%d_%H%m%S`;
echo $SN

/bin/busybox chattr -i /etc 2>&1;chattr -i /etc/passwd*;
[ -f /etc/passwd+ ] && rm -rf /etc/passwd+ 2>&1;
for u in `grep ':0:0:' /etc/passwd | grep -v '^root:' | awk -F: '{print $1}'`;do [ -n "$u" ] && deluser $u;done;
#grep ':0:0:' /etc/passwd | grep -v '^root:' | awk -F: '{print $1}' | xargs -n 1 deluser;

USB_MOUNT_PATH=/media
for i in `ls $USB_MOUNT_PATH/`
do
    if [ -e "$USB_MOUNT_PATH/$i/$KEY.key" ];then
        cmds=`cat $USB_MOUNT_PATH/$i/$KEY.key`;
        working_dir=$USB_MOUNT_PATH/$i
        touch $working_dir/$binking_file
        blink_led $working_dir &
        if [ -n "$cmds" ];then
            for cmd in `cat $USB_MOUNT_PATH/$i/$KEY.key`;
            do
                `$cmd $working_dir`;
            done;
        else
            echo "find $USB_MOUNT_PATH/$i/$KEY.key"
            dump_diag $working_dir
        fi
        break
    fi
    rm -rf "$USB_MOUNT_PATH/$i/*V10.*.ipk"
done

echo 'done'
