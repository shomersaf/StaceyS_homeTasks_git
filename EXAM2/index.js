const DOM = {
  controllers: document.querySelector("#controllers"),
  content: document.querySelector("#content"),
  searchInput: null,
  searchButton: null,
  clearButton: null,
  totPop:[],
};

  const searchUrlAll = `https://restcountries.com/v3.1/all`;
    const searchUrl= `https://restcountries.com/v3.1/name`;

function init() {
  generateControllers();
}

function generateControllers() {
  const controllersUI = [];
  DOM.searchInput = genInput("searchInput");
  DOM.searchButton = genButton("search", ["btn", "btn-success"]);
  DOM.allButton = genButton("All", ["btn", "btn-success"]);
  DOM.clearButton = genButton("clear", ["btn", "btn-danger"]);
  DOM.searchButton.addEventListener("click", () => {
    const searchValue = DOM.searchInput.value;
   
    getCountriesByName(searchValue, searchUrl);
  });
  DOM.allButton.addEventListener("click", () => {
    const searchValueAll = "no";
   
    getCountriesByName(searchValueAll, searchUrlAll);
  });
  DOM.clearButton.addEventListener("click", clearInput);
  controllersUI.push(
    DOM.searchInput,
    DOM.searchButton,
    DOM.allButton,
    DOM.clearButton
  );

  const statisticDiv = document.createElement("div");
  statisticDiv.classList.add("statisticDiv");
  const totalPopulation = document.createElement("h6");
  totalPopulation.id = "totalPopulation";
 // totalPopulation.innerText = `Total Countries Population:`;
  const averagePopulation = document.createElement("h6");
  averagePopulation.id = "averagePopulation";
  //averagePopulation.innerText = `Average Population:`;
  statisticDiv.append(totalPopulation,averagePopulation);
  DOM.controllers.append(...controllersUI,statisticDiv);
}

init();

async function getCountriesByName(value, url) {
  try {
    DOM.content.innerHTML = `<p>Searching for <b>${value}...</b></p>`;
    const result = await searchInCountriesAPI(value, url);
  } catch (error) {
    console.log(error);
  }
}

function clearInput() {
  DOM.searchInput.value = "";
  DOM.content.innerHTML = " ";
}

function calculateStatistic(){
  let cNumber = DOM.totPop.length;
 
  let sum = DOM.totPop.map(i=>x+=i, x=0).reverse()[0];
  let averageP = sum/cNumber;
  totalPopulation = document.getElementById("totalPopulation");
   totalPopulation.innerText = `Total Countries Population: ${sum}`;
   averagePopulation = document.getElementById("averagePopulation");
   averagePopulation.innerText = `Average Population: ${averageP}`;
  return sum;

}

function generateTable(data) {
  DOM.totPop = [];
  const columns = ["Country Name", "Number of Citzens"];
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
  getTrData(data);
 
  table.append(thead, tbody);
  calculateStatistic();
  return table;

  function getTrData(currentItem) {
    for (let i = 0; i < currentItem.length; i++) {
      const tds = [];

      const countryTr = document.createElement("tr");

      countryTr.classList.add("countryTr");
      const tdName = document.createElement("td");

      tdName.innerText = currentItem[i].name.common;

      const tdPopulation = document.createElement("td");
      tdPopulation.innerText = currentItem[i].population;
      let currentPopulation  = currentItem[i].population;
      DOM.totPop.push(currentPopulation);
      
      tdPopulation.classList.add("tdPopulation");
      

      tds.push(tdName, tdPopulation);

      countryTr.append(...tds);
      tbody.append(countryTr);
      
    }
  }
}
