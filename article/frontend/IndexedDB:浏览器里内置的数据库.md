*IndexedDB*是*HTML5*规范里新出现的浏览器里内置的数据库。对于在浏览器里存储数据，你可以使用*cookies*或*localStorage*，但它们都是比较简单的技术，而*IndexedDB*提供了类似数据库风格的数据存储和使用方式。存储在*IndexedDB*里的数据是永久保存，不像*cookies*那样只是临时的。*IndexedDB*里提供了查询数据的功能，在*online*和*offline*模式下都能使用。你可以用*IndexedDB*存储大型数据。

*IndexedDB*里数据以对象的形式存储，每个对象都有一个*key*值索引。*IndexedDB*里的操作都是事务性的。一种对象存储在一个*objectStore*里，*objectStore*就相当于关系数据库里的表。*IndexedDB*可以有很多*objectStore*，*objectStore*里可以有很多对象。每个对象可以用*key*值获取。

## IndexedDB vs LocalStorage

*IndexedDB*和*LocalStorage*都是用来在浏览器里存储数据，但它们使用不同的技术，有不同的用途，你需要根据自己的情况适当的选择使用哪种。*LocalStorage*是用*key-value*键值模式存储数据，但跟*IndexedDB*不一样的是，它的数据并不是按对象形式存储。它存储的数据都是字符串形式。如果你想让*LocalStorage*存储对象，你需要借助``JSON.stringify()``能将对象变成字符串形式，再用``JSON.parse()``将字符串还原成对象。但如果要存储大量的复杂的数据，这并不是一种很好的方案。毕竟，*LocalStorage*就是专门为小数量数据设计的，它的api是同步的。

*IndexedDB*很适合存储大量数据，它的API是异步调用的。*IndexedDB*使用索引存储数据，各种数据库操作放在事务中执行。*IndexedDB*甚至还支持简单的数据类型。*IndexedDB*比*LocalStorage*强大得多，但它的API也相对复杂。

对于简单的数据，你应该继续使用*LocalStorage*，但当你希望存储大量数据时，*IndexedDB*会明显的更适合，*IndexedDB*能提供你更为复杂的查询数据的方式。

## IndexedDB vs Web SQL

*WebSQL*也是一种在浏览器里存储数据的技术，跟*IndexedDB*不同的是，*IndexedDB*更像是一个*NoSQL*数据库，而*WebSQL*更像是关系型数据库，使用**SQL**查询数据。W3C已经不再支持这种技术。具体情况请看：http://www.w3.org/TR/webdatabase/。

因为不再支持，所以你就不要在项目中使用这种技术了。

## IndexedDB vs Cookies

*cookies*(小甜点)听起来很好吃，但实际上并不是。每次*HTTP*接受和发送都会传递*cookies*数据，它会占用额外的流量。例如，如果你有一个10KB的Cookies数据，发送10次请求，那么，总计就会有100KB的数据在网络上传输。Cookies只能是字符串。浏览器里存储Cookies的空间有限，很多用户禁止浏览器使用Cookies。所以，Cookies只能用来存储小量的非关键的数据。

## IndexedDB的用法

想要理解*IndexedDB*，最好的方法是创建一个简单的web应用：把你们班的学生的学号和姓名存储在*IndexedDB*里。*IndexedDB*里提供了简单的增、删、改、查接口。

### 打开一个*IndexedDB*数据库

首先，你需要知道你的浏览器是否支持*IndexedDB*。请使用最新版的谷歌浏览器或火狐浏览器。低版本的IE是不行的。
``` js
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

if(!window.indexedDB)
{
    console.log("你的浏览器不支持IndexedDB");
}
```
一旦你的浏览器支持**IndexedDB**，我们就可以打开它。你不能直接打开**IndexedDB**数据库。**IndexedDB** 需要你创建一个请求来打开它。
``` js
var request = window.indexedDB.open("testDB", 2);
```
第一个参数是数据库的名称，第二个参数是数据库的版本号。版本号可以在升级数据库时用来调整数据库结构和数据。

但你增加数据库版本号时，会触发**onupgradeneeded**事件，这时可能会出现成功、失败和阻止事件三种情况。
``` js
var db;
request.onerror = function(event){
    console.log("打开DB失败", event);
}
request.onupgradeneeded   = function(event){
    console.log("Upgrading");
    db = event.target.result;
    var objectStore = db.createObjectStore("students", { keyPath : "rollNo" });
};
request.onsuccess  = function(event){
    console.log("成功打开DB");
    db = event.target.result;
}
```
**onupgradeneeded** 事件在第一次打开页面初始化数据库时会被调用，或在当有版本号变化时。所以，你应该在**onupgradeneeded**函数里创建你的存储数据。如果没有版本号变化，而且页面之前被打开过，你会获得一个**onsuccess**事件。如果有错误发生时则触发**onerror**事件。如果你之前没有关闭连接，则会触发**onblocked**事件。

在上面的代码片段里，我们创建了一个``Object Store``，叫做“students”，用“rollNo”做数据键名。

往*objectStore*里新增对象

为了往数据库里新增数据，我们首先需要创建一个事务，并要求具有读写权限。在*IndexedDB*里任何的存取对象的操作都需要放在事务里执行。
``` js
var transaction = db.transaction(["students"],"readwrite");
transaction.oncomplete = function(event) {
    console.log("Success");
};

transaction.onerror = function(event) {
    console.log("Error");
};
var objectStore = transaction.objectStore("students");

objectStore.add({rollNo: rollNo, name: name});
```
从*objectStore*里删除对象

删除跟新增一样，需要创建事务，然后调用删除接口，通过*key*删除对象。
``` js
db.transaction(["students"],"readwrite").objectStore("students").delete(rollNo);
```
我把语句合并到了一起，变得更简单，但效果是一样的。

通过key取出对象

往``get()``方法里传入对象的key值，取出相应的对象。
``` js
var request = db.transaction(["students"],"readwrite").objectStore("students").get(rollNo);
request.onsuccess = function(event){
    console.log("Name : "+request.result.name);
};
```
更新一个对象

为了更新一个对象，首先要把它取出来，修改，然后再放回去。
``` js
var transaction = db.transaction(["students"],"readwrite");
var objectStore = transaction.objectStore("students");
var request = objectStore.get(rollNo);
request.onsuccess = function(event){
    console.log("Updating : "+request.result.name + " to " + name);
    request.result.name = name;
    objectStore.put(request.result);
};
```
