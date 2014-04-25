(function(){
	var 
	strToJson = function(str){
		if (window.JSON){
			try{
				return JSON.parse(str);
			}catch(e){
				return null;
			}
		}else{
			try{
				eval('var __json__='+str);
				return __json__;
			}catch(e){
				return null;
			}
		}
	},
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
			if (!imgs[i].src || ((!/^https?:\/\//.test(imgs[i].src))) || tarr[imgs[i].src]){
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
		"url":config.href,
		"cs":1,
		"iframeurl":location.href,	//iframe_url
		"appkey":"801192940",//"801000271",
		"title":document.title,
		"summary":getSelectText()||config.summary //摘要
	},
	loadJs = function(params){
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement('script');

		script.onload = script.onreadystatechange = script.onerror = function() {
			if (script && script.readyState && /^(?!(?:loaded|complete)$)/.test(script.readyState)) return;

			script.onload = script.onreadystatechange = script.onerror = null;
			script.src = '';
			script.parentNode.removeChild(script);
			script = null;

			params.callback();
		};

		script.charset = params.charset || document.charset || document.characterSet || 'utf-8';
		script.src = params.src;

		try {
			head.appendChild(script);
		} catch(exp) {}
	};
	
	window.onmessage = function(event){
		var d = (event || window.event).data;
		if (d){
			d = strToJson(d);
		}
		if (d && d.action){
			if (d.action === "resize"){
				FUCAI.dialog.resizeTo(580,d.data.height-6);
			}else if(d.action === "success"){
				FUCAI.dialog.close();
			}
		}
	};
	if (window.postMessage === undefined){
		setInterval(function(){
			var name = window.name;
			if (name){
				window.onmessage({"data":name});
			}
		},500);
	};
	window.FUCAI = {};
	loadJs({
		"src":"http://www.xiefucai.com/js/dialog.js",
		"charset":"utf-8",
		"callback":function(){
			FUCAI.share = function(elem){
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
					return arr.join("&").slice(0,length);
				},
				url = "http://share.v.t.qq.com/index.php?c=share&a=index&"+param(params,2014);
				FUCAI.dialog.moveTo((document.documentElement.clientWidth - 588)/2,(document.documentElement.scrollTop || document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight-260)/2);
				FUCAI.dialog.showFrame(url);
			};
			FUCAI.share({'name':'appkey','value':'801363995'});
			window.FUCAI = FUCAI;
		}
	});
})();