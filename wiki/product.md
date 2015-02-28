---

####  商品分类

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

---

商品相关

---
##### 商品列表
| key | value |
| --- | ----- |
| url | http://domain/product/list |
| method | get |
| cookie | uid,token |
| get params |index=0&limit=10<span style="color:red">&category=xx&subcategory=&id=xx&name=xx</span>(红色的参数为可选参数)<br/><span style="color:green">一级分类或二级分类不限时，则category或subcategory为0<br/>id和name则为模糊匹配</span>|

######返回结果：
```
{
    "code": 0,
    "msg": "xxx",
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

##### 新增、修改商品
| key | value |
| --- | ----- |
| url | http://domain/product/set |
| method | post |
| cookie | uid,token |
| post params | id:商品索引(没有此字段或者此字段值为空表示新增)<br/>name:商品名称<br/>category:1_3,2_5(商品分类，多组分类用“,”分隔，每组分类级数间用“_”分隔)<br/>sell_area:12_23_45,13_34_78(多个销售地区间用“,”分隔，每个销售地区间的省市区编号间用“_”分隔)<br/>sell_price:商品售价<br/>cost_price:商品进价<br/>score:商品积分<br/>stock:库存<br/>weight:商品重量<br/>is_selling:上架状态(0-不上架，1-上架)<br/>keywords:关键词，多个关键词用空格分隔<br/>pic:上传图片<br/>des:商品描述|

######返回结果：
```
{"code":0,"msg":"xxx"}
```

##### 获取商品详情
| key | value |
| --- | ----- |
| url | http://domain/product/info |
| method | get |
| cookie | uid,token |
| post params | id:商品索引|

######返回结果：
```
{
    "code": 0,
    "msg": "xxx",
    "data": {
        "id": "JS000030",
        "name": "加多宝凉茶",
        "category": "1_3,2_5",
        "sell_area": "12_23_45<13_34_78",
        "sell_price": 17.8,
        "cost_price": 12,
        "score": 40,
        "stock": 34,
        "weight": "500g",
        "is_selling": 1,
        "pic":"http://xxxxx"
    }
}
```

##### 修改商品属性
| key | value |
| --- | ----- |
| url | http://domain/product/update |
| method | post |
| cookie | uid,token |
| post params | <div style="color:red;font-size:12px;">除id外作何属性都可以修改，可以支持同时修改多个属性</div>name=xxx<br/>is_selling:0<br/>...|

######返回结果：
```
{
    "code": 0,
    "msg": "xxx",
    "data": {
        "id": "JS000030",
        "name": "加多宝凉茶",
        "category": "1_3,2_5",
        "sell_area": "12_23_45<13_34_78",
        "sell_price": 17.8,
        "cost_price": 12,
        "score": 40,
        "stock": 34,
        "weight": "500g",
        "is_selling": 1
    }
}
```
