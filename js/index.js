// 为播放按钮的单机事件指定处理方法
btnPlay.onclick=function(){
	
	// 执行音频元素的'播放'方法
	if(bgm.paused){
	// 如果音乐当前处于“暂停状态”
		bgm.play()
		//则播放该音乐
		btnPlay.src='img/pause.png'
		// 唱片的旋转动画运转起来
		disc.style.animationPlayState='running'
	}
	else{// 否则(该音乐处于“播放状态”)、
		bgm.pause()
		// 则暂停该音乐
		btnPlay.src='img/play.png'
		disc.style.animationPlayState='paused'
	}
}

// 为音乐的“播放到结尾”事件指定处理方法
bgm.onended=function(){
	btnPlay.src='img/play.png'
	disc.style.animationPlayState='paused'
}

// 为"下一首"按钮的单机事件指定处理方法
let songIndex = 1	//当前播放的歌曲的编号
// let表示创建一个新的 JS变量
btnNext.onclick=function(){
		// 待播放的歌曲编号
		songIndex++;
		if(songIndex>6){
			songIndex = 1;	//1-2-3-4-5-6-1-2
		}
		// 修改“唱片图片”的来源
		disc.src='img/small/'+songIndex+'.jpg'
		// 修改背景音乐的来源
		bgm.src='audio/'+songIndex+'.mp3'
		// 立即调用背景音乐的“播放”方法+唱片旋转+“三角”变“竖线”
		btnPlay.src='img/play.png'
		// 唱片暂停
		disc.style.animationPlayState='paused'
		// 进度条归零
		progressValue.style.width=0
		progressControl.style.left=0
}

// 为音乐的播放中(当前播放时间更新)事件指定处理方法：进度条向前进
bgm.ontimeupdate=function(){
	// console.log('总长度：',bgm.duration,'已播放'：bgm.currentTime)
	// 音乐已播放时间占总时长的百分比
	let percent=bgm.currentTime/bgm.duration*100+'%'
	// console.log(percent)
	// 使用该百分比修改进度条的样式
	progressValue.style.width=percent
	progressControl.style.left=percent
}

disc.onclick = function(){
	alert("即将跳转到play界面")
	location.href = 'play.html'
}
progressBar.onclick = function() {
        let x=event.offsetX;//获取鼠标所在位置
        let bfb=x/260*100;//计算所占百分比
        progressValue.style.width=bfb+"%";
        bgm.currentTime=bgm.duration*+bfb/100;
}
