function getCurrencies() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const currencies = document.createElement("article");
  const h2 = document.createElement("h2");
  h2.classList.add("articleHeading");
  h2.innerHTML = "Home &#9655;";
  const intro = document.createElement("div");
  intro.classList.add("intro");
  const rules = `<span>for your attention:</span> the basic data and the additional info of 100 crypto coins presented below are randomly generated on every load. Consider, please,that the non-commercial remote server used has a rate limit of 10-30 calls/minute. That's why the loading process seems to be longing too much sometimes and the progress bar looks stucked. There's no need to reload the page in such cases, just wait for automatic result. <br /> You may add <span>from 1 to 5 coins</span> to your personal real-time report list and watch the graphs. If you want to add the new one - come back to your report page and remove some of coins added before!`;
  intro.innerHTML = rules;
  const controllers = document.createElement("div");
  controllers.id = "controllers";

  const searchInput = getInput("searchInput", " enter coin SYMBOL...");

  const searchButton = getButton(
    "<span>Search on server</span>",
    ["btn", "btn-secondary"],
    "searchButton",
    searchCoin
  );
  const clearButton = getButton(
    "<span>Clear</span>",
    ["btn", "btn-secondary"],
    "clearButton",
    clearInput
  );
  controllers.append(searchInput, searchButton, clearButton);
  currencies.append(controllers, intro);
  container.append(h2, currencies);

  showProgressBar(container);

  requestCurrencies();

  $(function () {
    $(".intro").hide().fadeIn(3000);
  });
}
