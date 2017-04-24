


//幻燈片效果
$(document).ready(function(){
		  $(".owl-carousel").owlCarousel({
		  	loop:true, //無線循環
		  	animateOut: 'fadeOut', //淡出
		    animateIn: 'fadeIn', //淡入
		    autoplay:true, //自動播放
		    items:1, //顯示圖片數量
		    // margin:30,
		    // stagePadding:30,
		    smartSpeed:500 //播放速度

		  });
});

