function showLoader(currenciesList) {
    currenciesList.innerHTML = "";
    const loader = document.createElement("div");
    loader.id = "searchLoader";
    loader.classList.add("spinner-border");
    currenciesList.append(loader);
  }