---

####  部门管理

---
##### 部门列表

| key | value |
| --- | ----- |
| url | http://domain/department/list |
| method | get |
| cookie | uid,token |
| get params | index=0&limit=10|

######返回结果：
```
{
    "code": 0,
    "msg": "",
    "total":23,
    "data": [
        {
            "id": 1,
            "name": "总办"
        },
        {
            "id": 2,
            "name": "事场部"
        },
        ...
    ]
}
```

##### 添加、修改部门

| key | value |
| --- | ----- |
| url | http://domain/department/set |
| method | post |
| cookie | uid,token |
| post params | id:xxx(索引,没有此字段或空值表示新增)<br/>name:xxxx(部门名称)|

######返回结果：
```
{
    "code": 0,
    "msg": ""
}
```

##### 删除部门

| key | value |
| --- | ----- |
| url | http://domain/department/delete |
| method | post |
| cookie | uid,token |
| post params | id:xxx|

######返回结果：
```
{
    "code": 0,
    "msg": ""
}
```

---

####  职级管理

---

##### 职级列表

| key | value |
| --- | ----- |
| url | http://domain/member_rank/list |
| method | get |
| cookie | uid,token |
| get params | index=0&limit=10|

######返回结果：
```
{
    "code": 0,
    "msg": "",
    "total":23,
    "data": [
        {
            "id": 1,
            "name": "普通员工"
        },
        {
            "id": 2,
            "name": "组长"
        },
        ...
    ]
}
```

##### 添加、修改职级

| key | value |
| --- | ----- |
| url | http://domain/member_rank/set |
| method | post |
| cookie | uid,token |
| post params | id:xxx(索引,没有此字段或空值表示新增)<br/>name:xxxx(职级名称)|

######返回结果：
```
{
    "code": 0,
    "msg": ""
}
```

##### 删除职级

| key | value |
| --- | ----- |
| url | http://domain/member_rank/delete |
| method | post |
| cookie | uid,token |
| post params | id:xxx|

######返回结果：
```
{
    "code": 0,
    "msg": ""
}
```

---

####  成员管理

---

##### 成员列表
| key | value |
| --- | ----- |
| url | http://domain/member/list |
| method | get |
| cookie | uid,token |
| post params | index=0&limit=10|

######返回结果：
```
{
    "code": 0,
    "msg": "xxx",
    "total": 30,
    "data": [
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
```

##### 新增、修改成员
| key | value |
| --- | ----- |
| url | http://domain/member/set |
| method | post |
| cookie | uid,token |
| post params | id:分类索引(无此字段或字段值为空表示新增线路)<br/>name:姓名<br/>rank:1(职级)|

######返回结果：
```
{"code":0,"msg":"xxx"}
```

##### 删除成员

| key | value |
| --- | ----- |
| url | http://domain/member/delete |
| method | post |
| cookie | uid,token |
| post params | id:xxx|

######返回结果：
```
{"code":0,"msg":"xxx"}
```
