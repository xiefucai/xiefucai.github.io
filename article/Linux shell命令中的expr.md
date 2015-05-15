## 四则运算
用法：expr argument operator argument
```
expr 10 + 10
expr 10 - 10
expr 10 \* 10
expr 30 / 3 / 2
expr 14 % 10
```
注意
* 运算符左右都有空格 ，如果没有空格表示是字符串连接
```
yuancheng:Data xiefucai$ expr 1 + 1
2
yuancheng:Data xiefucai$ expr 1+ 1
expr: syntax error
yuancheng:Data xiefucai$ expr 1+1
1+1
```
* 使用乘号时，必须用反斜线屏蔽其特定含义。因为shell可能会误解显示星号的意义。
```
yuancheng:Data xiefucai$ expr 2 * 4
expr: syntax error
yuancheng:Data xiefucai$ expr 2 \* 4
8
```
* 如果试图计算非整数，将返回错误。
```
yuancheng:Data xiefucai$ expr 1.1 + 1
expr: not a decimal number: '1.1'
```

> #### 示例：用expr测试一个数
这里需要将一个值赋予变量（不管其内容如何），进行数值运算，并将输出导入dev/null，
然后测试最后命令状态，如果为0，证明这是一个数，其他则表明为非数值。
```
$value=12
$expr $value + 10 > /dev/null 2>&1
$echo $?
0
```
这是一个数。
```
$value=hello
$expr $value + 10 > /dev/null 2>&1
$echo $?
2
```
这是一个非数值字符。

## 字符串操作
1. 判断两个字符串是否相等
> expr $str1 = $str2<br/>
若相等返回1；不等则返回0
```
0-fucaixie-mac:Data xiefucai$ expr ccc = aaaa
0
0-fucaixie-mac:Data xiefucai$ expr ccc = ccc
1
```

2. 获取字符串内匹配串的长度
> expr $str : '.*' 或 expr length $str
```
0-fucaixie-mac:~ xiefucai$ v="abc123ddd_456"
0-fucaixie-mac:~ xiefucai$ echo $v
abc123ddd_456
0-fucaixie-mac:~ xiefucai$ expr $v : 'ddd.*'
0
0-fucaixie-mac:~ xiefucai$ expr $v : 'abc\d+'
0
0-fucaixie-mac:~ xiefucai$ expr $v : 'abc'
3
0-fucaixie-mac:~ xiefucai$ expr $v : 'abc.*ddd'
9
0-fucaixie-mac:~ xiefucai$ expr bkeep.doc : '\(.*\).doc'
bkeep
```

3. 提取指定字符的下标
> expr index 内容 字符
```
[root@wxtest01vm2 ~]# expr index "abcdefghaaa" a
1
[root@wxtest01vm2 ~]# expr index "abcdefghaaa" b
2
```

4. 提取字符串的子串
> expr substr 内容 起始位置 截取字符串的字符长度
```
[root@xxxxxxx ~]# expr substr "abcdefghaaa" 3 5
cdefg
```
