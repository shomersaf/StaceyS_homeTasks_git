function requestCurrencies() {
  const searchUrl = `https://api.coingecko.com/api/v3/coins/list`;
  const article = document.querySelector("article");
  const currenciesList = document.createElement("div");
  currenciesList.classList.add("currenciesList");
 
  article.append(currenciesList);
  let coinsArray = [];

  async function getCurrenciesFromAPI(searchUrl) {
    try {
      let response = await fetch(searchUrl, {
        method: "GET",
      });
      result = await response.json();
      let allCoins = JSON.parse(localStorage.getItem("allCoins"));
      
      
     
      if (allCoins.length ==0) {
        allCoins = [...result];
        localStorage.setItem("allCoins", JSON.stringify(allCoins));
      }

     
      for (let i = 0; i < 100; i++) {
        var rand = Math.floor(Math.random() * result.length);
        coinsArray.push(result[rand]);
      }
      drawCurrenciesList(coinsArray, currenciesList);
      return coinsArray;
    } catch (error) {
      showProgressBar(currenciesList);

      setTimeout(requestCurrencies, 5000)
    } finally {
      const elemId ="#Progress";
      removeLoader(elemId);
    }
  }

  getCurrenciesFromAPI(searchUrl);
 
 
}
