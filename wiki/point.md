---

####  售货点相关

---
##### 售货点列表

| key | value |
| --- | ----- |
| url | http://domain/point/list |
| method | get |
| cookie | uid,token |
| get params | search:搜索条件,示例{"id":"10\*","type":0,"address":"\*深圳市\*"}<br/>order:排序条件|

######返回结果：
```
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "id": 10345,//售货点ID
            "type":0,//售货点类型
            "lbs":[xval,yval],//地理GPS经纬度信息
            'address':"xxxxxx"//地理描述
        }
        ,
        ...
    ]
}
```
######请求示例：
```
http://domain/point/list?search=%7B%22id%22%3A%2210*%22%2C%22type%22%3A0%2C%22address%22%3A%22*%E6%B7%B1%E5%9C%B3%E5%B8%82*%22%7D&order=0_type_id
这里的order值的第一位0，表示升序，如果是1,表示降序
第一位后面的值为组合字段排序,可以达到先分组后排序的效果
```

##### 设置售货点信息
| key | value |
| --- | ----- |
| url | http://domain/point/set |
| method | post |
| cookie | uid,token |
| post params | id=xxxx (如果没有post这个字段，或者字段值为空，表示添加，否则表示修改)<br/>type=xx(unsigned short int类型值,0-售货机,1-便利店，2-其它)<br/>lbs=1234.45678,2345.2390<br/>address:"广东省深圳市xxxxx"|

######返回结果：
```
{"code":0,"msg":"xxx"}
```

##### 获取售货点信息
| key | value |
| --- | ----- |
| url | http://domain/point/get |
| method | get |
| cookie | uid,token |
| get params | id=xxxx|

######返回结果：
```
{
    "code": 0,
    "msg": "xxx",
    "data": {
        "id": "xxxx",
        "type": 0,
        "address": "xxxx",
        "lbs": "xxxxx"
    }
}
```

##### 删除售货点
| key | value |
| --- | ----- |
| url | http://domain/point/delete |
| method | post |
| cookie | uid,token |
| get params | id=xxxx|

######返回结果：
```
{
    "code": 0,
    "msg": "xxx"
}
```