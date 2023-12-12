o2.main_slider = {
	left : document.getElementById("g-slider1__left"),
	right : document.getElementById("g-slider1__right"),
	sliderBg : document.querySelector(".g-slider1"),
	sliderBtn : document.querySelector(".g-slider1__btns"),
	sliderPic : ["url('/svg/mainblock/slider.svg')", "url('/svg/mainblock/slider-blue.svg')", "url('/svg/mainblock/slider-red.svg')", "url('/svg/mainblock/slider-orange.svg')"]
}

o2.first_sider = function () {
	let i = 0;
	let bgpic = this.main_slider.sliderPic;
	let bgimage = this.main_slider.sliderBg.style;
	let btns = this.main_slider.sliderBtn.children
	this.main_slider.left.onclick = function (){
		if(i === 0)
			i = o2.main_slider.sliderPic.length -1;
		else
			i--;

		for (elm of  btns)
		{
			elm.style.background = "#FFFFFF80";
		}

		bgimage.background = bgpic[i]
		btns[i].style.background = "white"
	}
	this.main_slider.right.onclick = function(){
		if(i === o2.main_slider.sliderPic.length -1)
			i = 0;
		else
			i++;
		
		bgimage.background = bgpic[i]
		for (elm of  btns){
			elm.style.background = "#FFFFFF80"
		}

		bgimage.background = bgpic[i]
		btns[i].style.background = "white";
	}
	for (elm of btns){
		elm.onclick = (function(){
		    let index = Array.from(btns).indexOf(this);

		    for (elm of  btns){
				elm.style.background = "#FFFFFF80"
			}

			i = [index][0]
			bgimage.background = bgpic[i]
			btns[i].style.background = "white"
			console.log(i)
		})
	}
}