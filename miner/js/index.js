;
(function() {
    var scale = document.documentElement.clientWidth / 640,
        slideElem = $('#sliders'),
        form = $('#form')[0],
        t0 = 0,
        pageY = 0,
        pageY2 = 0,
        scrollTop = 0,
        curPage = 0,
        curSlide = 0,
        rollDownTimes = 0,
        timeOut = 0,
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
            'items':(function(){
                    return slideElem.find('.page');
            })(),
            'getHeight': function() {
                return $('html').height();
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
                slideElem.scrollTop = t + ((t2 - t) % 10);
                timer = setInterval(function() {
                    if (times >= 10) {
                        clearInterval(timer);
                        slideElem[0].scrollTop = t2;
                        curSlide = i;
                        $('.page' + (i + 1)).addClass('active')
                            .siblings().removeClass('active');
                        return;
                    }
                    slideElem[0].scrollTop = slideElem[0].scrollTop + d;
                    times++;
                }, 20);
            },
            'slideNext': function() {
                var i = slider.index;
                if (i < slider.count-1) {
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
        },
        rollUp = function(k){
            this.scrollTop = this.scrollTop - k;
            rollDownTimes -= k;
        },
        rollDown = function(k){
            this.scrollTop = this.scrollTop + k;
            rollDownTimes += k;
            rollDownTimes = Math.min(182,rollDownTimes);
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
                if (d < 0) {
                    rollDown.call(slideElem[0],Math.abs(d));
                    return false;
                }else if((d > 0) && (rollDownTimes > 0)){
                    rollUp.call(slideElem[0],Math.min(d,rollDownTimes));
                    return false;
                }
            }
            if (d > 100) {
                slider.slidePrev();
            } else if (d < -100) {
                slider.slideNext();
            } else {
                if (slider.index === slider.count-1) {
                    if (d < 0) {
                        slideElem.trigger('rollDown');
                    }else if(rollDownTimes > 0){
                        slideElem.trigger('rollUp');
                    }
                    return false;
                }
                slider.slideTo(slider.index);
            }
            return false;
        },
        'mousewheel':function(e){
            var k=event.wheelDelta? event.wheelDelta:-event.detail*10;

            clearTimeout(timeOut);
            if (k < 0) {
                if (slider.index === slider.count-1) {
                    slideElem.trigger('rollDown');
                    return false;
                }
                timeOut = setTimeout(slider.slideNext,50);
            }else if(k > 0){
                if (slider.index === slider.count-1) {
                    if (rollDownTimes > 0) {
                        slideElem.trigger('rollUp');
                        return false;
                    }
                }
                timeOut = setTimeout(slider.slidePrev,50);
            }
        }
    });

    slideElem.bind({
        'rollUp':function(event){
            rollUp.call(this,30);
        },
        'rollDown':function(event){
            rollDown.call(this,30);
        }
    });

    $(document).bind({'keyup':function(event){
        switch(event.keyCode || event.which){
            case 38:
                if ((slider.index == slider.count-1) && (rollDownTimes > 0)){
                    slideElem.trigger('rollUp');
                }else if (slider.index > 0) {
                    slider.slidePrev();
                }
                break;
            case 40:
                if (slider.index < slider.count - 1) {
                    slider.slideNext();
                }else{
                    slideElem.trigger('rollDown');
                }
                break;
        }
    }})

	window.onresize = resize;
    resize();
    //slider.slideTo(6);
})();
