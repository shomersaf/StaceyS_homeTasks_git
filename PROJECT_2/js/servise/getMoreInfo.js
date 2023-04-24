function getMoreInfo() {
    
  const currentCoinCard = this.closest(".coinCard");
  const currentCoinId = currentCoinCard.childNodes[1].innerHTML;
  // console.log(currentCoinId);
  const currentCoinSymbol = currentCoinCard.childNodes[2].innerHTML;
  const currentDetails = currentCoinCard.lastChild;
  const currentSummaryDiv = currentDetails.lastChild;
  currentSummaryDiv.classList.remove("errorDiv");
  showProgressBar(currentSummaryDiv);
  const searchUrl = `https://api.coingecko.com/api/v3/coins/${currentCoinId}`;

  requestMoreInfo(searchUrl, currentSummaryDiv, currentCoinSymbol);
  async function requestMoreInfo(searchUrl) {
    try {
      let response = await fetch(searchUrl, {
        method: "GET",
      });
      result = await response.json();
      currentSummaryDiv.innerHTML = "";
      const currentSummaryDivP1 = document.createElement("p");
      const currentSummaryDivP2 = document.createElement("p");
      const currentSummaryDivP3 = document.createElement("p");
      const currentSummaryDivP4 = document.createElement("p");
      const coinImg =  getImage("coinImg",result.image.large);
      currentSummaryDivP1.append(coinImg);
      currentSummaryDivP2.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${result.market_data.current_price.usd} <span>$</span>`;
      currentSummaryDivP3.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${result.market_data.current_price.eur} <span>&#8364;</span>`;
      currentSummaryDivP4.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${result.market_data.current_price.ils} <span>&#8362;</span>`;
      currentSummaryDiv.append(
        currentSummaryDivP1,
        currentSummaryDivP2,
        currentSummaryDivP3,
        currentSummaryDivP4
      );
      const elemId ="#Progress";
       removeLoader(elemId);

    } catch (error) {

    currentSummaryDiv.innerHTML = "";
      currentSummaryDiv.innerHTML = `Server request rate exceeded. Try later, please`;
      currentSummaryDiv.classList.add("errorDiv");
    } finally {
      const elemId ="#Progress";
       removeLoader(elemId);
    }
 
  }
}
