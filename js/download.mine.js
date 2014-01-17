$(function(){
var dialog = common.dialog(),
	temp = {},
	elem = {
		'taskForm':$('#task-form')
	},
	form = elem.taskForm[0];

	$.extend(window.common,{
		'protect':{
			'checkUrl':function(){
				
			}
		},
		'resize':function(){
			frameElement.height = $('#bottom').offset().top;
		},
		'init':function(){
			common.resize();
		},
		'action':{
			'addTask':function(event,t){
				elem.taskForm.removeClass('none');
			},
			'hideParent':function(event,t){
				t.parent().addClass('none');
			}
		}
	});
	
	
	
	$('body').bind('click',function(event){
		var target = event.target,
			jtarget = $(target),
			action = jtarget.attr('data-action'),
			r;
		if (action && common.action[action]){
			r = common.action[action](event,jtarget);
		}
		if (r === false){
			return r;
		}
	});

	$(form['task-name']).bind('keyup',function(){
		var input = this;
		clearTimeout(temp.taskTimer);
		setTimeout(function(){
			common.protect.call(input);
		},100);
	});
	
	common.init();
});