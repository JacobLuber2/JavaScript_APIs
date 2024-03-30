"use strict";
// Exercise 1 Section
let submitBtn = document.getElementById("submitSearch");
let searchInput = document.getElementById("searchWord");
let img = document.getElementById("img");
let feedbackP = document.getElementById("feedback");

// Exercise 2 Section
submitBtn.addEventListener("click", () => {
fetch(`https://api.giphy.com/v1/gifs/translate?api_key=q2wNzQw66SYVj551f2A4uBhHBewUhf2z&s=${searchInput.value}`)
.then((res) => {
return res.json();
})
.then((res) => {
img.src = res.data.images.original.url;
})
.catch((err) => {
console.error(err);
feedbackP.textContent = err;
})
.finally(() => {
searchInput.value = "";
})
})

