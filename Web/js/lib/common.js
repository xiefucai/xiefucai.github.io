window.common = {};
common.__APIPATH__ = 'http://api.fucaixie.com:8080';

common.json = {
    'toString':function(o){
        if (window.JSON){
            return JSON.stringify(o);
        }

        var arr = [],
            format = function(s){
                if (typeof s === 'object' && s !== null){
                    if (s.length){
                        var sarr = [];
                        for(var j=0,jk=s.length;j<jk;j++){
                            sarr.push(format(s[j]));
                        }
                        return '['+sarr.join(',')+']';
                    }
                    return common.json.toString(s);
                }else if(typeof s === 'string'){
                    return '"'+s.replace(new RegExp('"','g'),'\\\"')+'"';
                }else if(typeof s === 'number'){
                    return '"'+s+'"';
                }else{
                    return s;
                }
            };
        for(var i in o){
            arr.push(['"'+i+'"',format(o[i])].join(':'));
        }
        return '{'+arr.join(',')+'}';
    },
    'toParam':function(json){
        var arr = [];
        for(var i in json){
            arr.push([i,json[i]].join('='));
        }
        return arr.join('&');
    },
    'getKeysNum':function(data){
        var count = 0;
        if (!$.isArray(data)){
            for(var i in data){
                count++;
            }
        }else if(data){
            count = data.length;
        }
        return count;
    }
};

common.string = {
    'parseJSON': function(s) {
        try {
            eval('common.__json__=' + s);
            return common.__json__;
        } catch (e) {
            return null;
        }
    },
    'toJSON': function(s) {

        if (window.JSON) {
            try {
                return JSON.parse(s);
            } catch (e) {
                return null;
            }
        } else {
            try {
                return $.parseJSON(s);
            } catch (e) {
                return null;
            }
        }
    },
    'toMac': function(s) {
        return s.replace(/(.{2})/g, '$1:').slice(0, -1);
    },
    'htmlEncode': function(s) {
        return $('<div/>').text(s).html();
    },
    'htmlDeoode': function(s) {
        return $('<div/>').html(s).text();
    },
    'urlDecode': function(url) {
        var src = 0;
        try {
            src = decodeURIComponent(url);
        } catch (e) {
            try {
                src = unescape(url);
            } catch (e) {

            }
        }
        return src || url;
    },
    //将IP地址转化为二进制字符串
    'ipToBinary': function(ip) {
        return ip.replace(/(\d+)\.?/g, function() {
            return (new Array(9).join('0') + (+arguments[1]).toString(2)).slice(-8);
        });
    },
    'ipToNumber': function(ip) {
        var a = ip.split('.');
        return (a[0] << 24) | (a[1] << 16) | (a[2] << 8) | (a[3] << 0);
    }
};

common.number = {
    //将秒速转换成时间
    'toTime': function(k) {
        var h = Math.floor(k / 3600),
            m = Math.floor((k - h * 3600) / 60),
            s = k % 60,
            a = [];

        if (h < 10) {
            a.push(('00' + h).slice(-2));
        } else {
            a.push(h);
        }
        a.push(('00' + m).slice(-2));
        a.push(('00' + s).slice(-2));
        if (k > 0) {
            return a.join(':');
        } else {
            return '00:00';
        }
    },
    'toSpeed': function(k, u, d) {
        var unit = 1024,
            r;
        if (d === undefined) {
            d = 2;
        }
        if (k === 0) {
            r = '0.00KB';
        } else if (k < unit) {
            r = (+k).toFixed(d) + 'B';
        } else if (k / unit < unit) {
            r = (k / unit).toFixed(d) + 'KB';
        } else if (k / unit / unit < unit) {
            r = (k / unit / unit).toFixed(d) + 'MB';
        } else if (k / unit / unit / unit < unit) {
            r = (k / unit / unit / unit).toFixed(d) + 'GB';
        } else {
            r = (k / unit / unit / unit / unit).toFixed(d) + 'TB';
        }
        r = r.replace(/\.0+(\D+)$/, '$1');
        if (u) {
            return r + '/' + u;
        } else {
            return r;
        }
    },
    'toIp': function(num) {
        var tt = [];
        tt[0] = (num >>> 24) >>> 0;
        tt[1] = ((num << 8) >>> 24) >>> 0;
        tt[2] = (num << 16) >>> 24;
        tt[3] = (num << 24) >>> 24;
        return tt.reverse().join('.');
    }
};

common.string = {
    'parseJSON': function(s) {
        try {
            eval('common.__json__=' + s);
            return common.__json__;
        } catch (e) {
            return null;
        }
    },
    'toJSON': function(s) {

        if (window.JSON) {
            try {
                return JSON.parse(s);
            } catch (e) {
                return null;
            }
        } else {
            try {
                return $.parseJSON(s);
            } catch (e) {
                return null;
            }
        }
    },
    'toMac': function(s) {
        return s.replace(/(.{2})/g, '$1:').slice(0, -1);
    },
    'htmlEncode': function(s) {
        return $('<div/>').text(s).html();
    },
    'htmlDeoode': function(s) {
        return $('<div/>').html(s).text();
    },
    'urlDecode': function(url) {
        var src = 0;
        try {
            src = decodeURIComponent(url);
        } catch (e) {
            try {
                src = unescape(url);
            } catch (e) {

            }
        }
        return src || url;
    },
    //将IP地址转化为二进制字符串
    'ipToBinary': function(ip) {
        return ip.replace(/(\d+)\.?/g, function() {
            return (new Array(9).join('0') + (+arguments[1]).toString(2)).slice(-8);
        });
    },
    'ipToNumber': function(ip) {
        var a = ip.split('.');
        return (a[0] << 24) | (a[1] << 16) | (a[2] << 8) | (a[3] << 0);
    }
};

common.validate = {
    'isCapslock': function(e) {
        var charCode = false,
            shifton = false;
        e = (e) ? e : window.event;
        if (e.which) {
            charCode = e.which;
        } else if (e.keyCode) {
            charCode = e.keyCode;
        }
        if (e.shiftKey) {
            shifton = e.shiftKey;
        } else if (e.modifiers) {
            shifton = !!(e.modifiers & 4);
        }
        if (charCode >= 97 && charCode <= 122 && shifton) {
            return true;
        }
        if (charCode >= 65 && charCode <= 90 && !shifton) {
            return true;
        }
        return false;
    },
    'isNumber': function(v) {
        if (typeof v === 'number') {
            return true;
        } else if (typeof v === 'string') {
            return !isNaN(Number(v));
        } else {
            return false;
        }
    },
    'isIp': function(s) {
        var a = (s || '').split('.'),
            k = a.length,
            r = true;
        for (var i = 0, num; i < k; i++) {
            num = +a[i];
            if (!(num >= 0 && num < 256)) {
                r = r && false;
            }
        }
        return (k === 4) && (a[0] > 0) && r && (+a[0] !== 127) && (+a[3] !== 255);
    },
    'isMask': function(s) {
        if (common.validate.isIp(s)) {
            if (/^1+0+$/.test(lib.string.ipToBinary(s))) {
                return true;
            }
        }
        return false;
    },
    'isMac': function(s) {
        return /^([0-9a-f]{2}:){5}([0-9a-f]{2})$/i.test(s);
    },
    'isPort': function(v) {
        v = +v;
        if (isNaN(v)) {
            return false;
        } else if (v < 1 || v > 65535) {
            return false;
        } else {
            return true;
        }
    }
};

common.href = {
    'get': function(name, str) {
        var o = {};
        (str || location.search.slice(1)).replace(/([^&=]+)=([^&=]+)/g, function() {
            o[arguments[1]] = common.string.urlDecode(arguments[2]);
        });
        if (name) {
            return o[name] || '';
        } else {
            return o;
        }
    }
};

common.cookie = {
    'toJSON': function(str) {
        var o = {};
        (str || document.cookie).replace(/\s*([^=;]+)=([^=;]*)/g, function() {
            o[arguments[1]] = arguments[2];
            return '';
        });
        return o;
    },
    'get': function(name) {
        var r = (new RegExp("\\b" + name + "\\b=([^\\s;]+);?", 'gi')).exec(document.cookie);
        return r && r[1] && unescape(r[1]);
    },
    'set': function(name, value, domain) {
        var Days = 30,
            exp = new Date(),
            hostname = location.hostname;
        if (value === undefined || value === null) {
            Days = -1;
            value = '111';
        }
        if (domain) {
            hostname = domain;
        } else if (!common.validate.isIp(hostname)) {
            hostname = hostname.replace(/^(.*\.)?([^\.]+)\.([^\.]+)$/, '$2.$3');
        }

        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + escape(value) + '; expires=' + exp.toGMTString() + '; path=/;domain=' + hostname;
    },
    'del': function(name) {
        common.cookie.set(name, null);
    },
    'clear': function() {
        var cookies = document.cookie.split(';'),
            cookie;
        for (var i = 0, k = cookies.length; i < k; i++) {
            cookie = cookies[i].split('=');
            common.cookie.del(cookie[0]);
        }
    }
};

common.ajax = function(opt) {
    var form, frame, timeout;
    opt = $.extend({
        'type': 'get',
        'success': function() {},
        'error': function() {}
    }, opt);

    if (/^get$/i.test(opt.type)) {
        $.ajax({
            'url': 'http://api.fucaixie.com:8080' + opt.url,
            'type': opt.type,
            'data': opt.data,
            'dataType': 'jsonp',
            'jsonp': 'callback',
            'success': opt.success,
            'error': opt.error
        });
    } else {
        if ($('#post-frame').length == 0) {
            document.domain = (/\w+\.\w+$/.exec(location.hostname))[0];
            frame = $('<iframe id="post-frame" name="post-frame" width="1" height="1" style="position:absolute;opacity:0;"></iframe>').appendTo($('body'));
        } else {
            frame = $('#post-frame');
        }

        frame[0].callback = function(data) {
            clearTimeout(timeout);
            opt.success(data);
        };

        if (opt.form) {
            form = opt.form;
        }else{
            if ($('#post-form').length == 0) {
                form = $('<form id="post-form" method="post" action="'+ common.__APIPATH__ + opt.url + '" target="post-frame" style="opacity:0;height:1px;width:1px;"></form>').appendTo($('body'));
            } else {
                form = $('#post-form');
                form.html('');
            }
            for (var name in opt.data) {
                form.append($('<input type="hidden" name="' + name + '" value="' + opt['data'][name] + '"/>'));
            }
        }

        timeout = setTimeout(function() {
            opt.error();
        }, 4000);

        form.submit();
    }
};

common.tmpl = (function() {
    var cache = {},
        tmpl = function tmpl(str, data) {
            var fn = /^[\w\-]+$/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +

                "with(obj){p.push('" +

                str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");

            return data ? fn(data) : fn;
        };
    return tmpl;
})();

common.component = {
    'init':function(){
        $('.form-select').each(function(){
            common.component.selector.initEvent.call(this);
        });
        $('.form-check').each(function(){
            common.component.checkbox.initEvent.call(this);
        });
    },
    'checkbox':{
        'initEvent':function(){
            var checker = $(this),
                input = checker.find('input');
            input.bind({
                'focus':function(event){
                    if (checker.hasClass('disabled')){
                        return false;
                    }
                    if (checker.hasClass('form-check-checked')){
                        checker.addClass('form-checked-focus');
                    }else{
                        checker.addClass('form-unchecked-focus');
                    }
                },
                'blur':function(){
                    checker.removeClass('form-unchecked-focus form-checked-focus');
                },
                'click':function(){
                    if (checker.hasClass('disabled')){
                        return false;
                    }
                }
            });
        },
        'onChange':function(target){
            target.parent().removeClass('form-unchecked-focus form-checked-focus');
            if (target.is(':checked')){
                target.parent().addClass('form-check-checked');
            }else{
                target.parent().removeClass('form-check-checked');
            }
        },
        'setValue':function(value){
            var target = $(this);
            if (value === true || value === 1 || value === target.attr('data-checked')){
                target.attr('checked','checked');
                target.parent().addClass('form-check-checked');
            }else{
                target.removeAttr('checked');
                target.parent().removeClass('form-check-checked');
            }
            target.trigger('change');
        }
    },
    'selector':{
        'initEvent':function(){
            var selector = (this.tagName === 'INPUT'?$(this.parentNode):$(this)),
                input = selector.find('input'),
                opts = selector.find('.form-select-opts');
            input.bind({
                'focus':function(){
                    if (selector.hasClass('disabled')){
                        return false;
                    }
                    $('.z1').removeClass('z1');
                    selector.addClass('focus').parent().addClass('z1');
                },
                'keydown':function(event){
                    if (event.keyCode === 9){
                        selector.removeClass('focus').parent().removeClass('z1');
                        return true;
                    }else if(event.keyCode === 13 && selector.hasClass('focus')){
                        return false;
                    }
                },
                'keyup':function(event){
                    var code = event.keyCode,
                        opt = opts.find('.active')
                        ;
                    if (!selector.hasClass('focus')){
                        selector.addClass('focus');
                        if (opt.length === 0){
                            opt.trigger('mouseover');
                            opt = opts.find('a').first();
                        }
                        return;
                    }
                    if (code === 13 && opt.length){
                        opt.trigger('click');
                        selector.removeClass('focus');
                        return false;
                    }else if(code === 38){
                        opt.prev().trigger('mouseover');
                        opt = opt.prev();
                        if (opt.length && opt[0].offsetTop < opts[0].scrollTop){
                             opts[0].scrollTop -= opt.height();
                         }
                    }else if(code === 40){
                        opt.next().trigger('mouseover');
                        opt = opt.next();
                        if (opt.length && (opt[0].offsetTop - opts[0].scrollTop >= opts.height())){
                             opts[0].scrollTop += opt.height();
                         }
                    }
                }
            });

            opts.bind({
                'doSelect':function(event){
                    var target = event.target,
                        jtarget = $(target);
                    input.val(jtarget.text()).attr('data-value',jtarget.attr('data-value'));
                    input.trigger('change');
                },
                'mouseover':function(event){
                    var target = event.target;
                    $(target).addClass('active').siblings().removeClass('active');
                },
                'click':function(event){
                    var target = event.target,
                        jtarget = $(target);
                    if (jtarget.parent().hasClass('form-select-opts')){
                        jtarget.trigger('doSelect');
                    }
                    selector.removeClass('focus');
                    return false;
                }
            });
        },
        'setOpts':function(str,value){
            var selector = $(this.parentNode),
                input = $(this),
                opts = selector.find('.form-select-opts');
                opts.html(str);
                input.val('无').attr('data-value','0');
            if (value === undefined) {
                opts.find('span').first().trigger('doSelect').trigger('mouseover');
            }else{
                opts.find('span[data-value="'+value+'"]').first().trigger('doSelect').trigger('mouseover');
            }
        },
        'setValue':function(value){
            var selector = $(this.parentNode),
                input = $(this),
                opts = selector.find('.form-select-opts').removeClass('active');
                opts.find('span[data-value="'+value+'"]').first().trigger('doSelect').trigger('mouseover');
        }
    }
};

common.dialog = function(__CDNPATH__) {
    var o,
        tpl = ['<div class="modulebox" style="display:none;">',
            '<iframe width="100%" height="100%" frameborder="0" class="modulebox_iframe"></iframe>',
            '<div class="modulebox_mask"></div>',
            '<form class="modulebox_win">',
            '<a href="javascript:;" class="modulebox_close" title="关闭">&times;</a>',
            '<h2 class="modulebox_title"><span class="module_dialog_title">提示</span></h2>',
            '<div class="modulebox_content"></div>',
            '</form>',
            '</div>'
        ].join(''),
        css = document.createElement('link'),
        m = $(tpl).appendTo($('body')),
        w = m.find('.modulebox_win'),
        b = m.find('.modulebox_close'),
        t = m.find('.modulebox_title'),
        c = m.find('.modulebox_content');
    g = function() {
            return (document.documentElement.scrollHeight || document.body.scrollHeight);
        },
        o = {
            'isVisible': m.is(':visible'),
            'dom': {
                'box': m,
                'win': w,
                'close_btn': b,
                'title': t,
                'content': c
            },
            'close': function(op) {
                op && op.beforeClose && op.beforeClose();
                m.hide();
                o.isVisible = false;
                op && op.afterClose && op.afterClose();
                $('body').removeAttr('scroll').removeClass('noscroll');
            },
            'show': function(op) {
                this.opt = $.extend({
                    'type': 0
                }, op);
                if ((typeof op.title !== 'undefined')) {
                    if ((/^<.*>.*<\/.*>$/.test(op.title) === false) && (op.title !== false)) {
                        op.title = '<span class="module_dialog_title">' + op.title + '</span>';
                    }
                    t.html(op.title);
                }
                typeof(op.text) != 'undefined' && c.html(op.text);
                if (op.title === false) {
                    t.addClass('none');
                } else {
                    t.removeClass('none');
                }
                if (op.showCloseBtn === false) {
                    b.addClass('none');
                } else {
                    b.removeClass('none');
                }
                w.removeClass('modulebox_win_0 modulebox_win_1 modulebox_win_2 modulebox_win_3').removeAttr('style').addClass('modulebox_win_' + this.opt.type);;
                if (!m.is(':visible')) {
                    m.removeAttr('style').show();
                    o.isVisible = true;
                }
                if (op.width) {
                    if (/^\d+%$/.test(op.width)) {
                        op.width = (document.documentElement.clientWidth || document.body.clientWidth) * parseInt(op.width) * 0.01;
                    }
                    w.css({
                        'width': op.width,
                        'margin-left': -parseInt(op.width, 10) / 2
                    });
                }
                if (op.height) {
                    //百分比
                    if (/^\d+%$/.test(op.height)) {
                        op.height = g() * parseInt(op.height) * 0.01;
                        op.height = op.height | 0;
                    } else if (op.height === 'auto') {
                        if (/^<iframe.*><\/iframe>$/.test(op.text)) {

                        } else {
                            c.css({
                                'height': 'auto'
                            });
                            op.height = w[0].scrollHeight;
                        }
                    }
                } else {
                    op.height = o.win.height();
                }

                if (op.top) {
                    w.css({
                        'height': op.height,
                        'top': op.top
                    });
                    c.css({
                        'height': op.height - 41
                    });
                } else {
                    w.css({
                        'height': op.height,
                        'top': parseInt((g() - op.height) / 2)
                    });
                    //c.css({'height':op.height-41});
                }

                op.callback && op.callback();
                if (op.hideScroller) {
                    $('body').attr('scroll', 'no').addClass('noscroll');
                }
            },
            'alert': function(op, callback) {
                var settings = {
                        'width': 420,
                        'height': 160,
                        'text': '',
                        'title': '提示',
                        'buttonText': '确定',
                        'type': 1,
                        'autoFocus': 1
                    },
                    tpl = ['<div class="modulebox_content_text">',
                        '<div class="modulebox_text">',
                        '##',
                        '</div>',
                        '</div>',
                        '<div class="ib_wrap">',
                        '<input type="button" class="dialog_button w_ok" value="#1#"/>',
                        '</div>'
                    ].join('');
                if (typeof(op) === 'string') {
                    settings.text = op;
                } else if (typeof(op) === 'object') {
                    $.extend(settings, op);
                }
                settings.text = tpl.replace('##', settings.text).replace('#1#', settings.buttonText);
                this.show(settings);
                c.find('.w_ok').bind({
                    'click': function(event) {
                        var ret = true;
                        if ($(this).hasClass('dialog_button_disabled') || $(this).hasClass('form-loading')) {
                            return false;
                        }
                        if (callback) {
                            ret = callback.call(this, event);
                        }
                        if (ret !== false) {
                            o.close();
                        }
                        return false;
                    }
                });
                if (settings.autoFocus) {
                    c.find('.w_ok')[0].focus();
                }
                return {
                    'setButtonState': function(s) {
                        if (s === 0) {
                            c.find('.w_ok').removeClass('form-loading').addClass('dialog_button_disabled');
                        } else if (s === 1) {
                            c.find('.w_ok').removeClass('dialog_button_disabled form-loading');
                        } else if (s === 2) {
                            c.find('.w_ok').addClass('form-loading dialog_button_disabled');
                        }
                    }
                };
            },
            'showStatus': function(opt) {
                var settings = {
                        'width': 280,
                        'height': 'auto',
                        'title': false,
                        'text': '正在加载',
                        'type': 4,
                        'showCloseBtn': false,
                        'autoFocus': false
                    },
                    icon = opt.icon || 'loading',
                    tpl = ['<div class="modulebox_icon modulebox_icon_' + icon + '"></div><div class="modulebox_icon_text modulebox_icon_text_' + icon + '">##</div>'].join('');
                if (typeof(opt) === 'string') {
                    settings.text = opt;
                } else if (typeof(opt) === 'object') {
                    $.extend(settings, opt);
                }
                settings.text = tpl.replace('##', settings.text);
                w.removeAttr('style');
                c.removeAttr('style');
                this.show(settings);
                return {
                    'icon': c.find('.modulebox_icon'),
                    'text': c.find('.modulebox_icon_text')
                };
            },
            'confirm': function(op, okFn, cancelFn) {
                var settings = {
                        'width': 420,
                        'height': 160,
                        'text': '',
                        'title': '提示',
                        'type': 2,
                        'ensure': '确定',
                        'cancel': '取消',
                        'autoFocus': 1
                    },
                    tpl = ['<div class="modulebox_text">',
                        '##',
                        '</div>',
                        '<div class="ib_wrap2">',
                        '<input type="button" value="#1#" class="dialog_button w_ok"/>',
                        '<input type="button" value="#2#" class="dialog_button w_cancel ib ml0"/> ',
                        '</div>'
                    ].join('');
                if (typeof(op) === 'string') {
                    settings.text = op;
                } else if (typeof(op) === 'object') {
                    $.extend(settings, op);
                }
                settings.text = tpl.replace('##', settings.text);
                settings.text = settings.text.replace('#1#', settings.ensure).replace('#2#', settings.cancel);
                this.show(settings);
                c.find('.w_cancel').bind('click', function(event) {
                    o.close();
                    cancelFn && cancelFn(event);
                    return false;
                });
                c.find('.w_ok').bind('click', function(event) {
                    var r = okFn && okFn(event);
                    if (r !== false) {
                        o.close();
                    }
                    return false;
                });
                if (settings.autoFocus) {
                    c.find('.w_ok').get(0).focus();
                }
            },
            'showFrame': function(op) {
                var settings = {
                        'width': '420',
                        'height': '150',
                        'text': '',
                        'title': '提示',
                        'type': 3
                    },
                    tpl = '<iframe src="{text}" frameborder="0" width="100%" height="100%" marginwidth="0" marginheight="0" id="dialog_frame"></iframe>';

                if (typeof(op) === 'string') {
                    settings = $.extend(settings, {
                        'text': op
                    });
                } else if (typeof(op) === 'object') {
                    settings = $.extend(settings, op);
                }

                settings.text = tpl.replace(/\{(\w+)\}/g, function() {
                    var i = arguments[1] || '';
                    if (settings[i]) {
                        return settings[i];
                    } else {
                        return '{' + i + '}';
                    }
                });
                this.show(settings);
                return c.find('iframe');
            },
            'resize': function(opt) {
                if (opt.height) {
                    switch (this.opt.type) {
                        case 0:
                            ;
                            break;
                        case 1:
                            ;
                            break;
                        case 2:
                            ;
                            break;
                        case 3:
                            this.dom.content.height('auto');
                            this.dom.content.find('iframe').attr('height', opt.height);
                            this.dom.win.height('auto');;
                            break;
                    }
                }
                $.extend(this.opt, opt);
            }
        };

    $('head').append($(css));
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = __CDNPATH__ + '/css/dialog.css?__VERSION__';
    b.bind('click', function() {
        o.close();
        return false;
    });

    return o;
};

common.checkUserLogin = function() {
    if (!common.cookie.get('token')) {
        top.jumpTo('login.html');
        return;
    }
};

$('body').bind({
    'click':function(event){
        var target = event.target,
            jtarget = $(target),
            action = jtarget.attr('data-action'),
            r;
        if (jtarget.hasClass('form-loading')){
            return false;
        }

        if (action && common.action[action]){
            r = common.action[action](event,jtarget);
        }else if(target.tagName === 'INPUT' && target.type === 'checkbox'){
            common.component.checkbox.onChange(jtarget);
        }else if(target.tagName !== 'INPUT' && !jtarget.parent().hasClass('form-select')){
            $('.form-select').filter('.focus').removeClass('focus');
            if (common.action && common.action.onclickNull){
                r = common.action.onclickNull(event,jtarget);
            }
        }else if(target.tagName === 'INPUT'){
            $('.form-select').filter('.focus').removeClass('focus');
            if (jtarget.parent().hasClass('form-select') && !jtarget.parent().hasClass('disabled')){
                jtarget.parent().addClass('focus');
            }
        }
        if (r === false){
            return false;
        }
    }/*,
    'mouseover':function(event){
        var target = event.target,
            jtarget = $(target),
            tipName = jtarget.attr('data-tip');

        if (tipName && common.action.showTip){
            common.action.showTip(tipName,jtarget);
        }else if(common.action.showTip){
            common.action.hideTip(tipName,jtarget);
        }
    }*/
});
