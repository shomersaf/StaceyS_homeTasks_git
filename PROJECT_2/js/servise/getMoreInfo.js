function getMoreInfo() {

  //---------------initiation---------------------------------
  let moreInfoArr = [];
  const currentCoinCard = this.closest(".coinCard");
  const currentCoinId = currentCoinCard.childNodes[1].innerHTML;
  const currentCoinSymbol = currentCoinCard.childNodes[2].innerHTML;
  const currentDetails = currentCoinCard.lastChild;
  const currentSummaryDiv = currentDetails.lastChild;
  currentSummaryDiv.classList.remove("errorDiv");
  showProgressBar(currentSummaryDiv);
  const searchUrl = `https://api.coingecko.com/api/v3/coins/${currentCoinId}`;


//------------------------init end----------------------------------------------
  requestMoreInfo(searchUrl, currentSummaryDiv, currentCoinSymbol);
  if(localStorage.moreInfoArr){
    moreInfoArr = JSON.parse(localStorage.getItem("moreInfoArr"));
  }
  

  

//------fetch fn-------------------------------------------
  async function requestMoreInfo(searchUrl,currentSummaryDiv, currentCoinSymbol) {
    try {
      let response = await fetch(searchUrl, {
        method: "GET",
      });
      result = await response.json();
      
    } catch (error) {
    currentSummaryDiv.innerHTML = "";
      currentSummaryDiv.innerHTML = `Server request rate exceeded. Try later, please`;
      currentSummaryDiv.classList.add("errorDiv");
    } finally {
      const elemId ="#Progress";
       removeLoader(elemId);
    }

   
    let moreInfoObj ={
      id: result.id,
      img: result.image.large,
      usd: result.market_data.current_price.usd,
      eur: result.market_data.current_price.eur,
      ils: result.market_data.current_price.ils,
      // date: new Date()
    }

    moreInfoArr.push(moreInfoObj);
    //console.log(moreInfoArr);
    localStorage.setItem("moreInfoArr", JSON.stringify(moreInfoArr));
    drawMoreInfo(currentCoinSymbol,currentCoinId);
  }

//--------------------draw fn-------------------------------------------------
  function drawMoreInfo(currentCoinSymbol,currentCoinId){ 
    moreInfoArr = JSON.parse(localStorage.getItem("moreInfoArr"));
    let includesId = moreInfoArr.find((item) => item.id == currentCoinId);
   //+-console.log(includesId);
    currentSummaryDiv.innerHTML = "";
    const currentSummaryDivP1 = document.createElement("p");
    const currentSummaryDivP2 = document.createElement("p");
    const currentSummaryDivP3 = document.createElement("p");
    const currentSummaryDivP4 = document.createElement("p");
    const coinImg =  getImage("coinImg",includesId.img);
    currentSummaryDivP1.append(coinImg);
    currentSummaryDivP2.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${includesId.usd} <span>$</span>`;
    currentSummaryDivP3.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${includesId.eur} <span>&#8364;</span>`;
    currentSummaryDivP4.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${includesId.ils} <span>&#8362;</span>`;
    currentSummaryDiv.append(
      currentSummaryDivP1,
      currentSummaryDivP2,
      currentSummaryDivP3,
      currentSummaryDivP4
    );
    const elemId ="#Progress";
     removeLoader(elemId);}
}





//----------------------first version without LS--------------------------

// function getMoreInfo() {

//   const currentCoinCard = this.closest(".coinCard");
//   const currentCoinId = currentCoinCard.childNodes[1].innerHTML;
//   // console.log(currentCoinId);
//   const currentCoinSymbol = currentCoinCard.childNodes[2].innerHTML;
//   const currentDetails = currentCoinCard.lastChild;
//   const currentSummaryDiv = currentDetails.lastChild;
//   currentSummaryDiv.classList.remove("errorDiv");
//   showProgressBar(currentSummaryDiv);
//   const searchUrl = `https://api.coingecko.com/api/v3/coins/${currentCoinId}`;

//   requestMoreInfo(searchUrl, currentSummaryDiv, currentCoinSymbol);
//   async function requestMoreInfo(searchUrl) {
//     try {
//       let response = await fetch(searchUrl, {
//         method: "GET",
//       });
//       result = await response.json();
//       currentSummaryDiv.innerHTML = "";
//       const currentSummaryDivP1 = document.createElement("p");
//       const currentSummaryDivP2 = document.createElement("p");
//       const currentSummaryDivP3 = document.createElement("p");
//       const currentSummaryDivP4 = document.createElement("p");
//       const coinImg =  getImage("coinImg",result.image.large);
//       currentSummaryDivP1.append(coinImg);
//       currentSummaryDivP2.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${result.market_data.current_price.usd} <span>$</span>`;
//       currentSummaryDivP3.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${result.market_data.current_price.eur} <span>&#8364;</span>`;
//       currentSummaryDivP4.innerHTML = `1 <span>${currentCoinSymbol}</span> = ${result.market_data.current_price.ils} <span>&#8362;</span>`;
//       currentSummaryDiv.append(
//         currentSummaryDivP1,
//         currentSummaryDivP2,
//         currentSummaryDivP3,
//         currentSummaryDivP4
//       );
//       const elemId ="#Progress";
//        removeLoader(elemId);

//     } catch (error) {

//     currentSummaryDiv.innerHTML = "";
//       currentSummaryDiv.innerHTML = `Server request rate exceeded. Try later, please`;
//       currentSummaryDiv.classList.add("errorDiv");
//     } finally {
//       const elemId ="#Progress";
//        removeLoader(elemId);
//     }

//   }
// }
