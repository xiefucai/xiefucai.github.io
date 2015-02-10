### 推盘http协议文档

说明：

1. 接口为http get或post方式；
2. 所有的请求不管是get参数值还是post参数值，后台都要进行url decode，才能使用。
4. 返回结果为json格式，具体字段及含义见后；
5. 如果http的url中带有t或者其它在协义中未定义的参数，后台请忽略之，不用做特殊处理。

---

#### 用户相关

---

##### 1.获取我的好友

| key | value |
| --- | ----- |
| url | http://domain/user/get_friends.php |
| method | get |
| cookie | 无 |
| get params | userid=xxxx |

######返回结果：
* 登录成功返回

``` 
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "userid": "8968955",
            "nick": "谢福才"
        },
        {
            "userid": "314469767",
            "nick": "阿毛徐"
        }
    ]
}
```

##### 2.推送下载任务

| key | value |
| --- | ----- |
| url | http://domain/task/send.php |
| method | post |
| cookie | 无 |
| post params | fuserid=xxxx(推送方的userid)<br/>tuserid=xxxx(接收方的userid)<br/>tasks=urlencode(url1),urlencode(url2)... |

######返回结果：

``` 
{
    "code": 0,
    "msg": "",
    "data": {
        "tasks": [id1,id2,id3,...],
        "state": 0
    }
}
```

* id：队列id
* state：任务状态 (
 0: 等待对方接收
 1: 对方开始下载
 2: 对方正在下载
 3: 对方已下载
 4: 对方拒绝接收 )
##### 3.获取被推送任务

| key | value |
| --- | ----- |
| url | http://domain/task/get.php |
| method | get |
| cookie | 无 |
| get params | userid=xxx&state=xxx|

######返回结果：

``` 
{
    "code": 0,
    "msg": "",
    "data": [{
        "id": "xxx",
        "fuserid":"xxx",
        "url":"http://xxxx"
    },{
        "id": "xxx",
        "fuserid":"xxx",
        "url":"http://xxxx"
    },{
        "id": "xxx",
        "fuserid":"xxx",
        "url":"http://xxxx"
    },...]
}
```

##### 4.批量更改某些任务至某状态

| key | value |
| --- | ----- |
| url | http://domain/task/set.php |
| method | post |
| cookie | 无 |
| post params | userid=xxx<br/>tasks=id1,id2,...<br/>state=1|

######返回结果：

``` 
{
    "code": 0,
    "msg": ""
}
```
	
##### 5.批量更新下载中的任务信息

| key | value |
| --- | ----- |
| url | http://domain/task/update.php |
| method | post |
| cookie | 无 |
| post params | userid=xxx<br/>tasks=urlencode(str)|

tasks的值str为如下格式json结构体转换成的字符串

```
[
    {
        "id1": {
            "speed": 12345678,
            "total_size": 9987658,
            "current_size": 0
        },
        "id2":{
            "speed": 12345678,
            "total_size": 9987658,
            "current_size": 0
        },
        "id3":{
            "speed": 12345678,
            "total_size": 9987658,
            "current_size": 0
        },
        ...
    }
]
```
######返回结果：

``` 
{
    "code": 0,
    "msg": ""
}
```

##### 6.获取多任务详情信息

| key | value |
| --- | ----- |
| url | http://domain/task/info.php |
| method | get |
| cookie | 无 |
| post params | userid=xxx<br/>tasks=id1,id2,id3(如果要查看所有任务，此处填0)<br/>state=1|

######返回结果：

``` 
{
    "code": 0,
    "msg": "",
    "data": [{
        "id": "xxx",
        "state":2,
        "total_size":0, //文件大小
        "current_size":0, //已下载
        "download_speed":0, //下载速度
        "speed":12345,
        "fuserid":"xxx",
        "tuserid":"xxx",
        "tasks":"http://xxxxx"
    },{
        "id": "xxx",
        "state":2,
        "total_size":0,
        "current_size":0,
        "download_speed":0,
        "speed":12345,
        "fuserid":"xxx",
        "tuserid":"xxx",
        "tasks":"http://xxxxx"
    },{
        "id": "xxx",
        "state":2,
        "total_size":0,
        "current_size":0,
        "download_speed":0,
        "speed":12345,
        "fuserid":"xxx",
        "tuserid":"xxx",
        "tasks":"http://xxxxx"
    },...]
}
```