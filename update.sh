#!/bin/sh
KERNEL_FLAG=`nvram get second_image_load`
if [ "$KERNEL_FLAG" == "off" ];then
upgrade_nand kernel_fs.img 1
nvboot set second_image_load=on
else
upgrade_nand kernel_fs.img 0
nvboot set second_image_load=off
fi

echo "burn kernel over" 

APP_FLAG=`nvboot get xl_app_load`
if [ "$APP_FLAG" == "0" ];then
upgrade_nand app.img 1
nvboot set xl_app_load=1
else
upgrade_nand app.img 0
nvboot set xl_app_load=0
fi
echo "burn app over"

nvboot commit
echo "Please reboot Xunlei Router"