
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"JS的属性操作",
			caseList:[
				{
					caseTitle:"JS热身运动练习",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/tck.gif",
					caseDescription:"属性操作、图片切换、短信属性操作<br />图片切换、短信",
					caseWebsite:"exercise/1.js的属性操作/1.弹出框/index.html"
				},
				{
					caseTitle:"模拟手机短信发送",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/pessage.gif",
					caseDescription:"描述：这是我完成的一个小案例，综合涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右"
					,caseWebsite:"exercise/1.js的属性操作/2.模拟发送短信/index.html"
				}
			]
		},
		{
			caseName:"for应用this关键字",
			caseList:[
				{
					caseTitle:"擦擦擦",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/div.gif",
					caseDescription:"这块运用的是for循环，if判断和取摸求余等知识点"
					,caseWebsite:"exercise/2.for应用this关键字/1.擦擦擦/index.html"
				},
				{
					caseTitle:"生成100个div",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/101.gif",
					caseDescription:"主要用for循环和取模求余的知识点"
					,caseWebsite:"exercise/2.for应用this关键字/2.生成100个div/index.html"
				},
				{
					caseTitle:"缩略图",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/thumbnail.gif",
					caseDescription:"带焦点的轮播图，点击切换图片时下面的那个圆点跟随图片的跳转也一起跳转，<br />移入圆点的时候会有对应的图片出现。"
					,caseWebsite:"exercise/2.for应用this关键字/3.缩略图/index.html"
				}
			]
		},{
			caseName:"自定义属性、索引值",
			caseList:[
				{
					caseTitle:"点击切换图",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/switch.gif",
					caseDescription:"轮播图带详情跳转，循环走到最后一张时可以来回循环，<br />如果顺序切换的话，走到最后一张就停止，走到第一张也是如此。"
					,caseWebsite:"exercise/3.自定义属性索引值/1.点击切换图/index.html"
				},
				{
					caseTitle:"循环和顺序切换图轮播图",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/lubotu.gif",
					caseDescription:"主要用到if判断和数组包含图片地址，信息描述等 。"
					,caseWebsite:"exercise/3.自定义属性索引值/2.带详情的轮播/index.html"
				}
				,{
					caseTitle:"模仿QQ菜单",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/Q menu.gif",
					caseDescription:"点击切换菜单，点击当前目标点，显示其子级内容，<br />点击相邻的目标点当前的显示，上一个隐藏,点击其子级的时候，<br />显示背景，点击其子级的兄弟级的时候兄弟级显示背景色，上一个背景色隐藏"
					,caseWebsite:"exercise/3.自定义属性索引值/3.QQmenu/index.html"
				}
				,{
					caseTitle:"带详情的轮播图加缩略图",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/ppt.gif",
					caseDescription:"带焦点的轮播图，点击切换图片时下面的那个圆点跟随图片的跳转也一起跳转"
					,caseWebsite:"exercise/3.自定义属性索引值/4.缩略图/index.html"
				}
			]
		},
		{
			caseName:"JS数据类型、类型转换",
			caseList:[
				{
					caseTitle:"按需查找对应的数字",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/my/NaN.png",
					caseDescription:"用NaN == isNaN 判断是不是不是一个数字"
					,caseWebsite:"exercise/4.数据类型，类型转换/1.判断类型/index.html"
				}
			]
		},{
			caseName:"函数传参、重用、价格计算",
			caseList:[
				{
					caseTitle:"购物清单",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/shopping.gif",
					caseDescription:"点击任意的+号，对应的商品价格也会随着点击数而累积，<br />可以累积看到一共买了多少件商品，一共花了多少钱，还有那个价钱最高。<br />点击-号则相反"
					,caseWebsite:"exercise/5.函数传参，重用，价格计算/1.购物清单/index.html"

				},
				{
					caseTitle:"多组图片切换",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/switch.gif",
					caseDescription:"两组图片可以同时点击，一起切换！当点击任意一个的时候也可以进行切换图片。"
					,caseWebsite:"exercise/5.函数传参，重用，价格计算/2.多组图片切换/index.html",
				},
				{
					caseTitle:"点击铅笔可以修改内容",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/alter.gif",
					caseDescription:"点击上面的铅笔可以修改输入框的内容，修改成功可以确定，繁殖取消。"
					,caseWebsite:"exercise/5.函数传参，重用，价格计算/3.点击修改/index.html",
				},
				{
					caseTitle:"选项卡嵌套",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/double.gif",
					caseDescription:"点击当前的选项卡，可以显示其图片和下面的选项卡功能，可以再次点击下面的选项让其再次显示。"
					,caseWebsite:"exercise/5.函数传参，重用，价格计算/4.选项卡嵌套/index.html",
				},
				{
					caseTitle:"验证账号",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/id.gif",
					caseDescription:"验证输入的账号，不能为英语、空格、少于五位数切不能大于十位数等等。"
					,caseWebsite:"exercise/5.函数传参，重用，价格计算/5.输入账号验证/index.html",
				}
			]
		},
		{
			caseName:"运算符流程控制",
			caseList:[
				{
					caseTitle:"左右选中颜色",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/star.gif",
					caseDescription:"左右都可以选中，移入当前的就显示焦点，移入左边 右边的全部消失，反之一样。"
					,caseWebsite:"exercise/6.运算符流程控制/1.小练习/index.html"
				},
				{
					caseTitle:"模拟某宝星级评分",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/appraise.gif",
					caseDescription:"可以打评分，移入到黄色就是好评，红色是差评。"
					,caseWebsite:"exercise/6.运算符流程控制/2.模拟星级评分/index.html"
				},
				{
					caseTitle:"全选",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/all.gif",
					caseDescription:"点击按钮全选，上面的背景色全部变红色，再次点击就取消。so easy..."
					,caseWebsite:"exercise/6.运算符流程控制/3.全选/index.html"
				}
			]
		},{
			caseName:"定时器管理、函数封装",
			caseList:[
				{
					caseTitle:"滑动的div",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/slide.gif",
					caseDescription:"点击documentd,页面上的div从左往右以此滑动，<br />掉到了对应的目标点后再次点击从左往右依次回到原来的位置。"
					,caseWebsite:"exercise/7.定时器管理，函数封装/1滑动的div/index.html"

				},
				{
					caseTitle:"自动轮播图",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/boot.gif",
					caseDescription:"开了一个定时器自动播放图片和显示信息，当鼠标移入到内容区域，定时器被清空，移入那个显示栏，就显示当前的图片<br />当鼠标移出的时候定时器继续开启。。"
					,caseWebsite:"exercise/7.定时器管理，函数封装/2.运动版轮播图/index.html",

				},
				{
					caseTitle:"带详的情自动轮播图",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/time.gif",
					caseDescription:"开了一个定时器自动播放图片和显示信息."
					,caseWebsite:"exercise/7.定时器管理，函数封装/3.带详情的自动轮播图/index.html",

				}
			]
		},
		{
			caseName:"日期对象、时钟倒计时",
			caseList:[
				{
					caseTitle:"简易的时钟",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/times.gif",
					caseDescription:"简易的时钟，自动走动的时钟."
					,caseWebsite:"exercise/8.日期对象，时钟倒计时/1.时钟/index.html"
				},
				{
					caseTitle:"滚动的时钟",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/gun.gif",
					caseDescription:"滚动的时钟."
					,caseWebsite:"exercise/8.日期对象，时钟倒计时/2.图片滚动时钟/index.html"
				},
				{
					caseTitle:"模拟win10系统的时间",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/data.gif",
					caseDescription:"日历时间."
					,caseWebsite:"exercise/8.日期对象，时钟倒计时/3.模拟win10系统的时间/index.html"
				}
			]
		},{
			caseName:"字符串、数组方法",
			caseList:[
				{
					caseTitle:"文字搬运工",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/numbers.gif",
					caseDescription:"运用字符串方法的知识，截取（substring）、点击让往右的内容跑到右边，点击往左右边的内容回到左边，<br />"
					,caseWebsite:"exercise/9.字符串，数组方法/1.字符串方法/1.文字搬运工/index.html"
				},
				{
					caseTitle:"查找替换",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/array.gif",
					caseDescription:"运用数组方法，分隔，截取等。在输入框输入要查找的内容，如果有的话就显示黄色，<br />在替换的输入框里输入要替换的内容。"
					,caseWebsite:"exercise/9.字符串，数组方法/1.字符串方法/2.查找替换/index.html",

				},
				{
					caseTitle:"大小，随机排序",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/order.gif",
					caseDescription:"运用数组方，随机排序和顺序排序，从大到小从小到大。"
					,caseWebsite:"exercise/9.字符串，数组方法/2.数组方法/1.顺序排序/index.html",

				},
				{
					caseTitle:"大小、随机排序",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/random.gif",
					caseDescription:"随机翻动图片，开一个定时器走到一个目标点之后继续返回继续走。"
					,caseWebsite:"exercise/9.字符串，数组方法/2.数组方法/2.随机翻动/index.html",

				}
			]
		},{
			caseName:"DOM操作",
			caseList:[
				{
					caseTitle:"运动的div，运用运动函数和定时器配合使用",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/diaoluo.gif",
					caseDescription:"先生成一排div，成列排序,当鼠标点击移入当前的那个div时就从那个div从上到下运动。"
					,caseWebsite:"exercise/10.DOM操作/1.div掉落/index.html",
				},
				{
					caseTitle:"上移下移",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/prev.gif",
					caseDescription:"点击上移的时候当前的按钮和上一个按钮交换位置，到了第一个就不能继续上移，到了最下面则反之。"
					,caseWebsite:"exercise/10.DOM操作/2.上移下移/index.html",
				},
				{
					caseTitle:"函数自执行",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/func.gif",
					caseDescription:"设置一个任意小于i的数字，用函数让它弹出自己要执行的的数字，依次弹出i的值"
					,caseWebsite:"exercise/10.DOM操作/3.函数自执行/index.html",
				},
				{
					caseTitle:"创建文件夹",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/file.gif",
					caseDescription:"这里运用dom节点，子节点添加等，设置对象对应的属性值等"
					,caseWebsite:"exercise/10.DOM操作/4.创建文件夹/index.html",
				},
				{
					caseTitle:"提交表单",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/table.gif",
					caseDescription:"生成表单详细信息，提交验证，全选，单选删除等功能。（还有些BUG没有修复）"
					,caseWebsite:"exercise/10.DOM操作/5.表单/index.html",
				},
				{
					caseTitle:"移入变色",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/shift.gif",
					caseDescription:"移入当前，当前变色，上下兄弟级元素也变色,移入第一个和最后一个和变橘黄色，不受其他元素的影响"
					,caseWebsite:"exercise/10.DOM操作/6.移入变色/index.html",
				},
				{
					caseTitle:"多级菜单",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/many.gif",
					caseDescription:"点击h2标签时展开里的内容，继续点击无限展开，且加号变减号,当点击同级h2时，另一个h2则关闭"
					,caseWebsite:"exercise/10.DOM操作/7.多级菜单/index.html",
				},
				{
					caseTitle:"详情提示",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/hint.gif",
					caseDescription:"鼠标移入的时候显示提示框,从span上取出对应的数据,对提示框进行定位s"
					,caseWebsite:"exercise/10.DOM操作/8.详情提示/index.html",
				}
			]
		},{
			caseName:"BOM操作",
			caseList:[
				{
					caseTitle:"生成Table",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/DOC.gif",
					caseDescription:"创建选项卡，添加到box里面,实现选项卡功能，点击生成内容,删除当前选项卡。"
					,caseWebsite:"exercise/11.BOM/1.生成Table/index.html",
				},
			]
		},{
			caseName:"鼠标、键盘事件",
			caseList:[
				{
					caseTitle:"恢复运动轨迹",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/track.gif",
					caseDescription:"带边框的拖拽，拖动的是边框而不是div本身；鼠标抬起时边框消失div移动过去，可以恢复拖拽轨迹"
					,caseWebsite:"exercise/12.鼠标、键盘事件操作/1.恢复运动轨迹/index.html",
				},
				{
					caseTitle:"键盘事件",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/key.gif",
					caseDescription:"按键盘上的上下左右，控制div的方向。"
					,caseWebsite:"exercise/12.鼠标、键盘事件操作/2.键盘事件/index.html",
				},{
					caseTitle:"右键菜单",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/right.gif",
					caseDescription:"鼠标右键点击的时候，关闭系统默认的菜单，显示自定义的菜单，显示在当前的位置"
					,caseWebsite:"exercise/12.鼠标、键盘事件操作/3.右键菜单/index.html",
				},{
					caseTitle:"面向对象拖拽",
					publishTime:"2016-10-17 17:00",
					caseThumbnail:"images/case/1/oop.gif",
					caseDescription:"鼠标事件，创建构造函数，并检测鼠标按下的位置，拖拽移动"
					,caseWebsite:"exercise/12.鼠标、键盘事件操作/4.面向对象拖拽/index.html",
				}
			]
		}
]