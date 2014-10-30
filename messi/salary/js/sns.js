$(function(){
	var action = {
		'share':function(event,t){
			var wxShare = $('#share-wx');
			if (!/\bmicromessenger\b/.test(navigator.userAgent)){
				if (wxShare.length === 0){
					wxShare = $(['<div id="share-wx" class="wx-share" data-action="hideSelf"><div class="wx-share-arrow"></div>',
								'<div class="wx-share-words wx-share-words1">1.点击右上角分享按钮</div>',
								'<div class="wx-share-words wx-share-words2">2.请选择[分享到朋友圈] 或 [发送给朋友]</div>',
								'</div>'
						].join('\n')).appendTo($('body'));
				}else{
					wxShare.show();
				}
			}
		},
		'hideSelf':function(event,t){
			t.hide();
		},
		'follow':function(){
			if (/\bmicromessenger\b/.test(navigator.userAgent)){
				location.href = '/';//跳转为关注页面专门发表的文章页面
			}
		}
	};
	$('body').bind('click',function(event){
		var target = event.target,
			t = $(target),
			actionName = t.attr('data-action');
		if (actionName && action[actionName]){
			action[actionName](event,t);
		}
	});
});