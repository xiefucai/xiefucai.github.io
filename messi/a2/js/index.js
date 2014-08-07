$(function(){
	var content = $('#content'),
		initTip = function(){
			img = content.find('img').get(0),
			newImg = new Image(),
			w = content.width(),
			h = content.height(),
			iw = 0,
			ih = 0,
			onloadImg = function(){
				iw = newImg.width;
				ih = newImg.height;
				h = w * ih / iw;
				$('.content-result-box').css({'lineHeight':h+'px'})
				$('.content-option').removeClass('none').each(function(){
					var t = $(this),
						x = t.attr('data-x'),
						y = t.attr('data-y')
						;
					if (x){
						t.css({'left':t.attr('data-x')});
						if (/%$/.test(x)){
							if (parseFloat(x)/100 > 0.5){
								t.addClass('content-option-2');
							}else{
								t.addClass('content-option-1');
							}
						}else if(/px$/.test(x)){
							x = parseFloat(x) / iw * 100 + '%';
							t.attr('data-x',x);
							t.css({'left':x});
						}
					}
					if (y){
						t.css({'top':t.attr('data-y')});
						if(/px$/.test(y)){
							y = parseFloat(y) / ih * 100 + '%';
							t.attr('data-y',y);
							t.css({'top':y});
						}
					}
				});
			};
			
			newImg.onload = onloadImg;
			newImg.src = img.src;
	};
	content.bind('click',function(){
		$('.content-result-box').removeClass('none');
	});
	$('.content-result-box').bind('click',function(){
		$(this).addClass('none');
		return false;
	});
	initTip();
	window.onresize = initTip;
});