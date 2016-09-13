var a=1,b=0,time1=null;
var clone_first=$('.sp_con img').eq(2).clone();
var clone_last=$('.sp_con img').eq(0).clone();
$('.sp_con img').eq(0).before(clone_first);
$('.sp_con').append(clone_last);
var zwid=$('.sp_con img').eq(0).width();
$('.sp_inner').scrollLeft(zwid);
	function Run(){
		$('.sp_inner').animate({
			scrollLeft:zwid*a
		});
		$('.sp_list li').eq(b).addClass('sp_show').siblings().removeClass('sp_show')
	}
	function Right(){
		b++;
		if (b>=$('.sp_list li').length) {
			b=0;
		};
		a++;
		if (a>=$('.sp_con img').length) {
			a=2;
			$('.sp_inner').scrollLeft(zwid);
		};
		Run();
		if (a>=$('.sp_con img').length-2) {
			setTimeout(function(){
				clearInterval(time1);
				window.open('longin.html','_self')
			},500)
			
		};
	}
	function auto(){
		clearInterval(time1);
		time1=setInterval(function(){
			Right();
		},3000);
	}
	auto();
	$('.sp_list li').mouseover(function(){
		clearInterval(time1);
		var i=$('.sp_list li').index(this);
		a=i+1;
		b=i
		Run();
	});
var startX=0,startY=0,endX=0,endY=0;
document.addEventListener('touchstart',function (e){
	startX=e.touches[0].pageX;
	startY=e.touches[0].pageY;
},false);
document.addEventListener('touchmove',function (e){
	endX=e.touches[0].pageX;
	endY=e.touches[0].pageY;
},false);
document.addEventListener('touchend',function (e){
	if (startX-endX<-50) {
		clearInterval(time1);
		Right();
	}
	
},false)