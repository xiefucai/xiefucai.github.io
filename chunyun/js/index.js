;
(function($) {
    var scale = document.documentElement.clientWidth / 640,
        slideElem = $('#sliders'),
        form = $('#form')[0],
        pageY = 0,
        pageY2 = 0,
        scrollTop = 0,
        curPage = 0,
        curSlide = 0,
        isTelNum = function(val) {
            if (new RegExp(/[^\d]/g).test(val)) {
                return false;
            }
            if (val.length == 11) {
                if (new RegExp(/^1(?:3|5|8)\d{9}$/).test(val)) {
                    return true
                } else {
                    return false;
                }
            } else {
                if (val.length >= 14) {
                    if (new RegExp(/^008860?9\d{8}$/).test(val)) {
                        return true
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        },
        slider = {
            'index': 0,
            'count': slideElem.find('.page').length,
            'getHeight': function() {
                return $('.pages').height();
            },
            'slideTo': function(i) {
                var h = slider.getHeight(),
                    h2 = h * i,
                    t = slideElem[0].scrollTop,
                    t2 = h * i,
                    timer = 0,
                    times = 0,
                    d = Math.floor((t2 - t) / 10);
                slider.index = i;
                slideElem[0].scrollTop += ((t2 - t) % 10);
                timer = setInterval(function() {
                    if (times >= 10) {
                        clearInterval(timer);
                        slideElem[0].scrollTop = t2;
                        curSlide = i;
                        $('.page' + (i + 1)).addClass('active')
                            .siblings().removeClass('active');
                        return;
                    }
                    slideElem[0].scrollTop += d;
                    times++;
                }, 20);
            },
            'slideNext': function() {
                var i = slider.index;
                if (i < slider.count) {
                    slider.slideTo(i + 1);
                }
            },
            'slidePrev': function() {
                var i = slider.index;
                if (i > 0) {
                    slider.slideTo(i - 1);
                }
            }
        },
        orientationListener = function(event) {
            //gamma(x),alpha(y),beta(z)
            if (curPage === 0) {
                $('#sliders').find('.page').css({
                    'margin-left': Math.floor(event.gamma) + 'px'
                });
            }
        },
        showResult = function(i, t) {
            var result = $('#result');
            if (i === 0) {
                result.removeClass('red none').html(t);
            } else {
                result.removeClass('none').addClass('red').html(t);
            }
            setTimeout(function() {
                result.addClass('none');
            }, 1500);
        };
    $('#sliders').bind({
        'touchstart': function(event) {
            if (event.target.tagName === 'INPUT') {
                return;
            } else if (document.activeElement.tagName ===
                'INPUT') {
                pageY = -1;
                document.activeElement.blur();
                return;
            }
            pageY = event.touches[0].pageY;
            scrollTop = slideElem[0].scrollTop;
        },
        'touchmove': function(event) {
            if (event.target.tagName === 'INPUT' || pageY < 0) {
                return;
            }
            pageY2 = event.touches[0].pageY;
            if (((slider.count - 1) === slider.index) && (
                    pageY2 - pageY < 0)) {
                return true;
            }
            slideElem[0].scrollTop = scrollTop - (pageY2 -
                pageY);
            return false;
        },
        'touchend': function(event) {
            var d = pageY2 - pageY;
            if (event.target.tagName === 'INPUT' || pageY < 0) {
                return;
            }
            if (((slider.count - 1) === slider.index) && (
                    pageY2 - pageY < 0)) {
                if (pageY2 - pageY < -50) {
                    return false;
                } else {
                    slider.slideTo(slider.index);
                    return false;
                }
            }
            if (d > 100) {
                slider.slidePrev();
            } else if (d < -100) {
                slider.slideNext();
            } else {
                slider.slideTo(slider.index);
            }
            return false;
        }
    });

    $(document).bind({
        'touchmove': function(event) {
            if (event.target.tagName === 'INPUT') {
                return;
            }
            return false;
        }
    });

    window.isAudioOn = 0;
    $('#audio-switcher').bind('click', function() {
        if (window.isAudioOn == 1) {
            $(this).removeClass('rotating')
            $('#audio').get(0).pause();
        } else {
            $(this).addClass('rotating');
            setTimeout(function() {
                $('#audio').get(0).play();
            }, 0);
        };
        window.isAudioOn = +!window.isAudioOn;

    });

    $('.wallpaper').each(function() {
        $(this).css({
            'height': 806 * scale + 'px'
        }).find('.pic').css({
            'margin-top': 98 * scale
        });
    });

    $('.form').bind('submit', function() {
        var form = this;
        if (/^\s*$/.test(form['address'].value)) {
            alert("请输入家乡");
        } else {
            $(form).addClass('none');
            $('.result').addClass('show');
        }
        return false;
    });

    slider.slideTo(0);
    $("#audio")[0].pause();
    setTimeout(function() {
        $('#audio-switcher').trigger('click');
    }, 2500);
})(Zepto);
