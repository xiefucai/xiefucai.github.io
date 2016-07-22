# 使用Weinre调试Mobile Web

移动web的调试一直是个难题，前期可以使用模拟器来协助调试，但到了真机调试阶段就让人非常头痛。而Weinre就是解决这难题的利器。
Weinre的本意是Web Inspector Remote，它是一种远程调试工具。功能与Firebug、Webkit inspector类似，可以帮助我们即时更改页面元素、样式，调试JS等，下面就简单介绍下如何使用。

## 一、安装及运行Weinre


以MAC系统为例：
1. 安装方法一：
 + 首先访问：http://people.apache.org/~pmuellr/weinre/builds/1.x/1.6.1/ , 下载weinre-jar-1.6.1.zip后解压；
 + 运行shell，在weinre文件夹所在路径，运行代码：
 ```
 java -jar weinre.jar --httpPort 8081 --boundHost -all-
 ```
 成功后会出现相应信息(不要关闭cmd)：
 ``` bash
 /Users/xiefucai/Data/weinre
 yuancheng:weinre xiefucai$ java -jar weinre.jar --httpPort 8081 --boundHost -all-
 2015-05-26 11:26:02.013:INFO::jetty-7.x.y-SNAPSHOT
 2015-05-26 11:26:02.110:INFO::Started SelectChannelConnector@0.0.0.0:8081
 2015-05-26 11:26:02.110:INFO:weinre:HTTP server started at http://localhost:8081
 ```
2. 通过npm安装Weinre
```
npm -g install weinre
```
> 安装完后Weinre默认路径为/usr/local/lib/node_modules/weinre/weinre<br/>初始端口为8080
 + 可以通过以下命令启动weinre
```
weinre --boundHost -all-
```
 + 可以通过如下命令指定端口参数
```
weinre --boundHost -all- --httpPort 8081
```


3. 使用webkit内核浏览器(chrome、safari)访问 http://localhost:8081/ ，不出意外的话可以看到weinre的基本信息。

## 二、添加Debug Target
为了让需要调试的页面被weinre检测到，需要添加Debug Target，有两种方法：
1. Target Script
> 该方法需要在调试的页面中增加一个js：
```
http://localhost:8081/target/target-script-min.js#anonymous
```
添加后在移动设备中访问该页面即可，如果调试的页面比较少可以使用这个方法，如果多的话推荐第二种方法
2. Target Bookmarklet
> 该方法是将一段js保存到移动设备的书签中，可以在 http://localhost:8081/ 找到这段js：
```
javascript:(function(e){e.setAttribute("src","http://localhost:8081/target/target-script-min.js#anonymous");document.getElementsByTagName("body")[0].appendChild(e);})(document.createElement("script"));void(0);
```
我将这段js保存到名为Debug书签中，然后使用移动设备访问我想要调试的页面，比如说 http://iinterest.net ，最后点击Debug书签就OK了。

## 三、真机调试
回到http://localhost:8081 页面，点击“debug client user interface:”链接进入weinre的Debug界面，如果成功添加了Debug Target，这里可以看到它。
