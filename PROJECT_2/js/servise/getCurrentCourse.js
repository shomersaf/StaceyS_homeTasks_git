function getCurrentCourse(coins, buttonsContainer,reports) {
  buttonsContainer.lastChild.removeEventListener("click", () => {});
  buttonsContainer.lastChild.addEventListener("click", () => {
    controller.abort();
   clearInterval(myInterval);
 
  });
 
  const controller = new AbortController();
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
    } finally {
      drawGraph(controller,reports, rateResult, new Date().toISOString(),myInterval);
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

// function getCurrentCourse(coins, buttonsContainer,reports) {
//   buttonsContainer.lastChild.removeEventListener("click", () => {});
//   buttonsContainer.lastChild.addEventListener("click", () => {
//     clearInterval(myInterval);
//   });
//   let symbols = [];
//   let timeStamps = [];
//   let rateStack = [];
//   let rateStack2 = [];
//   let rateStack3 = [];
//   let rateStack4 = [];
//   let rateStack5 = [];
//   let nakopitel =[];

//   let symbolsList = "";
//   coins.forEach((element) => {
//     symbols.push(element.symbol.toUpperCase());
//     symbolsList = symbols.join(",");
//   });
//   const rateURL = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbolsList}&tsyms=USD`;

//   async function getRateFromAPI(rateURL) {
//     try {
//       let rateResponse = await fetch(rateURL, {
//         method: "GET",
//       });
//       rateResult = await rateResponse.json();
//       return rateResult;
//     } catch (error) {
//     } finally {
//       timeStamps.push(new Date().toISOString());
//       drawGraph(reports, rateResult, timeStamps,rateStack, rateStack2, rateStack3, rateStack4, rateStack5, nakopitel);
//     }
//   }
//   myInterval = setInterval(function () {
//     getRateFromAPI(rateURL);
//   }, 2000);
// }
 