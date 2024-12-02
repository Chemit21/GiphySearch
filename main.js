const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const submitBtn = document.getElementById("submit-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;

    let url = "//api.giphy.com/v1/gifs/search?q=+keyword+&api_key=jg8zNA5XKVxETX1IMK3pSzq1Hg7pxnBY";
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data);

}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page=1;
    searchImages();
})
