if (!window.common){
	window.common = {};
}
window.common.dialog = (function(){
	var newElem = function(tagName,parent,styleVal,innerStr,doc){
			var elem = (doc || document).createElement(tagName);
			if (tagName === "iframe"){
				elem.setAttribute("frameBorder","0");
			}
			parent.appendChild(elem);
			elem.setAttribute("style",styleVal);
			elem.style.cssText = styleVal;
			if (innerStr){
				elem.innerHTML = innerStr;
			}
			return elem;
		},
		oPos = {"x":0,"y":0},
		cPos = {"x":0,"y":0},
		getObjPos = function(obj) {
			var x = 0,y = 0;
			if (obj.getBoundingClientRect) {
				var box = obj.getBoundingClientRect();
				var D = document.documentElement;
				x = box.left + Math.max(D.scrollLeft, document.body.scrollLeft) - D.clientLeft;
				y = box.top + Math.max(D.scrollTop, document.body.scrollTop) - D.clientTop;
			}
			else {
				for (; obj !== document.body; x += obj.offsetLeft, y += obj.offsetTop, obj = obj.offsetParent);
			}
			return {
				'x': x,
				'y': y
			};
		},
		getCurPos = function(e) {
			var D = document.documentElement;
				e = e || window.event;
			if (e.pageX) return {
				x: e.pageX,
				y: e.pageY
			};
			return {
				x: e.clientX + D.scrollLeft - D.clientLeft,
				y: e.clientY + D.scrollTop - D.clientTop
			};
		},
		isMoving = false,
		//mask = newElem("div",document.body,"background:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;z-index:2147483647;display:none;position:fixed;_ position:absolute;"),
		//win = newElem("div",mask,"position:absolute;top:50%;left:50%;width:580px;height:326px;margin:-200px 0 0 -250px;border:0 solid #9BD5F5;border:4px solid #ccc;border-radius:3px 3px 0 0;background:#fff;"),
		win = newElem("div",document.body,"position:absolute;top:50%;left:50%;width:580px;height:326px;border:0 solid #9BD5F5;border:4px solid rgba(0,0,0,.2);border-radius:3px 3px 0 0;z-index:2147483647;"),
		header = newElem("h2",win,"height:34px;line-height:34px;margin:0;padding:0;position:relative;font-size:14px;border-bottom:1px solid #D8E6F4;background:#F1F6FB;background:-o-linear-gradient(top,#FFF,#F1F6FB);background:-moz-linear-gradient(top,#FFF,#F1F6FB);background:-webkit-gradient(linear, left top, left bottom, from(#FFF), to(#F1F6FB));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF', endColorstr='#F1F6FB');"),
		title = newElem("span",header,"color:#666;display:block;height:34px;line-height:34px;text-indent:10px;text-align:left;pointer-events:none;position:static;font-size:14px;"),
		closeBtn = newElem("a",header,"display:block;position:absolute;top:0;right:0;width:34px;height:34px;line-height:34px;color:#999;text-decoration:none;text-align:center;font-weight:normal;font-size:28px;font-family:Arial;text-indent:0;"),
		iframe = newElem("iframe",win,"vertical-align:bottom;background:#fff;border:none;border:none;");
		iframe.setAttribute("src","about:blank");
		iframe.setAttribute("width","100%");
		iframe.setAttribute("height",120);
		iframe.setAttribute("allowtransparency","true");
		iframe.setAttribute("scrolling","no");
		iframe.setAttribute("marginwidth",0);
		iframe.setAttribute("marginheight",0);
		iframe.frameBorder = 0;
		title.innerHTML = "提示";
		closeBtn.innerHTML = "&times;";
		closeBtn.setAttribute("href","javascript:;");
		closeBtn.onclick = function(){
			win.style.display = 'none';
		};
		
		header.onmousedown = function(e){
			header.style.cursor = 'move';
			if (!document.all) e.preventDefault();
			oPos = getObjPos(win);
			cPos = getCurPos(e);
			isMoving = true;
		};
		
		document.onmouseup = function(e) {
			isMoving = false;
			header.style.cursor = 'default';
		};
		
		document.onmousemove = function(e){
			if (isMoving) {
				win.style.position = 'absolute';
				var Pos = getCurPos(e);
				win.style.left = Pos.x - cPos.x + oPos.x + 'px';
				win.style.top = Pos.y - cPos.y + oPos.y + 'px';
			}
		};
		
	return {
		"show":function(){
			win.style.display = "block";//mask.style.display = "block";
		},
		"close":function(){
			win.style.display = "none";//mask.style.display = 'none';	
		},
		"resize":function(){
			var winRect = {"w":0,"h":0},docRect = {"w":0,"h":0};
			if (!iframe.src){
			 win.style.width = "auto";
			}
			win.style.height = "auto";
			win.style.marginLeft = "0";
			win.style.marginTop = "0";
			winRect.w = win.clientWidth;
			winRect.h = win.clientHeight;
			docRect.w = document.documentElement.clientWidth || document.body.clientWidth;
			docRect.h = document.documentElement.clientHeight || document.body.clientHeight;
			win.style.left = ((docRect.w-winRect.w - 6)/2)+"px";
			win.style.top = ((docRect.h-winRect.h - 6)/2)+"px";
		},
		"alert":function(str){
			var caller = this,
				resize = function(){
					iframe.width = iframe.contentWindow.document.documentElement.scrollWidth;
					iframe.height = iframe.contentWindow.document.documentElement.scrollHeight;
				},
				setText = function(elem,text){
					if (elem.contentWindow.document.body){
						elem.contentWindow.document.body.innerHTML = '<div style="font-size:14px;color:#333;padding:30px;text-align:center;min-width:240px;white-space:pre;">'+text+'</div>';
						if (!elem.contentWindow.document.body.innerHTML){
							setText(elem,text);
						}
						resize();
						caller.resize();
					}else{
						setTimeout(function(){
							setText(elem,text);
						},100);
					}
				};
			caller.show();
			if (iframe.src !== "about:blank"){
				iframe.src="about:blank";
			}
			iframe.setAttribute("width",1);
			iframe.setAttribute("height",1);
			setText(iframe,str);
		},
		"showFrame":function(src){
			iframe.src = src;
			this.show();
		},
		"resizeTo":function(w,h){
			var winRect = {"w":0,"h":0},docRect = {"w":0,"h":0};
			iframe.width = w;
			iframe.height = h;
			win.style.width = w+"px";
			win.style.height = (h + 36) + "px";
			win.style.marginLeft = win.style.marginTop = 0;
			iframe.width = "100%";
			winRect.w = win.clientWidth;
			winRect.h = win.clientHeight;
			docRect.w = document.documentElement.clientWidth || document.body.clientWidth;
			docRect.h = document.documentElement.clientHeight || document.body.clientHeight;
			win.style.left = ((docRect.w-winRect.w - 6)/2)+"px";
			win.style.top = (document.documentElement.scrollTop+document.body.scrollTop + (docRect.h-winRect.h - 6)/2)+"px";
			//this.resize();
		},
		"moveTo":function(x,y){
			win.style.left = x+"px";
			win.style.top = y+"px";
		},
		"getFrame":function(){
			return iframe;
		}
	};
})(window);