$(function() {
    var __CDNPATH__ = '../',
        __APIPATH__ = '/',
        dialog,
        form = $('#form')[0],
        init = function() {
            dialog = common.dialog(__CDNPATH__);
            common.ajax({
                'url': __APIPATH__ + 'user/info',
                'type': 'get',
                'dataType': 'json',
                'success': function(info) {
                    var data = info && info.data;
                    if (+info.code === 0) {
                        $(form).find('input[type="text"],input[type="hidden"]').each(function(){
                            if (data[this.name] !== undefined) {
                                if (typeof data[this.name] === 'string') {
                                    $(this).val(data[this.name]);
                                }else{
                                    $(this).val(common.json.toString(data[this.name]));
                                }

                            }
                        });
                    }
                },
                'error': function() {}
            });
        },
        showError = function(str) {
            $('#login-form-msg').html(str);
        };

    $('#form').submit(function() {
        var form = this,
            postData = {};
        $(this).find('input[type="text"],input[type="hidden"]').each(function(){
            postData[this.name] = $.trim(this.value);
        });

        common.ajax({
            'url': __APIPATH__ + 'user/modify',
            'type': 'post',
            'data': postData,
            'dataType': 'json',
            'success': function(data) {
                if (data && +data.code === 0) {
                    dialog.alert('保存成功');
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

    $.getScript(__CDNPATH__ + 'js/lib/common.js?__VERSION__',init);
});
