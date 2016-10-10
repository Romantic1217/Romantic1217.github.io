// 获取window的高度
var bodys = $('body');
var first = $('#All')[0];//jquery方法获取前面加$，
var content = $('.content')[0];
var logo = $('.logo')[0];
var big = $('.big_pic')[0];
var imgs1 = $('.img1')[0];
var title = $('.title');
var height1 = window.innerHeight;//初始化
first.style.height = height1 + 'px';
bodys.css('height',height1);//	 对象的一种方法
imgs1.style.height = height1 + 'px'; 
 //监控window可视高度，这里是动态获取窗口高度，滚轮之后有BUG，有时间再解决
//window.onresize = function(){
//	height1 = window.innerHeight;
//	first.style.height = height1 + 'px';
//	content.style.height = height1 + 'px';
//	bodys.css('height',height1);
//	imgs.style.height = height1 + 'px';
//}
//加载完之后运行的动画
window.onload = function(){
//	mTween(img1,'top',target,2000,'linear');
	//logo 让其隐藏 ，延时2秒
	setTimeout(function(){
		logo.style.opacity = 1;
	},2200);
	//背景图隐藏，运动方式让其显示
	mTween(imgs2,'top',255,800,'linear');
	mTween(imgs3,'top',365,800,'linear');
	//文字延时显示
	setTimeout(fn,2800);
	function fn(){
		title.css({
			visibility: 'visible',
			opacity : 1
		});
	}
	setTimeout(function(){
		var n = 0;
		var num = 0;
		/*$('.big_pic').fadeIn(1000);*/
		big.style.display= "block";
		big.style.transform = "scale(1)";
		big.style.transition= "0.1s";
			var timer = setInterval(function(){
				num ++;
				n ++;
				n%= 2;
				if( num < 3 ){
					if( n == 0 ){
						big.style.transform = "scale(1.8)";
					}else{
						big.style.transform = "scale(1)";
					}
				}else{
					big.style.transform = "scale(1)";
				}
				if( num == 4 ){
					clearInterval(timer);
				}
			},200);
	},1800);
}
/*************     滚轮事件        ******************/
var onOff = true;
var nums = 0;
mScroll(document,function(){//向上滑动
	if(!onOff){
		return;
	}
	onOff = false;
	//获取当前向上滚动的下标
		nums--;
		if( nums < 0 ){
			nums = 0;
		}
		//等于第1屏的时候调用下面的函数，0是对应的下标
		if( nums == 0 ){
			fnTab2();
			fn3();
			fn5();
			fn6();
		}
		//等于第2屏的时候调用下面的函数，1是对应的下标
		if( nums == 1 ){
			fn1();
			fn4();
			skin2();
			beau2();
			beau4();
		}
		if( nums == 2 ){
			skin4();
			beau1();
			listpicb();
		}
		if( nums == 3 ){
			listpicd();
			flytop();
		}
		if( nums == 4 ){
			flytop1();
			link2();
		}
		if( nums == 5 ){
			link4();
			talk2();
		}
		if( nums == 6 ){
			talk4();
			foot2();
		}
		var t = parseFloat($('#All').css('top'));
		var top = t + height1;
		if( t == 0 ){
			onOff = true;
			return;
		}
		mTween(first,'top',top,1000,'easeInStrong',function(){
			onOff = true;
		});
	},function(){//向下滑动
		//防止多次滑动
		if(!onOff){
			return;
		}
		onOff = false;
		//获取当前向下滚动的下标
		nums ++;
		if( nums > 7 ){
			nums = 7;
		}
		//等于第2屏的时候调用下面的函数，1是对应的下标
		if( nums == 1 ){
			fnTab1();
			fn1();
		}
		//等于第3屏的时候调用下面的函数，2是对应的下标
		if( nums == 2 ){
			fn2();
			skin1();
			beau1();
		}
		if( nums == 3 ){
			fn2();
			skin3();
			beau3();
			beau5();
			listpica();
		}
		if( nums == 4 ){
			listpicc();
			flydown();
		}
		if( nums == 5 ){
			flydown1();
			link1();
		}
		if( nums == 6 ){
			link3();
			talk1();
		}
		if( nums == 7 ){
			talk3();
			foot1();
		}
		var t = parseFloat($('#All').css('top'));
		var stop = 7*height1;
		var top = t - height1;
		if( t == -stop ){
			onOff = true;
			return
		}
		mTween(first,'top',top,1000,'easeInStrong',function(){
			onOff = true;
		});
});

/*************     第一屏        ******************/
/*************     第一屏        ******************/
/*************     第一屏        ******************/
var imgs2 = $('.img2')[0];
var imgs3 = $('.img3')[0];
function fnTab1(){
	mTween(imgs2,'top',-100,1200,'linear');
	mTween(imgs3,'top',-50,1000,'linear');
}
function fnTab2(){
	mTween(imgs2,'top',265,1100,'linear');
	mTween(imgs3,'top',350,1100,'linear');
	
}
/*************     第二屏        ******************/
/*************     第二屏        ******************/
/*************     第二屏        ******************/
var email = $('.email')[0];
var write = $('.write')[0];
var paper = $('.paper')[0];
function fn1(){
	email.style.opacity = 1;
	write.style.opacity = 1;
	paper.style.opacity = 1;
	mTween(email,'left',200,600,'linear');
	mTween(write,'right',270,1200,'linear');
	//从下往上出现
	mTween(paper,'top',227,1000,'linear');
}
// 滚轮到第三屏的时候调用该函数
function fn2(){
	mTween(email,'left',500,300,'linear',function(){
			email.style.opacity = 0;
	});
	mTween(write,'right',600,400,'linear',function(){
		write.style.opacity = 0;
	})
	mTween(paper,'top',-500,800,'linear',function(){
		paper.style.opacity = 0;
	});
}
function fn3(){
	mTween(email,'left',-300,100,'linear',function(){
			email.style.opacity = 0;
	});
}
//当write等于第二屏的时候往右移动
function fn4(){
	mTween(write,'right',270,400,'linear');
}
//当write等于第1屏的时候往右移动
function fn5(){
	mTween(write,'right',-200,200,'linear',function(){
		write.style.opacity = 0;
	});
}
function fn6(){
	mTween(paper,'top',327,800,'linear',function(){
		paper.style.opacity = 0;
	});
}
/*************     第三屏        ******************/
/*************     第三屏        ******************/
/*************     第三屏        ******************/
var skin = $('.thirdly .skin')[0];
var beaut2 = $('.beau2')[0];
var beaut3 = $('.beau3')[0];
var beaut4 = $('.beau4')[0];
function skin1(){
	mTween(skin,'top',267,1200,'linear');
}
function skin2(){
	mTween(skin,'top',460,1000,'linear');
}
function skin3(){
	mTween(skin,'top',160,800,'linear');
}
function skin4(){
	mTween(skin,'top',267,1000,'linear');
}
function beau1(){
	mTween(beaut2,'top',414,1100,'linear');
	mTween(beaut3,'top',300,1100,'linear');
	mTween(beaut4,'top',309,1200,'linear');
}
function beau2(){
	mTween(beaut2,'top',800,700,'linear');
	mTween(beaut3,'top',700,800,'linear');
}
function beau3(){
	mTween(beaut2,'top',-400,700,'linear');
	mTween(beaut3,'top',-300,600,'linear');
}
function beau4(){
	mTween(beaut4,'top',800,800,'linear');
}
function beau5(){
	mTween(beaut4,'top',-200,800,'linear');
}
/*************     第四屏        ******************/
var listpic1 = $('.listpic1')[0];
var listpic2 = $('.listpic2')[0];
var listpic3 = $('.listpic3')[0];
var listpic4 = $('.listpic4')[0];
var text1 = $('.text1')[0];
var text2 = $('.text2')[0];
var text3= $('.text3')[0];
var text4 = $('.text4')[0];
function listpica(){
	
	mTween(listpic1,'left',200,1100,'linear');
	listpic1.style.opacity = 1;
	
	mTween(listpic2,'left',450,1100,'linear');
	listpic2.style.opacity = 1;
	
	mTween(listpic3,'right',500,1100,'linear');
	listpic3.style.opacity = 1;
	
	mTween(listpic4,'right',240,1100,'linear');
	listpic4.style.opacity = 1;
	
	mTween(text1,'left',200,1050,'linear')
	text1.style.opacity = 1;
	
	mTween(text2,'left',450,1050,'linear')
	text2.style.opacity = 1;
	
	mTween(text3,'right',450,1000,'linear')
	text3.style.opacity = 1;
	
	mTween(text4,'right',210,1000,'linear')
	text4.style.opacity = 1;
}
function listpicb(){
	mTween(listpic1,'left',150,800,'linear',function(){
		listpic1.style.opacity = 0;
	});
	
	mTween(listpic2,'left',400,800,'linear',function(){
		listpic2.style.opacity = 0;
	});
	
	mTween(listpic3,'right',400,800,'linear',function(){
		listpic3.style.opacity = 0;
	});
	
	mTween(listpic4,'right',150,800,'linear',function(){
		listpic4.style.opacity = 0;
	});
	
	mTween(text1,'left',100,1000,'linear',function(){
		text1.style.opacity = 0;
	})
	
	mTween(text2,'left',400,800,'linear',function(){
		text2.style.opacity = 0;
	})
	
	mTween(text3,'right',350,800,'linear',function(){
		text3.style.opacity = 0;
	})
	
	mTween(text4,'right',110,600,'linear',function(){
		text4.style.opacity = 0;
	})
}
function listpicc(){
	mTween(listpic1,'left',350,500,'linear',function(){
		listpic1.style.opacity = 0;
	});
	mTween(listpic2,'left',520,500,'linear',function(){
		listpic2.style.opacity = 0;
	});
	mTween(listpic3,'right',520,500,'linear',function(){
		listpic3.style.opacity = 0;
	});
	mTween(listpic4,'right',350,500,'linear',function(){
		listpic4.style.opacity = 0;
	});
	
	mTween(text1,'left',300,400,'linear',function(){
		text1.style.opacity = 0;
	});
	mTween(text2,'left',500,400,'linear',function(){
		text2.style.opacity = 0;
	});
	mTween(text3,'right',550,400,'linear',function(){
		text3.style.opacity = 0;
	});
	mTween(text4,'right',350,400,'linear',function(){
		text4.style.opacity = 0;
	});
}
function listpicd(){
	mTween(listpic1,'left',200,1200,'linear');
	listpic1.style.opacity = 1;
	
	mTween(listpic2,'left',450,1200,'linear');
	listpic2.style.opacity = 1;
	
	mTween(listpic3,'right',500,1200,'linear');
	listpic3.style.opacity = 1;
	
	mTween(listpic4,'right',240,1200,'linear');
	listpic4.style.opacity = 1;
	
	mTween(text1,'left',200,1000,'linear');
	text1.style.opacity = 1;
	

	mTween(text1,'left',200,1000,'linear');
	text1.style.opacity = 1;
	
	mTween(text2,'left',450,1000,'linear');
	text2.style.opacity = 1;
	
	mTween(text3,'right',450,1000,'linear');
		text3.style.opacity = 1;

	mTween(text4,'right',210,1000,'linear');
		text4.style.opacity = 1;
}
/*************     第 五屏        ******************/
var flylist = $('.flylist')[0];
var fly1 = $('.fly1')[0];
var fly2 = $('.fly2')[0];
var fly3 = $('.fly3')[0];
var fly4 = $('.fly4')[0];
function flydown(){
	
	mTween(flylist,'top',300,1100,'linear');
	mTween(fly1,'top',432,800,'linear');
	mTween(fly2,'top',480,1000,'linear');
	mTween(fly3,'top',420,1000,'linear');
	mTween(fly4,'top',360,1000,'linear');

	mTween(fly2,'left',430,1000,'linear');
	mTween(fly3,'left',300,1000,'linear');
	mTween(fly4,'left',180,1000,'linear');

}
function flytop(){
	
	mTween(flylist,'top',500,800,'linear');
	mTween(fly1,'top',580,1000,'linear');
	mTween(fly2,'top',1200,1100,'linear');
	mTween(fly3,'top',900,1000,'linear');
	mTween(fly4,'top',700,800,'linear');
	
	mTween(fly2,'left',800,800,'linear');
	mTween(fly3,'left',500,1000,'linear');
	mTween(fly4,'left',400,1100,'linear');
}
function flydown1(){
	mTween(flylist,'top',150,900,'linear');
	mTween(fly1,'top',200,900,'linear');
	
	mTween(fly2,'top',200,1100,'linear');
	mTween(fly3,'top',150,900,'linear');
	mTween(fly4,'top',50,1000,'linear');
	
	mTween(fly2,'left',-50,1100,'linear');
	mTween(fly3,'left',-100,1000,'linear');
	mTween(fly4,'left',-200,1100,'linear');
}
function flytop1(){
	mTween(flylist,'top',300,1200,'linear');
	mTween(fly1,'top',432,1200,'linear');
	
	mTween(fly2,'top',480,800,'linear');
	mTween(fly3,'top',420,900,'linear');
	mTween(fly4,'top',360,900,'linear');
	
	mTween(fly2,'left',430,800,'linear');
	mTween(fly3,'left',300,900,'linear');
	mTween(fly4,'left',180,900,'linear');
}
/*************     第六屏        ******************/
var linkText1 = $('.link1')[0];
var linkText2 = $('.link2')[0];
var lxm2pic2 = $('.lxm2')[0];
var lxm2pic3 = $('.lxm3')[0];
var lxm2pic4 = $('.lxm4')[0];
var lxm2pic5 = $('.lxm5')[0];
function link1(){
	mTween(linkText1,'top',350,1100,'linear');
	mTween(linkText2,'top',450,1050,'linear');
	
	mTween(lxm2pic2,'top',440,1000,'linear');
	mTween(lxm2pic3,'bottom',-130,1200,'linear');
	mTween(lxm2pic4,'top',430,1100,'linear');
	mTween(lxm2pic5,'top',300,1100,'linear');
	lxm2pic5.style.opacity = 1;
}
function link2(){
	mTween(linkText1,'top',800,1000,'linear');
	mTween(linkText2,'top',900,1050,'linear');
	
	mTween(lxm2pic2,'top',640,1000,'linear');
	mTween(lxm2pic3,'bottom',-260,1000,'linear');
	mTween(lxm2pic4,'top',710,1100,'linear');
	mTween(lxm2pic5,'top',700,1200,'linear',function(){
		lxm2pic5.style.opacity = 0;
	});
}
function link3(){
	mTween(linkText1,'top',-100,1200,'linear');
	mTween(linkText2,'top',0,1100,'linear');
	
	mTween(lxm2pic2,'top',340,1000,'linear');
	mTween(lxm2pic3,'bottom',50,1000,'linear');
	mTween(lxm2pic4,'top',-800,1100,'linear');
	mTween(lxm2pic5,'top',-600,1100,'linear');
}
function link4(){
	mTween(linkText1,'top',350,1100,'linear');
	mTween(linkText2,'top',450,1100,'linear');
	
	mTween(lxm2pic2,'top',440,1000,'linear');
	mTween(lxm2pic3,'bottom',-130,1000,'linear');
	mTween(lxm2pic4,'top',430,1100,'linear');
	mTween(lxm2pic5,'top',300,1100,'linear');
}
/*************     第七屏        ******************/
var talkpic1 = $('.talk3')[0];
var talkpic2 = $('.talk4')[0];
var talkpic3 = $('.talk5')[0];

function talk1(){
	mTween(talkpic1,'left',130,1000,'linear');
	talkpic1.style.opacity = 1;
	mTween(talkpic2,'top',340,1000,'linear',function(){
		talkpic2.style.opacity = 1;
	});
	mTween(talkpic3,'right',130,1000,'linear');
	talkpic3.style.opacity = 1;
}
function talk2(){
	mTween(talkpic1,'left',-60,600,'linear',function(){
		talkpic1.style.opacity = 0;
	});
	mTween(talkpic2,'top',320,450,'linear',function(){
		talkpic2.style.opacity = 0;
	});
	mTween(talkpic3,'right',-150,600,'linear',function(){
		talkpic3.style.opacity = 0;
	});
}
function talk3(){
	mTween(talkpic1,'left',260,800,'linear',function(){
		talkpic1.style.opacity = 0;
	});
	mTween(talkpic2,'top',320,800,'linear',function(){
		talkpic2.style.opacity = 0;
	});
	mTween(talkpic3,'right',320,1000,'linear',function(){
		talkpic3.style.opacity = 0;
	});
}
function talk4(){
	mTween(talkpic1,'left',130,1100,'linear');
		talkpic1.style.opacity = 1;
	mTween(talkpic2,'top',340,1000,'linear',function(){
		talkpic2.style.opacity = 1;
	});
	mTween(talkpic3,'right',130,800,'linear');
		talkpic3.style.opacity = 1;
}
/*************     第八屏        ******************/
var botpic1 = $('.bot1')[0];
var botpic2 = $('.bot2')[0];
var botpic3 = $('.bot3')[0];

function foot1(){
	mTween(botpic1,'top',225,1100,'linear');
	mTween(botpic2,'top',345,1150,'linear');
	mTween(botpic3,'top',439,1200,'linear');
}
function foot2(){
	mTween(botpic1,'top',525,900,'linear');
	mTween(botpic2,'top',745,1050,'linear');
	mTween(botpic3,'top',800,1000,'linear');
}

