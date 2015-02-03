---

####  售货点相关

---
##### 售货点列表

| key | value |
| --- | ----- |
| url | http://domain/point/list |
| method | get |
| cookie | uid,token |
| post params | search:搜索条件<br/>order:排序条件|

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

##### 设置售货点信息
| key | value |
| --- | ----- |
| url | http://domain/point/set |
| method | post |
| cookie | uid,token |
| get params | id=xxxx (如果没有post这个字段，或者字段值为空，表示添加，否则表示修改)<br/>type=xx(unsigned short int类型值,0-售货机,1-便利店，2-其它)<br/>lbs=1234.45678,2345.2390<br/>address:"广东省深圳市xxxxx"|

######返回结果：
```
{"code":0,"msg":"xxx"}
```