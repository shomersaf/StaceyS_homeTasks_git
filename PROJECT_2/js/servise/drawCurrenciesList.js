function drawCurrenciesList(coinsArray, currenciesList) {
  if (Array.isArray(coinsArray)) {
    currenciesList.innerHTML = "";
    let collection = JSON.parse(localStorage.getItem("collection"));
    if (collection == null) {
      collection = [];
      localStorage.setItem("collection", JSON.stringify(collection));
    }
drawCards(coinsArray, currenciesList,addToTheList,removeFromList, "Add to REPORT", false);

  }
}
