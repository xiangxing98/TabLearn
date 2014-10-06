//带有自动切换效果的选项卡

//id function
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=AutoTab

function AutoTab(){
	//tab index, current highlighted tab
	var index=0;
	var originindex=index;
	var timer=null;

	//get all tab lists and contents divs
	var titles=$('notice-tit').getElementsByTagName('li');
	var divs=$('notice-con').getElementsByTagName('div');

	//walk all over titles and band mouse over,mouse out event
	for (var i = 0; i < titles.length; i++) {
		titles[i].id=i;

		//mouse over event
		titles[i].onmouseover=function(){
			clearInterval(timer);
			changeOption(this.id,originindex);
			originindex=this.id;
		}

		//mouse out event
		titles[i].onmouseout=function(){
			//add timer and change current highlighted tab index
			timer=setInterval(autoPlay, 2000)
		}
	}

	//clear timer which waiting to execute
	if(timer){
		clearInterval(timer);
		timer=null;
	}

	//add timer and change current highlighted tab index
	timer=setInterval(autoPlay, 2000)

	function autoPlay(){
		index++;
		console.log(index)
		if(index>=titles.length){
			index=0;
		}

		changeOption(index,originindex);
		console.log("index: ",index)
	}

	function changeOption(curIndex,originindex){
		//clear origin highlight li and div class
		for (var j = 0; j <titles.length; j++) {
			titles[j].className='';
			divs[j].className='mod';
		}

		//highlight current tab li and content div
		titles[curIndex].className='select';
		divs[curIndex].className='modShow';

		console.log("curIndex: ",curIndex)
		//index=curIndex;
	}

}