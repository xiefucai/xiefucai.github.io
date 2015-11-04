Sed表示流编辑器(Stream Editor)的缩写。这是一个简单但功能强大的工具，分析文本，并无缝地转换它。 SED是在1973-1974年由贝尔实验室的李E. McMahon开发。如今，它运行在所有主要的操作系统。

McMahon编写了一个通用的面向行的编辑器，它最终成为sed。sed借用语法和ed编辑许多有用的功能。自成立开始，就对正则表达式有所支持。sed接受来自文件以及管道的输入。此外，它也可以接受来自标准输入的数据流的输入。

sed是自由软件由基金会（FSF）维护，它是由GNU/ Linux分发。因此，它通常被称为GNU sed的。对于新手用户，sed语法看起来神秘。但是，一旦熟悉了它的语法，就可以使用sed的几行脚本解决许多复杂的任务。

## sed典型用途
sed可以有许多不同的方式使用，例如：
* 文本替换
* 选择性打印的文本文件
* 一个就地文本文件的编辑
* 文本文件的非交互式的编辑等等。

### 本章介绍如何在GNU/ Linux系统中设置sed环境。
#### 安装使用软件包管理器
一般情况下，sed默认提供在大多数的GNU/ Linux发行版。使用该命令，以确定其是否存在于您的系统上。如果没有，那么在基于Debian GNU/ Linux可以使用apt包管理器，如下所示安装sed：
```
sudo apt-get install sed
```
安装后，确保sed可以通过命令行访问。
```
sed --versio
```
执行上面的代码，会得到如下结果：
```
sed (GNU sed) 4.2.2
Copyright (C) 2012 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.htmll>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.  
Written by Jay Fenlason, Tom Lord, Ken Pizzini,
and Paolo Bonzini.
GNU sed home page: <http://www.gnu.org/software/sed/>.
General help using GNU software: <http://www.gnu.org/gethelp/>.
E-mail bug reports to: <bug-sed@gnu.org>.
Be sure to include the word "sed" somewhere in the "Subject:" field.
```
同样，基于GNU/Linux的RPM安装sed，用yum包管理器，如下所示：
```
yum -y install sed
```
安装后，确保 sed 可以通过命令行访问。
```
sed --version
```
执行上面的代码，会得到如下结果：
```
GNU sed version 4.2.1
Copyright (C) 2009 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE,
to the extent permitted by law.  
GNU sed home page: <http://www.gnu.org/software/sed/>.
General help using GNU software: <http://www.gnu.org/gethelp/>.
E-mail bug reports to:<bug-gnu-utils@gnu.org>.
Be sure to include the word "sed" somewhere in the "Subject:" field.
```
#### 从源代码安装
由于GNU sed是GNU计划的一部分，它的源代码都可以免费下载。我们已经看到了如何使用软件包管理器安装sed。现在，了解如何从源代码安装sed。

下面安装适用于任何的GNU/Linux软件，和大多数其他可自由使用的程序。下面是安装步骤：

第1步 - 从一个真实的地方下载的源代码。命令行实用程序wget服务于这个目的。
```
wget ftp://ftp.gnu.org/gnu/sed/sed-4.2.2.tar.bz2
```
第2步 - 解压缩和解压下载的源代码。
```
tar xvf sed-4.2.2.tar.bz2
```
第3步 - 更改进入目录并运行配置。
```
./configure
```
第4步 - 一旦成功完成，配置生成Makefile文件。编译源代码，使用 make命令。
```
make
```
第5步 - 可以运行测试套件，以确保构建是干净的。这是一个可选步骤。
```
make check
```
第6步 - 最后，安装sed实用工具。请确保有超级用户的权限。
``` bash
sudo make install
```
我们已经成功编译并安装sed。通过执行 sed 命令，作如下验证：
``` bash
sed --version
```
执行上面的代码，会得到如下结果：
``` bash
sed (GNU sed) 4.2.2
Copyright (C) 2012 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.htmll>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.  
Written by Jay Fenlason, Tom Lord, Ken Pizzini,
and Paolo Bonzini.
GNU sed home page: <http://www.gnu.org/software/sed/>.
General help using GNU software: <http://www.gnu.org/gethelp/>.
E-mail bug reports to: <bug-sed@gnu.org>.
Be sure to include the word "sed" somewhere in the "Subject:" field.
```

### sed工作流程
本章将解释sed究竟如何工作的。要成为一个专家级的sed用户，需要知道它的内部执行和结构。sed遵循一个简单的工作流：读取，执行和显示。下图描绘了工作流程。

![sed工作流程](http://www.yiibai.com/uploads/allimg/141112/0H5162261-0.jpg)

#### 读取
sed从输入流(文件，管道，或标准输入)读取，并将其存储在其内部的缓冲模式称为缓冲行。
#### 执行
所有sed命令顺序地对模式缓冲区使用。默认情况下，sed命令都适用于所有行(全局)，除非指定行寻址。
#### 显示
sed发送(修改)的内容到输出数据流。在发送数据后，模式缓冲器是空的。这个过程一直重复，直到文件被耗尽。
#### 示例
让我们创建一个文本文件quote.txt包含引用著名作家Paulo Coelho。
``` bash
vi quote.txt
There is only one thing that makes a dream impossible to achieve: the fear of failure.
 - Paulo Coelho, The Alchemist
 ```
为了了解sed的工作流程，让我们使用sed显示该文件的内容quote.txt。这个例子模仿cat命令。
```
sed '' quote.txt
```
当执行上面的代码，就会产生下面的结果。
```
There is only one thing that makes a dream impossible to achieve: the fear of failure.
```
在上面的例子中，quote.txt输入文件名和在此之前，有一对单引号的暗示sed 命令。让我们解读此操作。

第一sed从输入文件quote.txt读取并将其存储在它的模式缓冲区行。然后它适用sed关于模型缓冲区命令。在我们的例子中没有sed 命令在那里，因此是对模式缓冲区未进行任何操作。最后删除，并打印在标准输出模式缓冲区中的内容。是不是很简单？

在下面的例子中，sed 接受来自标准输入流输入。
```
sed ''
```
当执行上面的代码，它会提示我们输入从标准输入一些文字。因此，让我们进入一个文本行，如下所示：
```
There is only one thing that makes a dream impossible to achieve: the fear of failure.
```
输入该行后，当我们按下输入产生以下结果：
```
There is only one thing that makes a dream impossible to achieve: the fear of failure.
```

要从使用的sed会话退出，按下键盘上的 ctrl-D (^D).
