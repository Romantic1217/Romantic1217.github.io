function mScroll(obj,upper,down){
		obj.addEventListener('DOMMouseScroll',fn,false);
		obj.onmousewheel = fn;
			/*
				负数代表向下
				正数是向上
				n就是这个数字
			*/
		function fn(ev){
			var n;
			if(ev.detail){
				//firefox
				n = -ev.detail;
			}else{
				//ie和chrome
				n =ev.wheelDelta;
			}
			//n小于0向下滚动，否则向上。
			if(n<0){
				down();
			}else{
				upper();
			}
		}
	}