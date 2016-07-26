#! /bin/sh
p=/tmp/dcdn_base;

repairDcdnBase()
{
    f=${p}/_.txt;
    date;
    if [ -L ${p} ];then
        ls -al ${p};
        touch $f;[ -f $f ] && (echo '该目录可写<hr></a>';rm $f;) || echo '该目录只读';
        cd ${p};
        du -h -d 1;
        echo '<hr/>';
        ls -al ./;
    else
        m=`df -P|tail -n 1|grep '/media/'|awk '{print $6}'`;
        [ -n "${m}" ] && (
            echo ${m};
            killall dcdn_client;
            rm -rf ${p} && ln -s ${m} ${p};
            cd ${p};
            ls -al ${p};
            echo '已经重新建立软链接';
            touch $f;
            [ -f $f ] && (echo '该目录可写';rm $f;) || echo '该目录只读';
            echo '<hr/>';
            du -h -d 1;
            echo '<hr/>';
            ls -al ./
        ) || (echo '未插盘';df -h);
    fi
}

(repairDcdnBase >/tmp/reset.log 2>&1 &);
