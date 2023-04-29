function getCurrentCourse(coins, buttonsContainer,reports) {
  buttonsContainer.lastChild.removeEventListener("click", () => {});
  buttonsContainer.lastChild.addEventListener("click", () => {
    clearInterval(myInterval);
  });
  let symbols = [];
  let symbolsList = "";
  coins.forEach((element) => {
    symbols.push(element.symbol.toUpperCase());
    symbolsList = symbols.join(",");
  });
  const rateURL = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbolsList}&tsyms=USD`;

  async function getRateFromAPI(rateURL) {
    try {
      let rateResponse = await fetch(rateURL, {
        method: "GET",
      });
      rateResult = await rateResponse.json();
      return rateResult;
    } catch (error) {
    } finally {
      drawGraph(coins, reports, rateResult);
     //console.log(rateResult);
    }
  }

  myInterval = setInterval(function () {
    getRateFromAPI(rateURL);
  }, 2000);

  // drawGraph(coins, reports);
}
