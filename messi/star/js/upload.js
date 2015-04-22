﻿$(function() {
	var paras = (function(s) {
		var n = {};
		return s.replace(/([^&=]+)=([^&=]+)/g,
		function() {
			n[arguments[1]] = decodeURIComponent(arguments[2])
		}),
		n;
	})(location.search.slice(1)),
	options = {
        maxWidth: document.documentElement.clientWidth,
        canvas: true
    },
	config = [{
		'fm': 3,
		'fd': 21,
		'tm': 4,
		'td': 19,
		'name': '白羊座',
		'text': '我喜欢有话直说，不喜欢拐弯抹角，别跟我说什么我太毒舌。'
	},
	{
		'fm': 4,
		'fd': 20,
		'tm': 5,
		'td': 20,
		'name': '金牛座',
		'text': '我喜欢精心地准备，不喜欢随便莽莽撞撞，别跟我说什么我不懂浪漫。'
	},
	{
		'fm': 5,
		'fd': 21,
		'tm': 6,
		'td': 21,
		'name': '双子座',
		'text': '我喜欢新鲜刺激，不喜欢一成不变，别跟我说什么我不专一。'
	},
	{
		'fm': 6,
		'fd': 22,
		'tm': 7,
		'td': 22,
		'name': '巨蟹座',
		'text': '我喜欢一个人思考，不喜欢结交陌路，别跟我说什么我太孤僻。'
	},
	{
		'fm': 7,
		'fd': 23,
		'tm': 8,
		'td': 22,
		'name': '狮子座',
		'text': '我喜欢拼尽全力，不喜欢认输，别跟我说什么不自量力。'
	},
	{
		'fm': 8,
		'fd': 23,
		'tm': 9,
		'td': 22,
		'name': '处女座',
		'text': '我喜欢整齐干净，不喜欢乱七八糟，别跟我说什么我有洁癖。'
	},
	{
		'fm': 9,
		'fd': 23,
		'tm': 10,
		'td': 23,
		'name': '天秤座',
		'text': '我喜欢有人陪伴，不喜欢孤单，别跟我说什么我太粘人。'
	},
	{
		'fm': 10,
		'fd': 24,
		'tm': 11,
		'td': 22,
		'name': '天蝎座',
		'text': '我喜欢爱憎分明，不喜欢谎言，别跟我说什么我太高冷。'
	},
	{
		'fm': 11,
		'fd': 23,
		'tm': 12,
		'td': 21,
		'name': '射手座',
		'text': '我喜欢追求自由，不喜欢被人束缚，别跟我说什么放荡不羁。'
	},
	{
		'fm': 12,
		'fd': 22,
		'tm': 1,
		'td': 19,
		'name': '魔羯座',
		'text': '我喜欢坚持自我，不喜欢墙头草，别跟我说什么我不合群。'
	},
	{
		'fm': 1,
		'fd': 20,
		'tm': 2,
		'td': 18,
		'name': '水瓶座',
		'text': '我喜欢独一无二，不喜欢跟别人一样，别跟我说什么我太顽固。'
	},
	{
		'fm': 2,
		'fd': 19,
		'tm': 3,
		'td': 20,
		'name': '双鱼座',
		'text': '我喜欢追逐梦想，不喜欢别人纷繁叨扰，别跟我说什么不切实际。'
	}],
	format = function(str) {
		return str.replace(/(我喜欢)([^，,]+)(，不喜欢)([^，,]+)(，别跟我说什么)([^，,]+)(。)/g, '$1<a contenteditable="true">$2</a>$3<a contenteditable="true">$4</a>$5<a  contenteditable="true">$6</a>$7');
	},
	getConfig = function(){
		var m = parseInt(paras['m'],10),
			d = parseInt(paras['d'],10),
			c,
			f,
			t,
			e = m * 100 + d;
		
		for(var i=0,k=config.length;i<k;i++){
			c = config[i];
			f = c['fm'] * 100 + c['fd'],
			t = c['tm'] * 100 + c['td'];
			if (e >= f && e<=t){
				return c;
			}
		}
		return config[10];
	},
	info = getConfig(),
	compressImg = function(imgData, maxHeight, onCompress){
		if (!imgData) return;
	    onCompress = onCompress || function() {};
	    maxHeight = maxHeight || 200; //默认最大高度200px
	    var canvas = document.createElement('canvas');
	    var img = new Image();
	    img.onload = function() {
			var a = Math.min(img.width,img.height);
			console.log(a);
	        var ctx = canvas.getContext("2d");
	        ctx.clearRect(0, 0, a, a); // canvas清屏
	        //重置canvans宽高
			canvas.width = a;
			canvas.height = a;
	        ctx.drawImage(img, 0, 0, img.width, img.height); // 将图像绘制到canvas上
	        onCompress(canvas.toDataURL("image/jpeg")); //必须等压缩完才读取canvas值，否则canvas内容是黑帆布
	    };
	    // 记住必须先绑定事件，才能设置src属性，否则img没内容可以画到canvas
	    img.src = imgData;
	};

	$('.upload-msg').html('<p class="upload-text">'+format(info['text'])+'</p><div class="upload-info">---因为我是<a contenteditable="true">'+info['name']+'</a></div>')/*.bind('click',function(event){
		var t = $(event.target);
		if (event.target.tagName === 'A'){
			var s = window.prompt('',t.text());
			if (s) {
				t.text(s);
			}
		}
	})*/;

	$('#public').bind('click',function(){
		location.href = 'public.html';
	});

	$('#upload-file').bind('change',function(event){
		var input = this,
			form = input.form,
			width = document.documentElement.clientWidth,
			doFile = function(f,imgData){
				loadImage.parseMetaData(f, function (data) {
					var exif;
		            if (data.exif) {
		                options.orientation = data.exif.get('Orientation');
		                exif = data.exif;
		            }
		            
					loadImage(imgData/*exif.get('Thumbnail')*/, function (img) {
						var data = img.toDataURL('image/jpeg');
		                    $(form).find('img')[0].src = data;
		                    form['imgData'].value = data;//写到form元素待提交服务器
		                }, {orientation: exif.get('Orientation'),maxWidth:width,maxHeight:width,crop:true});
		        },{maxMetaDataSize: 262144});
			};
		var f = input.files[0];//一次只上传1个文件，其实可以上传多个的
		
		var FR = new FileReader();
		FR.onload = function(){
			/*
			compressImg(this.result,600,function(data){//压缩完成后执行的callback
				form['imgData'].value = data;//写到form元素待提交服务器
				$(form).find('img')[0].src = data;//压缩结果验证
			});*/
			doFile(f,this.result);
		};
		FR.readAsDataURL(f);//先注册onload，再读取文件内容，否则读取内容是空的
		
		
		
	});
});
