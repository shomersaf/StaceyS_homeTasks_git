const DOM ={ 
    controllers: document.querySelector('#controllers'),
    content: document.querySelector('#content'),
    searchInput: null,
    searchButton: null,
    clearButton: null,
};

function init(){
    generateControllers();
}

function generateControllers() {
    const controllersUI = [];
    DOM.searchInput = genInput("searchInput");
    DOM.searchButton = genButton("search", ["btn","btn-success"]);
    DOM.clearButton = genButton("clear", ["btn", "btn-danger"]);
    DOM.searchButton.addEventListener("click", () =>{
        const searchValue = DOM.searchInput.value;
        getCountryByName(searchValue);
      });
    DOM.clearButton.addEventListener("click", clearInput);
    controllersUI.push(DOM.searchInput, DOM.searchButton, DOM.clearButton);
    DOM.controllers.append(...controllersUI);
}

init();

async function getCountryByName (value){
    try {
        DOM.content.innerHTML = `<p>Searching for <b>${value}...</b></p>`;
        const result = await searchInCountriesAPI(value);
    }
    catch(error){
       alert(error);
    }
}

function clearInput(){
    DOM.searchInput.value = "";
}

function generateTable (data){
    const columns = ["name","capital","languages", "borders","population","currencies"];
    const table = document.createElement("table");
    const classes = ["table", "table-dark", "table-striped"];
    table.classList.add(...classes);
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const columnsTh = columns.map((column) => {
      const currentTh = document.createElement("th");
      currentTh.innerText = column;
      currentTh.id = column;
      currentTh.scope = "col";
      return currentTh;
    });
    tr.append(...columnsTh);
  
    thead.append(tr);
    //tbody.append(...data.map(getTrData).flat());
    table.append(thead, tbody);
    return table;
}
function getTrData(currentItem) {
    
}