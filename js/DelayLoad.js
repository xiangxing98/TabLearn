//带有延迟效果的选项卡

//id function
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
	//tab index
	var index=0;
	var timer=null;

	var titles=$('notice-tit').getElementsByTagName('li');
	var divs=$('notice-con').getElementsByTagName('div');

	//title unequal to div, stop
	if(titles.length!=divs.length) return;

	//遍历titles下的所有li,add id contribute
	for (var i = 0;i < titles.length; i++) {
		//add id contibute at each list element
		titles[i].id=i;

		//band events
		titles[i].onmouseover=function(){
		//use CurrentLi variable to refer current mouse over li
		var CurrentLi=this;
		//if exists timer, clear this timer, 
		if (timer) {
			clearTimeout(timer);
			timer=null;
		};
		
		//add timer, only stay time >500ms(0.5 second) execute this timmer
		//setInterval, setTimeout 超时调用，用clearTimeout 清除
		//window.setTimeout, method setTimeout belong to window, this is object window 
		timer=setTimeout(function(){
			//alert('abc') 
			//clear
			for (var j = 0; j <titles.length; j++) {
				titles[j].className='';
				divs[j].className='mod';
			}

			//set
			titles[CurrentLi.id].className='select';
			divs[CurrentLi.id].className='modShow';

			//this is what?
			//alert(this), object window
			//alert(this.id);

		},500)

		}
	}

}