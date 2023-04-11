function requestCurrencies(){
    const searchUrl = `https://api.coingecko.com/api/v3/coins/list`;
    const article = document.querySelector('article');
    const currenciesList = document.createElement('div');
    currenciesList.classList.add('currenciesList');
    const currenciesAlert = document.createElement('div');
    article.append(currenciesList);
   
    async function getCurrenciesFromAPI(searchUrl){
    try{
          let smth = [];
          showLoader(currenciesList);
          let result = await fetch (searchUrl,{
          method: 'GET',
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
              mode: "no-cors",
          }
        });
         result = await result.json();
         clearInput();
         for(let i=0; i<100; i++ ){
          var rand = Math.floor(Math.random() * result.length);
          smth.push(result[rand]);
         }
         localStorage.setItem("coins", JSON.stringify(smth));
         
         drawCurrenciesList(result,currenciesList);
         return result;   
  }
   catch (error) {
    currenciesList.innerHTML = "";
    currenciesAlert.classList.add('currenciesAlert');
    currenciesList.append(currenciesAlert);
    currenciesAlert.innerHTML = 'The rate limit is 10-30/min.<br />It depends on the traffic size.<br /><span>Reload later, please!</span>';
      }finally{
        if(result){
            removeLoader();
        }
          
      }  
    function removeLoader() {
      const loader = document.querySelector("#searchLoader");
      if (loader) {
        loader.remove();
      }
    }

  }
 
   getCurrenciesFromAPI(searchUrl);
  }