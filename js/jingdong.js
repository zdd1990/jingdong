// close
var cl = document.querySelector(".close");
var h = document.querySelector("#head0");
console.log(h)
console.log(cl)
cl.onclick = function(){
	h.style= "display:none;"
}
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
// 排行榜
var act = document.querySelector(".head-active");
var list = document.querySelectorAll(".h6boxb_list");
var con = document.querySelectorAll(".h6boxlbcontent1");
list[0].onmouseover = function(){
	act.style = "transform:translateX(0px);"
	con[0].style = "display:block;z-index:1;opacity:1;"
	con[1].style = "display: none;z-index:0;opacity:0;"
	con[2].style = "display: none;z-index:0;opacity:0;"
	con[3].style = "display: none;z-index:0;opacity:0;"
	con[4].style = "display: none;z-index:0;opacity:0;"
}
list[1].onmouseover = function(){
	act.style = "transform:translateX(80px);"
	con[1].style = "display:block;z-index:1;opacity:1;"
	con[0].style = "display: none;z-index:0;opacity:0;"
	con[2].style = "display: none;z-index:0;opacity:0;"
	con[3].style = "display: none;z-index:0;opacity:0;"
	con[4].style = "display: none;z-index:0;opacity:0;"
}
list[2].onmouseover = function(){
	act.style = "transform:translateX(160px);"
	con[2].style = "display:block;z-index:1;opacity:1;"
	con[0].style = "display: none;z-index:0;opacity:0;"
	con[1].style = "display: none;z-index:0;opacity:0;"
	con[3].style = "display: none;z-index:0;opacity:0;"
	con[4].style = "display: none;z-index:0;opacity:0;"
}
list[3].onmouseover = function(){
	act.style = "transform:translateX(240px);"
	con[3].style = "display:block;z-index:1;opacity:1;"
	con[0].style = "display: none;z-index:0;opacity:0;"
	con[1].style = "display: none;z-index:0;opacity:0;"
	con[2].style = "display: none;z-index:0;opacity:0;"
	con[4].style = "display: none;z-index:0;opacity:0;"
}
list[4].onmouseover = function(){
	act.style = "transform:translateX(320px);"
	con[4].style = "display:block;z-index:1;opacity:1;"
	con[0].style = "display: none;z-index:0;opacity:0;"
	con[1].style = "display: none;z-index:0;opacity:0;"
	con[2].style = "display: none;z-index:0;opacity:0;"
	con[3].style = "display: none;z-index:0;opacity:0;"
}

// 直播自动切换
var li1 = document.querySelectorAll(".live_1");
setInterval(function(){
	var li = times();
	if(li < 2){
		li1[0].style = "opacity:1; z-index:1; position:absolute;"
		li1[1].style = "opacity:0; z-index:0; position:absolute;"
		li1[2].style = "opacity:0; z-index:0; position:absolute;"
		li1[3].style = "opacity:0; z-index:0; position:absolute;"
		li1[4].style = "opacity:0; z-index:0; position:absolute;"
	}else if(li < 4){
		li1[1].style = "opacity:1; z-index:1; position:absolute";
		li1[0].style = "opacity:0; z-index:0; position:absolute;"
		li1[2].style = "opacity:0; z-index:0; position:absolute;"
		li1[3].style = "opacity:0; z-index:0; position:absolute;"
		li1[4].style = "opacity:0; z-index:0; position:absolute;"
	}else if(li < 6){
		li1[2].style = "opacity:1; z-index:1; position:absolute";
		li1[1].style = "opacity:0; z-index:0; position:absolute;"
		li1[0].style = "opacity:0; z-index:0; position:absolute;"
		li1[3].style = "opacity:0; z-index:0; position:absolute;"
		li1[4].style = "opacity:0; z-index:0; position:absolute;"
	}else if(li < 8){
		li1[3].style = "opacity:1; z-index:1; position:absolute";
		li1[1].style = "opacity:0; z-index:0; position:absolute;"
		li1[2].style = "opacity:0; z-index:0; position:absolute;"
		li1[0].style = "opacity:0; z-index:0; position:absolute;"
		li1[4].style = "opacity:0; z-index:0; position:absolute;"
	}else if(li <= 9){
		li1[4].style = "opacity:1; z-index:1; position:absolute";
		li1[1].style = "opacity:0; z-index:0; position:absolute;"
		li1[2].style = "opacity:0; z-index:0; position:absolute;"
		li1[3].style = "opacity:0; z-index:0; position:absolute;"
		li1[0].style = "opacity:0; z-index:0; position:absolute;"
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
for(j = 0; j < floor.length;j++){
	floor[j].index = j;
	floor[j].onmouseover = function(){
		var c = this.index % 2;
		console.log(c)
		downlist[c].style.display = "block";
	}
	floor[j].onmouseout = function(){
		var c = this.index % 2;
		downlist[c].index = c;
		downlist[c].style.display = "none";
		downlist[c].onmousout = function(){
			this.style.display = "none";
		}
	}	
	downlist[0].onmouseover = function(){
			this.style.display = "block";
		}
	downlist[0].onmouseout = function(){
		this.style.display = "none";
	}
	downlist[1].onmouseover = function(){
			this.style.display = "block";
		}
	downlist[1].onmouseout = function(){
		this.style.display = "none";
	}
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
		var s = mydate.getSeconds();
		return s
	}
// navleft 左导航
var q = document.querySelectorAll(".q");
var na = document.querySelectorAll(".navl");
for(i = 0;i < q.length; i++){
	q[i].index = i;
	q[i].onmouseover = function(){
		var k = this.index;
		na[k].style.background = "#d70b1c";
	}
	q[i].onmouseout = function(){
		var k = this.index;
		na[k].style.background = "#918888";
	}
}
for(n = 0;n <na.length;n++){
	na[n].index = n;
	na[n].onmouseover = function(){
		this.style.background = "#d70b1c";
	}
	na[n].onmouseout = function(){
		this.style.background = "#918888";
	}
}
var nav = document.querySelector(".navleft");		
document.onmouseover = function(e){
	var evt = e || document.event;
	var y = evt.pageY;
	console.log("x:" + evt.pageX)
	console.log("y:" + y)
	if(y > 2200){
		nav.style.display= "block";
	}else{
		nav.style.display= "none";
	}
}