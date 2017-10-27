// 会买专辑
var b1 = document.querySelector(".h6boxmb-1");
var b2 = document.querySelector(".h6boxmb-2");
var b3 = document.querySelector(".h6boxmb-3");
console.log(b1)
var a1 = document.querySelector(".uli1");
var a2 = document.querySelector(".uli2");
var a3 = document.querySelector(".uli3");
console.log(a1)
a1.onmouseover = function(){
	this.style.background = "red";
	a3.style.background = "#c8c8c8";
	a2.style.background = "#c8c8c8";
	b1.style = "display:block;z-index:1;position:absolute";
	b2.style = "display:none;z-index:0;position:absolute";
	b3.style = "display:none;z-index:0;position:absolute";
}
a2.onmouseover = function(){
	this.style.background = "red";
	a1.style.background = "#c8c8c8";
	a3.style.background = "#c8c8c8";
	b1.style = "display:none;z-index:0;position:absolute";
	b2.style = "display:block;z-index:1;position:absolute";
	b3.style = "display:none;z-index:0;position:absolute";
}
a3.onmouseover = function(){
	this.style.background = "red";
	a2.style.background = "#c8c8c8";
	a1.style.background = "#c8c8c8";
	b1.style = "display:none;z-index:0;position:absolute";
	b2.style = "display:none;z-index:0;position:absolute";
	b3.style = "display:block;z-index:1;position:absolute";
}
// 会买专辑自动切换
function times(){
	var x = time();
	if(x < 10){
		return x
		console.log("正常" + y)
	}else{
		x = x % 10;
		return x
	}
}
setInterval(function(){
		var y = times();
		if(y < 3){
			b1.style = "display:block;z-index:1;position:absolute";
			b2.style = "display:none;z-index:0;position:absolute";
			b3.style = "display:none;z-index:0;position:absolute";
		}else if(y < 6){
			b1.style = "display:none;z-index:0;position:absolute";
			b2.style = "display:block;z-index:1;position:absolute";
			b3.style = "display:none;z-index:0;position:absolute";
		}else if(y < 9){
			b1.style = "display:none;z-index:0;position:absolute";
			b2.style = "display:none;z-index:0;position:absolute";
			b3.style = "display:block;z-index:1;position:absolute";
		}
	
},1000)
// 我的京东
var lolist = document.querySelector(".lolist");
console.log(lolist)
var mylistson = document.querySelector(".mylistson");
lolist.onmouseover = function(){
	mylistson.style.display = "block";
	lolist.style.background = "white";
}
mylistson.onmouseover = function(){
	mylistson.style.display = "block";
	lolist.style.background = "white";
}
mylistson.onmouseout = function(){
	mylistson.style.display = "none";
	lolist.style.background = "none";
}
lolist.onmouseout = function(){
	mylistson.style.display = "none";
	lolist.style.background = "none";
}
// drowdown下拉列表 品质优惠选你所爱
var floor = document.querySelectorAll(".floor1");

var downlist = document.querySelectorAll(".downright");
console.log(floor[0])
console.log(downlist[0])
floor[0].onmouseover = function(){
	downlist[0].style.display = "block";
}
floor[0].onmouseout = function(){
	downlist[0].style.display = "none";
}
downlist[0].onmouseover = function(){
	downlist[0].style.display = "block";
}
downlist[0].onmouseout = function(){
	downlist[0].style.display = "none";
}
// floor2
floor[1].onmouseover = function(){
	downlist[1].style.display = "block";
}
floor[1].onmouseout = function(){
	downlist[1].style.display = "none";
}
downlist[1].onmouseover = function(){
	downlist[1].style.display = "block";
}
downlist[1].onmouseout = function(){
	downlist[1].style.display = "none";
}
// floor3
floor[2].onmouseover = function(){
	downlist[0].style.display = "block";
}
floor[2].onmouseout = function(){
	downlist[0].style.display = "none";
}
downlist[0].onmouseover = function(){
	downlist[0].style.display = "block";
}
downlist[0].onmouseout = function(){
	downlist[0].style.display = "none";
}
// floor4
floor[3].onmouseover = function(){
	downlist[1].style.display = "block";
}
floor[3].onmouseout = function(){
	downlist[1].style.display = "none";
}
// floor5
floor[4].onmouseover = function(){
	downlist[0].style.display = "block";
}
floor[4].onmouseout = function(){
	downlist[0].style.display = "none";
}
// floor6
floor[5].onmouseover = function(){
	downlist[1].style.display = "block";
}
floor[5].onmouseout = function(){
	downlist[1].style.display = "none";
}
// floor7
floor[6].onmouseover = function(){
	downlist[0].style.display = "block";
}
floor[6].onmouseout = function(){
	downlist[0].style.display = "none";
}
// floor8
floor[7].onmouseover = function(){
	downlist[1].style.display = "block";
}
floor[7].onmouseout = function(){
	downlist[1].style.display = "none";
}
// floor9
floor[8].onmouseover = function(){
	downlist[0].style.display = "block";
}
floor[8].onmouseout = function(){
	downlist[0].style.display = "none";
}
// floor10
floor[9].onmouseover = function(){
	downlist[1].style.display = "block";
}
floor[9].onmouseout = function(){
	downlist[1].style.display = "none";
}
// floor11
floor[10].onmouseover = function(){
	downlist[0].style.display = "block";
}
floor[10].onmouseout = function(){
	downlist[0].style.display = "none";
}
// floor12
floor[11].onmouseover = function(){
	downlist[1].style.display = "block";
}
floor[11].onmouseout = function(){
	downlist[1].style.display = "none";
}
// floor13
floor[12].onmouseover = function(){
	downlist[0].style.display = "block";
}
floor[12].onmouseout = function(){
	downlist[0].style.display = "none";
}
// 轮播图
var play = document.querySelectorAll(".pic-play");
var head3 = document.querySelector("#head3box");
setInterval(function(){
	var t = times();
	if(t == 0){
		head3.style.background = "red";
		play[0].style.display = "block";
		play[1].style.display = "none";
		play[2].style.display = "none";
		play[3].style.display = "none";
	}else if(t == 2){
		head3.style.background = "#259ee6";
		play[1].style.display = "block";
		play[0].style.display = "none";
		play[2].style.display = "none";
		play[3].style.display = "none";
	}else if(t == 4){
		head3.style.background = "#e6f5f2";
		play[2].style.display = "block";
		play[0].style.display = "none";
		play[1].style.display = "none";
		play[3].style.display = "none";
	}else if(t == 8){
		head3.style.background = "#f3a6a6";
		play[3].style.display = "block";
		play[0].style.display = "none";
		play[1].style.display = "none";
		play[2].style.display = "none";
	}	
},1000)
// 时间显示器
function time(){
		var mydate = new Date();
		console.log(mydate)
		var s = mydate.getSeconds();
		console.log(s)
		return s
	}
// nav
var q = document.querySelectorAll(".q");
console.log(q.length)
var nav = document.querySelector(".navleft");
q[0].onmouseover = function(){
	nav.style.display= "block";
}
q[0].onmouseout = function(){
	nav.style.display= "none";
}
q[1].onmouseover = function(){
	nav.style.display= "block";
}
q[1].onmouseout = function(){
	nav.style.display= "none";
}
q[2].onmouseover = function(){
	nav.style.display= "block";
}
q[2].onmouseout = function(){
	nav.style.display= "none";
}
q[3].onmouseover = function(){
	nav.style.display= "block";
}
q[3].onmouseout = function(){
	nav.style.display= "none";
}
q[4].onmouseover = function(){
	nav.style.display= "block";
}
q[4].onmouseout = function(){
	nav.style.display= "none";
}
q[5].onmouseover = function(){
	nav.style.display= "block";
}
q[5].onmouseout = function(){
	nav.style.display= "none";
}
q[6].onmouseover = function(){
	nav.style.display= "block";
}
q[6].onmouseout = function(){
	nav.style.display= "none";
}
q[7].onmouseover = function(){
	nav.style.display= "block";
}
q[7].onmouseout = function(){
	nav.style.display= "none";
}
	
