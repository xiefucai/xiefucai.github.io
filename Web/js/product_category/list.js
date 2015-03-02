$(function() {
    var __CDNPATH__ = '../',
        __APIPATH__ = '/',
        dialog,
        srcData,
        showForm = function(opt){
            var dialogForm = dialog.alert({'text':common.tmpl($('#form_tmpl').html(),{'data':opt,'list':srcData}),'height':'auto'},function(event){
                var form = event.target.form,
                    data = {},
                    name = $.trim(form['name'].value);
                    if (!$.trim(form['name'].value)) {
                        return false;
                    }
                    if (form['id'].value) {
                        data['id'] = +form['id'].value;
                    }
                    data['name'] = $.trim(form['name'].value);
                    data['index'] = 0;
                    data['pid'] = +$(form['pid']).attr('data-value') || 0;
                    if (data['pid'] === data['id']) {
                        alert('不能做为自己的子类');
                        return false;
                    }
                    common.ajax({
                        'url': __APIPATH__ + 'product_category/set',
                        'type': 'post',
                        'data': data,
                        'dataType': 'json',
                        'success': function(info) {
                            var data = info && info.data;
                            if (+info.code === 0) {
                                dialog.alert('保存成功', function() {
                                    location.reload();
                                });
                            }
                        },
                        'error': function() {}
                    });
                return false;
            });
            common.component.init();
            common.component.selector.setValue.call(dialog.dom.win[0]['pid'],+opt.pid);
        },
        getSubNum = function(pid){
            var num = 0;
            console.log(pid);
            for (var i = 0; i < srcData.length; i++) {
                if (+srcData[i].pid === pid) {
                    num++
                }
            }

            return num;
        },
        init = function() {
            common.checkUserLogin();
            dialog = common.dialog(__CDNPATH__);

            common.action = {
                'add':function(event,t){
                    showForm({'name':''});
                },
                'edit': function(event,t) {
                    var id = +t.attr('data-id'),
                        data;
                    for (var i = 0; i < srcData.length; i++) {
                        if (+srcData[i].id === id) {
                            data = srcData[i];
                            break;
                        }
                    }
                    if (data) {
                        data['subNum'] = data['pid']>0?0:getSubNum(data['id']);
                        showForm(data);
                    }
                },
                'setVisible':function(event,t){
                    var id = +t.attr('data-id'),
                        data;
                    for (var i = 0; i < srcData.length; i++) {
                        if (+srcData[i].id === id) {
                            data = srcData[i];
                            break;
                        }
                    }
                    if (data) {
                        data['visible'] = +!+data['visible'];
                        common.ajax({
                            'url': __APIPATH__ + 'product_category/set',
                            'type': 'post',
                            'data': data,
                            'dataType': 'json',
                            'success': function(info) {
                                var data = info && info.data;
                                if (+info.code === 0) {
                                    location.reload();
                                }
                            },
                            'error': function() {}
                        });
                    }
                },
                'delete': function(id) {
                    dialog.confirm('确定删除?', function() {
                        common.ajax({
                            'url': __APIPATH__ + 'point/delete',
                            'type': 'post',
                            'data': {
                                'id': t.attr('data-id')
                            },
                            'dataType': 'json',
                            'success': function(info) {
                                var data = info && info.data;
                                switch(+data.code){
                                    case 0:
                                        dialog.alert('删除成功', function() {
                                            location.reload();
                                        });
                                        break;
                                    case 401:
                                        top.jumpTo('login.html');
                                        break;
                                    default:
                                        dialog.alert(info.msg+'('+info.code+')');
                                }
                            },
                            'error': function() {}
                        });
                    });
                }
            };

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
                            $('#list').html(common.tmpl($('#list_tmpl').html(), {
                                'list': data
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
        };

    document.domain = (/\w+\.\w+$/.exec(location.hostname))[0];
    $.getScript(__CDNPATH__ + 'js/lib/common.js?__VERSION__', init);
});
