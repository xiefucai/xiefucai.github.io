$(function(){
	var onScroll = function(event,scroller){
		var k = event.wheelDelta? event.wheelDelta:-event.detail*10;
			scroller = scroller || this;
			scroller.scrollTop = scroller.scrollTop - k;
			return false;
		};
	$('.list').bind({
		'mousewheel':onScroll
	});
});