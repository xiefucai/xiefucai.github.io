---

####  售货点相关

---
##### 售货点列表

| key | value |
| --- | ----- |
| url | http://domain/point/list |
| method | get |
| cookie | uid,token |
| get params | index=0&limit=10<span style="color:red">&line_id=xxxx&id=xxx&name=xxxx&lbs=xxx,yyy&order=0_type_id</span><br/>order:排序条件(如：0_type_id，这里的order值的第一位0，表示升序，如果是1,表示降序，第一位后面的值为组合字段排序,可以达到先分组后排序的效果)|

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
            "address":"xxxxxx",//地理描述
            "line":{
                "id":xxx,
                "province":xxx,
                "city":xxxx,
                "area":"xxxx",
                "des":"xxxx"
            }
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
| post params | id=xxxx (如果没有post这个字段，或者字段值为空，表示添加，否则表示修改)<br/>type=xx(unsigned short int类型值,0-售货机,1-便利店，2-其它)<br/>lbs=1234.45678,2345.2390<br/>address:"广东省深圳市xxxxx"<br/>line:xxx(线路id)<br/>product:id1,id2,id3,...|

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
            "id": 10345,//售货点ID
            "type":0,//售货点类型
            "lbs":[xval,yval],//地理GPS经纬度信息
            "address":"xxxxxx",//地理描述
            "line":{
                "id":xxx,
                "province":xxx,
                "city":xxxx,
                "area":"xxxx",
                "des":"xxxx"
            }
        }
}
```

##### 获取售货点商品
| key | value |
| --- | ----- |
| url | http://domain/point/product |
| method | get |
| cookie | uid,token |
| get params | id=xxxx<br/>index=xxx<br/>limit=20|

######返回结果：
```
{
    "code": 0,
    "msg": "xxx",
    "total": 100,
    "data": [
        {
            "id": "JS000030",
            "name": "加多宝凉茶",
            "category": "1_3,2_5",
            "sell_area": "12_23_45,13_34_78",
            "sell_price": 17.8,
            "cost_price": 12,
            "score": 40,
            "stock": 34,
            "weight": "500g",
            "is_selling": 1,
            "pic":"http://xxxxx"
        },
        {
            "id": "JS000030",
            "name": "加多宝凉茶",
            "category": "1_3,2_5",
            "sell_area": "12_23_45,13_34_78",
            "sell_price": 17.8,
            "cost_price": 12,
            "score": 40,
            "stock": 34,
            "weight": "500g",
            "is_selling": 1,
            "pic":"http://xxxxx"
        },
        ...
    ]
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
