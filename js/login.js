$(function(){
	var jform = $('#form'),
		form = jform[0];
	jform.find('.form-text').bind('focus',function(){
		var input = $(this);
		input.parent().addClass('form-focus');
	}).bind('blur',function(){
		var input = $(this);
		if (input.val() === ''){
			input.parent().removeClass('form-focus');
		}
	});
});