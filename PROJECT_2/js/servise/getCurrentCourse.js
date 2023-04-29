function getCurrentCourse(coins, buttonsContainer) {
  const stopButton = getButton(
    "<span>stop rating</span>",
    ["btn", "btn-secondary"],
    "stopButton",
    () => {
        clearInterval(myInterval);
        stopButton.remove();
    }
  );
  buttonsContainer.prepend(stopButton);
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
        method: "GET"
      });
      rateResult = await rateResponse.json();
      return rateResult;
    } catch (error) {
     
    } finally {
      console.log(rateResult);
    
    }
  }

myInterval = setInterval(function(){getRateFromAPI(rateURL)}, 2000);

}
