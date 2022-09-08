"use strict";

let CREATED_MEME = "";

async function createMeme(e){ //post with data as http parameters
	e.preventDefault();
	const postRequest = await fetch(`${POST_MEMES_URL}${objectToQueryParams(getBodyInfo())}`);
	const res = await postRequest.json();
	displaySuccess(await res);
}

function objectToQueryParams(obj) { //username=username ...
	const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
	return "?" + params.join("&");
}

function getBodyInfo(){ //get info from form
	const template_id = MEME.getAttribute("data-meme");
	const username = document.querySelector("#username").value;
	const password = document.querySelector("#password").value;
	const text0 = document.querySelector("#text0").value;
	const text1 = document.querySelector("#text1").value;
	return {
		"template_id": template_id,
		"username": username,
		"password":password,
		"text0": text0,
		"text1": text1,
	};
}

function displayChosenMeme(arrayMemes){ //get the id of the meme chosen
	const found = arrayMemes.find(meme => {
		if (meme.id === MEME.getAttribute("data-meme")) return meme; 
	});

	const divMeme = document.querySelector("#current-meme");
	divMeme.innerHTML = "";
	const html = `<img id="current" alt="${found.name}" title="${found.name}" src="${found.url}" data-meme="${found.id}">`;
	divMeme.insertAdjacentHTML("beforeend", html);
}

function displaySuccess(res){ // display meme + 2 links
	console.log(res);
	addHidden();
	document.querySelector(`${SELECTORS[2]}`).classList.remove("hidden");
	const article = document.querySelector(".success");
	if (res.success){
		let html = `
		<img src="${res.data.url}" title="created-meme" alt="created-meme">
			<div class="link-container">
				<a href="${res.data.page_url}" target="_blank"> Page Url </a>
				<a href="${res.data.url}" target="_blank"> Img Url </a>
			</div>
		`;
		article.insertAdjacentHTML("beforeend", html);
	}
}
