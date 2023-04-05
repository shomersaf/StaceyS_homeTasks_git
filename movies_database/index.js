$(function(){
  $('main').hide().fadeOut().slideDown(1000);
//   $('footer span').animate({
//  fontSize: "24px",
//  duration: 3000
//   });
  
})


const DOM = {
  movieForm: document.querySelector("#movieForm"),
  container: document.querySelector(".container"),
  sendButton: document.querySelector("#sendMeButton"),
  clearButton: document.querySelector("#clearMeButton"),
};

function init() {
  DOM.sendButton.addEventListener("click", function () {
    let newSearch = {
      title: movieForm["title"].value,
    };
    let url=`http://www.omdbapi.com/?s=${newSearch.title}&apikey=36699ccb`;
    getItemsHandler(newSearch, url, getItems, draw);
    return newSearch;
  });
  DOM.clearButton.addEventListener("click", function () {
    movieForm["title"].value = " ";
    DOM.container.innerHTML = " ";
  });
}

init();

async function getItemsHandler(newData,url,getFn,drawFn) {
  try {
    showLoader();
    const movies = await getFn(newData,url);
    if (!(movies)) throw new Error("Api error");
    drawFn(movies);
  } catch (error) {
    swal({
      title: "Nothing found",
      text: "Try again",
      icon: "error",
    });
  } finally {
    removeLoader();
  }
}

async function getItems(newData,url) {
  const result = await fetch(url);
    const json = await result.json();
    return json;
}

function showLoader() {
  DOM.container.innerHTML = "";
  const loader = document.createElement("div");
  loader.id = "searchLoader";
  loader.classList.add("spinner-border");
  DOM.container.append(loader);
}

function removeLoader() {
  const loader = document.querySelector("#searchLoader");
  if (loader) {
    loader.remove();
  }
}

function draw(items){

  for (i=0; i<items.Search.length; i++){
    let newH3 = document.createElement("h3");
    newH3.innerText = items.Search[i].Title;
    newH3.classList.add("ref");
    DOM.container.append(newH3);
    newH3.addEventListener("click", getMovie);
  }
  
}

function getMovie(){
  
  const movieTitle = this.innerText;
  DOM.container.innerHTML = "";
  
  let movieUrl = `http://www.omdbapi.com/?t=${movieTitle}&apiKey=36699ccb`;
  getItemsHandler(movieTitle,movieUrl,getItems, drawMovie);
}

function drawMovie(oneMovie){
  const movieDescDiv = document.createElement("div");
  movieDescDiv.classList.add("movieDescDiv");

  for(movieProperty in oneMovie){
    let newTitle = document.createElement("p");
    if(movieProperty == "Ratings"){
      newTitle.innerHTML = `<span>${movieProperty}:</span>`
      oneMovie[movieProperty].forEach(rating => {
        newTitle.innerHTML += ` ${rating.Source}: ${rating.Value}`
      })
    }
    else if(movieProperty == "Poster"){
      let newImg = document.createElement("img");
      if(oneMovie.Poster){
        newImg.src=oneMovie.Poster;
        DOM.container.append(newImg);
      }else{ alert("!!!");

      }
     
    }
    else if(movieProperty == "Response"){
      continue
    }
    else{
      newTitle.innerHTML =`<span>${movieProperty}:</span> ${oneMovie[movieProperty]}`;
    }
    movieDescDiv.append(newTitle);
  }
  DOM.container.append(movieDescDiv);
}