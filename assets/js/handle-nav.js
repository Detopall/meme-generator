"use strict";

function changePage(e, arrayMemes){
	if (e.target.getAttribute("data-meme") !== null){
		addHidden();
		document.querySelector(`${SELECTORS[1]}`).classList.remove("hidden");
		MEME = e.target;
		displayChosenMeme(arrayMemes);
	} else if (e.target.getAttribute("data-make") !== null){
		addHidden();
		document.querySelector(`${SELECTORS[0]}`).classList.remove("hidden");
	}
}

function addHidden(){
	SELECTORS.forEach(selector => {
		document.querySelector(`${selector}`).classList.add("hidden");
	});
}
