$(function(){
var qq=`
<style>
.main-im{position:fixed;bottom:10px;right:10px;z-index:9999999999;width:110px;}
.main-im .qq-a{display:block;width:106px;height:116px;font-size:14px;color:#0484cd;text-align:center;position:relative;}
.main-im .qq-a span{bottom:5px;position:absolute;width:90px;left:10px;}
.main-im .qq-hover-c{width:70px;height:70px;border-radius:35px;position:absolute;left:18px;top:10px;overflow:hidden;z-index:9;}
.main-im .qq-container{z-index:99;position:absolute;width:109px;height:118px;border-top-left-radius:10px;border-top-right-radius:10px;background:url(https://cdn.jsdelivr.net/gh/supfree/supfree/qq/qq-icon-bg.png) no-repeat center 8px;}
.main-im .img-qq{max-width:60px;display:block;position:absolute;left:6px;top:3px;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;-o-transition:all 0.5s;transition:all 0.5s;}
.main-im .im-qq:hover .img-qq{max-width:70px;left:1px;top:8px;position:absolute;}
.main-im .im_main{background:#F9FAFB;border:1px solid #dddddd;border-radius:10px;background:#F9FAFB;}

</style>
<div class="main-im">
	<div class="im_main" id="im_main">
		<a href="http://wpa.qq.com/msgrd?v=3&uin=1251948721&site=qq&menu=yes" target="_blank" class="im-qq qq-a" title="在线QQ反馈">
		<div class="qq-container">
		</div>
		<div class="qq-hover-c">
			<img class="img-qq" src="https://cdn.jsdelivr.net/gh/supfree/supfree/qq/qq.png">
		</div>
		<span>在线QQ反馈</span> </a>
	</div>
</div>`
$('body').append(qq);
});
