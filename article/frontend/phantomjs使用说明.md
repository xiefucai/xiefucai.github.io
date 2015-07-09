# phantomjs使用说明

phantomjs实现了一个无界面的webkit浏览器。虽然没有界面，但dom渲染、js运行、网络访问、canvas/svg绘制等功能都很完备，在页面抓取、页面输出、自动化测试等方面有广泛的应用。

## 安装
下载phantomjs（[官方下载](http://www.zhouhua.info/jump/hva5)，下载失败请访问[另一个下载点](http://www.zhouhua.info/jump/n7h6)）。解压到任意目录，并将包含phantomjs.exe的目录添加到系统路径。

如果要借助phantomjs进行无头测试，请参考各个测试框架的说明，或者参考phantomjs的官方文档：http://phantomjs.org/headless-testing.html 。

## 使用说明
### 简单示例
``` javascript
// test.js
var page = require('webpage').create(),
    system = require('system'),
    address;
if (system.args.length === 1) {
    phantom.exit(1);
} else {
    address = system.args[1];
    page.open(address, function (status) {
        console.log(page.content);
        phantom.exit();
    });
}
```
运行：
``` bash
phantomjs ./test.js http://baidu.com
```

这个例子简单地展示了通过phantom访问baidu.com，并输入html内容。使用方式就像使用node运行js代码一样。在phantom运行时，它会向当前代码运行环境注入phantom对象。如上面代码中，通过phantom对象控制程序终结。示例中其他代码的含义以及更多深入的用法，将在下文中展开。

----

#### window对象
在使用phantom时，我首先关注的是DOM和BOM接口。不过这不是一个问题，看了下面的代码就能了解：

``` javascript
// test.js
console.log(window === this);
phantom.exit();
```
运行：
``` bash
phantomjs ./test.js
```
结果为 true。也就是说，就像浏览器环境一样，我们的代码运行在window环境下，可以很方便地进行DOM方面的操作。

> 注：如果使用web page模块打开页面，则请不要在此window对象下进行任何DOM相关的操作，因为这个window并不是page对象内的window。如果想要执行dom相关操作，请参阅page.evaluate()部分。

#### phantom对象
之前的例子中我们已经初步认识了phantom对象。它的功能是定义和控制phantom运行环境的参数和流程。关键的API有：

1. ** phantom.args String[] **<br/>
获取传给本JS程序的参数，需要与 system.args进行区分（system模块详见下文），后者表示传给phantomjs引擎的参数。例如
```
phantomjs ./test.js http://baidu.com
```
这句语句，通过phantom.args，我们能得到的参数列表为
```
["http://baidu.com"]
```
，而通过 system.args则得到
```
["./test.js", "http://baidu.com"]
```
这样的参数列表。差异就在于是否包含当前脚本名称。不过
```
phantom.scriptName
```
这个API提供了获取脚本名称的功能。
2. ** phantom.cookies Object[] **<br/>
获取或设置cookies，不过对于设置建议使用其他的API完成。同时相关的API还有:<br/>
    1. phantom.addCookie(Object) Boolean：添加cookie值
    2. phantom.deleteCookie(cookieName) Boolean：删除指定Cookie值
    3. phantom.clearCookies()：清空所有的cookie
    4. phantom.cookiesEnabled Boolean：获取或设置是否支持cookie
3. ** phantom.injectJs(fileName) Boolean: **<br/>
    把指定的外部JS文件注入到当前环境。执行这个方法时，phantomjs首先会从当前目录检索此文件，如果找不到，则再到 phantom.libraryPath指定的路径寻找。 phantom.libraryPath这个API基本上就是为 phantom.injectJs()服务的。
phantom.onError
当页面存在js错误，且没有被 page.onError处理，则会被此handler捕获。下面是使用此API的一个例子。由于phantom环境下代码调试很困难，了解这些错误捕获的API也许会对我们的实际使用有所帮助。
phantom.onError = function(msg, trace) {
    var msgStack = ['PHANTOM ERROR: ' + msg];
    if (trace &amp;&amp; trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function(t) {
            msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
        });
    }
    console.error(msgStack.join('\n'));
    phantom.exit(1);
};


phantom.exit(returnValue)
这个API已经见过多次了，它的作用是退出程序，可以设置一个退出代码，默认是0。
