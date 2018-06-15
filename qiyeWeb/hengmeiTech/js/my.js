// JavaScript Document

//首页焦点图
;(function(){	
	
		var num = 0;
		var timer = null;
		
		function dong(){	
			timer = setInterval(function(){	
				num++;
				if(num>2){num = 0}
				//console.log(num);
				$('.banner ul').animate({'left':-100*num+'%'})
				$('.banner ol li').eq(num).addClass('curr').siblings().removeClass('curr');
			},2000);
		}
		dong();
		
		$('.banner').hover(function(e) {
			//alert('ok');
			clearInterval(timer);
		},function(e) {
			dong();
		});
		
		$('.prev').click(function(e) {
				num++;
				if(num > 2){num = 0}
				//console.log(num);
				$('.banner ul').stop().animate({'left':-100*num+'%'})
				$('.banner ol li').eq(num).addClass('curr').siblings().removeClass('curr');
		});
		$('.next').click(function(e) {
				num--;
				if(num < 0){num = 2}
				//console.log(num);
				$('.banner ul').stop().animate({'left':-100*num+'%'})
				$('.banner ol li').eq(num).addClass('curr').siblings().removeClass('curr');
		});
		
		$('.banner ol li').click(function(e) {
			var index = $(this).index();
			$('.banner ul').stop().animate({'left':-100*index+'%'},500)
			$('.banner ol li').eq(index).addClass('curr').siblings().removeClass('curr');
			num = index;
	
        });


})();

//.subNavIn .top返回顶部
;(function(){	
	
	$('.subNavIn .top').click(function(e) {
        $('html,body').animate({'scrollTop':0})
    });
	
})();

//列表
;(function(){	
	$('.listConNav ul li').mouseenter(function(e) {
        
		$(this).addClass('current').siblings().removeClass('current')
		var index = $(this).index();
		$('.listCon_con_item').eq(index).addClass('current').siblings().removeClass('current')
		
    });



})();

//about
;(function(){	

	$('.tab_nav ol li').mouseenter(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
        var index = $(this).index();
		$('.years_info').eq(index).hide().stop().fadeIn().siblings().stop().fadeOut();
		
    });
	
	var num = 0;
	var timer = null;
	
	function zhuan(){	
		timer = setInterval(function(){	
			num++;
			if(num>6){num = 0}
			//console.log(num);
			$('.tab_nav ol li').eq(num).addClass('current').siblings().removeClass('current');
			$('.years_info').eq(num).hide().stop().fadeIn().siblings().stop().fadeOut();
		},2000);
	}
	zhuan();
	
	$('.years').hover(function(e) {
		//alert('ok');
		clearInterval(timer);
	},function(e) {
		zhuan();
	});

})();

//recruit
;(function(){	
	$('.rec_3 .rec_tit span').click(function(e) {
        $(this).parents('li').toggleClass('current')
    });
})();





















