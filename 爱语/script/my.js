//自动适应屏幕
window.onresize=function(){
	resetFont();
}
function resetFont(){
	var HTML=document.getElementsByTagName('html')[0];
	var ww=document.documentElement.clientWidth;
	var scale=ww/640;//640为pds图的宽度
	HTML.style.fontSize=100*scale+'px';
}
resetFont();
//闪屏

//登陆
	$('.dl_mask').click(function(){
		var x=$('.dl_mask').index(this);
		$('.dl_mask').eq(x).hide();
		$('.dl_inp1').eq(x).focus();
	})
	$('.dl_inp1').blur(function(){
		var x=$('.dl_inp1').index(this);
		if ($('.dl_inp1').eq(x).val()=='') {
			$('.dl_mask').eq(x).show();
		};
	})
	$('.zc_zh').click(function(){
		window.open('zhuce.html','_self')
	})
	$('.zc_wj').click(function(){
		window.open('wangjimima.html','_self')
	})
//设置
	$('.sz_mask').click(function(){
		var x=$('.sz_mask').index(this);
		$('.sz_mask').eq(x).hide();
		$('.sz_inp').eq(x).focus();
	})
	$('.sz_inp').blur(function(){
		var x=$('.sz_inp').index(this);
		if ($('.sz_inp').eq(x).val()=='') {
			$('.sz_mask').eq(x).show();
		};
	})

//主页
//点击按钮出现菜单
$(function(){
	$('.zy_cd1').click(function(){
		$('.zc_box').toggle('fast')
	})
})
//点击出现背景
$('.zc_con li').click(function(){
	var i=$('.zc_con li').index(this);
	$('.zc_con li p').removeClass('zc_show')
	$('.zc_con li p').eq(i).addClass('zc_show')
	
})
//点击说说墙跳转
$('.zc1').click(function(){
	window.open('shuoshuo.html','_self')
})
//聊天跳转
$('.zc2').click(function(){
	window.open('liaotian.html','_self')
})
//设置跳转
$('.zc3').click(function(){
	window.open('shezhi.html','_self')
})
$('.zc4').click(function(){
	window.open('longin.html','_self')
})
//发送
	$('.fs_mask').click(function(){
		$('.fs_mask').hide();
		$('#fs_send').focus();
	})
	$('#fs_send').blur(function(){
		if ($('#fs_send').val()=='') {
			$('.fs_mask').show();
		};
	})

//说说墙
	$('.ss_jh').click(function(){
		window.open('fasong.html','_self');
	})
// 返回上一个页面
	$('.zy_cd').click(function(){
		window.history.back();
	})
//聊天
	$('.lt_mask').click(function(){
		$('.lt_mask').hide();
		$('.lt_inp').focus();
	})
	$('.lt_inp').blur(function(){
		if ($('.lt_inp').val()=='') {
			$('.lt_mask').show();
		};
	})
	$(window).keydown(function(event){
		if ($('.lt_inp').val()!=''&&event.keyCode==13) {
		 	if ($('.lt_inp').val().length>=16) {
		 		var str='<p class="lt_df lt_df1 lt_rig"><span class="lt_sjx lt_sjx1"></span><span class="lt_zi lt_zi3 lt_zi1">'+$('.lt_inp').val()+'</span></p>';
		 		$('.lt_zong').children().eq(0).remove();
		 		$('.lt_zong').append(str);
		 		$('.lt_inp').val('');
		 	} else{
		 		var str='<p class="lt_df  lt_rig"><span class="lt_sjx lt_sjx1"></span><span class="lt_zi  lt_zi1">'+$('.lt_inp').val()+'</span></p>';
		 		$('.lt_zong').children().eq(0).remove();
		 		$('.lt_zong').append(str);
		 		$('.lt_inp').val('');
		 	};
		};
	});
// 登录
$('.dl_con3 .h3').click(function(){
	window.open('peidui.html','_self')
})
$('.pd_mak').click(function(){
	window.open('huoqu.html','_self')
})
$('.shejiao').click(function(){
	window.open('zhuye.html','_self')
})

