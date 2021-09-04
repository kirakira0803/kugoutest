back.onclick=function(){
	location.href='play.html';
}
// 五个选择项的交互
danqu.onclick = function(){
	danqu.className="wenzi active"
	zhuanji.className="wenzi"
	xiangqing.className="wenzi"
	geci.className="wenzi"
	geciben.className="wenzi"
}
zhuanji.onclick = function(){
	danqu.className="wenzi"
	zhuanji.className="wenzi active"
	xiangqing.className="wenzi"
	geci.className="wenzi"
	geciben.className="wenzi"
}
xiangqing.onclick = function(){
	danqu.className="wenzi"
	zhuanji.className="wenzi"
	xiangqing.className="wenzi active"
	geci.className="wenzi"
	geciben.className="wenzi"
}
geci.onclick = function(){
	danqu.className="wenzi"
	zhuanji.className="wenzi"
	xiangqing.className="wenzi"
	geci.className="wenzi active"
	geciben.className="wenzi"
}
geciben.onclick = function(){
	danqu.className="wenzi"
	zhuanji.className="wenzi"
	xiangqing.className="wenzi"
	geci.className="wenzi"
	geciben.className="wenzi active"
}
// 在这里下面加加加加加内容
let btnPlay = document.getElementsByClassName('btnPlay');
let time_duration = document.getElementsByClassName('time_dur');
let time_img = document.getElementsByClassName('time_img');
let index = -1;
let music = ['audio/1.mp3','audio/2.mp3','audio/3.mp3',
'audio/4.mp3','audio/5.mp3']
for(let i = 0;i<btnPlay.length;i++){
	console.log(btnPlay[i].src)
	btnPlay[i].onclick = function(){
		if(index == i){
			console.log(index);
			btnPlay[i].src = 'img/play.png';
			time_duration[i].style.display = 'inline-block';
			time_img[i].style.display = 'none';
			bgm.pause();
			index = -1;
		}
		else {
			console.log(btnPlay[i].src)
			console.log(time_duration[i].style.display)
			console.log(time_img[i].style.display)
			bgm.src = music[i]
			index = i;
			btnPlay[i].src = 'img/pause.png';
			time_duration[i].style.display = 'none';
			time_img[i].style.display = 'inline-block';
			bgm.play();
			for(let j=0;j<btnPlay.length;j++){
				if(j == i) continue;
				btnPlay[j].src = 'img/play.png';
				time_duration[j].style.display = 'inline-block';
				time_img[j].style.display = 'none';
			}
		}
	}
}

bgm.onended = function(){
	btnPlay[index].src = 'img/play.png';
	time_duration[index].style.display = 'inline-block';
	time_img[index].style.display = 'none';
	index=-1;
}

