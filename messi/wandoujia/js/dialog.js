if (!window.common) {
	window.common = {}
}
if (!window.common.action) {
	window.common.action = {}
}
window.common.dialog = function() {
	var j, f = ['<div class="modulebox none">', '<iframe width="100%" height="100%" frameborder="0" class="modulebox_iframe"></iframe>', '<div class="modulebox_mask"></div>', '<form class="modulebox_win">', '<a href="javascript:;" class="modulebox_close" title="\u5173\u95ed">&times;</a>', '<h2 class="modulebox_title"><span class="module_dialog_title">\u63d0\u793a</span></h2>', '<div class="modulebox_content"></div>', "</form>", "</div>"].join(""),
	i = document.createElement("link"),
	d = $(f).appendTo($("body")),
	e = d.find(".modulebox_win"),
	a = d.find(".modulebox_close"),
	h = d.find(".modulebox_title"),
	k = d.find(".modulebox_content");
	g = function() {
		return (document.documentElement.clientHeight || document.body.clientHeight)
	},
	j = {
		isVisible: !d.hasClass('none'),
		dom: {
			box: d,
			win: e,
			close_btn: a,
			title: h,
			content: k
		},
		close: function(b) {
			b && b.beforeClose && b.beforeClose();
			d.addClass('none');
			j.isVisible = false;
			b && b.afterClose && b.afterClose();
			$("body").removeAttr("scroll").removeClass("noscroll")
		},
		show: function(b) {
			this.opt = $.extend({
				type: 0
			},
			b);
			if ((typeof b.title !== "undefined")) {
				if ((/^<.*>.*<\/.*>$/.test(b.title) === false) && (b.title !== false)) {
					b.title = '<span class="module_dialog_title">' + b.title + "</span>"
				}
				h.html(b.title)
			}
			typeof(b.text) != "undefined" && k.html(b.text);
			if (b.title === false) {
				h.addClass("none")
			} else {
				h.removeClass("none")
			}
			if (b.showCloseBtn === false) {
				a.addClass("none")
			} else {
				a.removeClass("none")
			}
			e.removeClass("modulebox_win_0 modulebox_win_1 modulebox_win_2 modulebox_win_3").removeAttr("style").addClass("modulebox_win_" + this.opt.type);
			if (d.hasClass("none")) {
				d.removeAttr("style").removeClass('none');
				j.isVisible = true
			}
			/*
			if (b.width) {
				if (/^\d+%$/.test(b.width)) {
					b.width = (document.documentElement.clientWidth || document.body.clientWidth) * parseInt(b.width) * 0.01
				}
				e.css({
					width: b.width,
					"margin-left": -parseInt(b.width, 10) / 2
				})
			}
			*/
			if (b.height) {
				if (/^\d+%$/.test(b.height)) {
					b.height = g() * parseInt(b.height) * 0.01;
					b.height = b.height | 0
				} else {
					if (b.height === "auto") {
						if (/^<iframe.*><\/iframe>$/.test(b.text)) {} else {
							k.css({
								height: "auto"
							});
							b.height = e[0].scrollHeight
						}
					}
				}
			} else {
				b.height = j.win.height()
			}
			if (b.top) {
				e.css({
					height: b.height,
					top: b.top
				});
				k.css({
					height: b.height - 41
				})
			} else {
				e.css({
					height: b.height,
					top: parseInt((g() - b.height) / 2)
				});
				k.css({
					height: b.height - 41
				})
			}
			b.callback && b.callback();
			if (b.hideScroller) {
				$("body").attr("scroll", "no").addClass("noscroll")
			}
		},
		alert: function(m, l) {
			var c = {
				width: 420,
				height: 160,
				text: "",
				title: "\u63d0\u793a",
				buttonText: "\u786e\u5b9a",
				type: 1,
				autoFocus: 1
			},
			b = ['<div class="modulebox_content_text">', '<div class="modulebox_text">', "##", "</div>", "</div>", '<div class="ib_wrap">', '<input type="button" class="dialog_button w_ok" value="#1#"/>', "</div>"].join("");
			if (typeof(m) === "string") {
				c.text = m
			} else {
				if (typeof(m) === "object") {
					$.extend(c, m)
				}
			}
			c.text = b.replace("##", c.text).replace("#1#", c.buttonText);
			this.show(c);
			k.find(".w_ok").bind({
				click: function(o) {
					var n = true;
					if (l) {
						n = l.call(this, o)
					}
					if (n !== false) {
						j.close()
					}
					return false
				}
			});
			if (c.autoFocus) {
				k.find(".w_ok")[0].focus()
			}
			return {
				setButtonState: function() {}
			}
		},
		showStatus: function(c) {
			var m = {
				width: 280,
				height: "auto",
				title: false,
				text: "\u6b63\u5728\u52a0\u8f7d",
				type: 4,
				showCloseBtn: false,
				autoFocus: false
			},
			l = c.icon || "loading",
			b = ['<div class="modulebox_icon modulebox_icon_' + l + '"></div><div class="modulebox_icon_text modulebox_icon_text_' + l + '">##</div>'].join("");
			if (typeof(c) === "string") {
				m.text = c
			} else {
				if (typeof(c) === "object") {
					$.extend(m, c)
				}
			}
			m.text = b.replace("##", m.text);
			e.removeAttr("style");
			k.removeAttr("style");
			this.show(m);
			return {
				icon: k.find(".modulebox_icon"),
				text: k.find(".modulebox_icon_text")
			}
		},
		confirm: function(n, m, l) {
			var c = {
				width: 420,
				height: 160,
				text: "",
				title: "\u63d0\u793a",
				type: 2,
				ensure: "\u786e\u5b9a",
				cancel: "\u53d6\u6d88",
				autoFocus: 1
			},
			b = ['<div class="modulebox_text">', "##", "</div>", '<div class="ib_wrap2">', '<input type="button" value="#1#" class="dialog_button w_ok"/>', '<input type="button" value="#2#" class="dialog_button w_cancel ib ml0"/> ', "</div>"].join("");
			if (typeof(n) === "string") {
				c.text = n
			} else {
				if (typeof(n) === "object") {
					$.extend(c, n)
				}
			}
			c.text = b.replace("##", c.text);
			c.text = c.text.replace("#1#", c.ensure).replace("#2#", c.cancel);
			this.show(c);
			k.find(".w_cancel").bind("click",
			function(o) {
				j.close();
				l && l(o);
				return false
			});
			k.find(".w_ok").bind("click",
			function(p) {
				var o = m && m(p);
				if (o !== false) {
					j.close()
				}
				return false
			});
			if (c.autoFocus) {
				k.find(".w_ok").get(0).focus()
			}
		},
		showFrame: function(l) {
			var c = {
				width: "420",
				height: "150",
				text: "",
				title: "\u63d0\u793a",
				type: 3
			},
			b = '<iframe src="{text}" frameborder="0" width="100%" height="100%" marginwidth="0" marginheight="0" id="dialog_frame"></iframe>';
			if (typeof(l) === "string") {
				c = $.extend(c, {
					text: l
				})
			} else {
				if (typeof(l) === "object") {
					c = $.extend(c, l)
				}
			}
			c.text = b.replace(/\{(\w+)\}/g,
			function() {
				var m = arguments[1] || "";
				if (c[m]) {
					return c[m]
				} else {
					return "{" + m + "}"
				}
			});
			this.show(c);
			return k.find("iframe")
		},
		resize: function(b) {
			if (b.height) {
				switch (this.opt.type) {
				case 0:
					break;
				case 1:
					break;
				case 2:
					break;
				case 3:
					this.dom.content.find("iframe").attr("height", b.height);
					this.dom.content.height("auto");
					this.dom.win.height("auto");
					break
				}
			}
			$.extend(this.opt, b)
		}
	};
	$("head").append($(i));
	i.rel = "stylesheet";
	i.type = "text/css";
	i.href = "./css/dialog.css?20140811";
	a.bind("click",
	function() {
		j.close();
		return false
	});
	return j
};