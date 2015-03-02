$(function() {
    var __CDNPATH__ = '../',
        __APIPATH__ = '/',
        form = $('#form')[0],
        srcData = [],
        dialog,
        getFormValue = function(name){
            if (this.tagName === 'INPUT') {
                t = this;
            }else{
                t = form[name];
            }
            return $(t).attr('data-value') || $.trim($(t).val());
        },
        getCategorys = function(){
            var arr = [];
            for(var i=0,k=srcData.length;i<k;i++){
                if (+srcData[i].pid === 0) {
                    arr.push(srcData[i]);
                }
            }
            return arr;
        },
        getProvinces = function(){
            var arr = [];
            for(var code in common.location){
                arr.push('<span data-value="'+code+'">'+common.location[code]['n']+'</span>');
            }
            return arr.join('');
        },
        getCitys = function(pcode){
            var arr = [];
            for(var code in common.location[pcode]){
                if (/^\d+$/.test(code)) {
                    arr.push('<span data-value="'+code+'">'+common.location[pcode][code]['n']+'</span>');
                }
            }
            return arr.join('');
        },
        getSubCategorys = function(pid){
            var arr = [];
            for(var i=0,k=srcData.length;i<k;i++){
                if (+srcData[i]['pid'] === +pid) {
                    arr.push('<span data-value="'+srcData[i]['id']+'">'+srcData[i]['name']+'</span>');
                }
            }
            return arr.join('');
        },
        onChangeProvince = function(event){
            var code = +$(event.target).attr('data-value'),
                p = $(event.target.parentNode),
                citySelector = p.next();
                common.component.selector.setOpts.call(citySelector.find('input')[0],getCitys(code));
        },
        onChangeCity = function(event){
            var code = +$(event.target).attr('data-value'),
                p = $(event.target.parentNode),
                areaSelector = p.next();
                common.component.selector.setOpts.call(areaSelector.find('input')[0],'<span data-value="0">所有线路</span>');
        },
        onChangeCategory = function(event){
            var code = +$(event.target).attr('data-value'),
                p = $(event.target.parentNode),
                subSelector = p.next();
                common.component.selector.setOpts.call(subSelector.find('input')[0],getSubCategorys(code));
        },
        init = function() {
            var action = common.href.get('action');
                dialog = common.dialog(__CDNPATH__);

            $(form).attr('action',common.__APIPATH__ + '/product/set');

            common.action = {
                'addCategory':function(event,t){
                    var elems = $('.category-li'),
                        newElem = elems.last().clone(),
                        input1 = newElem.find('input[data-name="category"]').get(0),
                        input2 = newElem.find('input[data-name="sub-category"]').get(0);
                        newElem.find('.form-label').html('');
                        newElem.find('.link').html('删除').attr('data-action','removeCategory');
                        elems.last().after(newElem);

                        $(input1).bind('change',onChangeCategory);
                        $(input2).bind('change',onChangeCategory);
                        common.component.selector.initEvent.call(input1);
                        common.component.selector.initEvent.call(input2);
                },
                'removeCategory':function(event,t){
                    t.parent().remove();
                },
                'addSellArea':function(event,t){
                    var elems = $('.sellarea-li'),
                        newElem = elems.last().clone(),
                        input1 = newElem.find('input[data-name="province"]').get(0),
                        input2 = newElem.find('input[data-name="city"]').get(0),
                        input3 = newElem.find('input[data-name="area"]').get(0);

                        newElem.find('.form-label').html('');
                        newElem.find('.link').html('删除').attr('data-action','removeSellArea');
                        elems.last().after(newElem);

                        $(input1).bind('change',onChangeProvince);
                        $(input2).bind('change',onChangeCity);
                        common.component.selector.initEvent.call(input1);
                        common.component.selector.initEvent.call(input2);
                        common.component.selector.initEvent.call(input3);
                },
                'removeSellArea':function(event,t){
                    t.parent().remove();
                },
                'deletePic':function(event,t){
                    t.parent().html('<input type="file" name="pic" value=""/> <a href="javascript:;" data-action="reloadPic">取消</a>');
                },
                'reloadPic':function(event,t){
                    var p=t.parent(),url=p.attr('data-pic');
                    p.html('<input type="hidden" name="pic" class="form-input" value="'+url+'"/><img src="'+url+'"/><br/><a href="javascript:;" data-action="deletePic" class="link">删除</a>');
                }
            };


            $(form).find('input[data-name]').each(function(){
                common.component.selector.initEvent.call(this);
            });
            $(form).find('input[data-name="province"]').bind('change',onChangeProvince);
            $(form).find('input[data-name="city"]').bind('change',onChangeCity);
            $(form).find('input[data-name="category"]').bind('change',onChangeCategory);

            common.component.selector.setOpts.call($(form).find('input[data-name="province"]')[0],getProvinces());

            if (common.href.get('id') && common.href.get('action')==='edit') {
                $('#form-btn').val('保存');
                $('#actionlabel').html('修改商品');
                common.ajax({
                    'url': __APIPATH__ + 'product/info',
                    'type': 'get',
                    'data':{'id':common.href.get('id')},
                    'dataType': 'json',
                    'success': function(info) {
                        var data = info.data;
                        form['name'].value = data['name'];
                        form['cost_price'].value = data['cost_price'];
                        form['id'].value = data['id'];
                        form['score'].value = data['score'];
                        form['sell_price'].value = data['sell_price'];
                        form['stock'].value = data['stock'];
                        form['weight'].value = data['weight'];
                        form['keywords'].value = data['keywords'];
                        form['des'].value = data['des'];
                        $(form).find('input[name="is_selling"]').filter('[value="'+(+data['is_selling'])+'"]').attr('checked','checked');
                        if (data['pic']) {
                            $(form['pic']).parent().attr('data-pic',data['pic']).html('<input type="hidden" name="pic" class="form-input" value="'+data['pic']+'"/><img src="'+data['pic']+'"/><br/><a href="javascript:;" data-action="deletePic" class="link">删除</a>');
                        }else{
                            $(form['pic']).parent().html('<input type="file" value="" name="pic" class="form-input"/>');
                        }
                        /*
                        category: ""
                        is_selling: false
                        sell_area: ""
                        */
                    },
                    'error': function() {}
                });
            }

            common.ajax({
                'url': __APIPATH__ + 'product_category/list',
                'type': 'get',
                'data':{'limit':10,'index':0},
                'dataType': 'json',
                'success': function(info) {
                    var data = (info && info.data || []).sort(function(v1,v2){
                        var s1 = [v1.pid || v1.id,v1.pid,v1.id].join('_'),
                            s2 = [v2.pid || v2.id,v2.pid,v2.id].join('_');
                        return s1>s2;
                    });
                    switch(+info.code){
                        case 0:
                            srcData = data;
                            common.component.selector.setOpts.call($(form).find('[data-name="category"]')[0],common.tmpl($('#category_tmpl').html(), {
                                'list': getCategorys()
                            }));
                            break;
                        case 401:
                            dialog.alert('请重新登录', function() {
                                top.jumpTo('login.html');
                            });
                            break;
                        default:
                            dialog.alert(info.msg+'('+info.code+')');
                    }
                },
                'error': function() {}
            });
        },
        showMsg = function(str) {
            $('#form-msg').html(str);
        };

    $(form['lbsx']).focus(function() {
        var input = this;
        if (/^\s*$/.test($(this).val())) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(pos) {
                    input.val = pos.coords.latitude;
                    input.val = [pos.coords.latitude, pos.coords.longitude].join(',');
                }, function() {});
            }
        }
    });

    $(form['lbsy']).focus(function() {
        var input = this;
        if (/^\s*$/.test($(this).val())) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(pos) {
                    input.val = pos.coords.longitude;
                }, function() {});
            }
        }
    });

    $(form).submit(function() {
        var data = {},
            arrCategory = [],
            arrSellArea = [],
            submitAble = true;
        $(this).find('input[type="text"],input[type="file"],input[type="hidden"]').each(function(){
            if (+$(this).attr('data-required')) {
                if (submitAble && !getFormValue.call(this)) {
                    $(this).addClass('focus-red');
                    submitAble = false;
                }
            }
        });

        $('.category-li').each(function(){
            var a = $(this).find('input[data-name="category"]').attr('data-value'),
                b = $(this).find('input[data-name="sub-category"]').attr('data-value');
                arrCategory.push([a,b].join('_'))
        });

        form['category'].value = arrCategory.join(',');

        $('.sellarea-li').each(function(){
            var a = $(this).find('input[data-name="province"]').attr('data-value'),
                b = $(this).find('input[data-name="city"]').attr('data-value'),
                c = $(this).find('input[data-name="area"]').attr('data-value');
                arrSellArea.push([a,b,c].join('_'));
        });
        form['sell_area'].value = arrSellArea.join(',');

        if (common.href.get('action') != 'add') {
            form['id'].value = common.href.get('id');
        }

        if ($(form['pic']).attr('type') ==='file' && form['pic'].value) {
            form.enctype = 'multipart/form-data';
        }else{
            $(form).removeAttr('enctype');
        }

        common.ajax({
            'type':'post',
            'form':form,
            'success': function(info) {
                var data = info && info.data;
                console.log(info);
                if (+info.code === 0) {
                    top.jumpTo('product/list.html');
                } else {
                    dialog.alert(info.msg)
                }
            },
            'error': function() {
                alert('设置超时');
            }
        });
        return false;
    });

    document.domain = (/\w+\.\w+$/.exec(location.hostname))[0];
    $.getScript(__CDNPATH__ + 'js/lib/common.js?__VERSION__', function(){
        $.getScript(__CDNPATH__ + 'js/lib/location.js?__VERSION__',init);
    });
});
