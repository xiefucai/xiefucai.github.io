$(function(){
	var drawImage = function(img,elem,src){console.log(img,img.src);
		var e = $(elem),
			context = elem.getContext('2d');
			context.drawImage(img,0,0,e.parent().width(),e.parent().height());
			elem.totalSize = elem.toDataURL().length;
			e.css('background','transparent');
	},
	doEraser = function(x,y){
		var canvas = this,
			radius = 25,
			ctx = canvas.getContext('2d');
			ctx.globalCompositeOperation = "destination-out";
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.strokeStyle = "rgba(250,250,250,0)";
			ctx.fill();
			ctx.globalCompositeOperation = "source-over"
	},
	isOnClearing = null;
	
	$('body').bind({
		'touchend':function(){
			var canvas,
				ctx;
			if (isOnClearing){
				canvas = isOnClearing;
				ctx = canvas.getContext('2d');
				ctx.save();
				isOnClearing = null;
				if (canvas.toDataURL().length/canvas.totalSize < 0.5){
					ctx.clearRect(0,0,canvas.width,canvas.height);
				}
			}
		}
	});
	$('.lottery-mask').bind({
		'touchstart':function(event){
			isOnClearing = this;
		},
		'touchmove':function(event){
			var e = event.originalEvent,
				px = e.targetTouches[0].pageX,
				py = e.targetTouches[0].pageY,
				ox = $(this).offset().left,
				oy = $(this).offset().top;
			doEraser.call(this,px-ox,py-oy);	
			return false;
		}
	}).each(function(){
		var src = $(this).css('backgroundImage').replace(/.*\((.*)\).*/g,'$1').replace(/([^\/]*\/){3}/,'/'),
			canvas = this,
			img = new Image();
			img.onload = function(){drawImage(img,canvas,src);};
			img.onerror = function(){};
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
			img.src = src;
	});
});