$(function() {
	var imgs = {
		'bg0': 'images/bg0.jpg'
	},
	screenSize = {
		'width': $('body').width(),
		'height': $('body').height()
	},
	loadImg = function(url, callback) {
		var img = new Image(),
		o = {};
		img.onload = function() {
			callback(img);
		};
		img.src = url;
	},
	dragingStart = 0,
	dragingSlider = 0,
	scrollX = 0,
	dragingX = 0,
	dragingY = 0,
	panelIndex = 0,
	changePanelIndex = function(index) {
		var sx = $('.panels')[0].scrollLeft,
		tx = index * screenSize.width,
		k = 10,
		scroll = function() {
			if (k > 0) {
				$('.panels')[0].scrollLeft = $('.panels')[0].scrollLeft + (tx - sx) / 10;
				k--;
				setTimeout(scroll, 30);
			} else {
				$('.panels')[0].scrollLeft = tx;
				$('.dotted').eq(index).addClass('dotted-active').siblings().removeClass('dotted-active');
				panelIndex = index;
			}
		};
		if (index < 0) {
			index = 0;
		} else if (index >= $('.panel').length) {
			index = $('.panel').length - 1;
		}
		scroll();
	},
	onDragEnd = function() {
		$('.slide-btn').remove();
		$('.slide-mask').animate({
			'backgroundColor': 'rgba(0,0,0,0.7)'
		},
		{
			'duration': 500,
			'complete': function() {
				var msg;
				var masker = $(this);
				var topbar = $('.topbar');
				var circle1 = $('<div class="circle1"></div>').appendTo(masker);
				var comeCircle = function() {
					var k = Math.floor(Math.random() * 5 + 1);
					for (var i = 0; i < k; i++) {
						var circle = $('<div class="circle1"></div>').appendTo(masker);
						circle.css({
							'margin-top': 0,
							'margin-left': 0,
							'opacity': 1,
							'z-index': 0
						});
						if (i % 2 > 0) {
							circle.css({
								'left': '-1' + i + '0%',
								'width': 50,
								'height': 50,
								'top': (i - 1) * 200
							});
						} else {
							circle.css({
								'left': '2' + i + '0%',
								'width': 50,
								'height': 50,
								'top': (i - 1) * 200
							});
						}
						circle.animate({
							'opacity': 1,
							'scale': 0.2,
							'margin-left': '-25px',
							'margin-top': '-75px',
							'top': '50%',
							'left': '50%'
						},
						{
							'duration': 1500,
							'complete': function() {
								$(this).remove();
							}
						});
					}
				};
				var fun1 = function() {
					circle1.animate({
						'margin-top': '-100px'
					},
					{
						'duration': 500,
						'complete': function() {
							setTimeout(fun2, 0);
						}
					});
				};
				var fun2 = function() {
					circle1.animate({
						'scale': 2,
					},
					{
						'duration': 2500,
						'complete': function() {}
					});
					comeCircle();
					setTimeout(function() {
						circle1.html(1);
						comeCircle();
					},
					500);
					setTimeout(function() {
						circle1.html(2);
						comeCircle();
					},
					1000);
					setTimeout(function() {
						circle1.html(3);
						comeCircle();
					},
					1500);
					setTimeout(function() {
						circle1.html(4).addClass('lighting');
						setTimeout(function() {
							msg.remove();
							circle1.removeClass('lighting').css('border-radius', 0).animate({
								'width': '150%',
								'height': '150%',
								'border-radius': 0,
								'opacity': 0
							},
							{
								'complete': function() {
									$('body').removeAttr('style');
									$('.mobile').remove();
									$('.topbar').addClass('none');
									$('.panels-viewer').removeClass('none').animate({
										'opacity': 1
									},
									800);

									masker.animate({
										'opacity': 0
									},
									{
										'complete': function() {
											setTimeout(function() {
												masker.addClass('none').remove();
											},
											0);
										}
									});

								}
							});
						},
						3000);
					},
					2000);
				};
				topbar.animate({
					'opacity': 0
				},
				{
					'duration': 800
				});
				circle1.animate({
					'opacity': 1,
					'width': 50,
					'height': 50,
					'margin-left': '-25px',
					'margin-top': '-25px'
				},
				{
					'duration': 400,
					'complete': function() {
						msg = $('<div class="maskter-msg">你有新消息</div>').appendTo(masker);
						setTimeout(fun1, 0);
					}
				});
			}
		});
	};

	loadImg(imgs.bg0,
	function(img) {
		var mobileInner = $('.mobile-inner'),
		bgWidth = img.width / img.height * screenSize.height;

		//大背景进入
		$('body').css({
			'backgroundImage': 'url(' + img.src + ')',
			'backgroundPosition': '0 0'
		}).animate({
			'backgroundPosition-x': (screenSize.width - bgWidth) + 'px'
		},
		2084);

		//手机外壳浮出
		setTimeout(function() {
			var mt = Math.max(153, screenSize.height - 415);
			$('.mobile').css({
				'backgroundPosition': '50% ' + (screenSize.height + 415) + 'px'
			}).animate({
				'backgroundPosition-y': mt + 'px',
				'opacity': 1
			},
			{
				'duration': 800,
				'complete': function() {
					var offset;
					mobileInner.css({
						'top': (screenSize.width > 240 ? mt + 76 : mt + 76 * (220 / 249)) + 'px'});
					offset = mobileInner.offset();
					mobileInner.css({
						'backgroundSize': bgWidth + 'px ' + screenSize.height + 'px',
						'backgroundPosition': '-' + (bgWidth - screenSize.width + offset.left) + 'px -' + offset.top + 'px'
					}).animate({
						'opacity': 1
					},
					500);
					$('.logo').animate({
						'margin-top': 35,
						'backgroundSize': '100% 100%',
						'bottom': 485
					},
					{
						'complete': function() {
							$('.slide-mask').show().animate({
								'opacity': 1
							},
							{
								'duration': 500,
								'complete': function() {
									$(this).addClass('floating');
								}
							});
						}
					});
				}
			});
			$('.flog').animate({
				'opacity': 1
			},
			800);
		},
		1667);
	});

	$('body').bind({
		'touchstart': function(event) {
			dragingSlider = dragingStart = 0;
			if ($.contains($('.panels')[0], event.target)) {
				dragingSlider = 1;
				dragingX = event.touches[0].pageX;
				scrollX = $('.panels')[0].scrollLeft;
				return;
			}
			if (event.changedTouches[0].target === $('.slide-btn')[0]) {
				dragingStart = 1;
				dragingY = event.touches[0].screenY;
				return;
			}
		},
		'touchmove': function(event) {
			if (dragingSlider) {
				$('.panels')[0].scrollLeft = (dragingX - event.touches[0].pageX) + scrollX;
			}
			if (dragingStart) {
				$('.slide-btn').css({
					'bottom': dragingY - event.touches[0].screenY
				});
				$('.slide-mask').css({'backgroundColor':'rgba(0,0,0,'+Math.min((dragingY-event.touches[0].screenY)/100,0.8)+')'});
			}
			event.preventDefault();
		},
		'touchend': function(event) {
			var dragedX = event.changedTouches[0].screenX - dragingX,
			dragedY = event.changedTouches[0].screenY - dragingY;
			if (dragingStart) {
				if (dragedY < -100) {
					onDragEnd();
				}else{
					$('.slide-mask').animate({'backgroundColor':'rgba(0,0,0,0)'});
				}
				$('.slide-btn').css({
					'bottom': 0
				});
			} else if (dragingSlider) {
				if (Math.abs(dragedX) <= 20) {
					changePanelIndex(panelIndex);
				} else if (dragedX < 0) {
					changePanelIndex(panelIndex + 1);
				} else {
					changePanelIndex(panelIndex - 1);
				}
			}
		}
	});

	window.onresize = function() {
		var panelsLength = $('.panel').length;
		screenSize = {
			'width': $('body').width(),
			'height': $('body').height()
		};
		$('.panel,.panels').css('width', screenSize.width);
		$('.panels-list').css({
			'width': panelsLength * screenSize.width
		});
	};
	window.onresize();
});