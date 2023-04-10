function getCurrencies(){
    const container = document.querySelector('.container');
    container.innerHTML="";
    const currencies=document.createElement('article');
    const h2=document.createElement('h2');
    h2.classList.add('articleHeading');
    h2.innerHTML ="Home &#9655;";
    currencies.append(h2);
    container.append(currencies);
}