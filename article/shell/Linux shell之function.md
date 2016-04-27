function 功能

什么是**『函数 (function)』**功能啊？简单的说，其实， 函数可以在 shell script 当中做出一个类似自订运行命令的东西，最大的功能是，可以简化我们很多的程序码～

## 定义函数
function 的语法是这样的：
``` bash
function fname() {
    程序段
}
```
那个 **fname** 就是我们的自订的运行命令名称～而程序段就是我们要他运行的内容了。 要注意的是，因为 shell script 的运行方式是由上而下，由左而右， 因此在 shell script 当中的 function 的配置一定要在程序的最前面， 这样才能够在运行时被找到可用的程序段喔！

要定义一个函数, 有下列两种方法:
``` bash
function functname
{
    statements
}
```
``` bash
functname ()
{
    statements
}
```
这两种定义没有任何功能上的区别, 使用后者比较简单, 和C中函数的定义是相同的.

## 调用函数
要在脚本中调用函数, 只需给出函数名. 比如要调用上面的functname(), 只需给出 functname.

bash在执行脚本时候, 若发现一个函数的定义, 则它将函数名保留, "当作一条命令", 在后面碰到该函数名时候, 它直接执行该函数. 所以, 函数一定要先定义, 再调用. 一个通常的办法是把函数定义放在脚本开始部分.

## 函数参数传递：
当一个函数被调用时，脚本程序的位置参数$*、$@、$#、$1、$2等会被替换为函数的参数。这也是你读取传递给函数的参数的办法。当函数执行完毕后，这些参数会恢复为它们先前的值。
Shell脚本与函数间的参数传递可利用(1)位置参数和(2)变量直接传递。变量的值可以由Shell脚本传递给被调用的函数，而函数中所用的位置参数$1、$2，等对应于函数调用语句中的实参，这一点是与普通命令不同的。
``` bash
#func is a function name
# it echos the values of variables and arguments
func( )
{
echo "Let's begin now. "
echo $a $b $c
echo $1 $2 $3
echo "The end. "
}
a=" Working directory "
b="is"
c=`pwd`
func Welcome You Byby
echo "Today is ` date ` "
```
## 函数内变量
1. bash中，每当在函数内部创建环境变量，就将其添加到全局名称空间。这意味着，该变量将重写函数之外的全局变量，并在函数退出之后继续存在;
2. 可以使用local关键字在shell函数中声明局部变量，局部变量将局限在函数的作用范围内。
3. 脚本外也可以使用函数内变量(非local),但必须执行过函数.
即函数可以访问全局作用范围内的其他shell变量。如果一个局部变量和一个全局变量的名字相同，前者就会覆盖后者，但仅限于函数的作用范围之内。例如，我们可以对上面的脚本程序进行如下的修改以观察发生的情况：

## 函数返回
如果在函数里没有使用return命令指定一个返回值，函数返回的就是执行的最后一条命令的退出码
1. 我们可以通过return命令让函数返回数字值;
2. 让函数返回字符串值的常用方法是让函数将字符串保存在一个变量中，而该变量应该可以在函数结束之后被使用;
3. 此外，$()来得到函数输出把函数理解成命令即可，如下所示：

## 使用函数的好处
若我们在shell操作中，需要不断的重复执行某些命令，我们首先想到的，或许是将命令写成命令稿(shell script)。不过，我们也可以写成function，然后在command line中打上function_name就可当一舨的script来使用了。只是若你在shell中定义的function，除了可用unset function_name取消外，一旦退出shell，function也跟着取消。
然而，在script中使用function却有许多好处，除了可以提高整体script的执行效能外(因为已被加载)，还可以节省许多重复的代码...

简单而言，若你会将多个命令写成script以供调用的话，那，你可以将function看成是script中的script ...  
而且，透过source命令，我们可以自行定义许许多多好用的function，再集中写在特定文件中，然后，在其它的script中用source将它们加载并反复执行。
若你是RedHat Linux的使用者，或许，已经猜得出**/etc/rc.d/init.d/functions**这个文件是作啥用的了~~~  ^_^

## 示例
好～我们将 sh12.sh 改写一下，自订一个名为 printit 的函数来使用喔：
``` bash
[root@www scripts]# vi sh12-2.sh
#!/bin/bash
# Program:
#    Use function to repeat information.
# History:
# 2005/08/29    VBird    First release
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

function printit(){
    echo -n "Your choice is "     # 加上 -n 可以不断行继续在同一行显示
}

echo "This program will print your selection !"
case $1 in
  "one")
    printit; echo $1 | tr 'a-z' 'A-Z'  # 将参数做大小写转换！
    ;;
  "two")
    printit; echo $1 | tr 'a-z' 'A-Z'
    ;;
  "three")
    printit; echo $1 | tr 'a-z' 'A-Z'
    ;;
  *)
    echo "Usage $0 {one|two|three}"
    ;;
esac
```
以上面的例子来说，鸟哥做了一个函数名称为 **printit** ，所以，当我在后续的程序段里面， 只要运行 **printit** 的话，就表示我的 shell script 要去运行**『 function printit .... 』**里面的那几个程序段落罗！当然罗，上面这个例子举得太简单了，所以你不会觉得 function 有什么好厉害的， 不过，如果某些程序码一再地在 script 当中重复时，这个 function 可就重要的多罗～ 不但可以简化程序码，而且可以做成类似『模块』的玩意儿，真的很棒啦！



另外， function 也是拥有内建变量的～他的内建变量与 shell script 很类似， 函数名称代表示 $0 ，而后续接的变量也是以 $1, $2... 来取代的～ 这里很容易搞错喔～因为『 function fname() { 程序段 } 』内的 $0, $1... 等等与 shell script 的 $0 是不同的。以上面 sh12-2.sh 来说，假如我下达：『 sh sh12-2.sh one 』 这表示在 shell script 内的 $1 为 "one" 这个字串。但是在 printit() 内的 $1 则与这个 one 无关。 我们将上面的例子再次的改写一下，让你更清楚！
``` bash
[root@www scripts]# vi sh12-3.sh
#!/bin/bash
# Program:
#    Use function to repeat information.
# History:
# 2005/08/29    VBird    First release
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

function printit(){
    echo "Your choice is $1"   # 这个 $1 必须要参考底下命令的下达
}

echo "This program will print your selection !"
case $1 in
  "one")
    printit 1  # 请注意， printit 命令后面还有接参数！
    ;;
  "two")
    printit 2
    ;;
  "three")
    printit 3
    ;;
  *)
    echo "Usage $0 {one|two|three}"
    ;;
esac
```
在上面的例子当中，如果你输入『 sh sh12-3.sh one 』就会出现『 Your choice is 1 』的字样～ 为什么是 1 呢？因为在程序段落当中，我们是写了『 printit 1 』那个 1 就会成为 function 当中的 $1 喔～ 这样是否理解呢？ function 本身其实比较困难一点，如果你还想要进行其他的撰写的话。 不过，我们仅是想要更加了解 shell script 而已，所以，这里看看即可～了解原理就好罗～
