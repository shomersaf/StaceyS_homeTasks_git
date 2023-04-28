function getCurrentCourse(coins, reports) {
  let symbols = [];
  let symbolsList = "";
  coins.forEach((element) => {
    symbols.push(element.symbol.toUpperCase());
    symbolsList = symbols.join(",");
  });
  const rateURL = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbolsList}&tsyms=USD`;
  drawGraph(coins, reports);
  async function getRateFromAPI(rateURL) {
    try {
      let rateResponse = await fetch(rateURL, {
        method: "GET"
      });
      rateResult = await rateResponse.json();
      return rateResult;
    } catch (error) {
      //console.log(error);
    } finally {
      console.log(rateResult);
      //drawGraph(coins, reports);
    }
  }

myInterval = setInterval(function(){getRateFromAPI(rateURL)}, 2000);
//clearInterval(myInterval); - add to another button
//activate drawGraph, but at first do it without setinterval
//add destroy graph?? needed??? really? - yes, cause it generayes new graph
//BUT ONLY VALUE MUST BE GENERATED!!!!
// add values to graph first and take out the graph fn from setinterval
//buttons get rate and stop, which cleans the interval

 

  //getRateFromAPI(rateURL);
}
