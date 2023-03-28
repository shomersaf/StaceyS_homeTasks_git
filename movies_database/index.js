const DOM = {
    movieForm: document.querySelector("#movieForm"),
    container: document.querySelector(".container"),
    sendButton: document.querySelector("#sendButton"),
    clearButton: document.querySelector("#clearButton"),
  };

  function init() {
    DOM.sendButton.addEventListener("click", function () {
      let newSearch = {
        title: movieForm["title"].value,
      };
      
      getItemsHandler(newSearch);
      return newSearch;
    });
    DOM.clearButton.addEventListener("click", function (newSearch) {
      movieForm["title"].value = " ";
      movieForm["year"].value = " ";
    });
  }

  init();

  async function getItemsHandler(newSearch) {
    try {
      showLoader();
      const movies = await getItems(newSearch);
      //if (!Array.isArray(movies)) throw new Error("Api error");
      if (!(movies)) throw new Error("Api error");
      draw(movies);
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

  async function getItems(newSearch) {
    const result = await fetch(`http://www.omdbapi.com/?s=${newSearch.title}&page=20&apikey=36699ccb`);
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
  
    for (i=0; i<10; i++){
      let newDiv = document.createElement("h3");
      newDiv.innerText = items.Search[i].Title;
      newDiv.classList.add("ref");
      console.log(items.Search[i].Title);
      DOM.container.append(newDiv);
      newDiv.addEventListener("click", getMovie);
    }
    
  }
  
  function getMovie(){
    alert("go!");
  }