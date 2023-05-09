function searchCoin(filterValue) {
  const coinsArr = JSON.parse(localStorage.getItem("allCoins"));
  const symbolForSearch = document.querySelector("#searchInput");
  
  if (symbolForSearch.value && coinsArr !== null) {
    let foundOne = coinsArr.find(
      (item) => item.symbol == symbolForSearch.value.toLowerCase()
    );
    if (foundOne) {
      clearInput();
      showModal(foundOne);
    } else {
      swal("ALERT:", "nothing found");
      clearInput();
    }
  } else if (coinsArr === null) {
    swal("ALERT:", "wait for server response, please");
  } else {
    swal("ALERT:", "nothing entered!");
  }
}
