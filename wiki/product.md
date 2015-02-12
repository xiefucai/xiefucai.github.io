---

####  商品管理

---
##### 分类列表

| key | value |
| --- | ----- |
| url | http://domain/product_category/list |
| method | get |
| cookie | uid,token |
| get params | index=0&limit=10<br/><small>返回从第index条开始数limit条记录,用于分页</small>|

######返回结果：
```
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "id": 1,
            "name": "进口零食",
            "index": 0,
            "pid": 0,
            "visible": 0
        },
        {
            "id": 2,
            "name": "进口零食",
            "index": 1,
            "pid": 0,
            "visible": 1
        },
        {
            "id": 101,
            "name": "饼干",
            "index": 1,
            "pid": 1,
            "visible": 1
        },
        {
            "id": 102,
            "name": "进口零食",
            "index": 2,
            "pid": 2,
            "visible": 1
        }
    ]
}
```

##### 新增、修改分类
| key | value |
| --- | ----- |
| url | http://domain/product_category/set |
| method | post |
| cookie | uid,token |
| post params | name:商品名称<br/>categorys:1_3,2_5(商品分类，多组分类用“,”分隔，每组分类级数间用“_”分隔)<br/>sellarea:str1(销售区域)|

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