$(function() {
    var __CDNPATH__ = './',
        __APIPATH__ = '/',
        dialog,
        init = function() {
            dialog = common.dialog(__CDNPATH__);
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
        common.ajax({
            'url': __APIPATH__ + 'user/reg',
            'type': 'post',
            'data': {
                'user': user,
                'pasw': md5(md5(pasw))
            },
            'dataType': 'json',
            'success': function(data) {
                if (data && +data.code === 0) {
                    dialog.alert('成功提交加盟申请', function() {
                        top.location.reload();
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