function drawCurrenciesList(coinsArray, currenciesList) {
  if (Array.isArray(coinsArray)) {
    currenciesList.innerHTML = "";

      
      //coinsArray = JSON.parse(localStorage.getItem("coins"));
   
  

    const coinDiv = document.createElement("div");
    coinDiv.classList.add("coinDiv");
    for (i = 0; i < coinsArray.length; i++) {
      const coinCard = document.createElement("div");
      coinCard.classList.add("coinCard");
      const coinId = document.createElement("div");
      coinId.classList.add("coinId");
      coinId.innerText = coinsArray[i].id;
      const coinSymbol = document.createElement("div");
      coinSymbol.classList.add("coinSymbol");
      coinSymbol.innerText = coinsArray[i].symbol;
      const coinName = document.createElement("div");
      coinName.classList.add("coinName");
      coinName.innerText = coinsArray[i].name;
      const toggleDiv = document.createElement("div");
      toggleDiv.classList.add("form-check", "form-switch");
      const toggle = document.createElement("input");
      toggle.type = "checkbox";
      toggle.setAttribute("role", "switch");
      toggle.classList.add("form-check-input");
      toggle.id = `flexSwitchCheckChecked_${i}`;
      toggle.checked = "true";
      const label = document.createElement("label");
      label.classList.add("form-check-label");
      label.htmlFor = `flexSwitchCheckChecked_${i}`;
      label.innerText = "Add to MY LIST";
      toggleDiv.append(toggle, label);
      coinCard.append(toggleDiv, coinId, coinSymbol, coinName);
      coinDiv.append(coinCard);
    }
    currenciesList.append(coinDiv);
    //return coins;
  }
}
