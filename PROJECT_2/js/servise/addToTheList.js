function addToTheList(htmlObject){

  const currentCoinCard = htmlObject.closest(".coinCard");
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
 
//doesn't work
  // for(i=0; i<collection.length; i++){
  //   if(collection[i].id==myNewCoin.id){
  //     alert("You can't add it, 'cause it already exsists in your report!");
  //     htmlObject.checked = false;
  //     return;
     
  //   } else if (collection.length<5){
  //     collection.push(myNewCoin);
  //   } else{
  //     alert("You can not add more than 5 coins. Free the place for new one in your report before adding");
  //     htmlObject.checked = false;
  //     return;
  //   }
  // }


  //working particullary
  if (collection.length<5){
        collection.push(myNewCoin);
      } else{
        alert("You can not add more than 5 coins. Free the place for new one in your report before adding");
        htmlObject.checked = false;
      }

  //doesn't work    
  // if (collection.length < 5 && !collection.includes(myNewCoin)) {
  //   collection.push(myNewCoin);
  // } else if (collection.includes(myNewCoin)) {
  //   alert("You can't add it, 'cause it already exsists in your report!");
  //   htmlObject.checked = false;
  // } else {
  //   alert(
  //     "You can not add more than 5 coins. Free the place for new one in your report before adding"
  //   );
  //   htmlObject.checked = false;
  // }
 
 localStorage.setItem("collection", JSON.stringify(collection));

}