## for循环
1. for((i=1;i<=10;i++));do echo $(expr $i \* 4);done
2. for i in $(seq 10)
3. for i in &#96;ls&#96;
4. for i in ${arr[@]}
5. for f in *.pdf;do echo $f;done
>However, there is one problem with the above syntax. If there are no pdf files in current directory it will expand to *.pdf (i.e. f will be set to *.pdf"). To avoid this problem add the following statement before the for loop:
``` bash
#!/bin/bash
# Usage: remove all utility bills pdf file password
shopt -s nullglob
for f in *.pdf
do
	echo "Removing password for pdf file - $f"
        pdftk "$f" output "output.$f" user_pw "YOURPASSWORD-HERE"
done
```
6. for f in ~/*;do echo $f;done;
7. for File in /proc/sys/net/ipv4/conf/*/accept_redirects; do echo $File;done
8. for i in f1 f2 f3 ;do echo $i;done #直接指定循环内容
9. for (( i=0; i<10; i++)); do echo $i;done #C 语法for 循环
10. for i in {1..10};do echo $i;done
11. for f in $*或for f in $@
``` bash
#!/bin/bash
# make sure you always put $f in double quotes to avoid any nasty surprises i.e. "$f"
for f in $*
do
  echo "Processing $f file..."
  # rm "$f"
done
```
``` bash
#!/bin/bash
# make sure you always put $f in double quotes to avoid any nasty surprises i.e. "$f"
for f in $@
do
  echo "Processing $f file..."
  # rm "$f"
done
```
---
实例：不同的方法来实现输出1－100间可以被3整除的数

---
> 用(())
``` bash
#!/bin/bash
clear
for((i=1;i<100;i++))
    do  
        if ((i%3==0))
        then
        echo $i
        continue
        fi
    done
```

> 使用&#96;seq 100&#96;
``` bash
#!/bin/bash
clear
for i in `seq 100`
do
    if((i%3==0))
    then
        echo $i
        continue
    fi
done
```
* 注意：用seq做递增，如果i到百万(1000000),将被转换为1e+06,无法作为数字进行其他运算，此时可用C式for循环或者while循环
``` bash
i=1
while(($i<10000000))
do echo $i
    i=`expr $i + 1`
done
```
 因为本方法调用expr故运行速度会比第1、2种慢不少，不过可稍作改进，将i=&#96;expr $i + 1&#96;改为i=$(($i+1))即可稍作速度的提升,不过具体得看相应shell环境是否支持


> 使用while
``` bash
#!/bin/bash
clear
i=1
while(($i<100))
do
    if(($i%3==0))
    then
        echo $i
    fi
    i=$(($i+1))
done
```

## until...do循环
``` bash
#!/bin/bash
#until用法，显示变量值从0到99
varl=0 #定义变量
echo "test until loop control"

#如果这个条件不成立，执行下面命令，如成立则结束循环
until test $varl == 100
do
{
    echo "varl is :$varl"
    let varl=varl+1
}
done
echo "test until end "
```

---
示例

---

``` bash
# !/bin/sh
i=1
function test_while(){
	i=1
	while test $i
	do
		echo $i
		i=`expr $i + 1`
		if test $i -ge 10 ; then
			break
		fi
	done
}

function test_for(){
	i=1
	for ((i=1; i<=100; i++)); do
	echo $i
	if test $i -ge 10 ; then
		break
	fi
done
}

function test_continue(){
i=1
for i in $(seq 100); do
	if (( i==0 )); then
		echo $i
		continue
	fi
done
}

echo "test_while..."
test_while
echo "test_for..."
test_for
echo "test_continue..."
test_continu
```


## while循环
``` bash
#!/bin/bash
    while IFS= read -r file
    do
        [ -f "$file" ] && rm -f "$file"
    done < "/tmp/data.txt"
```
