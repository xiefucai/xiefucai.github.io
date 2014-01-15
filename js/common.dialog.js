$(function(){
if (!window.common){
	window.common = {};
}
window.common.dialog = function(){
	var o,
		tpl = ['<div class="modulebox">',
				'<iframe width="100%" height="100%" frameborder="0" class="modulebox_iframe"></iframe>',
				'<div class="modulebox_mask"></div>',
				'<div class="modulebox_win">',
					'<a href="javascript:;" class="modulebox_close" title="关闭">&times;</a>',
					'<h2 class="modulebox_title">提示</h2>',
					'<div class="modulebox_content"></div>',
				'</div>',
			'</div>'].join('');
	 var m = $(tpl).appendTo($('body')),
	 	 w = m.find('.modulebox_win'),
		 b = m.find('.modulebox_close'),
		 t = m.find(".modulebox_title")
		 c = m.find(".modulebox_content"),
		 o = {
		 	"dom"  :{
		 		"box"      :m,
		 		"win"      :w,
		 		"close_btn":b,
		 		"title"    :t,
		 		"content"  :c
		 	},
		 	"close":function(op){
		 		op && op.beforeClose && op.beforeClose();
		 		m.hide();
		 		op && op.afterClose && op.afterClose();
		 		$("body").removeAttr("scroll").removeClass("noscroll");
		 	},
		 	"show" :function(op){
		 		typeof(op.title)!="undefined"  && t.html(op.title);
		 		typeof(op.text) !="undefined"  && c.html(op.text);

				if (op.width){
					if (/^\d+%$/.test(op.width)){
						op.width = (document.documentElement.clientWidth || document.body.clientWidth) * parseInt(op.width) * 0.01;
					}
					w.css({'width' :op.width,'margin-left': -parseInt(op.width,10)/2});
				}

				if (op.height){
					if (/^\d+%$/.test(op.height)){
						op.height = (document.documentElement.clientHeight || document.body.clientHeight) * parseInt(op.height) * 0.01;
						op.height = op.height|0;
					}
					w.css({'height':op.height,'margin-top': -parseInt(op.height,10)/2});
					c.css({'height':op.height-41});
				}

		 		if (!m.is(":visible")){
					m.show();
					op.callback && op.callback();
					if (op.hideScroller){
						$("body").attr("scroll","no").addClass("noscroll");
					}
				}
		 	},
		 	"alert":function(op,callback){
		 		var settings = {
		 			 "width" : 420,
		 			 "height": 150,
		 			 "text"  : "",
		 			 "title" : "提示"
		 		},
		 		tpl = ['<div class="modulebox_text">',
			 				'##',
			 		  '</div>',
				 	   '<div class="ib_wrap">',
				 		  '<a href="javascript:;" class="modulebox_button w_ok">确定</a>',
				 	   '</div>'].join('');
		 		if (typeof(op) === "string"){
		 			op = tpl.replace('##',op);
		 			settings = $.extend(settings,{"text":op});
		 		}else if(typeof(op) === "object"){
		 			op.text = tpl.replace('##',op.text);
		 			$.extend(settings,op);
		 		}
		 		this.show(settings);
		 		c.find(".w_ok").bind("click",function(){
		 			o.close();
					callback && callback();
					return false;
		 		});
		 	},
		 	"confirm":function(op,okFn,cancelFn){
		 		var settings = {
		 			 "width" : 420,
		 			 "height": 150,
		 			 "text"  : "",
		 			 "title" : "提示"
		 		},
		 		tpl = ['<div class="modulebox_text">',
			 				'##',
			 		  '</div>',
				 	  '<div class="ib_wrap">',
						 '<a href="javascript:;" class="w_btn w_cancel ib ml0">取消</a>',
						 '<a href="javascript:;" class="w_btn w_ok ib">确定</a>',
					  '</div>'].join('');
		 		if (typeof(op) === "string"){
		 			op = tpl.replace('##',op);
		 			settings = $.extend(settings,{"text":op});//
		 		}else if(typeof(op) === "object"){
		 			op.text = tpl.replace('##',op.text);
		 			$.extend(settings,op);
		 		}
		 		this.show(settings);
		 		c.find(".w_ok").bind("click",function(){
		 			o.close();
		 			okFn && okFn();
		 			return false;
		 		});
		 		c.find(".w_cancel").bind("click",function(){
		 			o.close();
		 			cancelFn && cancelFn();
		 			return false;
		 		});
		 	},
			"showFrame":function(op){
				var settings = {
					 "width"  : "420",
					"height" : "150",
					"text"   : "about:blank",
					"title"  :"提示"
				},tpl = '<iframe src="{text}" frameborder="0" width="100%" height="100%" marginwidth="0" marginheight="0"></iframe>';

				if (typeof(op) === "string"){
					settings = $.extend(settings,{"text":op});
				}else if(typeof(op) === "object"){
					settings = $.extend(settings,op);
				}

				settings.text = tpl.replace(/\{(\w+)\}/g,function(){
					var i =arguments[1] || "";
					if (settings[i]){
						return settings[i];
					}else{
						return "{"+i+"}";
					}
				});
				this.show(settings);
			}
		 };
	 b.bind("click",function(){o.close();return false;});
	 return o;
}
});