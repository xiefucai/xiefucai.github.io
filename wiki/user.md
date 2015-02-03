### http协议文档

说明：

1. 接口为http get或post方式；
2. 所有需要登录的接口都需要带uid和token，用于登录态验证
3. 所有的请求不管是get参数值还是post参数值，后台都要进行url decode，才能使用。
4. 返回结果为json格式，具体字段及含义见后；
5. 如果http的url中带有t或者其它在协义中未定义的参数，后台请忽略之，不用做特殊处理。

---
#### 后台如何支持前端跨域访问本协议
```此处只支持根域同域的弱跨域，既api.aaa.com访问www.aaa.com这种类型```

* 针对get类型请求，后台需要将返回的json数据改为如下格式
```callback({"code":0,"msg":"","data":{"state":0,"msg":""})```

此处的callback值来自于url参数中的callback参数值，如
```http://domain/user/list?a=1&b=2&callback=common.api.onGetUserInfo```

返回的jsonp数据为

```common.api.onGetUserInfo({"code":0,"msg":"","data":{...}})```

* 针对post类型请求，后台需要将返回的json数据改为如下格式

<pre>`<html>
    <head><title>0</title></head>
    <script>
        document.domain=(/\w+\.\w+$/.exec(location.hostname))[0];
        frameElement.callback({"code":0,"msg":"","data":{"state":0,"msg":""});
    </script>
</html>`</pre>
这里的`callback`是固定的，不需要根据参数中的callback参数进行改变



---

#### 用户相关

---

##### 登录

| key | value |
| --- | ----- |
| url | http://domain/user/login |
| method | post |
| cookie | 无 |
| post params | user=xxxx<br/>pasw=md5(md5(paswstr)) |

######返回结果：
* 登录成功返回

``` 
{"code":0,"msg":"","data":{"state":0,"msg":""}
```
返回的http头部cookie需要协带用户信息uid、token、type,用登录登录成功后，请求的所有协议后台都需要校验uid和token是否对应。

此处的state表示当前用户状态 0:正常 1:审核中 2:审核拒绝 3:帐户合同过期

* 登录失败返回

```
{"code":错误码,"msg":"失败原因"}
```
######测试
<iframe name="post_frame_login" id="post_frame_login" width="100%" height="100"></iframe><form method="post" action="http://58.61.39.245:8000/user/login" target="post_frame_login"><ul><li><label>用户名：</label><input type="text" name="user"/></li><li><label>密码：</label><input type="password" name="pasw"/></li><li><input type="submit" value="点击登录"/></li></ul></form>

##### 加盟申请

| key | value |
| --- | ----- |
| url | http://domain/user/reg |
| method | post |
| cookie | 无 |
| post params | user:登录用户名<br/>pasw:用户输入的登录密码进行两次md5加密后的字符串<br/>type:商家类型(0:售货机卖家 1:便利店卖家 2:其它)|

######测试

<iframe name="post_frame_reg" id="post_frame_reg" width="100%" height="100"></iframe><form method="post" action="http://58.61.39.245:8000/user/reg" target="post_frame_reg"><ul><li><label>用户名：</label><input type="text" name="user"/></li><li><label>密码：</label><input type="password" name="pasw"/></li><li><input type="submit" value="点击注册"/></li></ul></form>
######返回结果：
* 登录成功返回

```
{"code":0,"msg":"xxx"}
```

返回的http头部cookie需要协带用户信息uid、token、type,用登录登录成功后，请求的所有协议后台都需要校验uid和token是否对应。

* 登录失败返回

```
{"code":错误码,"msg":"失败原因"}
```


##### 获取用户资料
| key | value |
| --- | ----- |
| url | http://domain/user/info |
| method | get |
| cookie | uid,token |

######返回结果：
```
{
    "code": 0,
    "msg": "",
    "data": {
        "nick": "xxx",
        "logo": "http://xxxx.png",
        "legal_person": "张三",//法人
        "tax_login_certificate":"http://xxxx.jpg",//税务登记证书
        "email":"xxxx@xxx.com",//企业邮箱
        "address": "商家地址",
        "tel": "0755-xxxxxxxx",
        "website": "http://www.xxxx.com/",
        "weixin": "xxxx",
        "qq": "xxxxx",
        "pay": {
            "bank": "xxxxxxxxxxx",
            "alipay": "xxxxxxxxx",
            "tenpay": "xxxxxxx",
            "default": "slippery"//默认的支付方式
        },
        "contact":{"name":"王五","tel":"xxxx"}
    }
}
```
##### 修改资料
| key | value |
| --- | ----- |
| url | http://domain/user/modify |
| method | post |
| cookie | uid,token |
| post params | nick:商家名称`(必填)`<br/>logo:商家的logo`(此处可以让用户上传图片)`<br/>legal_person:法人<br/>tax_login_certificate:税务登记证书(http图片地址)<br/>email:企业邮箱<br/>address:商家地址<br/>tel:联系方式<br/>website:网站主页<br/>weixin:微信公众号<br/>qq:qq号码<br/>//设置支付帐号信息，json格式字符串<br/>pay:"xxxxxx"<br/>//企业联系人信息<br/>contact:"{\\"name\\":\\"王五\\",{\\"tel\\":\\"135xxxxxxx\\"}}"|

######返回结果：
```
{
    "code": 0,
    "msg": ""
 }```

##### 用户列表
`本接口需要校验登录用户权限，只要管理员才能管理访问此接口。`

| key | value |
| --- | ----- |
| url | http://domain/user/list |
| method | get |
| cookie | uid,token |
| post params | user:登录用户名<br/>pasw:用户输入的登录密码进行两次md5加密后的字符串<br/>type:商家类型(0:售货机卖家 1:便利店卖家 2:其它)|

######返回结果：
* 成功返回 

```
{
    "code": 0,
    "msg": "",
    "data": [
        {
            "uid": 10345,
            "name": "admin",
            "nick": "便捷神"
            ...
        }
        ,
        ...
    ]
}
```

返回的http头部cookie需要协带用户信息uid、token、type,用登录登录成功后，请求的所有协议后台都需要校验uid和token是否对应。

* 登录失败返回

```
{"code":错误码,"msg":"失败原因"}
```