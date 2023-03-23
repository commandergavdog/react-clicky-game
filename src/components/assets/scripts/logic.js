document.onload = function () {
	let nav = document.querySelector(".nav");
	let navHeight = window.getComputedStyle(nav).height;
			
	let header = document.querySelector(".header");


	header.style.marginTop = navHeight;
};

window.onresize = function() {
	let nav = document.querySelector(".nav");
	let navHeight = window.getComputedStyle(nav).height;
			
	let header = document.querySelector(".header");
	
};

