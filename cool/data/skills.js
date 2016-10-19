
/*		技能展示
	*   {
	*       temp: @value String         				*         模板
	*       skillsClassify: @value Array                *         掌握的技能综合
	*       	{
					skillLanguage: @value String        *         技能名称
	*       		percent: @value String              *         技能百分比
	*       		skillTooltip: @value Array          *         对技能的描述
				}
	*   }

	temp 有两个值可选：
		"circle"：饼形
		"columns":圆柱
*/

var skills = {
		temp:"circle",
		skillsClassify:[
		{
			skillLanguage:"html+css",
			percent:"85%",
			skillTooltip:[
				"熟练运用html+css搭配结构",
				"完成了去哪儿网的静态页面"
			]
		},
		{
			skillLanguage:"html5",
			percent:"70%",
			skillTooltip:[
				"熟练掌握各类语义化标签",
				"熟悉对各种标签特性及其相互转换",
				"了解视频音频",
				"表格，H5新增表单等……"
			]
		},
		{
			skillLanguage:"CSS3",
			percent:"70%",
			skillTooltip:[
				"掌握浮动及文档流特性.",
				"精通定位、浏览器兼容性.",
				"CSS3圆角阴影字体等样式有实际案例经验.",
				"仿写jQuery官网响应式."
			]
		},
		{
			skillLanguage:"javascript",
			percent:"75%",
			skillTooltip:[
				"了解数据类型、作用域闭包等语言特性",
				"掌握定时器、数组字符串及递归、数组去重等",
				"深入使用DOM\EVENT，能完成各类组件开发",
				"掌握JS的数据调用、ajax实现机制、各类接口调用",
				"了解面向对象编程，对封装、继承、多态等均有了解",
				"了解正则表达式，熟悉JS兼容性、JS性能提升"
			]
		},
		{
			skillLanguage:"jQuery",
			percent:"60%",
			skillTooltip:[
				"移动端响应式",
				"运用里面的方法写出页面的动态效果"
			]
		},
		{
			skillLanguage:"canvas",
			percent:"30%",
			skillTooltip:[
				"能运用canvas写音频播放效果",
				"可封装小型图表等数据可视化技术解决方案"
			]
		}
	]
}