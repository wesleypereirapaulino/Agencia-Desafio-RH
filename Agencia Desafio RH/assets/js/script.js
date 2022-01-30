var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 8000);

	var slidewidth = document.getElementById("slide_area").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}

	document.querySelector(".menumobile").addEventListener("click",function(){

		if (document.querySelector(".menu ul").style.display == 'flex'){
			document.querySelector(".menu ul").style.display = 'none';
		}
		else{
			document.querySelector(".menu ul").style.display = 'flex';
		}
	});
};
function passarSlide() {
	var slidewidth = document.getElementById("slide_area").offsetWidth;	

	if(slideItem >= 2) {
		slideItem = 0;
	} else {
		slideItem++;
	}
	document.getElementsByClassName("slideint")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function left() {
	var slidewidth = document.getElementById("slide_area").offsetWidth;	
	if(slideItem >= 2) {
		slideItem = 0;
	} else {
		slideItem++;
	}
	document.getElementsByClassName("slideint")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function right() {
	var slidewidth = document.getElementById("slide_area").offsetWidth;	
	if(slideItem > 2) {
		slideItem = 0;
	} else {
		slideItem--;
	}
	document.getElementsByClassName("slideint")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}