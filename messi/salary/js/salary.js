;(function($) {
	var initSalaryBar = function(){
		var elem = $('.salary'),
			elemBar = elem.find('.salary-bar'),
			arr = elem.attr('data-array').split(',')
			max = 0,
			min = 0,
			o = {
				'moving':false
			};
		arr.sort(function(v1,v2){
			return Number(v1) - Number(v2);
		});
		min = arr[0];
		max = arr[arr.length-1];
		for(var i=0,k=arr.length;i<k;i++){
			arr[i]=Number(arr[i]);
			$('<div class="salary-point" style="bottom:'+Math.floor(((arr[i]-min)*100)/(max-min)*0.95)+'%;">'+arr[i]+'</div>').appendTo(elem);
		}
		elemBar.css('height',((+elem.attr('data-value')-min)*100/(max-min))+'%');
		$('.salary-touchbtn').bind({
			
		});
		
		$('body').bind({
			'touchstart':function(event){
				var target = event.target,
					sliderBtn = $('.salary-touchbtn')[0];
				if ($.contains(sliderBtn,target) || (sliderBtn === target)){
					o.moving = true;
					o.height = Number(elemBar[0].style.height.replace(/[^\d\.]/g,''));
					o.cHeight = elem.height();
					o.x0 = event.touches[0].pageX;
					o.y0 = event.touches[0].pageY;
					return false;
				}
			},
			'touchmove':function(event){
				var r = 0,v=0;
				if (o.moving){
					r = o.height + 100 * (o.y0-event.touches[0].pageY)/o.cHeight;
					r = Math.max(r,0);
					r = Math.min(r,100);
					v = min+(max-min)*r/100;
					elemBar.css('height',r+'%');
					elemBar.find('.salary-tip').html('&yen;'+Math.floor(v));
					elem.attr('data-value',Math.floor(v));
					return false;
				}
			},
			'touchend':function(){
				o.moving = false;
			}
		});
	};
	initSalaryBar();
})(Zepto);