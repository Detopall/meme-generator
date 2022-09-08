"use strict";

function displayImagesOfMemes(arrayMemes){
	const chooseMeme = document.querySelector("#all-memes");
	const memesWithTwoBoxes = [];
	arrayMemes.forEach(meme => {
		if (meme.box_count == 2) {
			memesWithTwoBoxes.push(meme);
		}
	});

	memesWithTwoBoxes.forEach(meme => {
		let html = 
		`<img alt="${meme.name}" title="${meme.name}" src="${meme.url}"  data-meme="${meme.id}">`;
		chooseMeme.insertAdjacentHTML("beforeend", html);
	});
}
