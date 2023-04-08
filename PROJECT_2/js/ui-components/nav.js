function getNav(main){
const nav = document.createElement('nav');
nav.classList.add('nav');
nav.innerHTML='<a name="navigation"></a>';
const currenciesButton = document.createElement('button');
currenciesButton.id = "currenciesButton";
currenciesButton.classList.add('btn','btn-secondary');
currenciesButton.innerHTML = '<span>currencies</span>';
const reportsButton = document.createElement('button');
reportsButton.id = "reportsButton";
reportsButton.classList.add('btn','btn-secondary');
reportsButton.innerHTML = '<span>real-time reports</span>';
const aboutButton = document.createElement('button');
aboutButton.id = "currenciesButton";
aboutButton.classList.add('btn','btn-secondary');
aboutButton.innerHTML = '<span>about</span>';
aboutButton.addEventListener("click", ()=>{
    console.log("here");
    const about=document.createElement('div');
    const h2=document.createElement('h2');
    h2.innerText ="About";
    about.append(h2);
    container.append(about);
})
nav.append(currenciesButton, reportsButton, aboutButton);
main.append(nav);
$(function() {
    $('nav button').slideDown(); 
})
}