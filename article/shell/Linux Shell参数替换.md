# Linux Shell参数替换

> Bash中的$符号的作用是参数替换，将参数名替换为参数所代表的值。<br/>
对于$来说，大括号是可选的，即$A和${A}代表同一个参数。

## ${}带冒号的有下面几种表达式：
> ${parameter:-word}

如果parameter为null或者未设置，整个参数替换表达式值为word

> ${parameter:=word}

如果parameter为null或者未设置，整个参数替换表达式值为word，并且parameter参数值设置为word

> ${parameter:?word}

如果parameter为null或者未设置，则打印出错误信息。否则，整个参数替换表达式值为$parameter

> ${parameter:+word}

如果parameter不为null或者未设置，则整个参数替换表达式值为word

> ${parameter:offset}

${parameter:offset:length}
parameter的值的子字符串。

### 可以理解下下面这几个例子：
```
yuancheng:kj.peiluyou.com xiefucai$ echo $test

yuancheng:kj.peiluyou.com xiefucai$ echo ${test:-word}
word
yuancheng:kj.peiluyou.com xiefucai$ echo $test

yuancheng:kj.peiluyou.com xiefucai$ echo ${test:=word}
word
yuancheng:kj.peiluyou.com xiefucai$ echo $test
word
yuancheng:kj.peiluyou.com xiefucai$ echo ${test:?word}
word
yuancheng:kj.peiluyou.com xiefucai$ echo ${test2:?word}
-bash: test2: word
yuancheng:kj.peiluyou.com xiefucai$ echo ${test2:word}

yuancheng:kj.peiluyou.com xiefucai$ echo ${test2}

yuancheng:kj.peiluyou.com xiefucai$ echo ${test2:+word}

yuancheng:kj.peiluyou.com xiefucai$ echo ${test2}

yuancheng:kj.peiluyou.com xiefucai$ echo ${test:+word}
word
yuancheng:kj.peiluyou.com xiefucai$ echo ${test3:0:1}

yuancheng:kj.peiluyou.com xiefucai$ echo ${test2:0:1}

yuancheng:kj.peiluyou.com xiefucai$ echo ${test:0:1}
w
yuancheng:kj.peiluyou.com xiefucai$ echo ${test:0}
word
yuancheng:kj.peiluyou.com xiefucai$ echo ${test:3}
d
```

## ${}带!有下面几种表达式：
>将带有前缀为prefix的参数名打印出来<br/>${!prefix*}<br/>${!prefix@}

>打印出name数组有哪些下标<br/>${!name[@]}<br/>${!name[*]}

可以理解下下面这几个例子：

```
yuancheng:kj.peiluyou.com xiefucai$ echo $test1

yuancheng:kj.peiluyou.com xiefucai$ echo $test2

yuancheng:kj.peiluyou.com xiefucai$ test1=word1
yuancheng:kj.peiluyou.com xiefucai$ test2=word2
yuancheng:kj.peiluyou.com xiefucai$ echo ${tes*}
-bash: ${tes*}: bad substitution
yuancheng:kj.peiluyou.com xiefucai$ echo ${!tes*}
test1 test2
yuancheng:kj.peiluyou.com xiefucai$ arr[1]=a
yuancheng:kj.peiluyou.com xiefucai$ arr[2]=b
yuancheng:kj.peiluyou.com xiefucai$ echo ${!arr[*]}
1 2
yuancheng:kj.peiluyou.com xiefucai$ arr[0]=c
yuancheng:kj.peiluyou.com xiefucai$ echo ${!arr[*]}
0 1 2
yuancheng:kj.peiluyou.com xiefucai$ arr[-1]=d
-bash: arr[-1]: bad array subscript```

## ${}带正则匹配的几种表达式：
>从头开始扫描word，将匹配word正则表达的字符过滤掉<br/>#为最短匹配 ${parameter#word}<br/>##为最长匹配 ${parameter##word}

>从尾开始扫描word，将匹配word正则表达式的字符过滤掉<br/>%为最短匹配 ${parameter%word}<br/>%%为最长匹配 ${parameter%%word}

可以理解下面这几个例子：
```
yuancheng:kj.peiluyou.com xiefucai$ test='this is just a test,test for a test'
yuancheng:kj.peiluyou.com xiefucai$ echo ${test}
this is just a test,test for a test
yuancheng:kj.peiluyou.com xiefucai$ echo ${test#*e}
st,test for a test
yuancheng:kj.peiluyou.com xiefucai$ echo ${test}
this is just a test,test for a test
yuancheng:kj.peiluyou.com xiefucai$ echo ${test##*e}
st
yuancheng:kj.peiluyou.com xiefucai$ echo ${test%o*}
this is just a test,test f
yuancheng:kj.peiluyou.com xiefucai$ echo ${test%%s*}
thi
```


## 字符串替换
> 将parameter对应值的pattern字符串替换成为string字符串 <br/>只替换一次 ${parameter/pattern/string}<br/>全部替换 ${parameter//pattern/string}

可以理解下面这几个例子：
```
yuancheng:kj.peiluyou.com xiefucai$ str='this is just a test,test for a test'
yuancheng:kj.peiluyou.com xiefucai$ echo ${str}
this is just a test,test for a test
yuancheng:kj.peiluyou.com xiefucai$ echo ${str/test/hahaha}
this is just a hahaha,test for a test
yuancheng:kj.peiluyou.com xiefucai$ echo ${str//test/hahaha}
this is just a hahaha,hahaha for a hahaha
yuancheng:kj.peiluyou.com xiefucai$ echo ${str}
this is just a test,test for a test
```

---
>local line=${2%${2##*[![:space:]]}}<br/>str=${2##*[![:space:]]}<br/>${2%str}
printf "${CN}:${C1}%-${INDENT}s${C2} %s" "$1" "$line${CN}"
