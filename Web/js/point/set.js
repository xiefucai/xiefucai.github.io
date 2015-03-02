$(function() {
    var __CDNPATH__ = '../',
        __APIPATH__ = '/',
        form = $('#form')[0],
        init = function() {
            var action = common.href.get('action');

            if (action !== 'add') {
                $('#actionlabel').html('编辑售货点信息');
                $('#form-btn').val('修改');
                common.ajax({
                    'url': __APIPATH__ + 'point/get',
                    'type': 'get',
                    'data': {
                        'id': common.href.get('id')
                    },
                    'dataType': 'json',
                    'success': function(info) {
                        var data = info && info.data;
                        if (data) {
                            form['address'].value = data.address || '';
                            form['lbsx'].value = data.lbs[0] || '';
                            form['lbsy'].value = data.lbs[1] || '';
                        }
                    },
                    'error': function() {
                        alert('设置超时');
                    }
                });
            } else {

            }
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
        var data = {};
        if (/^\s*$/.test(form['address'].value)) {
            showMsg('请填写详细地址');
            return false;
        };
        if (/^\s*$/.test(form['lbsx'].value)) {
            showMsg('请填写经度信息');
            return false;
        } else if (!/^\d+[\d\.]*$/.test(form['lbsx'].value)) {
            showMsg('经度格式不正确');
            return false;
        }

        if (/^\s*$/.test(form['lbsy'].value)) {
            showMsg('请填写纬度信息');
            return false;
        } else if (!/^\d+[\d\.]*$/.test(form['lbsy'].value)) {
            showMsg('纬度格式不正确');
            return false;
        }

        data['type'] = common.cookie.get('type');
        data['address'] = $.trim(form['address'].value);
        data['lbs'] = [$.trim(form['lbsx'].value), $.trim(form['lbsy'].value)].join(',');
        if (common.href.get('action') != 'add') {
            data['id'] = common.href.get('id');
        }

        common.ajax({
            'url': __APIPATH__ + 'point/set',
            'type': 'post',
            'data': data,
            'dataType': 'json',
            'success': function(info) {
                var data = info && info.data;
                if (+info.code === 0) {
                    top.jumpTo('point/list.html');
                } else {
                    alert(info.msg)
                }
            },
            'error': function() {
                alert('设置超时');
            }
        });
        return false;
    });
    $.getScript(__CDNPATH__ + 'js/lib/common.js?__VERSION__', init);
});