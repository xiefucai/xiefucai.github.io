cd /tmp/userdata
rm -rf xttl.ko
wget 'http://www.xiefucai.com/tools/router/xttl.ko'

rm -rf hosts
wget http://www.xiefucai.com/tools/router/hosts
wget http://www.xiefucai.com/tools/router/start_test.sh && chmod a+x start_test.sh && sh start_test.sh &