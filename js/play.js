// 左上侧的返回键点击事件
fanhui.onclick = function(){
	location.href = 'index.html'
}

// 左侧小圆点的点击事件处理
dianf.onclick=function(){
	if(dianf.style.backgroundColor='#aeb9c0')
	{
		dianf.style.backgroundColor='#fff'
		dians.style.backgroundColor='#aeb9c0'
	}
}
// 右侧小圆点的点击事件
dians.onclick=function(){
	if(dians.style.backgroundColor='#aeb9c0')
	{
		dians.style.backgroundColor='#fff'
		dianf.style.backgroundColor='#aeb9c0'
	}
	location.href='geci.html'
}


download.onclick=function(){
	let path=bgm.src;
	aa.href=path;
	location.href=aa.href;
	if(true){
		location.href="play.html";
	}
}	

share.onclick=function(){
	location.href='share.html';
}
	
more.onclick=function(){
	location.href='more.html';
}

fav.onclick=function(){
	let path=fav.src;
	let index=path.lastIndexOf("/");
	let name=path.substr(index+1);
	if(name=="xin2.png"){
		fav.src='img/xin.png';
		// alert("已收藏");
	}else{
		fav.src='img/xin2.png';
		// alert("取消收藏");
	}
}

dis.onclick=function(){
	location.href="dis.html";
}

function turnTime(time){
	let min=parseInt(time/60);
	let sec=parseInt(time%60);
	min=min>=10?min:"0"+min;
	sec=sec>=10?sec:"0"+sec;
	return min+":"+sec;
}

bgm.ontimeupdate=function(){
	let percent=bgm.currentTime/bgm.duration*100+'%';
	process.style.width=percent;
	control.style.left=percent;
	start.innerHTML=turnTime(bgm.currentTime);
	end.innerHTML=turnTime(bgm.duration);
}

//抱歉，目前不支持其它播放模式
sX.onclick = function(){
	alert('抱歉，目前不支持切换成其它播放模式')
}

//点击播放，默认顺序播放
btnBofang.onclick = function(){
	if(bgm.paused){//如果在暂停状态
		bgm.play()
		daZhuanPa.style.animationPlayState='running'
		btnBofang.src='img/pause.png'
		btnBofang.style.left="0px"
	}
	else{
		bgm.pause()//如果在播放状态
		daZhuanPa.style.animationPlayState='paused'
		btnBofang.src='img/play.png'
		btnBofang.style.left="2px"
	}
}
//歌曲播放完暂停
bgm.onended = function(){
	btnBofang.src='img/play.png'
	btnBofang.style.left="2px"
	daZhuanPa.style.animationPlayState='paused'
}
//定义变量记录歌曲编号
let songIndex=1
//上一首
btnSys.onclick = function(){
	songIndex--
	btnBofang.style.left="2px"
	if(songIndex<1){
		songIndex=6
	}
	daZhuanPa.src='img/big/'+songIndex+'.jpg'
	bgm.src='audio/'+songIndex+'.mp3'
	btnBofang.src='img/play.png'
	daZhuanPa.style.animationPlayState='paused'
	process.style.width=0
	control.style.left=0
}
//下一首
btnXys.onclick = function(){
	songIndex++
	btnBofang.style.left="2px"
	if(songIndex>6){
		songIndex=1
	}
	daZhuanPa.src='img/big/'+songIndex+'.jpg'
	bgm.src='audio/'+songIndex+'.mp3'
	btnBofang.src='img/play.png'
	daZhuanPa.style.animationPlayState='running'
	process.style.width=0
	control.style.left=0
	bgm.play()
	btnBofang.src="img/pause.png"
}
// 跳转到playlist页面
btnCd.onclick = function(){
	alert("即将跳转到播放列表界面")
	location.href = 'playlist.html'
}
processBar.onclick = function() {
        let x=event.offsetX;//获取鼠标所在位置
        let bfb=x/260*100;//计算所占百分比
        control.style.width=bfb+"%";
        bgm.currentTime=bgm.duration*+bfb/100;
		    // width: 2.78vw;
			control.style.width="2.78vw"
}

