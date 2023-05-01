function getCurrentCourse(coins, buttonsContainer,reports) {
  buttonsContainer.lastChild.removeEventListener("click", () => {});
  buttonsContainer.lastChild.addEventListener("click", () => {
    clearInterval(myInterval);
  });
  let symbols = [];
  let timeStamps = [];
  let rateStack = [];
  let rateStack2 = [];
  let rateStack3 = [];
  let rateStack4 = [];
  let rateStack5 = [];

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
      timeStamps.push(new Date().toISOString());
      drawGraph(reports, rateResult, timeStamps,rateStack, rateStack2, rateStack3, rateStack4, rateStack5);
    }
  }
  myInterval = setInterval(function () {
    getRateFromAPI(rateURL);
  }, 2000);
}
 