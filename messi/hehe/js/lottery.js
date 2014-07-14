$(function(){
	var c, w, h;
	var drawImage = function(img,elem,src){console.log(img,img.src);
		var e = $(elem),
			w = e.parent().width(),
			h = e.parent().height(),
			context,
			tempData;
			if (elem.getContext){
				context = elem.getContext('2d');
				context.lineJoin = 'round';
				context.lineCap = 'round';
				context.globalCompositeOperation = "source-over";
				context.drawImage(img,0,0,w,h);
				context.fill();
				tempData = context.getImageData(0,0,w,h);
				elem.totalSize = elem.toDataURL().length;
				e.css('background','rgba(0,0,0,0)').siblings('.lottery-info').addClass('visible');
				context.clearRect(0,0,w,h);
				context.putImageData(tempData,0,0);
            } else {
                alert("您的浏览器不支持 canvas 标签");
                return;
            }
	},
	doEraser = function(x,y,e){
		var canvas = this,
			radius = 25,
			ctx = canvas.getContext('2d'),
			tempData;
            ctx.globalCompositeOperation = "destination-out";
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2,true);
			ctx.strokeStyle = "rgba(255,255,255,0)";
			//ctx.fill();
			ctx.stroke();
			/*
			tempData = ctx.getImageData(0,0,canvas.width,canvas.height);
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.putImageData(tempData,0,0);*/
	},
	isOnClearing = null;
	
	$('body').bind({
		'touchend':function(){
			var canvas,
				ctx;
			if (isOnClearing){
				canvas = isOnClearing;
				ctx = canvas.getContext('2d');//for(var i in ctx){alert(i+':'+ctx[i]);};console.log(ctx);
				ctx.save();
				isOnClearing = null;
				if (canvas.toDataURL().length/canvas.totalSize < 0.5){
					try {
						$(".lottery-chance-num").html("0");
						window.jiji_js.setLotteryResult();
					} catch(e) {
						//alert('程序出错了[015]');
					}
					ctx.clearRect(0,0,canvas.width,canvas.height);
					$('.lottery-share').removeClass('none');
					$(canvas).addClass('none');
					canvas = null;
				}
			}
		}
	});
	$('.lottery-mask').bind({
		'touchstart':function(event){
			var e = event.originalEvent,
				px = e.targetTouches[0].pageX,
				py = e.targetTouches[0].pageY,
				ox = $(this).offset().left,
				oy = $(this).offset().top;
			
			isOnClearing = this;
			doEraser.call(this,px-ox,py-oy,event);
		},
		'touchmove':function(event){
			if (isOnClearing){
				var e = event.originalEvent,
				px = e.targetTouches[0].pageX,
				py = e.targetTouches[0].pageY,
				ox = $(this).offset().left,
				oy = $(this).offset().top;
				doEraser.call(this,px-ox,py-oy,event);
				event.preventDefault();
			}
		}
	}).each(function(){
		var src = $(this).css('backgroundImage').replace(/.*\((.*)\).*/g,'$1').replace(/([^\/]*\/){3}/,'/'),
			canvas = this,
			img = new Image();
			img.onload = function(){
				drawImage(img,canvas,src);
				
				//加载完蒙层，才显示
				$("#lottery-info-succ").css('background-image', $("#lottery-info-succ").attr('data-background-image'));
				$("#lottery-info-title").removeClass('none');
				
			};
			img.onerror = function(){};
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
			//img.src = src;
			img.src = 'images/lottery.mask.png';
		c = document.querySelector('canvas');
	});
});