$(function() {
    var __CDNPATH__ = '../',
        __APIPATH__ = '/',
        dialog,
        init = function() {
            common.checkUserLogin();

            if (+common.cookie.get('type') !== 0) {
                $('#add_layer').removeClass('none');
            }
            dialog = common.dialog(__CDNPATH__);

            common.action = {
                'edit': function(event,t) {
                    location.href = 'set.html?action=edit&id=' + t.attr('data-id');
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
                                if (+info.code === 0) {
                                    dialog.alert('删除成功', function() {
                                        location.reload();
                                    });
                                }
                            },
                            'error': function() {}
                        });
                    });
                }
            };

            common.ajax({
                'url': __APIPATH__ + 'point/list',
                'type': 'get',
                'dataType': 'json',
                'success': function(info) {
                    var data = info && info.data;
                    switch(+info.code){
                        case 0:
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
