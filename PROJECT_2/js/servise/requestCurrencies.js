function requestCurrencies() {
  const searchUrl = `https://api.coingecko.com/api/v3/coins/list`;
  const article = document.querySelector("article");
  const currenciesList = document.createElement("div");
  currenciesList.classList.add("currenciesList");
  const currenciesAlert = document.createElement("div");
  article.append(currenciesList);
  let coinsArray = [];

  async function getCurrenciesFromAPI(searchUrl) {
    try {
      let response = await fetch(searchUrl, {
        method: "GET",
        // headers: {
        //   mode: "no-cors",
        // },
      });
      result = await response.json();
      for (let i = 0; i < 4; i++) {
        var rand = Math.floor(Math.random() * result.length);
        coinsArray.push(result[rand]);
      }
      drawCurrenciesList(coinsArray, currenciesList);
      return coinsArray;
    } catch (error) {
      showLoader(currenciesList);
      setTimeout(requestCurrencies, 5000)
    } finally {
      removeLoader();
    }
    function removeLoader() {
      const loader = document.querySelector(".spinner-border");
      if (loader) {
        loader.remove();
      }
    }
  }

  getCurrenciesFromAPI(searchUrl);
 
 
}
