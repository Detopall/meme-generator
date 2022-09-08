"use strict";

function displayImagesOfMemes(arrayMemes){
	const chooseMeme = document.querySelector(".choose-meme");
	arrayMemes.forEach(meme => {
		let html = 
		`<img alt="${meme.name}" title="${meme.name}" src="${meme.url}"  data-meme="${meme.id}">`;
		chooseMeme.insertAdjacentHTML("beforeend", html);
	});
}

function changePage(e){
	if (e.target.getAttribute("data-meme") !== null){
		addHidden();
		document.querySelector(`${SELECTORS[1]}`).classList.remove("hidden");
		MEME = e.target; 
		console.log(MEME);
	} else if (e.target.getAttribute("data-make")){
		addHidden();
		document.querySelector(`${SELECTORS[0]}`).classList.remove("hidden");
	}
}

function addHidden(){
	SELECTORS.forEach(selector => {
		document.querySelector(`${selector}`).classList.add("hidden");
	});
}