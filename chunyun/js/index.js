;
(function($) {
    var scale = document.documentElement.clientWidth / 640,
        slideElem = $('#sliders'),
        form = $('#form')[0],
        t0 = 0,
        pageY = 0,
        pageY2 = 0,
        scrollTop = 0,
        curPage = 0,
        curSlide = 0,
		resize = function(event){
			if (event) {
				return;
			}
			var h = $('html').height();
			$('.page').css('height',h);
			slider.slideTo(slider.index);
		},
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
                return $('html').height();
            },
            'slideTo': function(i) {
                var h = slider.getHeight(),
                    h2 = h * i,
                    t = slideElem.offset().top,
                    t2 = -h * i,
                    timer = 0,
                    times = 0,
                    d = Math.floor((t2 - t) / 10);
                slider.index = i;
                slideElem.css('top',t + ((t2 - t) % 10));
                timer = setInterval(function() {
                    if (times >= 10) {
                        clearInterval(timer);
                        slideElem.css('top',t2);
                        curSlide = i;
                        $('.page' + (i + 1)).addClass('active')
                            .siblings().removeClass('active');
                        return;
                    }
					slideElem.css('top',slideElem.offset().top + d);
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
			if (event.target.tagName !== 'INPUT' && document.activeElement.tagName === 'INPUT') {
				document.activeElement.blur();
				return;
			}
            pageY = event.touches[0].pageY;
        	scrollTop = slideElem.offset().top;
            t0 = +new Date();
        },
        'touchmove': function(event) {
            pageY2 = event.touches[0].pageY;
			if (slider.index == 0 && pageY2 - pageY>0) {
				return false;
			}
            if (((slider.count - 1) === slider.index) && (
                    pageY2 - pageY < 0)) {
                return true;
            }
			slideElem.css('top',scrollTop - (pageY - pageY2));
            return false;
        },
        'touchend': function(event) {
            var d = pageY2 - pageY;
			if (event.target.tagName == "INPUT") {
				return;
			}
            if (((slider.count - 1) === slider.index) && (d < 0)) {
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



	window.onresize = resize;

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
    }).find('input[type="text"]').bind('focus',function(event){
		var t = slideElem.offset().top,
			h = $('html').height();
		setTimeout(function(){
			slideElem.css('margin-top',$('html').height()-h);
		},200);
	}).bind('blur',function(){
		slideElem.css('margin-top',0);
	});

    resize();
    $("#audio")[0].pause();
    setTimeout(function() {
        $('#audio-switcher').trigger('click');
    }, 2500);
})(Zepto);
