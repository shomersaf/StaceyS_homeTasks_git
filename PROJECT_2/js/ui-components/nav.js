function getNav(main){

const nav = document.createElement('nav');
nav.classList.add('nav');
nav.innerHTML='<a name="navigation"></a>';
const currenciesButton = getButton('<span>home</span>',['btn','btn-secondary'],"currenciesButton",getCurrencies);
const reportsButton = getButton('<span>real-time reports</span>',['btn','btn-secondary'],"reportsButton",getReports);
const aboutButton = getButton('<span>about</span>',['btn','btn-secondary'],"currenciesButton",getAbout);
nav.append(currenciesButton, reportsButton, aboutButton);
main.append(nav);
$(function() {
    $('nav button').slideDown(); 
    getCurrencies();
})

}