$(function(){
	var onScroll = function(e,scroller){
		var event = e.originalEvent,
			k = event.wheelDelta? event.wheelDelta:-event.detail*10;
			scroller = scroller || this;
			scroller.scrollTop = scroller.scrollTop - k;
			return false;
	},
	bgs = ['images/1.jpg','images/2.jpg','images/3.jpg'],
	bg = $('#bg'),
	body = $('body'),
	bgIndex = 0,
	loadBg = function(i){
		var img = new Image();
		if (i > bgs.length-1){
			i = 0;
			bgIndex = 0;
		}
		img.onload = function(){
			body.css({'backgroundImage':'url("'+bgs[i]+'")'});
			bg.fadeOut(500,function(){
				bg.css({'backgroundImage':'url("'+bgs[i]+'")'}).show();
				setTimeout(function(){
					loadBg(++bgIndex);
				},5000);
			});
		};
		img.src = bgs[i];
	};
	$('.list').bind({
		'mousewheel':onScroll
	});
	setTimeout(function(){
		loadBg(++bgIndex);
	},5000);
});