const DOM = {
  controllers: document.querySelector("#controllers"),
  content: document.querySelector("#content"),
  myChart:document.querySelector("#myChart"),
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
   
    drawPopulationChart(result);
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


function drawPopulationChart(result) {
  const canvas = document.createElement('canvas');
  canvas.id = "myCart";
  DOM.content.append(canvas);
 
    let colors = ["#800000", "green", "#8B0000","blue", "#A52A2A", "#B22222", "#DC143C", "#FF0000", "#FF6347", "#FF7F50", "#CD5C5C", "#F08080", "#E9967A", "#FA8072", "#FFA07A", "#FF4500", "#FF8C00", "#FFA500", "#FFD700", "#B8860B", "#DAA520", "#EEE8AA", "#BDB76B", "#F0E68C", "#808000", "#FFFF00", "#9ACD32", "#556B2F", "#6B8E23", "#7CFC00", "#7FFF00", "#ADFF2F", "#006400", "#008000", "#228B22", "#00FF00", "#32CD32", "#90EE90", "#98FB98", "#8FBC8F", "#00FA9A", "#00FF7F", "#2E8B57", "#66CDAA", "#3CB371", "#20B2AA", "#2F4F4F", "#008080", "#008B8B", "#00FFFF", "#00FFFF", "#E0FFFF", "#00CED1", "#40E0D0", "#48D1CC", "#AFEEEE", "#7FFFD4", "#B0E0E6", "#5F9EA0", "#4682B4", "#6495ED", "#00BFFF", "#1E90FF", "#ADD8E6", "#87CEEB", "#87CEFA", "#191970", "#000080", "#00008B", "#0000CD", "#0000FF", "#4169E1", "#8A2BE2", "#4B0082", "#483D8B", "#6A5ACD", "#7B68EE", "#9370DB", "#8B008B", "#9400D3", "#9932CC", "#BA55D3", "#800080", "#D8BFD8", "#DDA0DD", "#EE82EE", "#FF00FF", "#DA70D6", "#C71585", "#DB7093", "#FF1493", "#FF69B4", "#FFB6C1", "#FFC0CB", "#FAEBD7", "#F5F5DC", "#FFE4C4", "#FFEBCD", "#F5DEB3", "#FFF8DC", "#FFFACD", "#FAFAD2", "#FFFFE0", "#8B4513", "#A0522D", "#D2691E", "#CD853F", "#F4A460", "#DEB887", "#D2B48C", "#BC8F8F", "#FFE4B5", "#FFDEAD", "#FFDAB9", "#FFE4E1", "#FFF0F5", "#FAF0E6", "#FDF5E6", "#FFEFD5", "#FFF5EE", "#F5FFFA", "#708090", "#778899", "#B0C4DE", "#E6E6FA", "#FFFAF0", "#F0F8FF", "#F8F8FF", "#F0FFF0", "#FFFFF0", "#F0FFFF", "#FFFAFA", "#000000", "#696969", "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC", "#F5F5F5", "#FFFFFF"]
    let labels = result.map((c) => { return c?.name?.common })
    let population = result.map((c) => { return c?.population })
    let data = {
       labels: labels,
       datasets: [{
           label: 'Population',
           data: population,
           backgroundColor: colors,
           borderColor: 'white',
           borderWidth: 1,
           hoverOffset: 4
       }]
   };
    let config = {
       type: 'doughnut',
       data: data,
   };
   new Chart(canvas, config);

  }
  
  

