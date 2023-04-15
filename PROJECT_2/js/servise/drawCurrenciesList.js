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
      coinId.innerHTML= coinsArray[i].id;
      const coinSymbol = document.createElement("div");
      coinSymbol.classList.add("coinSymbol");
      coinSymbol.innerHTML= coinsArray[i].symbol;
      const coinName = document.createElement("div");
      coinName.classList.add("coinName");
      coinName.innerHTML= `<span>Name:</span> ${coinsArray[i].name}`;

      const toggleDiv = document.createElement("div");
      toggleDiv.classList.add("form-check", "form-switch");
      const toggle = document.createElement("input");
      toggle.type = "checkbox";
      toggle.addEventListener("click", addToTheList);
      toggle.setAttribute("role", "switch");
      toggle.classList.add("form-check-input");
      toggle.id = `flexSwitchCheckChecked${i}`;
      const label = document.createElement("label");
      label.classList.add("form-check-label");
      label.htmlFor = `flexSwitchCheckChecked${i}`;
      label.innerText = "Add to MY LIST";
      
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.innerText = "info...";
      summary.addEventListener("click", getMoreInfo);
      summary.setAttribute("title","open/close");
      const summaryDiv = document.createElement('div');
      summaryDiv.classList.add("summaryDiv");
      details.append(summary,summaryDiv);
      toggleDiv.append(toggle, label);
      coinCard.append(toggleDiv,coinId,coinSymbol,coinName,details);
      coinDiv.append(coinCard);
    }
    currenciesList.append(coinDiv);
  }
}
