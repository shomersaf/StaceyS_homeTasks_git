async function getMoreInfo() {
  const currentCoinCard = this.closest(".coinCard");
  const currentCoinId = currentCoinCard.childNodes[1].innerHTML;
  const currentCoinSymbol = currentCoinCard.childNodes[2].innerHTML;
  const currentDetails = currentCoinCard.lastChild;
  const currentSummaryDiv = currentDetails.lastChild;
  currentSummaryDiv.classList.remove("errorDiv");
  showProgressBar(currentSummaryDiv);
  var infoObj;

  try {
    infoObj = await GetInfo(currentCoinId);
  } catch (error) {
    currentSummaryDiv.innerHTML = "";
    currentSummaryDiv.innerHTML = `Server request rate exceeded. Try in 1 min, please`;
    currentSummaryDiv.classList.add("errorDiv");
    return;
  } finally {
    const elemId = "#Progress";
    removeLoader(elemId);
  }

  currentSummaryDiv.innerHTML = "";
  const currentSummaryDivP1 = document.createElement("p");
  const currentSummaryDivP2 = document.createElement("p");
  const currentSummaryDivP3 = document.createElement("p");
  const currentSummaryDivP4 = document.createElement("p");
  const coinImg = getImage("coinImg", infoObj.image?.large);
  currentSummaryDivP1.append(coinImg);
  currentSummaryDivP2.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${infoObj.market_data.current_price.usd} <span>$</span>`;
  currentSummaryDivP3.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${infoObj.market_data.current_price.eur} <span>&#8364;</span>`;
  currentSummaryDivP4.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${infoObj.market_data.current_price.ils} <span>&#8362;</span>`;
  currentSummaryDiv.append(
    currentSummaryDivP1,
    currentSummaryDivP2,
    currentSummaryDivP3,
    currentSummaryDivP4
  );
}
