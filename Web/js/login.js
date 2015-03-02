$(function() {
    var __CDNPATH__ = './',
        __APIPATH__ = '/',
        init = function() {
            /*
            common.ajax({
                'url': __APIPATH__ + 'user/info',
                'type': 'get',
                'dataType': 'json',
                'success': function(data) {
                    if (+info.code === 0) {
                        common.cookie.set('nick',info.nick);
                    }
                },
                'error': function() {}
            });*/
        },
        showError = function(str) {
            $('#login-form-msg').html(str);
        };

    $('#login-form').submit(function() {
        var form = this,
            user = $.trim(form['user'].value),
            pasw = $.trim(form['pasw'].value);
        if (user === '') {
            showError('请输入登录帐号');
            return false;
        } else if (pasw === '') {
            showError('请输入登录密码');
            return false;
        }
        common.cookie.clear();
        common.ajax({
            'url': __APIPATH__ + 'user/login',
            'type': 'post',
            'data': {
                'user': user,
                'pasw': md5(md5(pasw))
            },
            'dataType': 'json',
            'success': function(data) {
                if (data && +data.code === 0) {
                    common.ajax({
                        'url': __APIPATH__ + 'user/info',
                        'type': 'get',
                        'dataType': 'json',
                        'success': function(info) {
                            var data = info && info.data;
                            if (+info.code === 0) {
                                if (data.nick) {
                                    common.cookie.set('nick',data.nick);
                                    //top.jumpTo('point/list.html');
                                    top.location.reload();
                                } else {
                                    top.jumpTo('user/info.html');
                                }
                            }
                        },
                        'error': function() {}
                    });
                } else {
                    showError(data.msg + '(' + data.code + ')');
                }
            },
            'error': function() {
                showError('网络连接失败，请稍候重试');
            }
        });
        return false;
    });

    $.getScript(__CDNPATH__ + 'js/lib/common.js?__VERSION__', function() {
        $.getScript(__CDNPATH__ + 'js/lib/md5.js?__VERSION__', init);
    });
});
