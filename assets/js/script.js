"use strict";

document.addEventListener("DOMContentLoaded", init);
const GET_MEMES_URL = "https://api.imgflip.com/get_memes";
const POST_MEMES_URL = "https://api.imgflip.com/caption_image";

//res.data.memes

async function init(){
	const arrayMemes = await fetchInfo();
	console.log(arrayMemes);
	displayImagesOfMemes(arrayMemes);
}

async function fetchInfo(){
	const fetchMemes = await fetch(GET_MEMES_URL);
	const res = await fetchMemes.json();
	return res.data.memes;
}

function displayImagesOfMemes(arrayMemes){
	const chooseMeme = document.querySelector("#choose-meme");
	arrayMemes.forEach(meme => {
		let html = 
		`<img alt="${meme.name}" title="${meme.name}" src="${meme.url}">`;
		chooseMeme.insertAdjacentHTML("beforeend", html);
	});
}