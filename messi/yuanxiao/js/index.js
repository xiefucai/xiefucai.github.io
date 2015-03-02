;
(function($) {
    var scale = document.documentElement.clientWidth / 640,
        slideElem = $('#sliders'),
        isTouchingRiddle = 0,
        questionArray = ['1','2','3','4','5','6','7','8','9'];
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
        showQuestion = function(){
            var num = questionArray.length,
                randomIndex = Math.floor(Math.random() * num),
                randomItem = questionArray.splice(randomIndex,1);

        $('.questions').removeClass('none')
                        .css({'bottom':'-300px','opacity':0})
                        .animate({'bottom':0,'opacity':1},800,'ease-in-out',function(){

                        })
                        .find('.question'+randomItem).removeClass('none');
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
        showResult = function(i, k) {
            var result = $('#result');
            result.removeClass('none').removeClass('result-ok result-error').addClass(k?'result-ok':'result-error').css('opacity',0).animate({'opacity':1});
        };

    $('#sliders').bind({
        'touchstart': function(event) {
			if (event.target.tagName !== 'INPUT' && document.activeElement.tagName === 'INPUT') {
				document.activeElement.blur();
				return;
			}
            if ($(event.target).attr('data-btn')) {
                isTouchingRiddle = 1;
            }else if($(event.target).hasClass('option')){
                isTouchingRiddle = 2;
            }else if($(event.target).attr('data-isbtn')){
                isTouchingRiddle = 3;
            }else{
                isTouchingRiddle = 0;
            }
            pageY = event.touches[0].pageY;
        	scrollTop = slideElem.offset().top;
            t0 = +new Date();
        },
        'touchmove': function(event) {
            pageY2 = event.touches[0].pageY;
            if (isTouchingRiddle === 1) {
                $(event.target).parent().css('margin-top',pageY2 - pageY);
                return false;
            }else if(isTouchingRiddle === 2){
                return false;
            }else if(isTouchingRiddle === 3){
                return false;
            }
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
            if (isTouchingRiddle === 1) {
                var t = parseInt($(event.target).parent().css('margin-top'));
                $(event.target).parent().animate({'margin-top':t+100,'opacity':0},500,'ease-in-out',function(){
                    showQuestion();
                    $(this).remove();
                });
                return;
            }else if (isTouchingRiddle === 2) {
                $(event.target).trigger('doClick');
                return;
            }else if (isTouchingRiddle === 3) {
                $(event.target).trigger('doClick');
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

    $('.option').bind('doClick',function(event){
        var ca = /\bquestion(\d+)\b/.exec($(this).parent().attr('class')),
            i = +(ca && ca[1]);

        $(this).addClass('option-checked').siblings('.option').removeClass('option-checked');
        if ($(this).attr('data-isright')) {
            showResult(i,1);
        }else{
            showResult(i,0);
        }
    });

    $('.btn-again').bind('doClick',function(event){
        var isError = $('#result').hasClass('result-ok');
        if (isError) {
            if (questionArray.length > 0) {
                $('.questions').addClass('none').find('.question').addClass('none');
                $('#result').animate({'opacity':0},800,'ease-in-out',function(){
                    $(this).removeClass('result-ok result-error').addClass('none');
                    showQuestion();
                });
            }else{
                alert('没有题目了');
            }
        }else{
            $('#share').removeClass('none').css('opacity',0).animate({'opacity':1},800,'ease-in-out',function(){
                $(this).attr('data-visible',1);
            });
            //分享朋友圈
        }

    });

    $('#share').bind('click',function(event){
        if ($(this).attr('data-visible')) {
            $(this).animate({'opacity':0},800,'ease-in-out',function(){
                $(this).addClass('none').removeAttr('data-visible');
            });
        }
    });

    resize();
})(Zepto);
