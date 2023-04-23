function searchCoin(filterValue) {
    
    const coinsArr = JSON.parse(localStorage.getItem("allCoins"));
    const symbolForSearch = document.querySelector('#searchInput');
    let foundOne = coinsArr.find((item => item.symbol == symbolForSearch.value.toLowerCase())) 
    if(foundOne){
        clearInput();
        showModal(foundOne);
    }else{
        alert("nothing found");
        clearInput();
    }
 
    //drawCoin-`;
  }