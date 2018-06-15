// JavaScript Document
//Banner 轮播效果
;(function(){	

	var index = 0;
	var timer = null
	function run(){	
		timer = setInterval(function(){	
		index++;
		if(index>3){index = 0}
		//console.log(index);
		$('.bannerPic .ban').eq(index).addClass('current').siblings().removeClass('current');
		},2500)
	}	
	run();
	$('.bannerPic').hover(function(e) {
		clearInterval(timer);
	},function(e) {
		run();
	});

})();

//Produce 轮播效果
;(function(){	

	var num = 0;
	var timer = null
	function run(){	
		timer = setInterval(function(){	
		num++;
		var len = '.proBox ul'.length-1;
		console.log(len);

		if(num>len){num = 0}
		$('.proBox ul').css({"left":-431*num+"px"})
		},1500)
	}	
	run();
	
	$('.produce').hover(function(e) {
		clearInterval(timer);
	},function(e) {
		run();
	});

	$('.proLeft').click(function(e) {
		num++;
		var len = '.proBox ul'.length-1;
		//console.log(len);

		if(num>len){num = 0}
		$('.proBox ul').css({"left":-431*num+"px"});
    });
	$('.proRight').click(function(e) {
		num--;
		//var len = '.proBox ul'.length-1;
		//console.log(len);

		if(num<0){num = 9}
		$('.proBox ul').css({"left":-431*num+"px"});
    });
})();
