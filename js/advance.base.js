$(function(){
	var common = {
		'resize':function(event){
			var h = $('#bottom').offset().top;
			frameElement.height = h;
		},
		'init':function(){
			$(window).resize(common.resize);
			setTimeout(common.resize,100);
		},
		'action':{
		},
		'protected':{
			'checkbox':{
				'change':function(target){
					if (target.is(':checked')){
						target.parent().addClass('form-check-checked');
					}else{
						target.parent().removeClass('form-check-checked');
					}
				}
			}
		}
	};
	$('body').bind('click',function(event){
		var target = event.target,
			jtarget = $(target),
			action = jtarget.attr('data-action');
		if (action && common.action[action]){
			common.action[action](event,jtarget);
		}else if(target.tagName === 'INPUT' && target.type === 'checkbox'){
			common.protected.checkbox.change(jtarget);
		}
	});
	
	common.init();
});