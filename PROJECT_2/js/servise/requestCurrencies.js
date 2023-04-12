function requestCurrencies(){
    const searchUrl = `https://api.coingecko.com/api/v3/coins/list`;
    const article = document.querySelector('article');
    const currenciesList = document.createElement('div');
    currenciesList.classList.add('currenciesList');
    const currenciesAlert = document.createElement('div');
    article.append(currenciesList);
   
    async function getCurrenciesFromAPI(searchUrl){
    try{
          let coinsArray = [];
          let result = await fetch (searchUrl,{
          method: 'GET',
          headers: {
              mode: "no-cors",
          }
        });
         result = await result.json();
     
         for(let i=0; i<100; i++ ){
          var rand = Math.floor(Math.random() * result.length);
          coinsArray.push(result[rand]);
         }
        
         // localStorage.setItem("coins", JSON.stringify(coinsArray));
         setTimeout(drawCurrenciesList(coinsArray,currenciesList), 60000);
          //drawCurrenciesList(coinsArray,currenciesList);
          return coinsArray;  
        
        
  }
   catch (error) {
    currenciesList.innerHTML = "";
    currenciesAlert.classList.add('currenciesAlert');
    currenciesList.append(currenciesAlert);
    console.log(error);
    currenciesAlert.innerHTML = 'The rate limit is 10-30/min.<br />It depends on the traffic size.<br /><span>Reload later, please!</span>';
      }finally{
            removeLoader();
      }  
    function removeLoader() {
      const loader = document.querySelector(".spinner-border");
      if (loader) {
        loader.remove();
      }
    }

  }
 
   getCurrenciesFromAPI(searchUrl);
  }

function requestCurrencies2(){
  const searchUrl = `https://api.coingecko.com/api/v3/coins/list`;
  const article = document.querySelector('article');
  const currenciesList = document.createElement('div');
  currenciesList.classList.add('currenciesList');
  const currenciesAlert = document.createElement('div');
  article.append(currenciesList);

  async function getCurrenciesFromAPI(searchUrl){
    try{
      let coinsArray = [];
      let result = await fetch (searchUrl,{
        method: 'GET',
        headers: {
          mode: "no-cors",
        }
      });
      result = await result.json();
      clearInput();
      for(let i=0; i<100; i++ ){
        var rand = Math.floor(Math.random() * result.length);
        coinsArray.push(result[rand]);
      }
      // localStorage.setItem("coins", JSON.stringify(coinsArray));
      drawCurrenciesList(coinsArray,currenciesList);
      //drawCurrenciesList(coinsArray,currenciesList);
      return coinsArray;
    }
    catch (error) {
      currenciesList.innerHTML = "";
      currenciesAlert.classList.add('currenciesAlert');
      currenciesList.append(currenciesAlert);
      console.log(error);
      currenciesAlert.innerHTML = 'The rate limit is 10-30/min.<br />It depends on the traffic size.<br /><span>Reload later, please!</span>';
    }finally{
      removeLoader();
    }  
    function removeLoader() {
      const loader = document.querySelector(".spinner-border");
      if (loader) {
        loader.remove();
      }
    }
  }
  getCurrenciesFromAPI(searchUrl);
}