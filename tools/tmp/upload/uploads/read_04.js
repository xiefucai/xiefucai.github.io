var common = {
	"config":{
		"init":function(callback){
			var s = location.search.slice(1),
				p = {},
				config=[],
				f1 = function(arr){
					var g = +arr[0],o={};
					o.TitleModule = +arr[1];
					o.PubModule = +arr[2];
					o.TabModule = +arr[3];
					o.TimelineModule = +arr[4];
					return o;
				},
				f2 = function(arr){
					var o = {"position":+arr.shift(0),"InsertFunction":arr},
						a = decodeURIComponent(p["sendbox"]).split("|");
					o.SourceUrl = decodeURIComponent(a[0]);
					o.InitialContent = decodeURIComponent(a[1]);
					if (p["relayid"]){
						o.RelayId = common.lib.string.encodeHtml(p["relayid"]);
					}
					if (p["replyid"]){
						o.ReplyId = common.lib.string.encodeHtml(p["replyid"]);
					}
					return o;
				},
				f3 = function(config,configStr){
					var getTimeline = function(data){
						var arr = data.split(/[\n\r]+/g),o = [];
						for(var i=0,k=arr.length;i<k;i++){
							var arr2 = arr[i] && arr[i].split(/\t+/g);
							if (!arr2){
								continue;
							}
							o.push({
								"Name":arr2[0],
								"ConditionType":+arr2[1],
								"Condition":decodeURIComponent(arr2[2]).replace(new RegExp("[\"']","gi"),"").split("\t"),
								"SortType":+arr2[3],
								"Famous":+arr2[4],
								"ContentType":+arr2[5],
								"MessageType":arr2[6]|0,
								"ShowCrest":arr2[7]|0
							});
						}
						if(data === "0"){
							config["TimelineModuleConfigure"] = [];
						}else{
							config["TimelineModuleConfigure"] = o;
						};
						window.config = config;
						callback(config);
					},
					getMessageOnIE6 = function(){
						if (window.name){
							getTimeline(window.name);
							window.name = "";
						}else{
							setTimeout(getMessageOnIE6,100);
						}
					};
					if (configStr){
						getTimeline(configStr);
						return;
					}
					if (window.postMessage){
						if (window.addEventListener){
							window.addEventListener("message",function(event){
								getTimeline(event.data);
							},false);
						}else{
							window.attachEvent("onmessage",function(event){
								getTimeline(event.data);
							});
						}
					}else{
						getMessageOnIE6();
					}
				};
				s && s.replace(/([^=&]+)=([^&=]+)?/gi,function(){
					var args = arguments;
					if (args[1]!==undefined && args[2]!==undefined){
						p[args[1]] = decodeURIComponent(args[2]);
					}
				});
				if (p["config"] === undefined){
					location.href = 'http://dev.t.qq.com/websites/read/';
					return;
				}
				config = (function(cs){
					var o = {};
					o.appkey = cs[0];
					o.theme = +cs[1];
					o.nobg = cs[2].split("");
					o.ModuleConfigure = f1(cs[3].split(""));
					o.PubModuleConfigure = f2(cs[8].split(""));
					o.TimelineDetail = {"PageStyle":+cs[4],"PicStyle":+cs[5],"HeadStyle":+cs[6],"TwitterNum":+cs[7]};
					o.LoginStyle = cs[9]|0;
					return o;
				})(p["config"].split("-"));
				config["TitleModuleConfigure"] = {"OfficialAccount":p["account"]};
				f3(config,p["cs"]);
				//return config;
		},
		"url":{
			"root":"http://read.v.t.qq.com/"
		},
		"appid":"801351684",
		"get":function(path){
			var conf = window.config,
				path = path.split(".");
			while (conf !== undefined && path.length){
				conf = conf[path.shift()];
			}
			return conf;
		},
		"getSingleId":function(){
			if (common.config.singeId !== undefined){
				return ++common.config.singeId;
			}else{
				common.config.singeId = 0;
				return 0;
			}
		},
		"getBodySize":function(i){
			if (i){
				return document.documentElement.clientWidth || document.body.clientWidth;
			}else{
				return document.documentElement.clientHeight || document.body.clientHeight;
			}
		},
		"emos":"惊讶,撇嘴,色,发呆,得意,流泪,害羞,闭嘴,睡,大哭,尴尬,发怒,调皮,呲牙,微笑,难过,酷,非典,抓狂,吐,偷笑,可爱,白眼,傲慢,饥饿,困,惊恐,流汗,憨笑,大兵,奋斗,咒骂,疑问,嘘...,晕,折磨,衰,骷髅,敲打,再见,闪人,发抖,爱情,跳跳,找,美眉,猪头,猫咪,小狗,拥抱,钱,灯泡,酒杯,蛋糕,闪电,炸弹,刀,足球,音乐,便便,咖啡,饭,药丸,玫瑰,凋谢,吻,爱心,心碎,会议,礼物,电话,时间,邮件,电视,太阳,月亮,强,弱,握手,胜利,多多,美女,汉良,毛毛,Q仔,飞吻,怄火,白酒,汽水,西瓜,多云,转晴,雪人,星星,女人,男人,冷汗,擦汗,抠鼻,鼓掌,糗大了,坏笑,左哼哼,右哼哼,哈欠,鄙视,委屈,快哭了,阴险,亲亲,吓,可怜,菜刀,啤酒,篮球,乒乓,示爱,瓢虫,抱拳,勾引,拳头,差劲,爱你,NO,OK,转圈,磕头,回头,跳绳,挥手,激动,街舞,献吻,左太极,右太极,黑丝带,祈福,黄丝带,百合花,0,0,0,0,0,0,0,0,0,0,0,喜糖,红包,月饼,酒,团圆饼,玉兔,蛋黄月饼,灯笼,红旗,日历,七休哥,万圣节,给力,围观,围脖,雪花,手套,袜子,0,圣诞帽,圣诞树,圣诞老人,0,0,鞭炮,0,0,0,捶地大笑,0,2012,浮云,威武,神马,压力山大,0,安慰,扮鬼脸,加油,敬礼,狂汗,无语,潜水,叹气,生病,石化,伤不起,亲爱的".split(","),
		"template":{
			"weibo":[
				'<li class="weibo_li">',
				'	<%=common.user.getUserHead(data)%>',
				'	<div class="weibo_info">',
				'		<a href="http://t.qq.com/<%=data.name%>?pref=readwall" target="_blank" class="weibo_nick"><%=data.nick%></a>',
				'		<%=getVipIconStr(data.isvip)%>',
				'		<%=getTypeStr(data.type)%>',
				'		<%=getWeiboText(data.status,data.text)%>',
				'		<%=getSourceStr(data.source)%>',
				'		<%=getImgs(data.image,data.id)%>',
				'		<%=getVideo(data.video,data.id)%>',
				'		<div class="weibo_time">',
				'			<a href="http://t.qq.com/p/t/<%=data.id%>?pref=readwall" target="_blank" class="c_gray"><%=getTime(data.timestamp)%></a>',
				'			<span class="weibo_time_right">',
				'				<a href="javascript:;" class="relay" data-action="showRelay" twitterId="<%=data.id%>" text="<%=getRelayText(data)%>">转播</a>',
				' 					| ',
				'				<a href="javascript:;" class="reply" data-action="showReply" twitterId="<%=data.id%>" text="<%=getRelayText(data)%>">评论</a>',
				'			</span>',
				'		</div>',
				'	</div>',
				'<%if (data.isTop){%><div class="weibo_mestype"><span class="weibo_mestype_icon1"></span><span class="c_gray">置顶</span></div><%}%>',
				'</li>'
				].join("\n"),
			"weibo_source":[
				'<div class="weibo_source">',
				'	<a href="http://t.qq.com/<%=data.name%>?pref=readwall" target="_blank" class="weibo_nick"><%=data.nick %></a>',
				'	<%=getVipIconStr(data.isvip) %><%=getTypeStr(data.type)%><%=getWeiboText(data.status,data.text) %>',
				'	<%=getImgs(data.image,data.id)%>',
				'	<%=getVideo(data.video,data.id)%>',
				'	<div class="weibo_time"><a href="http://t.qq.com/p/t/<%=data.id%>?pref=readwall" target="_blank" class="c_gray"><%=getTime(data.timestamp)%></a></div>',
				'</div>'
				].join("\n"),
			"commentBox":[
				'<div class="comment-box">',
				'<span class="triangle"></span>',
				'<span class="triangle-border"></span>',
				'<a href="javascript:;" class="close" data-action="hideParent"></a>',
				'<div class="comment-tit c_gray"></div>',
				'<form class="comment-form" method="post" target="uploadFrame">',
				'<div class="sendbox-tip none"></div>',
				'<div class="comment-form-content">',
				'	<textarea class="content"></textarea>',
				'	<textarea name="content" class="none"></textarea>',
				'</div>',
				'	<input name="reid" type="hidden"/>',
				'	<input name="appid" type="hidden"/>',
				'	<input name="seqid" type="hidden"/>',
				'	<input name="tokensig" type="hidden"/>',
				'	<div class="sendbox-toolbar">',
				'		<div class="sendbox-toolbar-inner" id ="toolbar">',
				'			<div class="sendbox-toolbar-mention" id="toolbar_mention">',
				'				<a class="sendbox-toolbar-mention-icon" href="javascript:void(0);" title="@朋友帐号就可以提到他" data-action="showMention" hidefocus>@朋友</a>',
				'				<label class="sendbox-toolbar-text c_gray" data-action="showMention">朋友</label>',
				'			</div>',
				'			<div class="sendbox-toolbar-emotion" id="toolbar_emotion">',
				'				<a class="sendbox-toolbar-emotion-icon" href="javascript:void(0);" title="表情" data-action="showEmotion" hidefocus>表情</a>',
				'				<label class="sendbox-toolbar-text c_gray" data-action="showEmotion">表情</label>',
				'			</div>',
				'		</div>',
				'		<div class="sendbox-sender" id="postBot">',
				'			<span class="sendbox-msg c_gray f16" id="eMsg">140</span>',
				'			<input class="sendbox-submit" type="submit" name="submit"/>',
				'		</div>',
				'	</div> ',
				'</form>',
				'</div>'
			].join("\n"),
			"picUploader":[
				'<div class="uploader-box none" id="picUploader">',
				'	<span class="triangle"></span>',
				'	<span class="triangle-border"></span>',
				'	<a href="javascript:;" class="close" data-action="hideParent"></a>',
				'	<div class="switcher">',
				'		<a href="javascript:;" class="switcher-tab switcher-tab-active">本地上传</a><a href="javascript:;" class="switcher-tab">网络图片</a>',
				'	</div>',
				'	<div class="uploader-info">',
				'		<div class="uploader-preview"></div>',
				'		<div class="uploader-content">',
				'			<form class="uploader-local" enctype="multipart/form-data" method="post" target="uploadFrame">',
				'				<a href="javascript:;" class="uploader-selector"><input type="file" name="pic"/></a> <a href="javascript:;" class="uploader-del none">删除</a>',
				'				<div class="c_gray uploader-fileinfo-local">请选择图片，文件大小不得超过4M</div>',
				'				<input type="hidden" name="tokensig"/>',
				'			</form>',
				'			<div class="uploader-web none">',
				'				<input type="text" class="uploader-web-input"/> <input type="button" value="确定" class="uploader-web-getter"/>',
				'				<div class="c_gray uploader-fileinfo-web"></div>',
				'			</div>',
				'		</div>',
				'	</div>',
				'</div>'
			].join("\n"),
			"timelineHead":[
				'<div class="timeline_head_simple">',
				'	<label class="timeline_head_simple_1 c_gray">当前推荐用户</label>',
				'	<a class="timeline_head_simple_2 c_gray" href="javascript:;" data-action="toggleTimelineHead" hidefocus>查看<span class="timeline-next-icon"></span></a>',
				'	<div class="timeline_head_simple_3" data-action="toggleTimelineHead">',
				'	<% for ( var i = 0; i < info.length; i++ ) { %>',
				'		<a href="http://t.qq.com/<%=info[i].name%>" target="_blank" title="<%=info[i].nick%>(<%=info[i].name%>)">',
				'			<img src="<%=common.user.getHead(info[i].head,20)%>"/>',
				'		</a>',
				'	<% } %>',
				'	</div>',
				'</div>',
				'<div class="timeline_head_details none">',
				'	<div class="timeline_head_details1">',
				'		<a href="javascript:;" class="timeline_head_details1a c_gray" data-action="toggleTimelineHead" hidefocus>收起<span class="timeline_head_details1_icon">＾</span></a><label class="c_gray timeline_head_details1b" data-action="toggleTimelineHead">当前推荐用户</label>',
				'	</div>',
				'	<div class="timeline_head_details2">',
				'		<ul class="userlist">',
				'		<% for ( var i = 0; i < info.length; i++ ) { %>',
				'			<li class="userlist_li" title="<%=info[i].nick%>(<%=info[i].name%>)">',
				'				<a href="http://t.qq.com/<%=info[i].name%>" class="userlist_li_head" target="_blank"><img src="<%=common.user.getHead(info[i].head,50)%>" class="userlist_li_img"/></a>',
				'				<div class="userlist_li_info">',
				'					<a href="http://t.qq.com/<%=info[i].name%>" class="weibo_nick" target="_blank"><%=info[i].nick%></a>',
				'					<%=common.user.getVipIconStr(info[i].isvip) %>',
				'				</div>',
				'				<div class="userlist_li_action">',
				'				<%if (info[i].isidol){ %>',
				'				<a href="javascript:;" class="follow_btn followbtn_gray" data-action="doFollow" title="取消收听" data-name="<%=info[i].name%>" data-status="1" ismyidol="<%=+info[i].isidol%>" id="followbtn_<%=common.config.getSingleId()%>"></a>',
				'				<%} else {%>',
				'				<a href="javascript:;" class="follow_btn" title="收听" data-action="doFollow" data-name="<%=info[i].name%>" data-status="0" ismyidol="<%=+info[i].isidol%>" id="followbtn_<%=common.config.getSingleId()%>"></a>',
				'				<% } %>',
				'				</div>	',
				'			</li>',
				'		<% } %>',
				'		<div class="userlist_follow"><a href="javascript:;" class="multifollow<% if (!(info.length > 1 || hasFollowAll)) { %> none<% } %>" data-action="doFollow" data-name="<%=names%>" id="followbtn_<%=common.config.getSingleId()%>">批量收听</a><div class="c_gray none">成功收听所选帐号！</div></div>',
				'		</ul>',
				'	</div>',
				'</div>'
			].join("\n")	
		},
		"isLowIe":!('textContent' in document.body)
	},
	"lib":{
		"string":{
			"encodeHtml":function(str){
				return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\x27/g, '&#039;').replace(/[\x22]/g, '&quot;');
			}
		}	
	},
	"cookie":{
		"get":function(name){
			var r = (new RegExp("\\b"+name+"\\b=([^\\s;]+);?","gi")).exec(document.cookie);
			return r && r[1] && unescape(r[1]);
		},
		"set":function(name,value){
			var Days = 30, exp  = new Date();
			if (!value){
				Days = -1;
				value = "111";
			}
			exp.setTime(exp.getTime() + Days*24*60*60*1000);
			document.cookie = name + "="+ escape (value) + "; expires=" + exp.toGMTString()+"; path=/;domain=qq.com; secure";
		}
	},
	"user":{
		"init":function(){
			var o = $(".sendbox-user"),
				body = $("body")
				;
			body.bind("mouseover",function(event){
				var target = event.target;
				if (!$.contains(o[0],target) && o[0] !== target){
					o.find(".sendbox-user-info").addClass("none");
				}else{
					o.find(".sendbox-user-info").removeClass("none");
				}
			});
			common.user.getLoginInfo();
		},
		"list":{},
		"info":{},
		"getUserState":function(){
			//返回值 0 - 未登录 1 - 未开通微博 2 - 已登录且已开通微博
			if (common.cookie.get("p_uin") || common.cookie.get("uin")){
				if (common.user.info.name){
					return 2;
				}
				return 1;
			}
			return 0;
		},
		"getLoginInfo":function(action){
			var seqid = +new Date();
			if (!((common.cookie.get("p_uin") && common.cookie.get("p_skey")) || (common.cookie.get("uin") && common.cookie.get("skey")))){
				common.user.info = {};
				common.user.setLoginInfo({});
				return;
			}
			$.ajax({
				"url":common.config.url.root+"user_info.do",
				"data":{"appid":window.config.appkey,"seqid":seqid, "tokensig":common.getToken()},
				"dataType":"json",
				"type":"post",
				"success":function(d){
					var data = d && d.data;
					if (data){
						if ((d.seqid === seqid) && data){
							common.user.setLoginInfo(data,action);
						}else if(d.seqid != seqid){
							common.user.setLoginInfo({});
						}else{
							common.user.setLoginInfo({});
						}
					}else{
						common.user.setLoginInfo({});
					}
				},
				"error":function(){
					common.user.setLoginInfo({});
				}
			});	
			common.opener && common.opener.close();
		},
		"setLoginInfo":function(u,p){
			var o = $(".sendbox-user"),
				a = [];
			if (u && u.name){
				a = [
					'<a href="http://t.qq.com/{name}?pref=readwall" class="sendbox-user-head" target="_blank">',
					'<img src="{head}" alt="{nick}" class="sendbox-user-img"/>',
					'</a>',
					'<div class="sendbox-user-info none">',
					'<span class="triangle"></span>',
					'<span class="triangle-border"></span>',
					'<div class="sendbox-user-name">',
					'<a href="http://t.qq.com/{name}?pref=readwall" class="follow_nick f14" title="{nick}" target="_blank">{nick}</a><span class="f12 c_gray">(@{name})</span>',
					u.isvip && '<span class="icon_vip"></span>' || '',
					'</div>',
					'<a href="javascript:;" class="c_login" data-action="doLoginOut">退出</a> | <a href="javascript:;" class="c_login" data-action="doLogin">换个帐号</a>',
					'</div>'
				].join("\n");
				u.head = common.user.getHead(u.head);
				a = a.replace(/\{(\w+)\}/g,function(){
					var name = arguments[1];
					if (u[name]){
						return u[name];
					}else{
						return "{"+name+"}";
					}
				});
				common.user.info = u;
				if (p && p["id"] && $("#"+p["id"]).size()){
					$("#"+p["id"]).trigger("click");
				}
			}else if(common.cookie.get("p_uin") || common.cookie.get("uin")){
				a = [
					'<span class="sendbox-user-head"></span>',
					'<div class="sendbox-user-info none">',
					'<span class="triangle"></span><span class="triangle-border"></span>',
					'<div class="sendbox-user-name">',
					'<span class="c_orange f14">请先开通腾讯微博！</span>',
					'</div>',
					'<a href="javascript:;" class="c_login" data-action="doLogin">换个帐号</a> | <a href="http://reg.t.qq.com/index.php?pref=readwall" class="c_login" target="_blank">开通微博帐号</a>',
					'</div>'
				].join("\n");
			}else{
				a = [
					'<span class="sendbox-user-head"></span>',
					'<div class="sendbox-user-info none">',
					'<span class="triangle"></span><span class="triangle-border"></span>',
					'<div class="sendbox-user-name">',
					'<span class="c_orange f14">您还没有登录</span>',
					'</div>',
					'<a href="javascript:;" class="c_login" data-action="doLogin">登录</a> | <a href="http://reg.t.qq.com/index.php?pref=readwall" class="c_login" target="_blank">开通微博帐号</a>',
					'</div>'
				].join("\n");
			}
			o.html(a);
		},
		"getHead":function(d,s){
			s = s || 50;
			if(!d || d === "http://app.qlogo.cn"){
				return 'http://mat1.gtimg.com/www/mb/images/head_'+s+'.jpg';	
			}else{
				return d+'/'+s;
			}
		},
		"getUserHead":function(data){
			var isShow = common.config.get("TimelineDetail.HeadStyle");
			if (isShow){
				return [
					'<div class="weibo_head">',
					'	<a href="http://t.qq.com/',data.name,'?pref=readwall" target="_blank" title="',data.nick,'" hidefocus="true">',
					'		<img src="',common.user.getHead(data.head),'" class="weibo_head_img" alt="',data.nick,'"/>',
					'	</a>',
					'</div>'].join("");
			}else{
				return '';
			}
		},
		"getVipIconStr":function(t) {
			if (t) {
				return '<img src="http://mat1.gtimg.com/app/vt/images/space.gif" align="absmiddle" class="icon_vip" />';
			} else {
				return '';
			}
		}
	},
	"dialog":{
		"init":function(){
			var body = $("body"),
				dialog = $('<div class="dialog none" id="dialog"><a href="javascript:;" class="close" data-action="hideParent"></a><div class="dialog-content"></div></div>').appendTo($('body'));
			body.bind("click",function(event){
				var target = event.target;
				if (!($.contains(dialog[0],target) || dialog[0] === target)){
					dialog.addClass("none");
				}
			});
		},
		"alert":function(str,elem){
			var dialog = $("#dialog"),
				offset = elem && elem.offset(),
				body = $("body"),
				p = {
					"left":"auto",
					"top":offset.top + elem.height()
				};
				dialog.find(".dialog-content").html(str);
				dialog.removeAttr("style").removeClass("none");
				if (elem){
					if (common.config.getBodySize(1) > offset.left + dialog.width()){
						p["left"] = offset.left;
					}else{
						p["left"] = offset.left + elem.width() - dialog.width();
					}
					dialog.css(p);
				}
				
				setTimeout(function(){
					dialog.removeClass("none");
				},10);
				return dialog;
		}
	},
	"titlebar":{
		"init":function(){
			var isShow = common.config.get("ModuleConfigure.TitleModule"),
				name = common.config.get("TitleModuleConfigure.OfficialAccount"),
				hasBg = +!(+(common.config.get("nobg")[1]||1)),
				seqid = +new Date(),
				header = $("#header"),
				initFollower = function(u){
					var str = '<a class="follow_nick" target="_blank" href="http://t.qq.com/'+u.name+'?pref=readwall" title="'+u.nick+'('+u.name+')">'+u.nick+'</a>';
					if (u){
						if (u.isvip){
							str += '<span class="icon_vip"></span>';
						}
						if (u.isidol){
							str += '<a href="javascript:;" class="follow_btn followbtn_gray" data-action="doFollow" title="取消收听" data-name="'+u.name+'" data-status="1" ismyidol="'+(+u.isidol)+'" id="followbtn_'+common.config.getSingleId()+'" title="'+u.nick+'('+u.name+')"></a>';
						}else{
							str += '<a href="javascript:;" class="follow_btn" title="收听" data-action="doFollow" data-name="'+u.name+'" data-status="0" ismyidol="'+(+u.isidol)+'" id="followbtn_'+common.config.getSingleId()+'" title="'+u.nick+'('+u.name+')"></a>';
						}
						$("#follow").html(str);
					}
				};
			if (isShow){
				header.removeClass("none");
				if (hasBg){
					header.addClass("header-bg");
				}
				if (name && /^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/.test(name)){
					$.ajax({
						"url":common.config.url.root+"user_infos.do",
						"data":{"appid":window.config.appkey,"names":name,"seqid":seqid, "tokensig" : common.getToken()},
						"dataType":"json",
						"type":"post",
						"success":function(d){
							var info = d && d.data && d.data.info;
								info = info && info[0];
							if (d.ret === 0){
								if ((d.seqid === seqid) && info){
									initFollower(info);	
								}else if(d.seqid != seqid){
								
								}else{
									
								}
							}	
						},
						"error":function(){
						
						}
					});	
				}else{
				}
			}
		},
		"follow":function(o){
			var userlist = $(".userlist"),
				multiWrapper = userlist.find(".userlist_follow")
				name = o.attr("data-name"),
				ismyidol = +o.attr("ismyidol"),
				url = common.config.url.root+["follow","unfollow"][ismyidol||0]+".do",
				title = ["收听","取消收听"],
				seqid = +(new Date()),
				selfName = common.user.info.name,
				showMsg = function(msg){
					common.dialog.alert(msg,o).removeClass("none").addClass("c_orange");
				};
			if (name === selfName){
				showMsg("不能"+title[ismyidol]+"自己！");
				return false;
			}
			name = name.replace(new RegExp("(,+)?\\b"+selfName+"\\b(,+)?"),",").replace(/^,+|,+$/g,"");
			$.ajax({
				"url":url,
				"type":"post",
				"dataType":"json",
				"data":{"name":name,"seqid":seqid, "tokensig" : common.getToken()},
				"success":function(d){
					var ret = d.ret,
						code = d.errcode;
					if (ret === 0 || (ret === 5 && (code === 80022 || code === 80103))){
						var unFollowed = +!ismyidol;
						if (o.hasClass("multifollow")){
							multiWrapper.find(".multifollow").addClass("none").siblings().removeClass("none");
							$(".timeline_head").find(".follow_btn").not(".followbtn_gray").not("[data-name='"+selfName+"']").each(function(){
								$(".follow_btn[data-name='"+$(this).attr("data-name")+"']").attr("title",title[1]).attr("ismyidol",1).addClass("followbtn_gray")
							});
						}else{
							if (!unFollowed && ($.contains(userlist[0],o[0]) || userlist.find(".follow_btn[data-name='"+name+"']").size())){
								multiWrapper.find(".multifollow").removeClass("none").siblings().addClass("none");
							}
							$(".follow_btn[data-name='"+name+"']").attr("title",title[unFollowed]).attr("ismyidol",unFollowed).toggleClass("followbtn_gray");
							alert("已"+title[+!unFollowed]+"微博帐号"+name);	
						}
						
						if (userlist.find(".follow_btn").not(".followbtn_gray").size() === 0){
							multiWrapper.find(".multifollow").addClass("none").siblings().removeClass("none");
							return;
						}
					}else if(ret === 3 && code === 3154){
						showMsg('登录态失效，请<a href="javascript:;" data-action="doLogin" data-target="1">重新登录</a>！');
					}else{
						showMsg(d.msg);
					}
				},
				"error":function(d){
					showMsg("网络连接失败！");
				}
			});
		}	
	},
	"sendBox":{
		"init":function(){
			var moduleConfig = common.config.get("ModuleConfigure"),
				pubModuleConfigure = common.config.get("PubModuleConfigure"),
				hasBg = +!(+(common.config.get("nobg")[2]||1)),
				isShow = moduleConfig.PubModule,
				pubModuleConfigure = config.PubModuleConfigure,
				content = $("#content"),
				mainForm = content[0].form,
				sendBoxWrapper = $(".sendbox-wrapper"),
				position = pubModuleConfigure.position;
				common.sendBox.toolbar.init();
				content.val(pubModuleConfigure.InitialContent);
				$(mainForm).submit(common.sendBox.submit)
						   .find("input[name='appid']").val(window.config.appkey);
				if (pubModuleConfigure.RelayId){
					$(mainForm).append($('<input type="hidden" name="reid" value="'+pubModuleConfigure.RelayId+'" data-type="relay"/>'));
					mainForm.submit.value = '转播';
				}else if(pubModuleConfigure.ReplyId){
					$(mainForm).append($('<input type="hidden" name="reid" value="'+pubModuleConfigure.ReplyId+'" data-type="reply"/>'));
					mainForm.submit.value = '评论';
				}
				if (pubModuleConfigure.position === 0){
					
				}else if(isShow){
					$("body").addClass("sendbox-bottom");
					common.sendBox.isBottom = true;
				}
				if (isShow){
					sendBoxWrapper.removeClass("none");
				}
				if (hasBg){
					sendBoxWrapper.addClass("sendbox-wrapper-bg");
				}
		},
		"getCommentBox":function(t){
			var weiboInfo = t.parent().parent().parent(),
				commentBox = weiboInfo.find(".comment-box").removeClass("comment-box-reply comment-box-relay none");
			$(".comment-box").addClass("none");
			if (commentBox.size()){
				return commentBox.removeAttr("style").removeClass("none");
			}else{
				commentBox = $(common.config.template.commentBox).appendTo(weiboInfo);
				commentBox.find("input[name='appid']").val(window.config.appkey);
				commentBox.find(".comment-form").submit(common.sendBox.submit);
				common.sendBox.bindEvents(commentBox.find(".comment-form"),true);
				return commentBox;
			}
		},
		"showCommentBox":function(t,type){
			var commentBox = common.sendBox.getCommentBox(t).addClass("comment-box-"+type),
				form = commentBox.find(".comment-form"),
				content = commentBox.find(".content"),
				tips = {"relay":"转播原文，把它分享给你的听众","reply":"评论原文"};
				commentBox.find("input[name='reid']").val(t.attr("twitterId"));
				commentBox.find(".comment-tit").html(tips[type]);
				commentBox.find(".sendbox-submit").val({"relay":"转 播","reply":"评 论"}[type]).attr("id",[type,common.config.getSingleId()].join("_"));
				content.val(t.attr("text"));
				common.sendBox.setCursorToPos(0,content);
				content.trigger("focus");
				commentBox.toggleClass("reflow");
		},
		"setCallBack":function(iframe,succFn,errFn){
			var fn = function(){},
				hasReturn = false;
			iframe.callback = iframe.errorcallback = iframe.onload = iframe.onerror = null;
			iframe.callback = function(){
				var args = Array.prototype.slice.call(arguments);
				hasReturn = true;
				(succFn || fn).apply(null,args || {});
			};
			iframe.errorcallback = errFn || fn;
			iframe.onload = iframe.onerror = function(){
				setTimeout(function(){
					!hasReturn && errFn();
					hasReturn = true;
				},100);
			};
		},
		"isBottom":false,//发表框位置
		"currentForm":$("#sendboxForm"),
		"setCurrentForm":function(t){
			while (t[0].tagName !== "FORM"){
				t = t.parent();
			}
			common.sendBox.currentForm = t;
			return t;
		},
		"checkContentLength":function(content){
			var form = $(content[0].form),
			len = common.sendBox.getContentLength(content),
			msg = form.find(".sendbox-msg");
			msg.html(len);
			if (len>=0){
				msg.removeClass("c_orange").addClass("c_gray");
			}else{
				msg.removeClass("c_gray").addClass("c_orange");
			}
		},
		"getStrLength":function(str){
			str = str.replace(new RegExp("((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z]{2,5}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*","gi"),new Array(11).join("aa"));
			return Math.ceil(($.trim(str.replace(/[^\u0000-\u00ff]/g,"aa")).length)/2);
		},
		"getContentLength":function(content){
			var arr = [content.val()],
				source = common.config.get("PubModuleConfigure.SourceUrl"),
				str = "";
			if (source){
				arr.push("( 来自"+source+" )");
			}
			str = arr.join(" ");
			return 140 - common.sendBox.getStrLength(str);
		},
		"getContentByLength":function(str,length){
				var len = maxlen,
					source = common.config.get("PubModuleConfigure.SourceUrl"),
					str2="",
					arr =[str];
				if (source){
					arr.push("( 来自" + source + " )");
				}
				if( common.sendBox.getStrLength(arr.join(" ")) < maxlen ){
				   return str;
				}else{
					for( var i=str.length;i>0;i--){
						arr[0] = str.substr(0,i);
						if( common.sendBox.getStrLength( arr.join(" ") ) < maxlen ){
							return arr[0];
						}
					}
					return str;
				}
		},
		"bindEvents":function(form,autoKeyUp){
			var content = form.find(".content");
			content
			.bind("focus",function(){
				content.addClass("focus");
				form.toggleClass("reflow");
			})
			.bind("blur",function(){
				content.removeClass("focus");
				form.toggleClass("reflow");
			})
			.bind("keydown",function(event){
				if ((event.keyCode === 13 || event.keyCode === 38 || event.keyCode === 40)){
					if (common.sendBox.toolbar.mention.isShow()){
						common.sendBox.toolbar.mention.onKeyDown(event);
						return false;
					}
				}
			})
			.bind("keyup",function(event){
				var pos = [0,0],name ='',mention = common.sendBox.toolbar.mention.init();
					common.sendBox.checkContentLength(content);
					pos[1] = common.sendBox.getCursorPos(content[0]);
					pos[0] = Math.max(pos[1] -20,0);
					name = /@([\w\-]{1,19})$/.exec(content.val().substring(pos[0],pos[1]));
				if (event.keyCode === 13 || event.keyCode === 38 || event.keyCode === 40){
					return;
				}		
				if (name && name[1]){
					common.sendBox.toolbar.mention.getMentionsUser(name[1],mention,function(data){
						data && common.action.showMention(null,content);
					});
				}else{
					common.sendBox.toolbar.mention.hide();
				}
				common.sendBox.checkContentLength(content);
				content.attr("data-caret",pos[1]);
				form.toggleClass("reflow");
			}).bind("mouseup",function(){
				var pos = common.sendBox.getCursorPos(content[0]);
				content.attr("data-caret",pos);
			});
			if (autoKeyUp){
				common.sendBox.setCursorToPos(content.val().length,content);
				content.trigger("keyup");
			}
			return content;
		},
		"insertText":function(text, caret_start, caret_end, holder){
			var pre,suff,holderText = holder.val(),defpos = 0;
			caret_start = caret_start || defpos;
			caret_end = caret_end || defpos;
			pre = holderText.substr(0, caret_start);
			suff = holderText.substr(caret_end);
			holderText = [pre, text, suff].join("");
			holder.val(holderText);
			holder.focus();
			common.sendBox.setCursorToPos([pre, text].join("").length,holder);
			holder.trigger("keyup");
		},
		"insertEmotion":function(n,content){
			var pos = content.attr("data-caret") || content.val().length;
			common.sendBox.setCursorToPos(+pos,content);
			common.sendBox.insertText(n,pos,pos,content);
		},
		"insertMention":function(n,content){
			var pos = [0,0],alerttext;
			pos[1] = common.sendBox.getCursorPos(content[0]);//获取光标所在位置
			pos[0] = (pos[1] - 20 > 0 ? pos[1] - 20 : 0);	//往前退20个字符
			alerttext = content.val().substring(pos[0], pos[1]); //提取光标前的20个字符
			if (common.sendBox.toolbar.mention.isSimple()){	
				alerttext = ((/@[A-Za-z][0-9A-Za-z0-9\_]{0,19}$/.exec(alerttext)) || [""])[0].slice(1); //获取光前的@字符串
				common.sendBox.insertText("@"+n+" ", pos[1]-alerttext.length-1, pos[1], content); //替换@字符串
			}else{
				alerttext = "@"+n+" ";
				pos = content.attr("data-caret") || content.val().length;
				common.sendBox.insertText(alerttext,pos,pos,content);
			}
			content.trigger("keyup");
		},
		"setCursorToPos":function(pos,form){
			var form = form[0];
			if (form.setSelectionRange) {
				form.setSelectionRange(pos, pos);
			} else if (form.createTextRange) {
				var range = form.createTextRange();
				range.collapse(true);
				range.moveEnd('character', pos);
				range.moveStart('character', pos);
				range.select();
			}	
		},
		// 获取光标在文本框的位置
		"getCursorPos":function(elem,defIndex){
			var index = defIndex;
			if (document.selection) { // IE
				//elem.focus();
				try{
					var Sel = document.selection.createRange();
					var Sel2 = Sel.duplicate();
					Sel2.moveToElementText(elem);
					var index = -1;
					while (Sel2.inRange(Sel)) {
						Sel2.moveStart('character');
						index++;
					};
				}catch(e){
				}
			}
			else if (elem.selectionStart || elem.selectionStart == '0') { // FF
				index = elem.selectionStart;
			}
			
			return (index);
		},
		"getCaretOffset":function(content){
			var primaryStyles = ['fontFamily', 'fontSize', 'fontWeight', 'fontVariant', 'fontStyle',
				'paddingLeft', 'paddingTop', 'paddingBottom', 'paddingRight',
				'marginLeft', 'marginTop', 'marginBottom', 'marginRight',
				'borderLeftColor', 'borderTopColor', 'borderBottomColor', 'borderRightColor',  
				'borderLeftStyle', 'borderTopStyle', 'borderBottomStyle', 'borderRightStyle', 
				'borderLeftWidth', 'borderTopWidth', 'borderBottomWidth', 'borderRightWidth',
				'wordWrap','wordBreak',
				'line-height', 'outline'],
				
				specificStyle = {
					"position":"absolute",
					"white-space":"pre",
					'word-wrap': 'break-word',
					'overflow-x': 'hidden',
					'overflow-y': 'auto'
				},
					
				simulator = (function(){
					if ($("#textarea_simulator").size()){
						return $("#textarea_simulator");
					}
					var o = $('<div id="textarea_simulator"/>').css({
						position: 'absolute',
						top: 39,
						left: 22,
						color:"#009900",
						visibility: 'hidden',
						pointerEvents:"none"
					}).appendTo(document.body);
					return o;
				})(),
				
				getComputedStyle = function(source, styleName) {
					if (source.length == 0) return;
					var thiz = source[0];
					var result = source.css(styleName);
					result = result || ($.browser.msie ?
						thiz.currentStyle[styleName]:
						document.defaultView.getComputedStyle(thiz, null)[styleName]);
					return result;
				},
				
				cloneStyle = function(source, target, styleName) {
					var styleVal = getComputedStyle(source, styleName);
					if (!!styleVal) {
						$(target).css(styleName, styleVal);
					}
				},
				
				toHtml = function(text) {
					if (!common.config.isLowIe){
						return text.replace(/[\n\r]/g, '<br/>').replace(/\s/g,"&nbsp;");
					}else{
						return text.replace(/[\n\r]/g, '<div class="br">&nbsp;</div>').replace(/\s/g,"&nbsp;");
					}
				},
				
				getCaretPosition = function(content) {
					var element = content[0], elementOffset = content.offset();
					simulator.empty();
					$.each(primaryStyles, function(index, styleName) {
						cloneStyle(content, simulator, styleName);
					});

					simulator.css($.extend({
						'width': content.width(),
						'height': content.height()
					}, specificStyle));

					var value = content.val(), cursorPosition = common.sendBox.getCursorPos(content[0]);
					var beforeText = value.substring(0, cursorPosition);
						atpos=beforeText.lastIndexOf('@');
						if(atpos!=-1){
							beforeText=beforeText.substring(0,atpos+1);
						}
					var cursor;
					simulator.html(toHtml(beforeText)+'<span class="simulator-cursor inline-block"></span>');
					cursor = simulator.find(".simulator-cursor");
					var focusOffset = cursor.offset(), simulatorOffset = simulator.offset();
					return { 
						top: focusOffset.top - simulatorOffset.top - element.scrollTop
							+ ($.browser.mozilla ? 0 : parseInt(getComputedStyle(content,"fontSize"))), 
						left: cursor[0].offsetLeft
					};
				};
				return getCaretPosition(content);
		},
		"submit":function(event){
			var jform = $(this),
				pform = jform.parent(),
				submitTarget = $("#"+jform.attr("target"))[0],
				content = jform.find("textarea[name='content']"),
				pic = $("#sendboxPic"),
				val = jform.find(".content").val(),
				defval = common.config.get("PubModuleConfigure.InitialContent"),
				sourceUrl = common.config.get("PubModuleConfigure.SourceUrl"),
				arr = [val],
				seqid = +new Date(),
				hts = val.match(/#([^#]{1,20})#/g),
				submitBtn = jform.find(".sendbox-submit"),
				showMsg = function(msg,state,fontClass,timer){
					var msg = jform.find(".sendbox-tip").html(msg).removeAttr("style")
						 .removeClass("c_gray c_orange loading f12 f16 none")
						 .addClass(["c_gray","c_orange","loading c_gray"][state]+" "+["f16","f12"][fontClass||0]);
					if (timer && timer>0){
						setTimeout(function(){
							msg.addClass("none");
							jform.toggleClass("reflow");
						},timer);
					}
					pform.toggleClass("reflow");
					setTimeout(function(){
						pform.toggleClass("reflow");
					},0);
				},
				userState = common.user.getUserState(),
				submitTit = jform.find("input[name='submit']").val(),
				isCommentForm = jform.hasClass("comment-form"),
				getSubmitUrl = function(){
					if (submitTit === "广播"){
						submitTit = "发表";
						if (pic.find("input[name='pic']").val()){
							jform.attr("enctype","multipart/form-data");
							return "pub_pic_twitter.do";
						}else{
							jform.attr("enctype","application/x-www-form-urlencoded");
							return "pub_twitter.do";
						}
					}else if(submitTit === "转播"){
						return "repub_twitter.do";
					}else if(submitTit === "评论"){
						return "comment_twitter.do";
					}
				},
				callback = function(d){
					var data = d && d.data,
						msg = d ? ('{"action":"'+submitTit+'","ret":'+d.ret+',"errcode":'+d.errcode+',"msg":"'+d.msg+'","data":{"id":'+(data && data.id)+',"time":'+(data && data.time)+'}}'):'{"ret":-1,"errcode":-1,"msg":"connect server failed"}';
					if (window.postMessage){
						parent.postMessage(msg,"*");
					}else{
						parent.name = msg;
					}
				},
				succFn = function(d){
					var ret = d.ret,
						code = d.errcode,
						msg = d.msg,
						data = d && d.data,
						dialog,
						offset;
					callback(d);
					if (ret === 0){
						if (jform.hasClass("comment-form")){
							pform.find(".comment-tit").html('<span class="icon_ok"></span>'+submitTit+'成功！');
							jform.remove();
							setTimeout(function(){
								pform.slideUp("fast",function(){
									pform.remove();
								});
							},1500);
						}else{
							showMsg(submitTit+"成功！",0,1,2000);
							setTimeout(function(){
								jform.find(".content").val(defval);
								jform.find(".content").trigger("keyup");
							},1000);
						}
					}else{
						if ((ret === 3 && code === 3154)){
							showMsg('登录态失效，请<a href="javascript:;" data-action="doLogin" data-target="'+(isCommentForm?3:2)+'">重新登录</a>！',1,1);
						}else{
							showMsg(msg,1,1,2000);
						}
					}
					common.sendBox.toolbar.pic.clear();
					submitBtn.removeClass("disabled");
				},
				errFn = function(){
						callback();
						showMsg('网络连接失败！',1,1,2000);
						submitBtn.removeClass("disabled");
				};
			
			if ($(submitBtn).hasClass("disabled")){
				return false;
			}
			if (hts && hts.length>2){
				showMsg('一条广播中最多包含两个话题',1,1,1000);
				return false;
			}
			if (/^(\s*#[^#]{1,20}#\s*)*$/.test(val)){
				showMsg('再说点什么吧',1,1,1000);
				return false;
			}
			if (sourceUrl){
				arr[1] = "( 来自"+sourceUrl+" )";
			}
			if (common.sendBox.getContentLength(content) < 0){
				arr[0] = common.sendBox.getContentByLength(val,140);
			}
			if (userState === 2){
				submitBtn.addClass("disabled");
				jform.find("input[name='seqid']").val(seqid);
				jform.find("input[name='tokensig']").val(common.getToken());
				jform.attr("action",common.config.url.root + getSubmitUrl());
				content.val(arr.join(" "));
				common.sendBox.setCallBack(submitTarget,succFn,errFn);
				showMsg('<div class="sendbox-tip-waiting"><span class="loading">发表中</span></div>',0,1);
				return true;
			}else if(userState === 1){
				showMsg('请先<a href="http://reg.t.qq.com/index.php?pref=readwall" class="c_login" target="_blank">开通腾讯微博</a>',1,1);
			}else{
				showMsg('您还未登录，<a href="javascript:;" data-action="doLogin" data-target="'+(isCommentForm?3:2)+'" data-id="'+submitBtn.attr("id")+'">请先登录</a>！',1,1);
			}
			return false;
		},
		"toolbar":{
			"init":function(){
				var conf = common.config.get("PubModuleConfigure.InsertFunction"),
					obj = {"0":['<div class="sendbox-toolbar-emotion" id="toolbar_emotion">',
									'<a class="sendbox-toolbar-emotion-icon" href="javascript:void(0);" title="表情" data-action="showEmotion" hidefocus>表情</a>',
									'<label class="sendbox-toolbar-text c_gray" data-action="showEmotion">表情</label>',
								'</div>'],
						   "1":['<div class="sendbox-toolbar-pic" id="toolbar_pic">',
									'<a class="sendbox-toolbar-pic-icon" href="javascript:void(0);" title="添加图片" data-action="showPicUploader" hidefocus>添加图片</a>',
									'<label class="sendbox-toolbar-text c_gray" data-action="showPicUploader">图片</label>',
									'<div class="none" id="sendboxPic"></div>',
								'</div>'],
						   "2":['<div class="sendbox-toolbar-mention" id="toolbar_mention">',
									'<a class="sendbox-toolbar-mention-icon" href="javascript:void(0);" title="@朋友帐号就可以提到他" data-action="showMention" hidefocus>@朋友</a>',
									'<label class="sendbox-toolbar-text c_gray" data-action="showMention">朋友</label>',
								'</div>']
						},
					str = conf.join("").replace(/(\d)/g,function(){
							var i = +arguments[1];
							return obj[i].join("")
						})
					;//0 表情，1 图片，2 @朋友
				$("#toolbar").html(str);
			},
			"fileSelector":function(){},
			"mention":{
				"init":function(){
					var mention,
						str ='',
						body=$("body");
					if ($("#mention").size()){
						return $("#mention");
					}
					str =[
						'<div class="mention" id="mention">',
						'<span class="triangle"></span>',
						'<span class="triangle-border"></span>',
						'<a href="javascript:;" class="close" data-action="hideParent"></a>',
						'<div class="mention-search"><input class="mention-search-input" type="text" id="match" autocomplete="off" /></div>',
						'<ul class="mention_list none"></ul>',
						'<div class="mention-desc">@朋友帐号，他就能在[提到我的]页收到</div>',
						'</div>'
					].join("\n");
					mention = $(str).appendTo(body);
					mention.find(".mention-search-input")
						.bind("keyup",function(event){
							var val = $(this).val();
							if (/\w/.test(String.fromCharCode(event.keyCode))){
								common.sendBox.toolbar.mention.getMentionsUser($(this).val(),mention);
							}
						})
						.bind("keydown",common.sendBox.toolbar.mention.onKeyDown);
				
					mention.find(".mention_list").bind("mouseover",function(event){
						if (event.target.tagName === "LI"){
							$(event.target).addClass("active").siblings().removeClass("active");
						}
					});
					
					body.bind("click",function(event){
						var target = event.target;
						if (!$.contains(mention[0],target) && !($(target).attr('data-action')==="showMention")){
							mention.addClass("none");
						}
					});
					return mention;
				},
				"onKeyDown":function(event){
					var mention = common.sendBox.toolbar.mention.init(),
					list = mention.find(".mention_list"),
					   	active = list.find("li.active"),
					listTop = list[0].scrollTop,
					listHeight = list[0].clientHeight,
					optHeight = active.height(),
					scroll = function(i){
						if (i>0){
							if (active[0].offsetTop + optHeight >= listHeight + listTop){
								list[0].scrollTop += optHeight;
							}
						}else{
							if (active[0].offsetTop - optHeight < listTop){
								list[0].scrollTop -= optHeight;
							}	
						}
					},
					onKeyDown = {
						"38":function(){
							if (active.prev("li").size()){
								scroll(-1);
								active.removeClass("active").prev("li").addClass("active");
							}
							return false;
						},
						"40":function(){
							if (active.next("li").size()){
								scroll(1);
								active.removeClass("active").next("li").addClass("active");
							}
							return false;
						},
						"13":function(){
							active.trigger("click");
							return false;
						}
					};
					if (onKeyDown[event.keyCode]){
						return onKeyDown[event.keyCode]($(this));
					}else{
						//return /[\w_]/.test(String.fromCharCode(event.keyCode));
					}
					
				},
				"isShow":function(){
					var mention = $("#mention");
					return mention.size() && !mention.hasClass("none");
				},
				"isSimple":function(){
					return $("#mention").hasClass("mention-simple");
				},
				"show":function(top,left){
					var mention = $("#mention");
					if (mention.hasClass("mention-sendbox")){
						mention.css({"top":top,"left":left});
					}else if(mention.hasClass("mention-sendbox-bottom")){
						mention.css({"left":left});
					}else if(mention.hasClass("mention-comment")){
						mention.css({"top":top,"left":left});
					}else if(mention.hasClass("mention-comment-bottom")){
						mention.css({"bottom":top,"left":left});
					}
					mention.removeClass("none");
					return mention;
					/*
					if (!common.sendBox.isBottom){
						mention.css({"top":top,"left":left}).removeClass("none");
					}else{
						mention.css({"bottom":top,"left":left}).removeClass("none");
					}*/
				},
				"hide":function(){
					$("#mention").addClass("none");
				},
				"clear":function(){
					$("#mention")
						.find(".mention_list").html("").end()
						.find(".mention-search-input").val("");
				},
				"getMentionsUser":function(name,mention,callback){
					if (!name){
						return;
					}
					var list = mention.find(".mention_list");
					$.ajax({
						type: "GET",
						url: common.config.url.root+"at_friends_tips.do",
						data: {
							"reqnum":100,
							"match":name, 
							"tokensig" : common.getToken()
						},//"appkey=801094433&match=" + name,
						dataType:"json",
						success: function (d) {
						if (d.ret === 0) {
							var html = '';
								d = d.data && d.data.info || [];
							for (var i=0,k=d.length;i<k;i++) {
								if (d[i].name){
									html += '<li data-action="insertMention" data-name="'+d[i].name+'">' + d[i].nick + ' (' + d[i].name + ')' + '</li>';
								}
							}
							list.html(html).removeClass("none").find("li:eq(0)").addClass("active");
							if (callback){
								callback(d);
							}
						}
						}
					});
				}	
			},
			"emotion":{
				"init":function(){
					var qqface,
						str='',
						emos = common.config.emos,
						body = $("body"),
						conf = common.config.get("PubModuleConfigure.InsertFunction"),
						index = conf && $.inArray("0",conf);
					
					if ($("#qqface").size()){
						return $("#qqface");
					}
					str = [
						'<div class="qqface qqface-'+index+' none" id="qqface">',
						'<span class="triangle"></span>',
						'<span class="triangle-border"></span>',
						'<a href="javascript:;" class="close" data-action="hideParent"></a>',
						'<div class="qqface-list"></div>',
						'</div>'
					].join('');
					qqface = $(str).appendTo(body);
					str = "";
					for (var i=0,k=136/*emos.length*/;i<k;i++){
						if (i>=80 && i<96){
							continue;
						}
						str += '<a class="qqface-emos" href="javascript:;" title="/'+emos[i]+'" style="background-position:-'+(i%15*29)+'px -'+(((i/15)|0)*29)+'px;">'
							+'<span data-index="'+i+'" class="qqface-emos-img" title="/'+emos[i]+'" data-action="insertEmotion"></span>'
							+'</a>';
					}
					qqface.find(".qqface-list").html(str);
					qqface.mouseover(function(event){
						var img = $(event.target);
						if (img.attr("data-index") && img[0].tagName === "SPAN"){
							img.css("backgroundImage","url('http://mat1.gtimg.com/www/mb/images/face/"+img.attr("data-index")+".gif')");
						}
					});
					body.bind("click",function(event){
						var target = event.target;
						if (!$.contains(qqface[0],target) && !(qqface[0] === target) && !($(target).attr('data-action')==="showEmotion")){
							qqface.addClass("none");
						}
					});
					return qqface;
				},
				"show":function(top,left){
					var qqface = $("#qqface"),height = common.config.getBodySize();
					if (qqface.hasClass("qqface-sendbox")){
						qqface.css({"top":top,"left":left}).removeClass("none");
					}else if(qqface.hasClass("qqface-sendbox-bottom")){
						qqface.removeClass("none");
					}else if(qqface.hasClass("qqface-comment")){
						qqface.css({"top":top}).removeClass("none");
					}else if(qqface.hasClass("qqface-comment-bottom")){
						qqface.css({"bottom":height - top - qqface.height() - 1});
						qqface.removeClass("none");
					}
					return qqface;
				},
				"hide":function(){
					$("#qqface").addClass("none");
				}	
			},
			"pic":{
				"init":function(index){
					if ($("#picUploader").size()){
						return $("#picUploader");
					}else{
						var body = $("body"),
						picContainer = $("#sendboxPic"),
						picUploader = $(common.config.template.picUploader).appendTo(body).addClass("uploader-box-" + index),
						delBtn = picUploader.find(".uploader-del"),
						preview = picUploader.find(".uploader-preview"),
						fileSelector = picUploader.find("input[type='file']"),
						fileInfoLocal = picUploader.find(".uploader-fileinfo-local"),
						fileInfoWeb = picUploader.find(".uploader-fileinfo-web"),
						fileGetter = picUploader.find(".uploader-web-getter"),
						webInput = picUploader.find(".uploader-web-input"),
						clearLocalFile = function(event){
							preview.html("");
							fileInfoLocal.html("");
							delBtn.addClass("none");
							picContainer.html("");
						},
						clearWebFile = function(){
							preview.html("");
							webInput.val("");
							fileInfoWeb.html("");
							picContainer.html("");
						};
						
						if (common.sendBox.isBottom){
							picUploader.addClass("uploader-box-bottom");
						}
						
						fileSelector.change(function(event){
							var input = event.target,
								form = input.form,
								frame = $("#uploadFrame")[0]
								;
								preview.html("");
								frame.callback = frame.errorcallback = null;
								form.action = common.config.url.root + "upload_pic.do";
								form.tokensig.value = common.getToken();
								frame.callback = function(d){
									preview.html('<img src="'+d.data.imgurl+'/120"/>');
									picContainer.html('<input type="hidden" value="'+ d.data.imgurl +'/2000" name="pic_url"/>');
									delBtn.removeClass("none");
									fileInfoLocal.html('图片上传成功！').removeClass("c_orange");
									frame.callback = null;
								};
								frame.errorcallback = function(){
									fileInfoLocal.html('图片上传失败,文件大小不得超过4M！').addClass("c_orange");
									delBtn.removeClass("none");
								};
								frame.onload = function(){
									setTimeout(function(){
										if (frame.callback){
											frame.errorcallback();
										}
									},100);
								}
								fileInfoLocal.html("图片上传中...").removeClass("c_orange");
								form.submit();
						});
						picUploader.find(".switcher").find(".switcher-tab").bind("click",function(){
							var t = $(this),
								index = t.index();
							t.addClass("switcher-tab-active").siblings().removeClass("switcher-tab-active");
							$("."+["uploader-local","uploader-web"][index]).removeClass("none").siblings().addClass("none");
						});
						fileGetter.bind("click",function(event){
							var val = webInput.val(),
								img;
							
								clearLocalFile();
							if (/^\s*$/.test(val)){
								fileInfoWeb.addClass("c_orange").html('请填写网络图片地址');
								return;
							}else if(!/^(http:\/\/|https:\/\/)/.test(val)){
								fileInfoWeb.addClass("c_orange").html("格式错误！");
							}else{
								fileInfoWeb.removeClass("c_orange").html("预加载中...");
								img = $('<img/>').appendTo(preview);
								img[0].onload = function(){
									fileInfoWeb
									.removeClass("c_orange")
									.html('<a href="javascript:;">删除</a>')
									.find("a").bind("click",clearWebFile);
									picContainer.html('<input type="hidden" value="'+val+'" name="pic_url"/>');
								};
								img[0].onerror = function(){
									fileInfoWeb
									.addClass("c_orange")
									.html('图片加载失败');
								};
								img.attr("src",val);
							}
						});
						delBtn.bind("click",clearLocalFile);
						body.bind("click",function(event){
							var target = event.target;
							if (!$.contains(picUploader[0],target) && !(picUploader[0] === target) && !($(target).attr('data-action')==="showPicUploader")){
								common.sendBox.toolbar.pic.close();
							}
						});
					}
					return picUploader;
				},
				"close":function(timer){
					var o = $("#picUploader"),
						close = function(){
							o.addClass("none");
						};
					if (timer){
						setTimeout(close,timer);
					}else{
						close();
					}
				},
				"clear":function(){
					$("#sendboxPic").html("");
					$("#picUploader").find(".uploader-del").trigger("click");
					$("#picUploader").find(".uploader-web-input").val("");
				}
			}
		}
	},
	"tabbar":{
		"init":function(){
			var isShow = common.config.get("ModuleConfigure.TabModule"),
				conf = common.config.get("TimelineModuleConfigure"),
				list = [],
				arr = [],
				tabbar = $("#tabbar"),
				tabbarInner = tabbar.find(".tabbar-list"),
				tabmore = tabbar.find(".tabbar-more"),
				tabmoreList = $('<ul id="tabbarMore" class="tabbar-more-list none"></ul>').appendTo($('body')),
				getAttrs = function(arr){
					var a = "Name,ConditionType,Condition,SortType,Famous,ContentType,MessageType,ShowCrest".split(","),
						ra=[];
					for (var i=0,k=a.length;i<k;i++){
						if (a[i] === "Condition"){
							ra.push(a[i]+'="[\''+common.lib.string.encodeHtml(arr[a[i]].join("','"))+'\']"');
						}else{
							if (typeof arr[a[i]] === "string"){
								ra.push(a[i]+'="'+common.lib.string.encodeHtml(arr[a[i]])+'"');
							}else{
								ra.push(a[i]+'="'+arr[a[i]]+'"');
							}
						}
					}
					return ra.join(" ");
				};
			for (var i=0,k=conf.length;i<k;i++){
				arr.push('<li class="tabbar-list-li">');
				arr.push('<a href="javascript:;" class="tabbar-tab" data-action="showTimeline" '+getAttrs(conf[i])+' hidefocus>');
				arr.push(common.lib.string.encodeHtml(conf[i]["Name"]));
				arr.push('</a></li>');
				list.push(arr.join(""));
				arr=[];
			}
			tabbarInner.html(list.join('<li class="tabbar-list-li"><span class="tabbar-line">|</span></li>'))
					   .find(".tabbar-tab").first().trigger("click");
			common.tabbar.resize();
			tabmore.bind("mouseover",function(event){
				var height = tabmore.height(),
					offset = tabmore.offset();
				tabmoreList.removeClass("none").css({"top":height+offset.top});
			});
			
			tabmoreList.bind("click",function(event){
				var target = $(event.target),
					index = target.attr("data-index");
				if (index){
					tabbar.find("li:eq("+index+")").find(".tabbar-tab").trigger("click");
					tabmoreList.addClass("none");
				}
			});
			$(window).resize(function(event){
				common.tabbar.resize(event);		//选项卡大小重置
				common.timeline.resize(event);	//时间线高度重置
				if (common.config.getBodySize(1) >= 538){
					$("body").addClass("body-wide");
				}else{
					$("body").removeClass("body-wide");
				}
			});
			$("body").mouseover(function(event){
				var target = event.target;
				if (!$.contains(tabbar[0],target) && !$.contains(tabmoreList[0],target) && tabmoreList[0] != target){
					tabmoreList.addClass("none");
				}
			});
			
			if (isShow){
				tabbar.removeClass("none");
				common.tabbar.resize();
			}else{
				common.timeline.resize();
			}
		},
		"resize":function(){
			var li,
				tabbar = $("#tabbar"),
				tabbarInner = tabbar.find(".tabbar-list"),
				tabmore = tabbar.find(".tabbar-more"),
				tabmoreList = $("#tabbarMore"),
				visibleList = tabbarInner.find("li").not(".none");
				tabbar.toggleClass("reflow").find("li.none").removeClass("none");
			if (visibleList.size() === 0){
				return;
			}
			if (visibleList.last().offset().top > visibleList.first().offset().top){
				tabmoreList.html("");
				while (visibleList.last().offset().top > visibleList.first().offset().top){
					li = visibleList.last();
					li.addClass("none");
					if (li.find(".tabbar-line").size()===0){
						tabmoreList.prepend($('<li class="tabbar-more-li"><a href="javascript:void(0);" data-index="'+li.index()+'" class="tabbar-more-lia">'+li.find(".tabbar-tab").html()+'</a></li>'));
						
					}
					visibleList = tabbarInner.find("li").not(".none");
				}
				setTimeout(function(){
					tabmore.removeClass("none");
				},0);
			}else{
				tabmore.addClass("none");
				tabmoreList.addClass("none");
			}
			
		}
	},
	"timeline":{
		"init":function(){
			var pageStyle = +common.config.get("TimelineDetail.PageStyle"),//翻页模式
				HeadStyle = +common.config.get("TimelineDetail.HeadStyle"),//是否显示用户头像
				timeline = $("#timeline"),
				mention = $("#mention"),
				timer = 0,
				ih = 0,
				isShow = common.config.get("ModuleConfigure.TimelineModule"),
				resetHeight = function(){
					var h = [document.body.scrollHeight,$("#bottom").offset().top][+isShow];
					if (ih !== h){
						if (window.postMessage){
							parent.postMessage(h,"*");
						}else{
							parent.name = h;
						}
						ih = h;
					}
				},
				resizeFrameElement = function(t){
					try{
						if (parent == window){
							return;
						}
						timer = setInterval(resetHeight,t);
					}catch(e){
						if (!window.postMessage){
							timer = setInterval(resetHeight,t);
						};
					}
				};
				
			common.tabbar.init();//初使化页卡
			if (!HeadStyle){
				timeline.addClass("timeline-simple");
			}
			//更多
			if (pageStyle === 0){
				timeline.addClass("timeline-scrollbar");
			}
			//上墙
			if (pageStyle === 1){
				timeline.bind("mousewheel",function(e){
					var k = event.wheelDelta? event.wheelDelta:-event.detail*10;
						this.scrollTop = this.scrollTop - k;
						return false;
				});
			}
			
			if (pageStyle === 2){
				resizeFrameElement(500);
			}
			if (pageStyle === 0 || pageStyle === 1){
				common.timeline.resize();
			}
			
			timeline.bind("scroll",function(){
				var form = common.sendBox.currentForm,
					qqface = $("#qqface");
				if (qqface.size() && !qqface.hasClass("none") && $.contains(timeline[0],form[0])){
					form.find(".sendbox-toolbar-emotion-icon").trigger("click");
				}
				if (mention.size() && !mention.hasClass("none") && $.contains(timeline[0],form[0])){
					if (mention.hasClass("mention-simple")){
						form.find(".content").trigger("keyup");
					}else{
						form.find(".sendbox-toolbar-mention-icon").trigger("click");
					}
				}
			});
		},
		"autoRequest":function(tab){
			if (common.timeline.cache.retry < 3){
				common.timeline.request(tab);
				common.timeline.cache.retry++;
				console.log("重新拉取API："+common.timeline.cache.retry);
			}
		},
		"request":function(tab){
			var cgi = common.config.url.root + "get_read_wall.do",
				num = common.config.get("TimelineDetail.TwitterNum"),
				timeline = $("#timeline"),
				weiboList = $("#weibo_list"),
				btnNext = $("#btn_weibo_next"),
				needClear = (function(tab){
					if (tab === undefined){
						return 0;
					}
					if (tab.parent().hasClass("timeline-next")){
						tab = tab.parent();
					}
					if (tab.hasClass("tabbar-tab")){
						tab.addClass("tabbar-tab-active loading").parent()
				 			.siblings("li").find(".tabbar-tab").removeClass("tabbar-tab-active");
				 		common.timeline.cache.pagestring = null;
				 		common.timeline.cache.list = [];
				 		common.timeline.cache.idList = [];
				 		common.timeline.cache.lastTwitter = null;
				 		common.timeline.cache.nextTime = 2000;
				 		clearTimeout(common.timeline.cache.timer);
				 		return 1;
					}else if(tab.hasClass("timeline-next")){
						tab.find(".timeline-next-icon").addClass("loading");
						return 0;
					}
				})(tab),
				data = (function(){
					if (needClear === 0){
						return common.timeline.cache.requestData;
					}else{
						return {
							"appid":window.config.appkey,
							"seqid":+new Date(),
							"pagestring":common.timeline.cache.pagestring||"",
							"twitternum":num,
							"configurestring":(function(arr){
									var a = [];
									for(var i=0,k=arr.length;i<k;i++){
										if (arr[i] === "Name"){
											a.push('"'+arr[i]+'":"'+tab.attr(arr[i])+'"');
										}else if(!(arr[i] === "ShowCrest" && tab.attr("ConditionType") === '2')){
											a.push('"'+arr[i]+'":'+tab.attr(arr[i]));
										}
									}
									return encodeURIComponent("{"+a.join(",").replace(/'/g,"\"")+"}");
							})(["Name","ConditionType","Condition","SortType","Famous","ContentType","MessageType","ShowCrest"])
						};
					}
				})();
			
			if (!tab){
				data["pagestring"] = "";
			}

			data['tokensig'] = common.getToken();
			
			$.ajax({
				"url":cgi,
				"dataType":"json",
				"type":"post",
				"data":data,
				"success":function(d){
					var conditionType = /"ConditionType":(\d+),/.exec(decodeURIComponent(data.configurestring));
						conditionType = +(conditionType && conditionType[1]),
						ret = +d.ret,
						topNum = needClear && d && d.data && d.data.topNum || 0;
					if (/*d.seqid === data.seqid && */d.ret === 0){
						data.pagestring =  d.pagestringnext;
						common.timeline.cache.requestData = data;
						if (needClear){
							weiboList.html("");
							timeline[0].scrollTop = 0;
							if (tab.attr("ConditionType") === '2' && tab.attr("ShowCrest") === '1'){
								common.timeline.showTimelineHead(tab);
							}else{
								common.timeline.hideTimelineHead(tab);
							}
						}
						if (d.pagestringnext === "" && d.data.info.length === 0){
							weiboList.html('<li class="weibo_error"> 指定的内容还没有相关微博！</li>');
							btnNext.addClass("none");
						}else{
							common.timeline.cache.retry = 0;
							common.timeline.cacheData(d.data,common.timeline.runRender(d.more,tab),topNum);
						}
					}else if(ret === 4){
						if(/get topic id from meta server failed/i.test(d.msg)){
							weiboList.html('<li class="weibo_error">指定的话题还没有相关微博！</li>');
						}else if(d.total === 0){
							weiboList.html('<li class="weibo_error">指定的内容还没有相关微博！</li>');
						}else{
							common.timeline.autoRequest(tab);
							weiboList.html('<li class="weibo_error">获取数据失败，请重试！</li>');
						}
						//common.timeline.request(tab);
						btnNext.addClass("none");
					}else{
						weiboList.html('<li class="weibo_error">' + d.msg + '</li>');
						btnNext.addClass("none");
					}
					
					tab && tab.removeClass("loading");
					btnNext.find(".timeline-next-icon").removeClass("loading");
				},
				"error":function(){
					btnNext.find(".timeline-next-icon").removeClass("loading");
				}
			});
		},
		"render":function(){
			return {
				"getTypeStr": function(t) {
					if (t === 2) {
						return '<span class="weibo_type">转播：</span>';
					} else if (t === 4) {
						return '对话：';
					} else {
						return '：';
					}
				},
				"getWeiboText": function(t, s) {
					if (s){
						if (t === 3) {
							return '<span class="weibo_text weibo_text_del">内容已被作者删除</span>';
						} else {
							var es = common.config.emos;
							for (var i = 0,k=es.length,e=es[0]; i < k; i++,e=es[i]) {
								if (e != '0' && s.indexOf("/" + e) > -1) {
									s = s.replace(new RegExp("\/" + e, "gi"), "<img src=\"http://mat1.gtimg.com/www/mb/images/face/" + i + ".gif\" title=\"" + e + "\" class=\"weibo_emotion\"/>");
								}
							}
							s = s.replace(/&#\d+;/g, "");
							s = s.replace(/#([^#]{1,20})#/g, function(){var a1 = arguments[1],et = encodeURIComponent(a1);t = a1.replace(/^\s+|\s$/g,'');if (!t){return "#"+a1+"#"};return "<a href=\"http://t.qq.com/k/"+et+"?pref=readwall\" target=\"_blank\">#"+t+"#</a>"});
							s = s.replace(/@([a-zA-Z][a-zA-Z0-9\-_]*)?/g,
							function($1) {
								var n = arguments[1];
								if (common.user.list[n] && common.user.list[n] != "") {
									return "<a href=\"http://t.qq.com/"+n+"?pref=readwall\" title=\"" + n + "\" target=\"_blank\" class=\"weibo_user\">" + common.user.list[n] + "</a>";
								} else {
									for (var i in common.user.list) {
										var tn = new RegExp("^" + n + "$", "i").exec(i);
										if (tn && common.user.list[tn]) {
											return "<a href=\"http://t.qq.com/"+tn+"?pref=readwall\" title=\"" + tn + "\" target=\"_blank\" class=\"weibo_user\">" + common.user.list[tn] + "</a>";
										}
									}
									return $1;
								}
							});
							return '<span class="weibo_text">'+ s +'</span>';
						}
					}else{
						return "";
					}
				},
				"getVipIconStr": common.user.getVipIconStr,
				"getTime":function(t){
					t = new Date(t*1000);
					var c =new Date(),
					s = "",
					td = [t.getFullYear(),t.getMonth(),t.getDate()],
					cd = [c.getFullYear(),c.getMonth(),c.getDate()],
					df = [cd[0]-td[0],cd[1]-td[1],cd[2]-td[2]],
					dt = df[0]?[td[0],"年",td[1]+1,"月",td[2],"日"].join(""):[td[1]+1,"月",td[2],"日"].join(""),
					ft = function(t){return ("00"+t).slice(-2);}
					;
					dt = ["今天","昨天","前天"][(df[0]&&1)*100 +(df[1]&&1)*10 + df[2]] || dt;
					dt += " "+ft(t.getHours())+":"+ft(t.getMinutes());
					return dt;
				},
				"getImgs":function(t,id){
					var s="",picStyle = +common.config.get("TimelineDetail.PicStyle");
					if (t){
						if (picStyle){
							s = "<br/><a href=\"http://t.qq.com/p/t/"+id+"?pref=readwall\" class=\"weibo_img_icon\" target=\"_blank\"></a>"
						}else{
							s = "<br/>"+t.join(" ").replace(/([\S]+)/g,"<a href=\"http://t.qq.com/p/t/"+id+"?pref=readwall\" class=\"weibo_img\" target=\"_blank\"><img src=\"$1/120\"/></a>");
						}
					}
					return s;
				},
				"getVideo":function(v,id){
					if (!(v && v.picurl)){
						return "";
					}
					if (/^http:\/\/t\d+.qpic.cn/.test(v.picurl)){
						v.picurl = v.picurl+"/120";
					}
					return v && "<br/><a href=\"http://t.qq.com/p/t/"+id+"?pref=readwall\" class=\"weibo_video\" target=\"_blank\"><img src=\""+v.picurl+"\" onload=\"common.timeline.resizeImg(this,148);\" onerror=\"common.timeline.resetImg(this);\"/><span class=\"weibo_video_icon\"></span></a>" || "";
				},
				"getRelayText":function(data){
					return data.source?"||@"+data.name+":"+data.origtext:"";
				}
			}
		},
		"cache":{
			"timer":0,
			"requestData":null,	//存储上次的请求数据
			"lastTwitter":null,	//存储上次拉取的最后一条微博
			"idList":[],		//缓存的微博id列表
			"list":[],			//缓存的微博列表
			"nextTime":2000,
			"getNextTime":function(){
				var t = common.timeline.cache.nextTime;
				if (t>300000){
					t = 300000;
				}else if(t<2000){
					t = 2000;
				}
				return t;
			},
			"retry":0,	//请求失败，重新拉取次数
			"retry2":0	//过滤完拉圾消息后如无微博重新拉取次数
		},
		"cacheData":function(data,callback,topNum){
				var users = data && data.user,
					info = data && data.info || [],
					lastTwitter = common.timeline.cache.lastTwitter,
					pageStyle = common.config.get("TimelineDetail.PageStyle"),//翻页模式
					list = common.timeline.cache.list,
					idList = common.timeline.cache.idList,
					nextTime = common.timeline.cache.nextTime,
					currentTab = $(".tabbar-tab-active")
				;
				
				if (users){
					for(var n in users){
						if (users[n]!=""){
							common.user.list[n] = users[n];
						}
					}
				}
				
				if(typeof callback == 'function'){
					var w = common.timeline.render();
						w.getTime();
					
					for(var i=0,k=info.length;i<k;i++){
						var twitter = info[i];
						if (i < topNum){
							twitter.isTop = 1;
						}else{
							twitter.isTop = 0;
						}
						if (new RegExp("\\b"+twitter.id+"\\b").test(idList.join(","))){
							continue;
						}
						common.timeline.cache.idList.push(twitter.id);
						common.timeline.cache.list.push(twitter);			
					}
					
					if (pageStyle !== 1){
						callback(common.timeline.cache.list);
						common.timeline.cache.list = [];
					}else{
						if (common.timeline.cache.list.length){
							common.timeline.cache.lastTwitter = common.timeline.cache.list.slice(0,1)[0];
							callback(info);
							common.timeline.cache.nextTime /= 2;
						}else{
							common.timeline.cache.nextTime *= 2;
							setTimeout(common.timeline.request,common.timeline.cache.getNextTime());
						}
					}
				}
				
		},
		"runRender":function(hasNext,tab){
			var pageStyle = common.config.get("TimelineDetail.PageStyle"),
				tempFn = tmpl(common.config.template.weibo),
				sourceFn = tmpl(common.config.template.weibo_source),
				o1 = common.timeline.render(),
				o2 = common.timeline.render(),
				timeline = $("#timeline"),
				weiboList = $("#weibo_list"),
				btnNext = $("#btn_weibo_next"),
				
				appendOne = function(){
					if (weiboList.find(".comment-box").not(".none").size()){
						common.timeline.cache.timer = setTimeout(appendOne,2000);
						return;
					}
					o1.data = common.timeline.cache.list.pop();
					if (o1.data){
						weiboList.prepend(tempFn(o1));
						weiboList.find("li:eq(0)").hide().slideDown(500,function(){
							$(this).fadeIn(500);
							window.clearTimeout(common.timeline.cache.timer);
							if(common.timeline.cache.list.length === 0){
								common.timeline.cache.timer = setTimeout(common.timeline.request,common.timeline.cache.getNextTime());
							}else{
								common.timeline.cache.timer = setTimeout(appendOne,2000);
							}
						});
						if (weiboList.height() > timeline.height()*2){
							weiboList.find("li").last().remove();
						}
					}else{
						btnNext.trigger("click");
					}
				},
				renderFun = {
					"scrolling":function(twitters,data){
						var timeline = $("#timeline"),
							height = timeline.height(),
							countHeight = 0,
							callee = arguments.callee;
							while(countHeight < height){
								try{
									o1.data = common.timeline.cache.list.pop();
									weiboList.prepend(tempFn(o1));
									countHeight += weiboList.find("li:eq(0)").height();
								}catch(e){
									break;
								}
							}
						window.clearTimeout(common.timeline.cache.timer);
						if(common.timeline.cache.list.length === 0){
							common.timeline.cache.timer = setTimeout(common.timeline.request,common.timeline.cache.getNextTime());
						}else{
							common.timeline.cache.timer = setTimeout(appendOne,2000);
						}
					},
					"noScrolling":function(list,data,tab){
						var continueNum = 0;
							for(var i in list){
								try{
									if (list[i].name){
										o1.data = list[i];
										weiboList.append(tempFn(o1));
									}else{
										continueNum++;
										console.log(["过滤了微博id:http://t.qq.com/p/t/"+list[i].id,list[i]]);
									}
								}catch(e){
								}
							}
							if (continueNum === list.length && common.timeline.cache.retry2 < 3){
								common.timeline.request(tab);
								common.timeline.cache.retry2++;
							}else{
								common.timeline.cache.retry2 = 0;
							}
							
							if (btnNext.hasClass("none") && hasNext){
								btnNext.removeClass("none");
							}else if(!hasNext){
								btnNext.addClass("none");
							}
					}
				};
				o1.getSourceStr = function(data){
					if (data){
						o2.data = data;
						return sourceFn(o2);
					}else{
						return "";
					}
				}
				if (pageStyle === 1){
					return renderFun["scrolling"];
				}else if(pageStyle === 0 || pageStyle === 2){
					return renderFun["noScrolling"];
				}
		},
		"resizeImg":function(img,max){
			if (img.width>max){
				img.width = max;
			}
		},
		"resetImg":function(img){
			img.src="http://mat1.gtimg.com/app/vt/images/read/video_s1.gif";
			this.onerror = null;
		},
		"resize":function(){
			var pageStyle = common.config.get("TimelineDetail.PageStyle"),
				timeline = $("#timeline"),
				sendbox = $("#sendbox"),
				body = $("body"),
				timelineIsShow = common.config.get("ModuleConfigure.TimelineModule"),
				h = 0;
			if (timelineIsShow){
				timeline.removeClass("none");
			}
			if ((pageStyle === 0 || pageStyle === 1) && timelineIsShow){
				h = common.config.getBodySize() - timeline.offset().top;
				if (common.sendBox.isBottom){
					h -= sendbox.height();
				}
				timeline.height(h).toggleClass("reflow");
			}
		},
		"showTimelineHead":function(tab){
			var timeline = $("#timeline"),
				timelineHead = timeline.find(".timeline_head"),
				conditionType = +tab.attr("ConditionType"),
				seqid = +new Date(),
				condition = tab.attr("Condition").slice(1,-1).replace(/'/g,'');//\'
			
			$.ajax({
					"url":common.config.url.root+"user_infos.do",
					"data":{"appid":window.config.appkey,"names":condition,"seqid":seqid, "tokensig" : common.getToken()},
					"dataType":"json",
					"type":"post",
					"success":function(d){
						var ret = d && d.ret,
							data = d && d.data,
							info = data && data.info,
							names = [],
							hasFollowAll = 1;
						if (d.ret === 0 && info && info.length){
							for(var i=0,k=info.length;i<k;i++){
								names.push(info[i].name);
								hasFollowAll = hasFollowAll && info[i].isidol;
							}
							d.data.names = names.join(",");
							d.data.hasFollowAll = hasFollowAll;
							timelineHead.html(tmpl(common.config.template.timelineHead, d.data)).removeClass("none");
						}
					},
					"error":function(){
					
					}
				});
		},
		"hideTimelineHead":function(){
			var timeline = $("#timeline"),
				timelineHead = timeline.find(".timeline_head");
			timelineHead.addClass("none");
		}
	},
	"action":{
		"hideParent":function(event,t){
			t.parent().addClass("none");
		},
		"doFollow":function(event,t){
			var state = common.user.getUserState(),
				str="",
				offset = t.offset(),
				dialog;
			if (state === 2){
				common.titlebar.follow(t);
				return;
			}else if(state === 1){
				str = '<div class="c_orange">你的帐号还未开通微博！</div><div class="c_gray"><a href="javascript:;" data-action="doLogin" class="c_gray">换个帐号</a> | <a href="http://reg.t.qq.com/index.php?pref=readwall" target="_blank" class="c_gray">开通腾讯微博</a></div>';
			}else{
				t.attr("data-target",1);
				str = '你好，<a href="javascript:;" data-action="doLogin" data-target="1" data-id="'+t.attr("id")+'">请先登录</a>';
			}
			dialog = common.dialog.alert(str,t);
		},
		"doLogin":function(event,target){
			var w = 488,
				h = 326,
				m = {"v":2},
				p = {
					"appid":46000101,
					"daid":6,
					"style":11,
					//"target":"self",
					"low_login":1,
					"pt_no_auth":1,
					"hide_title_bar":1,
					"hide_close_icon":1,
					"self_regurl":"http://reg.t.qq.com/index.php?pref=readwall",
					"hln_logo":"http://mat1.gtimg.com/app/opent/images/websites/space.gif",
					"s_url":common.config.url.root+"login_callback.html?"
				},
				url = 'http://ui.ptlogin2.qq.com/cgi-bin/login?',
				loginStyle = common.config.get("LoginStyle"),
				showLoginWin = function(url){
					var t = (screen.height - h)/2,
						l = (screen.width - w)/2;
					return window.open(url,'_blank',"width="+w+",height="+h+",top="+t+",left="+l+",toolbar=no,menubar=no,scrolbars=no,resizeable=no,status=no");
				},
				showLoginFrame = function(url){
					var loginFrame = $("#loginFrame"),
						rect = {"w":common.config.getBodySize(1),"h":common.config.getBodySize()};
					if (loginFrame.size() === 0){
						loginFrame = $('<div id="loginFrame" class="login_frame"><a href="javascript:;" class="close" data-action="hideParent" title="关闭"></a><iframe frameborder="0" width="100%" height="100%" src="'+url+'"></div>').appendTo($('body'));
						window.ptlogin2_onResize = function(width, height) {
							loginFrame.find("iframe").attr("height",height);
						}
					}
				};
				if (target && target.attr("data-target")){
					m["action"] = target.attr("data-target");
				}
				if (target && target.attr("data-id")){
					m["id"] = target.attr("data-id");
				}
				p["s_url"] += $.param(m);
				url += $.param(p);
				if (loginStyle === 1){
					showLoginFrame(url);
				}else{
					common.opener = showLoginWin(url);
					if (!common.opener){
						showLoginFrame(url);
					};
				}
		},
		"doLoginOut":function(){
			var clearLoginInfo = function(){
				if (window.pt_logout){
					pt_logout.logout(function(n){
						console.log(["do logout failed","super skey and private skey has been cleanen","do deep logout success!"][n]);
						common.user.setLoginInfo({});
						common.cookie.set("uin",null);
						common.cookie.set("skey",null);
						common.cookie.set("luin",null);
						common.cookie.set("lskey",null);
						common.cookie.set("p_uin",null);
						common.cookie.set("p_skey",null);
					});
				}
			};
			if (window.pt_logout){
				clearLoginInfo();
			}else{
				$.getScript("http://imgcache.qq.com/ptlogin/ac/v9/js/ptloginout.js",clearLoginInfo);
			}
		},
		"showMention":function(event,t){
			var mention = common.sendBox.toolbar.mention.init(),
				tOffset = t.offset(),
				offset = t.parent().offset(),
				currentForm,
				formOffset;
				common.sendBox.setCurrentForm(t);
				currentForm = common.sendBox.currentForm;
				formOffset = currentForm.offset(),
				isLowIe = common.config.isLowIe,
				height = common.config.getBodySize();
				mention.removeClass("mention-simple mention-sendbox mention-sendbox-bottom mention-comment mention-comment-bottom").removeAttr("style");
			if (event){
				if (currentForm.hasClass("comment-form")){
					if (offset.top + 180 > height){
						mention.addClass("mention-comment-bottom");
						common.sendBox.toolbar.mention.show(height - offset.top + 9,offset.left - 2);
					}else{
						mention.addClass("mention-comment");
						common.sendBox.toolbar.mention.show(offset.top+29,offset.left - 2);
					}
				}else if(currentForm.hasClass("sendbox-form")){
					if (common.sendBox.isBottom){
						mention.addClass("mention-sendbox-bottom");
						common.sendBox.toolbar.mention.show(0,offset.left - 2);
					}else{
						mention.addClass("mention-sendbox");
						common.sendBox.toolbar.mention.show(offset.top+29,offset.left - 2);
					}
				}
			}else{
				mention.addClass("mention-simple");
				offset = common.sendBox.getCaretOffset(t);
				common.sendBox.toolbar.mention.show(0,0);
				if (tOffset.top + offset.top + mention.height() > height){
					mention.css({"bottom":height - tOffset.top - offset.top + 27,"left":tOffset.left + offset.left});
				}else{
					mention.css({"top":tOffset.top + offset.top,"left":tOffset.left + offset.left});
				}
			}
		},
		"showEmotion":function(event,t){
			var emotion = common.sendBox.toolbar.emotion.init(),
				offset = t.parent().offset(),
				currentForm = common.sendBox.setCurrentForm(t),
				foffset = currentForm.offset(),
				height = common.config.getBodySize(),
				qqface = $("#qqface").removeClass("qqface-comment qqface-comment-bottom qqface-sendbox-bottom qqface-sendbox").removeAttr("style");
			if (currentForm.hasClass("comment-form")){
				if (offset.top + 29 + qqface.height() > height){
					qqface.addClass("qqface-comment-bottom");
					common.sendBox.toolbar.emotion.show(offset.top - qqface.height() - 10,foffset.left-24);
				}else{
					qqface.addClass("qqface-comment");
					common.sendBox.toolbar.emotion.show(offset.top+29,foffset.left-24);
				}
			}else if(currentForm.hasClass("sendbox-form")){
				if (common.sendBox.isBottom){
					qqface.addClass("qqface-sendbox-bottom");
					common.sendBox.toolbar.emotion.show(0,1);
				}else{
					qqface.addClass("qqface-sendbox");
					common.sendBox.toolbar.emotion.show(offset.top+30,1);
				}
			}
		},
		"insertEmotion":function(event,t){
			var form = common.sendBox.currentForm;
			common.sendBox.insertEmotion(t.attr("title"),form.find(".content"));
			common.sendBox.toolbar.emotion.hide();
		},
		"insertMention":function(event,t){
			var form = common.sendBox.currentForm;
			common.sendBox.insertMention(t.attr("data-name"),form.find(".content"));
			common.sendBox.toolbar.mention.hide();
		},
		"showPicUploader":function(event,t){
			var uploader = common.sendBox.toolbar.pic.init(t.parent().index()),
				offset = t.offset(),
				tOffset = t.parent().offset(),
				height = common.config.getBodySize();
				
				uploader.removeClass("none").removeAttr("style");
				if (common.sendBox.isBottom){
					uploader.css({"bottom":39});
				}else{
					uploader.css({"top":tOffset.top+30});
				}
		},
		"showTimeline":function(event,t){
			common.timeline.request(t);
		},
		"showRelay":function(event,t){
			common.sendBox.showCommentBox(t,"relay");
		},
		"showReply":function(event,t){
			common.sendBox.showCommentBox(t,"reply");
		},
		"setTheme":function(){
			var theme = +common.config.get("theme"),
				noBg = +common.config.get("nobg")[0];
			$('<link href="http://mat1.gtimg.com/app/vt/css/read/theme/' + theme + '.css?v=1" type="text/css" rel="stylesheet">').appendTo($('head'));
			if (!noBg){
				$("body").addClass("body-bg");
			}
		},
		"toggleTimelineHead":function(event,t){
			var p = t;
			while (!p.parent().hasClass("timeline_head")){
				p = p.parent();
			}
			p.addClass("none").siblings().removeClass("none");
		}
	},
	"init":function(){
		console.log("你打开了浏览器调试器是因为发现什么问题了吗，欢迎在腾讯微博上通过@api_weibo和我们联系，公司内同事可通过RTX联系[微博CGI接口技术咨询]");
		$("body").click(function(event){
			var t = $(event.target),actionname = t.attr("data-action");
			if (actionname && common.action[actionname]){
				common.action[actionname](event,t);
				return false;
			}else if(actionname){
				alert("unset action:"+actionname);
			}
		});
		common.config.init(function(config){
			common.action.setTheme();
			common.user.init();
			common.dialog.init();
			common.titlebar.init();
			common.sendBox.init();
			content = common.sendBox.bindEvents($("#sendboxForm"),config.ModuleConfigure.PubModule);
			common.timeline.init();
		});
	},

	//后台CGItoken校验
	getToken : function() {
		var hash = 5381,
			str = common.cookie.get("p_skey") || common.cookie.get("p_lskey") || common.cookie.get("skey") || common.cookie.get("lskey");
		if(str){
			for(var i = 0, len = str.length; i < len; ++i){
				 hash += (hash<<5) + str.charCodeAt(i);
			}
			return hash & 0x7fffffff;
		}else{
			return hash;
		}
	}

};
$(function(){
	if (!window.console){
		window.console = {
			"log":function(){}
		};
	}
	common.init();
});