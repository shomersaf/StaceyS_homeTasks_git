function getCurrencies(){
    const container = document.querySelector('.container');
    container.innerHTML="";
    const currencies=document.createElement('article');
    const h2=document.createElement('h2');
    h2.classList.add('articleHeading');
    h2.innerHTML ="Home &#9655;";
    const controllers = document.createElement('div');
    controllers.id = "controllers";

    const searchInput = getInput("searchInput", "enter the currency...");
    const searchButton = getButton('<span>Search</span>',['btn','btn-secondary'],"searchButton",searchCurrencies);
    const clearButton = getButton('<span>Clear</span>',['btn','btn-secondary'],"clearButton",clearInput);
    controllers.append(searchInput,searchButton,clearButton);
    currencies.append(h2,controllers);
    container.append(currencies);

    function searchCurrencies(){
        
    };
    requestCurrencies();
   
    $(function() {
        $('#controllers').hide().fadeIn(1500); 
    })
}