(function(d){
	var p = (function(v){
				var o = {};
				v.replace(/([^&=]+)=([^&=]*)/g,function(){
					o[arguments[1]] = decodeURIComponent(arguments[2]);
					return '';
				});
				return o;
			})(location.search.slice(1)),
		jsonToString = function(o){
			if (window.JSON){
					return JSON.stringify(o);
				}
			
				var arr = [],
					format = function(s){
						if (typeof s === "object" && s !== null){
							if (s.length){
								var sarr = [];
								for(var j=0,jk=s.length;j<jk;j++){
									sarr.push(format(s[j]));
								}
								return "["+sarr.join(",")+"]";
							}
							return jsonToString(s);
						}else if(typeof s === "string"){
							return '"'+s+'"';
						}else if(typeof s === "number"){
							return s;
						}else{
							return s;
						}
					};
				for(var i in o){
					arr.push(['"'+i+'"',format(o[i])].join(":"));
				}
				return "{"+arr.join(",")+"}";	
		},
		postMessage = function(s){
			if (typeof s === 'object'){
				if (p['action']){
					s['action'] = p['action'];
				}
				s = jsonToString(s);
			}
			if (window.postMessage){
				parent.postMessage(s,"*");
			}else{
				parent.name = s;
			}
		},
		requestAgain = function(){
			p['pdtid'] = 2;
			p['t']=+new Date();
			$.ajax({
				'url':location.pathname,
				'data':p,
				'type':'get',
				'dataType':'json',
				'success':function(data){
					postMessage(data);
					setTimeout(requestAgain,p['interval']);
				}
			});
		};
		
		p['interval'] = +p['interval'];
		postMessage(d);
		console.log(p['interval']);
		if (!isNaN(p['interval']) && p['interval']>0){
			p['interval'] = p['interval'] * 1000;
			
			console.log(p['interval']);
			if (!window.jQuery){
				var s = document.createElement('script');
					s.type='text/javascript';
					s.charset = 'utf-8';
					s.src = 'http://'+location.hostname+'/js/jquery-1.4.3.min.js';
					s.onload = function(){
						setTimeout(requestAgain,p['interval']);
					};
					s.onreadystatechange = function(){
						if (s.readyState === 'complete'){
							setTimeout(requestAgain,p['interval']);
						}
					}
					document.getElementsByTagName('head')[0].appendChild(s);	
			}
			//$.ajax();
		}
})(window.userData);