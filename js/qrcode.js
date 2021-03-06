
(function() {
    var url = '//open.iciba.com/huaci/dict.php?word={q}',
    	site = document.getElementById('fucaixie-dict').getAttribute('data-site'),
        timer = 0,
        getScrollTop = function() {
            return document.documentElement.scrollTop || document.body.scrollTop;
        },
        getClientHeight = function() {
            return document.body.clientHeight || document.documentElement.clientHeight;
        },
        query = function(s) {
            var o = {};
            o.q = s;
            return url.replace(/\{(\w+)\}/g, function() {
                return o[arguments[1]]
            });
        },
        getSelectText = function() {
            return (document.selection ? document.selection.createRange().text :
                document.getSelection()).toString().replace(/[\r\n]+/g,
                ' ').replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
        },
        loadjs = function(src, callback) {
		          var s = document.createElement('script');
			document.head.appendChild(s);
            s.onload = function() {
                callback();
            }
			s.src = src;
		},
        /*
        getWord = function(word) {
            var url = query(word || getSelectText()),
                s = document.getElementById('youdao-dict');
            if (s) {
                s.src = url;
                s.parentNode.removeChild(s);
            }
            s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = url;
            s.id = 'youdao-dict';
            document.getElementsByTagName('head')[0].appendChild(s);
        },*/
        newElem = function(p, t, c, id) {
            var e = document.createElement(t);
            if (!p) {
                p = document.body;
            }
            p.appendChild(e);
            if (c) {
                e.className = c;
            }
            if (id) {
                e.id = id;
            }
            return e;
        },
        elems = (function() {
            var css = newElem(document.getElementsByTagName('head')[0],
                    'link'),
                box = newElem(null, 'div', 'youdao', 'youdao'),
                form = newElem(box, 'form', 'youdao-search-form'),
                header = newElem(form, 'div', 'youdao-header'),
                searchTxt = newElem(form, 'input', 'youdao-search-text'),
                searchBtn = newElem(form, 'input', 'youdao-search-btn'),
                container = newElem(box, 'div', 'youdao-viewer',
                    'icIBahyI-main_cont'),
                closeBtn = newElem(box, 'a', 'youdao-close'),
                loading = newElem(box, 'span', 'loading', 'loading'),
                moving = false,
                startx = 0,
                starty = 0;
            loading.style.height = 'auto';

            css.rel = 'stylesheet';
            css.type = 'text/css';
            css.href = site + 'css/dict.youdao.css';
            box.style.left = ((document.documentElement.clientWidth ||
                document.body.clientWidth) - 300) + 'px';
            box.style.top = (getScrollTop() + 100) + 'px';
            header.innerHTML = '二维码';
            closeBtn.innerHTML = '&times;';
            closeBtn.href = 'javascript:;';
            closeBtn.onclick = function() {
                box.style.display = 'none';
            }
            searchTxt.onkeydown = function(event) {
                var code = event.keyCode;
                if (code === 13) {
                    IQR.showQRCode(this.value);
                    return false;
                }
            }
            searchTxt.value = getSelectText();
            searchBtn.type = 'button';
            searchBtn.value = '查词';
            searchBtn.onclick = function() {
                IQR.showQRCode(searchTxt.value);
            }
            form.onsubmit = function() {
                return false;
            }
            form.onmousedown = function(event) {
                if (event.target !== searchTxt) {
                    startx = event.pageX - box.offsetLeft;
                    starty = event.pageY - box.offsetTop;
                    moving = true;
                }
            }
            /*
            document.onselectionchange = function(event) {
                setTimeout(function() {
                    var txt = getSelectText(),
                        selection = document.getSelection();
                    if (selection && (selection.focusNode !==
                            form)) {
                        if (/^[a-z\s]+$/i.test(txt)) {
                            IQR.showQRCode();
                        }
                    }
                }, 100);
            };*/
            document.onmousemove = function(event) {
                if (moving) {
                    box.style.left = (event.pageX - startx) + 'px';
                    box.style.top = (event.pageY - starty) + 'px';
                }
            }
            document.onmouseup = function(event) {
                if (moving) {
                    moving = false;
                    if (/^[a-z]+$/i.test(getSelectText())) {
                        IQR.showQRCode();
                    }
                }
            }
            container.onmousewheel = function(e) {
                var k = event.wheelDelta ? event.wheelDelta : -
                    event.detail * 10;
                this.scrollTop = this.scrollTop - k;
                return false;
            }
            return {
                'box': box,
                'form': form,
                'header': header,
                'searchTxt': searchTxt,
                'searchBtn': searchBtn,
                'container': container
            };
        })();

    window.IQR = {/*
        'show': function(ret, data) {
            var arr = [],
                con,
                top = 0;
            if (ret === '0') {
                data = eval('(' + data + ')');
                cusCon = data && data.customTranslation && data.customTranslation
                    .content,
                    webCon = data && data.yodaoWebDict;
                if (data.returnPhrase !== 'null') {
                    arr.push('<strong>' + data.returnPhrase +
                        '</strong><em class="youdao-speech">[' +
                        data.phoneticSymbol + ']</em>');
                } else {
                    arr.push('请输入单词进行查询');
                }
                if (cusCon.length) {
                    arr.push('<p class="youdao-viewer-content">' +
                        cusCon.join('<br/>') + '</p>');
                }
                if (webCon && webCon.length) {
                    arr.push('------ 网络释义 -------<br/>');
                    for (var i = 0, k = webCon.length; i < k; i++) {
                        arr.push('<strong class="youdao-word">' +
                            webCon[i]['key'] + '</strong>');
                        arr.push('<div>' + webCon[i]['value'].join(
                            '；') + '</div>');
                    }
                }
                elems.searchTxt.value = data.originalQuery;
            }
            elems.container.innerHTML = arr.join('');
            elems.box.style.display = 'block';
            top = parseInt(elems.box.style.top, 10);
            if (top < getScrollTop()) {
                top = getScrollTop() + 300;
            } else if (top > getScrollTop() + getClientHeight()) {
                top = getScrollTop() + 300;
            }
            elems.box.style.top = top + 'px';
        },*/
        'showQRCode': function(str) {
            var top = 0;
            elems.box.style.display = 'block';
            elems.container.style.height = 'auto';
            top = parseInt(elems.box.style.top, 10);
            if ((top < getScrollTop()) || (top + elems.box.clientHeight >
                    getScrollTop() + getClientHeight())) {
                elems.box.style.top = (getScrollTop() + 100) + 'px';
            }
            elems.searchTxt.value = str;
            //elems.container.innerHTML = arr.join('');
            elems.box.style.display = 'block';
            elems.container.innerHTML='';
            new QRCode(elems.container,{'text':str,'width':228,'height':228});
            /*
            clearTimeout(timer);
            timer = setTimeout(getWord, 100);
            */
        }
    };
    loadjs('//mat1.gtimg.com/app/opent/js/qrcode.min.js', function(){
        IQR.showQRCode(location.href);
    });
})();
