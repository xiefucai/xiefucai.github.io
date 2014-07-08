$(function(){
	var drawImage = function(img,elem,src){console.log(img,img.src);
		var e = $(elem),
			context = elem.getContext('2d');console.log(e.width(),e.height());
			context.drawImage(img,0,0,e.width(),e.height());
	};
	$('.lottery-mask').each(function(){
		var src = $(this).css('backgroundImage').replace(/.*\((.*)\).*/g,'$1').replace(/([^\/]*\/){3}/,'/'),
			canvas = this,
			img = new Image();
			img.onload = function(){drawImage(img,canvas,src);};
			img.onerror = function(){};
			img.src = src;
	});
});