function getStyle(obj, attr) { return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj, 0)[attr]; }

function doMove(obj , num , attr , target , endFn) {
	
	num = parseInt( getStyle(obj, attr) ) < target ? num : -num;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function() {
		var speed = parseInt( getStyle(obj, attr) ) + num;
		
		if ( speed < target && num < 0 || speed > target && num > 0 ) {
			speed = target;
		}

		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
		
	}, 20);
}

function opacity(obj , num , target , endFn) {
	
	num = (getStyle(obj, 'opacity')||1)*100 < target ? num : -num;
	
	clearInterval( obj.alpha );
	
	obj.alpha = setInterval(function() {
		
		var speed = (getStyle(obj, 'opacity')||1)*100 + num;
		
		if ( speed < target && num < 0 || speed > target && num > 0 ) {
			
			speed = target;
		
		}

		obj.style.opacity = speed / 100;
		obj.style.filter = "alpha(opacity: "+speed+")";
		
		if ( speed == target ) {
			clearInterval( obj.alpha );
			if(typeof endFn === 'function')endFn();
		}
		
	}, 20);
}
