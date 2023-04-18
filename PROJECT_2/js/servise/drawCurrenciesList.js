function drawCurrenciesList(coinsArray, currenciesList) {
  if (Array.isArray(coinsArray)) {
    currenciesList.innerHTML = "";
    let collection = JSON.parse(localStorage.getItem("collection"));
    if (collection == null) {
      collection = [];
      localStorage.setItem("collection", JSON.stringify(collection));
    }

    const coinDiv = document.createElement("div");
    coinDiv.classList.add("coinDiv");
    for (i = 0; i < coinsArray.length; i++) {
      const coinCard = document.createElement("div");
      coinCard.classList.add("coinCard");
      const coinId = document.createElement("div");
      coinId.classList.add("coinId");
      coinId.innerHTML = coinsArray[i].id;
      const coinSymbol = document.createElement("div");
      coinSymbol.classList.add("coinSymbol");
      coinSymbol.innerHTML = coinsArray[i].symbol;
      const coinName = document.createElement("div");
      coinName.classList.add("coinName");
      coinName.innerHTML = `${coinsArray[i].name}`;

      const toggleDiv = document.createElement("div");
      toggleDiv.classList.add("form-check", "form-switch");
      const toggle = document.createElement("input");
      toggle.type = "checkbox";

      toggle.addEventListener("click", (event) => {
        if (event.target.checked) {
          // adding;
          addToTheList(event.target);
        } else {
          //removing;
          collection = JSON.parse(localStorage.getItem("collection"));
          collection.forEach((item, index, array) => {
            let searchTarget = coinId.innerText.toLowerCase();
            if (item.id == searchTarget) {
              var res = confirm(`remove ${item.name}`);

              if (res) {
                collection.splice(index, 1);
                localStorage.setItem("collection", JSON.stringify(collection));
              } else {
                
                event.target.checked=true;
              }

             
            }
          });
        }
      });

      toggle.setAttribute("role", "switch");
      toggle.classList.add("form-check-input");
      toggle.id = `flexSwitchCheckChecked${i}`;
      const label = document.createElement("label");
      label.classList.add("form-check-label");
      label.htmlFor = `flexSwitchCheckChecked${i}`;
      label.innerText = "Add to MY LIST";

      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.innerText = "info...";
      summary.addEventListener("click", getMoreInfo);
      summary.setAttribute("title", "open/close");
      const summaryDiv = document.createElement("div");
      summaryDiv.classList.add("summaryDiv");
      details.append(summary, summaryDiv);
      toggleDiv.append(toggle, label);
      coinCard.append(toggleDiv, coinId, coinSymbol, coinName, details);
      coinDiv.append(coinCard);
      //  function addToTheList2(){
      //   const blabla = addToTheList();
      //   console.log(blabla);
      //  }
    }
    currenciesList.append(coinDiv);
  }
}
