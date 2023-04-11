function drawCurrenciesList(result,currenciesList){
    if(Array.isArray(result)){
        showLoader(currenciesList); 
        let coins = JSON.parse(localStorage.getItem("coins"));
        const coinDiv = document.createElement('div');
           coinDiv.classList.add('coinDiv');
        for(i=0; i<coins.length; i++){
            
                 const toggle = document.createElement('input');
                 toggle.type="checkbox";
                 toggle.checked ="true";
                 toggle.setAttribute("data-toggle","toggle");
           const coinCard = document.createElement('div');
           coinCard.classList.add('coinCard');
           const coinId = document.createElement('div');
           coinId.classList.add('coinId');
           coinId.innerText = coins[i].id;
           const coinSymbol = document.createElement('div');
           coinSymbol.classList.add('coinSymbol');
           coinSymbol.innerText = coins[i].symbol;
           const coinName = document.createElement('div');
           coinName.classList.add('coinName');
           coinName.innerText = coins[i].name;
           coinCard.append(toggle,coinId,coinSymbol,coinName);
           coinDiv.append(coinCard);
           
        }
        currenciesList.append(coinDiv);
    }
    }