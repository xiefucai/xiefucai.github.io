# perror()与strerror()的应用及区别
perror() 和 strerror() 以一种直观的方式打印出错误信息，对于调试程序和编写优秀的程序非常有用。

下面是perror() 与 strerror() 的使用范例及区别：

## perror()原型：
``` cpp
#include <stdio.h>
void perror(const char *s);
```
其中，perror()的参数s 是用户提供的字符串。当调用perror()时，它输出这个字符串，后面跟着一个冒号和空格，然后是基于当前errno的值进行的错误类型描述。

## strerror()原型：
``` cpp
#include <string.h>
char * strerror(int errnum);
```
这个函数将errno的值作为参数，并返回一个描述错误的字符串

``` cpp
/*rename.c*/

#include<stdio.h>
#include <string.h>
#include <errno.h>

int main(int argc,char **argv)
{
    char path[]="./first.c";
    char newpath[] = "./second.c";
    char newpathnot[] = "./gong/suo.c";
    extern int errno;

    if( rename(path,newpathnot) == 0)
    {
        printf("the file %s was moved to %s.",path,newpathnot);
    }
    else
    {
        printf("Can't move the file %s.\n",path);
        printf("errno:%d\n",errno);
        printf("ERR:%s\n",strerror(errno));
        perror("Err");
    }

    if(rename(path,newpath) == 0)
        printf("the file %s was moved to %s.\n",path,newpath);
    else
    {
        printf("Can't move the file %s.\n",path);
        printf("errno:%d\n",errno);
        printf("ERR:%s\n",strerror(errno));
    }

    return 0;
}
```
```
gcc rename.c -o rename
./rename

Can't move the file ./first.c.
errno:2
ERR:No such file or directory
Err: No such file or directory
the file ./first.c was moved to ./second.c
```
## strerror（）方法与perror()的用法十分相似。

先谈谈perror（）的用法，这个方法用于将上一条语句（方法）执行后的错误打印到标准输出上。一般情况下（没有使用重定向的话），就是输出到控制台上。

但是，如果我需要了解另外一个进程的某一个方法执行的错误，或者更briefly，我就希望将错误打印到一个文件里面，perror()就不太合适了！

为了实现我刚刚说到的要求，我们首先要将错误放到一个字符串里面。这个时候，strerror（）就合适了！
``` cpp
strerror(errno)
```
首先，系统会根据上一条语句的执行错误情况，将errno赋值.。
关于这点，我们首先明白两点。
1. errno是一个系统变量，是不需要我们赋值或者声明的。
2. errno是一个int类型的变量，而且其中的值对应一种特定错误类型

然后，关于streorror（）本身，可以这么理解。顾名思义，streorror=string+error，就是将errno值翻译成描述错误类型的string语句！

# ubuntu下man的应用

## 1. man 介绍
Linux提供了丰富的帮助手册，当你需要查看某个命令，某个函数的使用方法时，不必在网上到处查找，只要man一下即可。
Linux的man手册共有以下几个章节：
1. Standard Commands (标准命令)
2. System Calls (系统调用)
3. Library Functions (库函数)
4. Special Devices (设备说明)
5. File Formats (文件格式)
6. Games and Toys (游戏和娱乐)
7. Miscellaneous (杂项)
8. Administrative Commands (管理员命令)

## 2. 手册完善
ubuntu中man的手册默认情况下并没安装完全。所以用man命令查看C语言函数原型等会失败。使用以下几条命令进行完善：
+  sudo apt-get install manpages  ()
+  sudo apt-get install manpages-de   ()
+  sudo apt-get install manpages-de-dev  ()
+  sudo apt-get install manpages-dev (C语言库函数)

## 3. man命令的使用
命令格式：
``` bash
man [章节号] 手册名称
```
> man是按照手册的章节号的顺序进行搜索的，比如：
``` bash
man sleep
``` 
只会显示sleep命令的手册，如果想查看库函数sleep，就要输入
``` bash
man 3 sleep
```

[查看源文](http://blog.csdn.net/callinglove/article/details/8301789)