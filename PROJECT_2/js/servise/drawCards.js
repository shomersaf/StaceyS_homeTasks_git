function drawCards(
  cArray,
  cList,
  checkedFn,
  uncheckedFn,
  checkerText,
  checkerDefolt
) {
  const coinDiv = document.createElement("div");
  coinDiv.classList.add("coinDiv");
  for (i = 0; i < cArray.length; i++) {
    const coinCard = document.createElement("div");
    coinCard.classList.add("coinCard");
    const coinId = document.createElement("div");
    coinId.classList.add("coinId");
    coinId.innerHTML = cArray[i].id;
    const coinSymbol = document.createElement("div");
    coinSymbol.classList.add("coinSymbol");
    coinSymbol.innerHTML = cArray[i].symbol;
    const coinName = document.createElement("div");
    coinName.classList.add("coinName");
    coinName.innerHTML = cArray[i].name;

    const toggleDiv = document.createElement("div");
    toggleDiv.classList.add("form-check", "form-switch");
    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = checkerDefolt;
    toggle.addEventListener("click", (event) => {
      let checker = event.target;
      let cnId = coinId.innerText.toLowerCase();
      if (checker.checked) {
        // adding;

        checkedFn(checker);
      } else {
        //removing;

        uncheckedFn(checker, cnId, coinCard);
      }
    });

    toggle.setAttribute("role", "switch");
    toggle.classList.add("form-check-input");
    toggle.id = `flexSwitchCheckChecked${i}`;

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.htmlFor = `flexSwitchCheckChecked${i}`;
    label.innerText = checkerText;

    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.innerText = "info...";
    summary.addEventListener("click", getMoreInfo);

    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("summaryDiv");
    details.append(summary, summaryDiv);
    toggleDiv.append(toggle, label);
    coinCard.append(toggleDiv, coinId, coinSymbol, coinName, details);
    coinDiv.append(coinCard);
  }
  cList.append(coinDiv);
}
