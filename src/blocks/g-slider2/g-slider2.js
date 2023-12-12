o2.second_sldier =
{
	right(item)
	{
		let pics = item.parentElement.parentElement.querySelector(".g-slider2__pics");
		let pic = pics.querySelector(".active");
		let index = Array.from(pics.children).indexOf(pic);
		let btns = pics.parentElement.querySelector(".g-slider2__btns").children
		pic.classList.remove("active")
		for (elm of btns){
			elm.style.background = "#FFFFFF80";
		}
		if(index === pics.children.length - 1){
			pics.children[0].classList.add("active");
			btns[0].style.background = "white"
			for (elm of pics.children){
				elm.style.transform = `translateX(0)`;
			}
		}
		else{
			pics.children[index+1].classList.add("active");
			btns[index+1].style.background = "white"
			for (elm of pics.children){
				elm.style.transform = `translateX( calc(-100% * ${index+1}))`;
			}
		}
	},
	left(item)
	{
		let pics = item.parentElement.parentElement.querySelector(".g-slider2__pics");
		let pic = pics.querySelector(".active");
		let index = Array.from(pics.children).indexOf(pic);
		let btns = pics.parentElement.querySelector(".g-slider2__btns").children;
		for (elm of btns){
			elm.style.background = "#FFFFFF80";
		}
		pic.classList.remove("active")
		if(index === 0){
			pics.children[pics.children.length - 1].classList.add("active")
			btns[pics.children.length - 1].style.background = "white"
			for (elm of pics.children){
				elm.style.transform = `translateX( calc(-100% * ${pics.children.length - 1}) )`;
			}
		}
		else{
			pics.children[index-1].classList.add("active");
			btns[index-1].style.background = "white"
			for (elm of pics.children){
				elm.style.transform = `translateX( calc(-100% * ${index-1}) )`;
			}
		}
	},
	move(item)
	{
		let btns = item.parentElement.children;
		let pics = item.parentElement.parentElement.querySelector(".g-slider2__pics");
		let index = Array.from(btns).indexOf(item);
		i = [index][0];
		pics.querySelector(".active").classList.remove("active")
		pics.children[i].classList.add("active")
		for (elm of btns){
			elm.style.background = "#FFFFFF80";
		}
		for (elm of pics.children){
			elm.style.transform = `translateX( calc(-100% * ${i}))`
		}
		item.style.background = "white"
	}
}