function getNav(main){
const nav = document.createElement('nav');
nav.classList.add('nav');
nav.innerHTML='<a name="navigation"></a>';
const currenciesButton = document.createElement('button');
currenciesButton.id = "currenciesButton";
currenciesButton.classList.add('btn','btn-secondary');
currenciesButton.innerHTML = '<span>home</span>';
currenciesButton.addEventListener("click", getCurrencies);
const reportsButton = document.createElement('button');
reportsButton.id = "reportsButton";
reportsButton.classList.add('btn','btn-secondary');
reportsButton.innerHTML = '<span>real-time reports</span>';
reportsButton.addEventListener("click", getReports);
const aboutButton = document.createElement('button');
aboutButton.id = "currenciesButton";
aboutButton.classList.add('btn','btn-secondary');
aboutButton.innerHTML = '<span>about</span>';
aboutButton.addEventListener("click", getAbout);
nav.append(currenciesButton, reportsButton, aboutButton);
main.append(nav);
$(function() {
    $('nav button').slideDown(); 
    getCurrencies();
})

}