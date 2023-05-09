function getCurrentCourse(coins, buttonsContainer,reports,controller) {
 
 const aboutButton = document.querySelector("#aboutButton");
 aboutButton.addEventListener("click",()=>{
  controller.abort();
  clearInterval(myInterval);
} );
const currenciesButton = document.querySelector("#currenciesButton");
currenciesButton.addEventListener("click",()=>{
 controller.abort();
 clearInterval(myInterval);
} );

  const signal = controller.signal;
  async function getRateFromAPI(rateURL) {
    try {
      let rateResponse = await fetch(rateURL, {
        method: "GET",
        signal: signal, // <------ This is our AbortSignal
      });
      rateResult = await rateResponse.json();
      return rateResult;
    } catch (error) {
      // controller.abort();
      // clearInterval(myInterval);
      console.log(error);

    } finally {
      drawGraph(reports, rateResult, new Date().toISOString(),myInterval, controller);
    }
  }
  myInterval = setInterval(function () {
    let coins = JSON.parse(localStorage.getItem("collection"));
    let symbolsList = "";
    let symbols = [];
    coins.forEach((coin) => {
      symbols.push(coin.symbol.toUpperCase());
      symbolsList = symbols.join(",");
    });
    const rateURL = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbolsList}&tsyms=USD`;
    getRateFromAPI(rateURL);
  }, 2000);
  
}

