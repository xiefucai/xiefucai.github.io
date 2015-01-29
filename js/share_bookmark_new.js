(function(){
	var
	config = {
		"title": document.title || "",
		"summary":(function(metas){
				for(var i=0,k=metas.length;i<k;i++){
					if (/^description$/i.test(metas[i].getAttribute("name"))){
						return metas[i].content;
					}
				}
				return "";
			})(document.getElementsByTagName("meta")),
		"href": location.href.replace(/([^\x00-\xff]+)/g, encodeURIComponent("$1")),
		"target": "toolbar=0,status=0,resizable=1,width=630,height=530"
	},
	showIframe = function(url){
		var mask = document.getElementById("shareToTxWb"),
			iframe = mask && mask.getElementsByTagName("iframe")[0],
			win,header,footer,title,closeBtn,
			newElement = function(tagName,parent,styleVal){
				var elem = document.createElement(tagName);
				parent.appendChild(elem);
				elem.setAttribute("style",styleVal);
				return elem;
			},
			newCheckList = function(title,name,list){
				var a = [];
				for(var i=0,k=list.length;i<k;i++){
					a.push('<input type="radio" name="'+name+'" id="'+name+list[i].val+'" value="'+list[i].val+'" style="vertical-align:middle;" onchange="QSHARE.share(this);"/>');
					a.push('<label for="'+name+list[i].val+'" style="vertical-align:middle;">'+list[i].label+'</label>');
				}
				return '<label style="vertical-align:middle;color:gray;">'+title+':</label>'+a.join(" ");
			},
			onMessage = function(d){
				var fun = function(){
					win.style.display = 'none';
				};
				if (/^\d+$/.test(d)){
					if (iframe.height != (+d)){
						iframe.height = d;
					}
				}else if(d && fun){
					if (window.JSON){
						try{
							//fun(JSON.parse(d));
						}catch(e){
							
						}
					}else{
						try{
							fun(eval('('+d+')'));
						}catch(e){

						}
					}
				}
			};

		if (!mask){
			mask = newElement("div",document.body,"background:rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0;left:0;z-index:2147483647;");
			mask.id = "shareToTxWb";
			win = newElement("div",mask,"position:absolute;top:50%;left:50%;width:570px;height:360px;margin:-180px 0 0 -285px;border:1px solid #D0D0D0;");
		//	header = newElement("h2",win,"height:28px;line-height:28px;margin:0;padding:0;position:relative;background:#65B0D9;font-size:14px;");
		//	title = newElement("span",header,"color:white;display:block;height:28px;line-height:28px;text-indent:10px;text-align:left;");
		//	title.innerHTML = "\u5206\u4EAB\u5230\u817E\u8BAF\u5FAE\u535A";
			closeBtn = newElement("a",win,"position:absolute;top:0;right:0;font-size:28px;text-decoration:none;height:33px;line-height:33px;width:33px;display:inline-block;color:#D0D0D0;text-align:center;font-weight:normal;font-family:Arial;");
			closeBtn.innerHTML = "&times;";
			closeBtn.setAttribute("href","javascript:void(0);");
			iframe = newElement("iframe",win,"vertical-align:bottom;");
			iframe.setAttribute("width","100%");
			iframe.setAttribute("height",360);
			iframe.setAttribute("frameborder",0);
			if (window.postMessage){
				if (window.addEventListener){
					window.addEventListener('message',function(event){
						onMessage(event.data);
					});
				}else{
					window.attachEvent("onmessage",function(event){
						onMessage(event.data);
					});
				}
			}else{
				var win = iframe.contentWindow,h = 0;
				setInterval(function(){
					if (iframe.clientWidth>0 && iframe.clientHeight>0){
						onMessage(window.name);
						window.name="";
					}
				},500);
			}
			mask.onclick = function(event){
				var tagName;
				event = window.event || event;
				tagName = (event.target || event.srcElement).tagName;
				if (tagName === "DIV" || tagName === "A"){
					mask.style.display = "none";
				}
			}
		}
		iframe.src = url;
		mask.style.display = "block";
	},
	tripurl = function(str){
		return str.replace(new RegExp("((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z]{2,5}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*", "gi"), new Array(12).join("aa"));
	},
	getStrLength = function(str){
		return str.replace(/[^\u0000-\u00ff]/g, "aa").length;
	},
	getSelectText = function(){
		return (document.selection ? document.selection.createRange().text: document.getSelection()).toString().replace(/[\s\n]+/g, " ");
	},
	getImages = function(){
		var imgs=(Array.prototype.slice.call(document.images)).sort(function(m1,m2){
		    return m2.width-m1.width;
		}),
		tarr = {},
		imgarr=[],
		simgarr=[];
		for (var i in imgs){
			if (!imgs[i].src || tarr[imgs[i].src]){
				continue;
			}
			tarr[imgs[i].src]=1;
			if (imgs[i].width<180||imgs[i].height<180){
				simgarr.push(encodeURIComponent(imgs[i].src));
				continue;
			}
			imgarr.push(encodeURIComponent(imgs[i].src));
		}
		return imgarr.concat(simgarr).join("|");
	},
	joinText = function(){
		var s1 = arguments[0] || "",
		s2 = Array().slice.call(arguments, 1).join(" ").replace(/[\s\n]+/g, " "),
		k = 257 - getStrLength(tripurl(s1));
		var s = s2.slice(0, (k - 4) >> 1);
		if (getStrLength(s2) > k) {
			k = k - 3;
			for (var i = k >> 1; i <= k; i++) {
				if (getStrLength(tripurl(s2.slice(0, i))) >= k) {
					break;
				}
				else {
					s = s2.slice(0, i);
				}
			}
			s += "...";
		} else {
			s = s2;
		}
		return [s1, s];
	},
	params = {
		"c":"share",
		"a":"index",
		"url":config.href,
		"appkey":"801363995",//"801000271",
		"title":document.title,
		"summary":getSelectText()||config.summary,
	},
	share = function(elem){
		if (elem){params[elem.name] = elem.value;}
		params["title"] = joinText(config.title).reverse().join(" ");
		params["summary"] = getSelectText()||config.summary;
		param = function(o,length){
			var arr = [];
			for(var i in o){
				arr.push([i,encodeURIComponent(o[i])].join("="));
			}
			arr.sort(function(v1,v2){return v1.length-v2.length;});
			arr.push(["pic",getImages()].join("="));
			arr.push(["bm",0].join("="));
			return arr.join("&").slice(0,length);
		},
		url = "http://share.v.t.qq.com/index.php?"+param(params,2014);
		var opener = showIframe(url);
	}
	share();
	window.QSHARE = {"share":share};
})();
