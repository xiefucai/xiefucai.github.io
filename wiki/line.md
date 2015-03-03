---

####  线路管理

---
##### 线路列表

| key | value |
| --- | ----- |
| url | http://domain/line/list |
| method | get |
| cookie | uid,token |
| get params | index=0&limit=10<span style="color:red">&province=xx&city=xx&area=xx&des=xx&id=xx</span><br/>红色部分为可选参数，<small>返回从第index条开始数limit条记录,用于分页</small>|

######返回结果：
```
{
    "code": 0,
    "msg": "",
    "total":23,
    "data": [
        {
            "id": 1,
            "area": "伦教",
            "province": 1,
            "city": 123,
            "des": "xxxx",
            "time": 1425266161,
            "member":[
                {
                    "id":1,
                    "name":"张三",
                    "rank"：0
                },{
                    "id":2,
                    "name":"王五",
                    "rank"：1
                },
                ...
            ]
        },
        ...
    ]
}
```

##### 线路详情

| key | value |
| --- | ----- |
| url | http://domain/line/info |
| method | get |
| cookie | uid,token |
| get params | id＝xxx|

######返回结果：
```
{
    "code": 0,
    "msg": "",
    "total":23,
    "data": {
        "id": 1,
        "area": "伦教",
        "province": 1,
        "city": 123,
        "des": "xxxx",
        "time": 1425266161,
        "member":[
            {
                "id":1,
                "name":"张三",
                "rank"：0
            },{
                "id":2,
                "name":"王五",
                "rank"：1
            },
            ...
        ]
    }
}
```

##### 新增、修改线路
| key | value |
| --- | ----- |
| url | http://domain/line/set |
| method | post |
| cookie | uid,token |
| post params | id:分类索引(无此字段或字段值为空表示新增线路)<br/>area:线路名称<br/>province:省份编码<br/>city:城市编码<br/>des:线路描述<br/>member:1,2 `(成员uid，多个uid用“,”分隔)`|

######返回结果：
```
{"code":0,"msg":"xxx"}
```

##### 修改线路属性
| key | value |
| --- | ----- |
| url | http://domain/line/update |
| method | post |
| cookie | uid,token |
| post params | <div style="color:red;font-size:12px;">除id外作何属性都可以修改，可以支持同时修改多个属性</div>area=xxx<br/>member:1,2,...<br/>...|

######返回结果：
```
{
    "code": 0,
    "msg": "xxx",
    "data": {
        "id": 1,
        "area": "伦教",
        "province": 1,
        "city": 123,
        "des": "xxxx",
        "time": 1425266161,
        "member":[
            {
                "id":1,
                "name":"张三",
                "rank"：0
            },{
                "id":2,
                "name":"王五",
                "rank"：1
            },
            ...
        ]
    }
}
```
