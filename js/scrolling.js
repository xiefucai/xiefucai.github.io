var dict = document.getElementById('icIBahyI-main_cont');
try {
	dict.innerHTML = '        <div id=\"icIBahyI-title\" class=\"icIBahyI-title\" style=\"display:none\">scrolling</div>        <div id=\"icIBahyI-dict_main\">            <div class=\"icIBahyI-dictbar\">              <div class=\"icIBahyI-dict_title\">                <div class=\"icIBahyI-prons\">				<span class=\"icIBahyI-eg\">				<span class=\"icIBahyI-fl\">					<strong>[</strong><strong lang=\"EN-US\" xml:lang=\"EN-US\">ˈskrəuliŋ</strong><strong>]</strong>				</span>					<a title=\"机器发音\" onclick=\"asplay_hanci(\'http://res-tts.iciba.com/e/e/5/ee5631e545c57660dc98fd28795cb9ff.mp3\');\"  class=\"icIBahyI-ico_sound\" href=\"javascript:;\"></a>				</span>                  <span class=\"icIBahyI-new_word\"><a id=\"CIBA_JOINWORD\" wname=\"scrolling\" class=\"icIBahyI-join_word\" href=\"###\" hidefocus=\"true\" onclick=\"iCIBA_JOINWORD();\">生词本</a></span> </div>              </div>            </div>            <div class=\"icIBahyI-simple\">              <div class=\"icIBahyI-tab_list\"></div>              <div class=\"icIBahyI-dict_content\">                <div class=\"icIBahyI-group_prons\">	               		<div class=\"icIBahyI-group_pos\"><p>			               <span class=\"icIBahyI-fl\">n.</span><span class=\"icIBahyI-label_list\">					              		 <label>卷[滚]动法，上下换行；</label> </span></p><p>			               <span class=\"icIBahyI-fl\">v.</span><span class=\"icIBahyI-label_list\">					              		 <label>（电脑屏幕上）从上到下移动（资料等），卷页（ scroll的现在分词 ）；</label> 					              		 <label>（似卷轴般）卷起；</label> 					              		 <label>（像展开卷轴般地）将文字显示于屏幕；</label> </span></p>              </div>              </div>          </div>      	</div>      	</div>        <div class=\"icIBahyI-footer\"><a target=\"_blank\" href=\"http://www.iciba.com/scrolling\" class=\"icIBahyI-xx\">详细释义</a></div>';
	
	var loading = document.getElementById('loading');
	loading.style.display = "none";
	dict.style.display = "block";
} catch(e) {
	console.log(e);
}
var kds_HUAYI_iciba = new Image(0, 0);
kds_HUAYI_iciba.src = "http://counter.kds.iciba.com/kds2_userinfo_record.php?p=2109";