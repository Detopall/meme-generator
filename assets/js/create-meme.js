"use strict";

function createMeme(e){
	e.preventDefault();
	fetch(POST_MEMES_URL, {
		method: "POST",
		options: getBodyInfo(),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then(res => res.json())
	.then(json => console.log(json));
}

function getBodyInfo(){
	const template_id = MEME.getAttribute("data-meme");
	const username = document.querySelector("#username").value;
	const password = document.querySelector("#password").value;
	const text0 = document.querySelector("#text0").value;
	const text1 = document.querySelector("#text1").value;
	return JSON.stringify({
		"template_id": template_id,
		"username": username,
		"password":password,
		"text0": text0,
		"text1": text1,
	});
}

function displayChosenMeme(arrayMemes){
	const found = arrayMemes.find(meme => {
		if (meme.id === MEME.getAttribute("data-meme")) return meme; 
	});

	const article = document.querySelector(".make-meme");
	const html = `<img id="current" alt="${found.name}" title="${found.name}" src="${found.url}" data-meme="${found.id}">`;
	article.insertAdjacentHTML("beforeend", html);
}

