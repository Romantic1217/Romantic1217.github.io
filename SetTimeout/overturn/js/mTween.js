function mTween(obj,attr,target,duration,fx,callBack){
	//callBack=>回调，如果当前物体运动完成后还需运动把新运动放在这个函数 里
	//begin可能有小数，找到起始位置
	var begin = parseFloat(getComputedStyle(obj)[attr]);
	var count = target - begin;//运动的距离
	var time = new Date().getTime();//起始时间
	//防止冲突每次执行之前都清除一次循环定时器
	clearInterval(obj[attr]);
	//用当前运动物体的自定义属性名，防止名字冲突
	obj[attr] = setInterval( function(){
		t = +new Date() - time;
		//t = new Date().getTime() - time;
		if( t >= duration ){
			t = duration;
			clearInterval(obj[attr]);	
		}
		//fx是去已封好的tween里调用运动方式
		var value = Tween[fx](t,begin,count,duration);
		//var value = count*(t/duration) + begin;
		obj.style[attr] = value + 'px';
		if(t==duration){
			//如果有回调函数就回调
			callBack&&callBack();
		}
	},30 )
}
function $(id){
	return document.getElementById(id);	
}
function getTagName(tagName,ele){
	return (ele||document).getElementsByTagName(tagName);
}