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
| post params | id:分类索引(无此字段或字段值为空表示新增分类)<br/>name:分类名称<br/>index:排序<br/>pid:父级分类的id，无父级填0<br/>visible:是否显示,0隐藏,1显示|

######返回结果：
```
{"code":0,"msg":"xxx"}
```












##### 新增、修改商品
| key | value |
| --- | ----- |
| url | http://domain/product/set |
| method | post |
| cookie | uid,token |
| post params | name:商品名称<br/>categorys:1_3,2_5(商品分类，多组分类用“,”分隔，每组分类级数间用“_”分隔)<br/>sellarea:str1(销售区域)|

######返回结果：
```
{"code":0,"msg":"xxx"}
```
