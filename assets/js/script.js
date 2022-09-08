"use strict";

document.addEventListener("DOMContentLoaded", init);
const GET_MEMES_URL = "https://api.imgflip.com/get_memes";
const POST_MEMES_URL = "https://api.imgflip.com/caption_image";

//res.data.memes

async function init(){
	const arrayMemes = await fetchInfo();
	console.log(arrayMemes);
}

async function fetchInfo(){
	const fetchMemes = await fetch(GET_MEMES_URL);
	const res = await fetchMemes.json();
	return res.data.memes;
}