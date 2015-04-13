$(function(){
	var data={'year':1919,'month':5,'day':4};
	$('#select').bind('click',function(){
		$('#masker').removeClass('none');
	});
	$('#masker').bind('click',function(event){
		var a = $(event.target);
		if (a[0].tagName === 'A'){
			a.addClass('active').siblings().removeClass('active');

			if (a.attr('data-year')){
				data['year'] = a.attr('data-year');
			}
			if (a.attr('data-month')){
				data['month'] = a.attr('data-month');
			}
			if (a.attr('data-day')){
				data['day'] = a.attr('data-day');
			}
		}
	});

	$('#ok').bind('click',function(){
		if (!data['year']){
			alert('请选择出生年份');
			return false;
		}
		if (!data['month']){
			alert('请选择出生月份');
			return false;
		}
		if (!data['day']){
			alert('请选择出生日期');
			return false;
		}
		if (data['year'] && data['month'] && data['day']){
			$('#masker').addClass('none');
			$('#select').html(data['year']+'年'+('0'+data['month']).slice(-2)+'月'+('0'+data['day']).slice(-2)+'日');
		}
	});

	$('#make').bind('click',function(){
		if (data['year'] && data['month'] && data['day']){
			location.href = 'upload.html?y='+data['year']+'&m='+data['month']+'&d='+data['day'];
		}
		return false;
	});
});
