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
            return $(t).attr('data-value') || $.trim($(t).val()) || '';
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
        onChangeProvince = function(event){
            var code = +$(event.target).attr('data-value'),
                p = $(event.target.parentNode),
                citySelector = p.next();
                common.component.selector.setOpts.call(citySelector.find('input')[0],getCitys(code));
        },
        init = function() {
            var action = common.href.get('action');
                dialog = common.dialog(__CDNPATH__);

            common.action = {
            };


            $(form).find('input[data-name]').each(function(){
                common.component.selector.initEvent.call(this);
            });
            $(form).find('input[data-name="province"]').bind('change',onChangeProvince);

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
        },
        showMsg = function(str) {
            $('#form-msg').html(str);
        };


    $(form).submit(function() {
        var postData = {};
        $(form).find('input[type="text"],input[type="hidden"]').each(function(){
            postData[this.name] = getFormValue.call(this);
        });

        if (common.href.get('action') != 'add') {
            postData['id'] = common.href.get('id');
        }

        common.ajax({
            'url': __APIPATH__ + 'line/set',
            'type':'post',
            'data':postData,
            'success': function(info) {
                var data = info && info.data;
                console.log(info);
                if (+info.code === 0) {
                    top.jumpTo('line/list.html');
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
