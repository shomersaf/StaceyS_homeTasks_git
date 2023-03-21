
const DOM = {
    input: document.querySelector("#searchInput"),
    button: document.querySelector("#searchButton"),
    content: document.querySelector("#content"),
    list: document.querySelector("#pokemonsList"),
    l_button: document.querySelector("#listButton"),
  };

  DOM.l_button.addEventListener("click",  drawPokemonList);

  function init() {
    DOM.button.addEventListener("click", handleSearch);
  }
  init();
  
  async function handleSearch() {
    try {
      showLoader();
      const result = await searchPokemon(DOM.input.value);
      if (!result) throw new Error("Api error");
      draw(result);
    } catch (error) {
      console.log("I AM HERE AND I AM NOT HAPPY");
      swal({
        title: "Something went wrong!",
        text: "Contact admin",
        icon: "error",
      });
    } finally {
      removeLoader();
    }
  }
  function draw(result) {
    DOM.content.innerHTML = "";
    if (Array.isArray(result)) {
      for (let index = 0; index < result.length; index++) {
        drawPokemon(result[index]);
      }
    } else {
      drawPokemon(result);
    }
  }
  function drawPokemon(pokemonToDraw) {
    const img = getImg(pokemonToDraw?.sprites?.front_default);
    const h3 = document.createElement("h3");
    h3.innerText = pokemonToDraw?.name;
    DOM.content.append(img, h3);
    
  }
  
 
 
  async function searchPokemon(pokemonName) {
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const json = await result.json();
    console.log(json);
    return json;
  }
   
  async function drawPokemonList() {
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const json = await result.json();
    for (i=0; i<json?.results?.length; i++){
      let li = document.createElement("li");
      li.innerText = json?.results[i]?.name;
      DOM.list.append(li);
    }
    
    return json;
  }
  
  {
    /* <div class="spinner-border" role="status"> */
  }

  function showLoader() {
    DOM.content.innerHTML = "";
    const loader = document.createElement("div");
    loader.id = "searchLoader";
    loader.classList.add("spinner-border");
    DOM.content.append(loader);
  }
  
  function removeLoader() {
    const loader = document.querySelector("#searchLoader");
    if (loader) {
      loader.remove();
    }
  }


