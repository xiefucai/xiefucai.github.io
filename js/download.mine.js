$(function(){
var common = {
	'resize':function(){
		frameElement.height = $('#bottom').offset().top;
	},
	'init':function(){
		common.resize();
	}
};
common.init();
});