const DOM = {
  controllers: document.querySelector("#controllers"),
  content: document.querySelector("#content"),
  searchInput: null,
  searchButton: null,
  clearButton: null,
};

function init() {
  generateControllers();
}

function generateControllers() {
  const controllersUI = [];
  DOM.searchInput = genInput("searchInput");
  DOM.searchButton = genButton("search", ["btn", "btn-success"]);
  DOM.clearButton = genButton("clear", ["btn", "btn-danger"]);
  DOM.searchButton.addEventListener("click", () => {
    const searchValue = DOM.searchInput.value;
    getCountriesByRegion(searchValue);
  });
  DOM.clearButton.addEventListener("click", clearInput);
  controllersUI.push(DOM.searchInput, DOM.searchButton, DOM.clearButton);
  DOM.controllers.append(...controllersUI);
}

init();

async function getCountriesByRegion(value) {
  try {
    DOM.content.innerHTML = `<p>Searching for <b>${value}...</b></p>`;
    const result = await searchInCountriesAPI(value);
  } catch (error) {
    alert(error);
  }
}

function clearInput() {
  DOM.searchInput.value = "";
  DOM.content.innerHTML = " ";
}

function generateTable(data) {
  const columns = [
    "name",
    "region",
    "population",
    "capital",
    "languages",
    "flag",
  ];
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
  return table;

  function getTrData(currentItem) {
    for (let i = 0; i < currentItem.length; i++) {
      const tds = [];

      const countryTr = document.createElement("tr");

      countryTr.classList.add("countryTr");
      const tdName = document.createElement("td");
      const tdNameButton = document.createElement("button");
      tdNameButton.classList.add("btn", "btn-secondary");
      tdName.append(tdNameButton);
      tdNameButton.innerText = currentItem[i].name.common;
      tdNameButton.title = "get country on map";
     
      tdNameButton.addEventListener("click", async function () {
        
          const additionalTr = document.createElement("tr");
          const additionalTd = document.createElement("td");
          additionalTd.colSpan = 6;
          additionalTr.append(additionalTd); 
          const aReff = document.createElement("a");
          aReff.href=currentItem[i].maps.googleMaps;
          aReff.innerHTML = `${currentItem[i].maps.googleMaps}`;
          additionalTd.innerText = "map refference: ";
          additionalTd.append(aReff);
          countryTr.after(additionalTr);
          return countryTr;
        
       
      },{ once: true });
      
      const tdRegion = document.createElement("td");
      tdRegion.innerText = currentItem[i].region;
      const tdPopulation = document.createElement("td");
      tdPopulation.innerText = currentItem[i].population;
      const tdCapital = document.createElement("td");
      if (currentItem[i].capital) {
        tdCapital.innerText = currentItem[i].capital;
      } else {
        tdCapital.innerText = "no data";
      }

      const curLanguages = [];
      const tdLanguage = document.createElement("td");
      tdLanguage.classList.add("tdLanguage");

      for (var language in currentItem[i].languages) {
        let currentLang = currentItem[i].languages[language];
        curLanguages.push(currentLang);
      }
      tdLanguage.innerHTML = [...curLanguages];
      const tdFlag = document.createElement("td");
      const src = currentItem[i].flags.svg;
      tdFlag.append(getImg(src, 100, 140));
      tds.push(
        tdName,
        tdCapital,
        tdRegion,
        tdPopulation,
        tdCapital,
        tdLanguage,
        tdFlag
      );

      countryTr.append(...tds);
      tbody.append(countryTr);
    }
  }
}
