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
      coinId.innerHTML =`<span>Id:</span> ${coinsArray[i].id}`;
      const coinSymbol = document.createElement("div");
      coinSymbol.classList.add("coinSymbol");
      coinSymbol.innerHTML= `<span>symbol:</span> ${coinsArray[i].symbol}`;
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
       //toggle.checked = false;
      //toggle.removeAttribute('checked');
      const label = document.createElement("label");
      label.classList.add("form-check-label");
      label.htmlFor = `flexSwitchCheckChecked${i}`;
      label.innerText = "Add to MY LIST";
      
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.innerText = "More info...";
      summary.setAttribute("title","more info");
      const summaryDiv = document.createElement('div');
      summaryDiv.innerText = "OMG";
      details.append(summary,summaryDiv);
      toggleDiv.append(toggle, label);
      coinCard.append(toggleDiv,coinId,coinName,coinSymbol,details);
      coinDiv.append(coinCard);
    }
    currenciesList.append(coinDiv);
  }
}
