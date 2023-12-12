o2.second_selectors =
 {
	left : document.getElementById("g-slider2__left"),
	right : document.getElementById("g-slider2__right"),
	sliderBg : document.querySelector(".g-slider2"),
	sliderBtn : document.querySelector(".g-slider2__btns"),
	buttons: document.querySelectorAll(".g-slider2__routing-btn")
}
o2.second_sldier =
{
	// slider : document.querySelector(".g-slider2"),
	// btns : this.slider.querySelector(".g-slider2__btns").children,
	// pics : this.slider.querySelector(".g-slider2__pics"),
	counter : 0,
	left(btn)
	{
		let i = this.counter;
		let pics = btn.parentElement.parentElement.querySelector(".g-slider2__pics");
		let btns = btn.parentElement.parentElement.querySelector(".g-slider2__btns").children;
		if(i === 0)
			i = pics.children.length -1
		else
			i--;

		for (elm of pics.children)
		{
			elm.style.transform = `translateX( calc(-100% * ${i}))`
		}

		for (elm of  btns){
			elm.style.background = "#FFFFFF80"
		}
		btns[i].style.background = "white";

		for (elm of btns){
			elm.onclick = (function(){
			    let index = Array.from(btns).indexOf(this);

			    for (elm of  btns){
					elm.style.background = "#FFFFFF80"
				}

				i = [index][0]
				for (elm of pics.children){
					elm.style.transform = `translateX( calc(-100% * ${i}))`
				}
				btns[i].style.background = "white"
			})
		}
		return this.counter = i
	},
	right(btn)
	{
		let i = this.counter;
		let pics = btn.parentElement.parentElement.querySelector(".g-slider2__pics");
		let btns = btn.parentElement.parentElement.querySelector(".g-slider2__btns").children;
		if(i === pics.children.length -1)
			i = 0
		else
			i++

		for (elm of pics.children){
			elm.style.transform = `translateX( calc(-100% * ${i}))`
		}
		for (elm of  btns){
			elm.style.background = "#FFFFFF80"
		}
		btns[i].style.background = "white";
		return this.counter = i
	},
	move(item)
	{
		let i = this.counter;
		let btns = item.parentElement.children;
		let pics = item.parentElement.parentElement.querySelector(".g-slider2__pics");
		console.log(btns)
		let index = Array.from(btns).indexOf(item);
		i = [index][0];
		for (elm of btns){
			elm.style.background = "#FFFFFF80";
		}
		for (elm of pics.children){
			elm.style.transform = `translateX( calc(-100% * ${i}))`
		}
		item.style.background = "white"
		// for (elm of btns){
		// 	elm.onclick = (function(){
		// 	    let index = Array.from(btns).indexOf(this);

		// 	    for (elm of  btns){
		// 			elm.style.background = "#FFFFFF80"
		// 		}

		// 		i = [index][0]
		// 		for (elm of pics.children){
		// 			elm.style.transform = `translateX( calc(-100% * ${i}))`
		// 		}
		// 		btns[i].style.background = "white"
		// 	})
		// }
		return this.counter = i
	}


// 	right.onclick = function ()
// 	{
// 		if(i === pics.children.length -1)
// 			i = 0
// 		else
// 			i++

// 		for (elm of pics.children){
// 			elm.style.transform = `translateX( calc(-100% * ${i}))`
// 		}
// 		for (elm of  btns){
// 			elm.style.background = "#FFFFFF80"
// 		}
// 		btns[i].style.background = "white";
// 	}
// 	for (elm of btns){
// 	elm.onclick = (function(){
// 	    let index = Array.from(btns).indexOf(this);

// 	    for (elm of  btns){
// 			elm.style.background = "#FFFFFF80"
// 		}

// 		i = [index][0]
// 		for (elm of pics.children){
// 			elm.style.transform = `translateX( calc(-100% * ${i}))`
// 		}
// 		btns[i].style.background = "white"
// 		console.log(i)
// 	})
// 	}
}
