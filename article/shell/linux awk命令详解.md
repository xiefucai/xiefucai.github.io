# 简介
awk是一个强大的文本分析工具，相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。简单来说awk就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。

awk有3个不同版本: `awk`、`nawk`和`gawk`，未作特别说明，一般指`gawk`，gawk 是 AWK 的 GNU 版本。

`awk`其名称得自于它的创始人 Alfred Aho 、Peter Weinberger 和 Brian Kernighan 姓氏的首个字母。实际上 AWK 的确拥有自己的语言： *AWK 程序设计语言* ，三位创建者已将它正式定义为*“样式扫描和处理语言”*。它允许您创建简短的程序，这些程序读取输入文件、为数据排序、处理数据、对输入执行计算以及生成报表，还有无数其他的功能。

## 使用方法
``` bash
awk '{pattern + action}' {filenames}
```
尽管操作可能会很复杂，但语法总是这样，其中 pattern 表示 AWK 在数据中查找的内容，而 action 是在找到匹配内容时所执行的一系列命令。花括号（{}）不需要在程序中始终出现，但它们用于根据特定的模式对一系列指令进行分组。 pattern就是要表示的正则表达式，用斜杠括起来。

awk语言的最基本功能是在文件或者字符串中基于指定规则浏览和抽取信息，awk抽取信息后，才能进行其他文本操作。完整的awk脚本通常用来格式化文本文件中的信息。

通常，awk是以文件的一行为处理单位的。awk每接收文件的一行，然后执行相应的命令，来处理文本。

## 调用awk
有三种方式调用awk

1. **命令行方式**
``` bash
awk [-F  field-separator]  'commands'  input-file(s)
```
其中，commands 是真正awk命令，[-F域分隔符]是可选的。 input-file(s) 是待处理的文件。
在awk中，文件的每一行中，由域分隔符分开的每一项称为一个域。通常，在不指名-F域分隔符的情况下，默认的域分隔符是空格。
2. ** shell脚本方式 **<br/>
将所有的awk命令插入一个文件，并使awk程序可执行，然后awk命令解释器作为脚本的首行，一遍通过键入脚本名称来调用。
相当于shell脚本首行的：#!/bin/sh
可以换成：#!/bin/awk
3. ** 将所有的awk命令插入一个单独文件，然后调用：**<br/>
awk -f awk-script-file input-file(s)
其中，-f选项加载awk-script-file中的awk脚本，input-file(s)跟上面的是一样的。

本章重点介绍命令行方式。

### 1. 入门实例
``` bash
[root@wxtest01vm2 ~]# last -n 5
root     pts/1        192.168.112.56   Tue Jun  2 03:55   still logged in
root1    pts/2        192.168.112.121  Mon Jun  1 07:16 - 13:37  (06:20)
root     pts/1        192.168.112.56   Mon Jun  1 03:30 - 14:31  (11:00)
root     pts/1        192.168.112.56   Sat May 30 08:37 - 12:24  (03:47)
root     pts/1        192.168.112.56   Fri May 29 09:47 - 13:05  (03:18)

wtmp begins Tue Apr 15 04:19:03 2014
```
如果只是显示最近登录的5个帐号
