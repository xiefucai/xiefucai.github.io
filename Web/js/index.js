$(function() {
    var __CDNPATH__ = './',
        __APIPATH__ = '/',
        dialog,
        init = function() {
            var defaultPage = 'point/list.html';
            var p = common.href.get('path', location.hash);
            dialog = common.dialog(__CDNPATH__);

            common.action = {
                'logout':function(){
                    dialog.confirm('确定退出当前帐号？',function(){
                        common.cookie.clear();
                        location.reload();
                    });
                }
            }
            if (common.cookie.get('uid')) {
                $('.site-info').html('欢迎你，<a href="user/info.html" target="main-frame" class="link">'+common.cookie.get('nick')+'</a> | <a href="javascript:;" data-action="logout" class="link">退出</a>');
                jumpTo(p || defaultPage);
            }else{
                jumpTo('login.html?path=' + encodeURIComponent(p));
            }
        },
        jumpTo = function(path) {
            var rpath = path.replace(/[\?#].*$/, ''),
                item = $('#menu').find('a[href="' + rpath + '"]');

            if (item.length > 0) {
                item.first().trigger('click');
            } else {
                $('#menu').find('.active').removeClass('active');
                $('#menu').find('dd').addClass('none');
                $('#main-frame').attr('src', path);
            }
        };

    $('#menu').find('a').bind('click', function() {
        var p = $(this).parent(),
            r;
        p.addClass('active').siblings().removeClass('active');
        if (p.hasClass('submenu-item')) {
            r = p.parent().parent();
            r.removeClass('none');
            r.siblings('dd').addClass('none');
            r.prev().addClass('active').siblings('.active').removeClass('active');
        }else{
            p.next().find('.submenu-item-link').first().trigger('click');
            return false;
        }
        if (!/^javascript:/i.test($(this).attr('href'))) {
            $('#main-frame').attr('src', $(this).attr('href'));
        }
    });

    document.domain = (/\w+\.\w+$/.exec(location.hostname))[0];
    window.jumpTo = jumpTo;
    $.getScript(__CDNPATH__ + 'js/lib/common.js?__VERSION__', init);
});
