function addToTheList(){

  const currentCoinCard = this.closest(".coinCard");
  const currentCoinId = currentCoinCard.childNodes[1];
  const currentCoinSymbol = currentCoinCard.childNodes[2];
  const currentCoinName = currentCoinCard.childNodes[3];
  const currentDetails = currentCoinCard.lastChild;
  
  const currentSummaryDiv = currentDetails.lastChild;
  const currentUSDPrice = currentSummaryDiv.childNodes[1];
  const currentEURPrice = currentSummaryDiv.childNodes[2];
  const currentILSPrice = currentSummaryDiv.childNodes[3];
  const myNewCoin = {
     id: currentCoinId.innerHTML,
     symbol: currentCoinSymbol.innerHTML,
     name: currentCoinName.innerHTML,
  }; 
 

 const collection =JSON.parse(localStorage.getItem('collection'));
 
 if(Array.isArray(collection)){
  collection.push(myNewCoin);
  console.log(collection);
 }else{
  console.log("not an array");
 }
 
 localStorage.setItem("collection", JSON.stringify(collection));

}