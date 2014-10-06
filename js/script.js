//id function
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
	//get mouse over or click tab and need change content
	var titles=$('notice-tit').getElementsByTagName('li')
	var divs=$('notice-con').getElementsByTagName('div')

	//alert(titles.length)
	//如果内容与标题长度不匹配，退出
	if (titles.length!=divs.length) {
		return;
	}

	//遍历titles下的所有li,add id contribute
	for (var i = 0;i < titles.length; i++) {
		titles[i].id=i;

		//rm and add select class, show content when mouseover/click
		//titles[i].onclick=function(){
		titles[i].onmouseover=function(){
			//alert(this.id);

			//clear other titles li select style
			//hidden all div content 
			for (var j = 0; j <titles.length; j++) {
				titles[j].className='';
				divs[j].className='mod';
			}

			//set this mouseover li title select style
			//get current id content match mouse over this.id
			this.className='select';
			divs[this.id].className='modShow';
		}
	}

}