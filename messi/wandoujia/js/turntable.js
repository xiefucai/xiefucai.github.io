$(function(){
	var dialog = common.dialog(),
		times = 5;//抽奖次数
	$('#start-btn').click(function(){
		var img = $(this).prev(),
			i = Math.floor(Math.random() * 6);
		if (img.hasClass('rotating')){
			return;
		}
		if (times <= 0){
			dialog.alert('对不起，你的抽奖机会已用完');
			return;
		}
		times--;
		img.removeClass('turntable-img-0 turntable-img-1 turntable-img-2 turntable-img-3 turntable-img-4 turntable-img-5').addClass('rotating');
		setTimeout(function(){
			img.addClass('turntable-img-'+i).removeClass('rotating');
		},3000);
	});
	
	$('#popbtn').bind('click',function(){
		var arr = ['<ul class="contact-form">',
			'<li><label>姓名：</label><input type="text" placeholder="请输入姓名"/></li>',
			'<li><label>手机号：</label><input type="text" placeholder="请输入手机号"/></li>',
			'<li><label>身份证：</label><input type="text" placeholder="请输入身份证"/></li>',
			'<li><label>微信号：</label><input type="text" placeholder="请输入微信号"/></li>',
			'<li><label>地址：</label><input type="text" placeholder="请输入地址"/></li>',
		'</ul>'];
		dialog.confirm({'title':'请填写你的真实信息','text':arr.join('\n'),'height':'auto','ensure':'提交'},function(){
			//提交代码
			//dialog.close();
			//return false;
		});
	});
	
	window.dialog = dialog;
});