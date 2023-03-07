let countryName = prompt("Enter country name in coomon (unoficial) usage. Example: Italy (not Italian Respublic), Russia (not Russian Federation) etc.");

function getCurrencyByCountryName(dataBase,cn){
    cn = cn.toLowerCase();
    cn = cn.charAt(0).toUpperCase() + cn.slice(1);
    let resultIndex = dataBase.findIndex(dataBase => dataBase.name.common == cn);
    let currencyName = dataBase[resultIndex].currencies;
    for (let j in currencyName){
        console.log(currencyName[j].name);
        document.write(`<hr /><h3>The currency of ${cn} is ${currencyName[j].name} </h3>`);  
    }      
}
getCurrencyByCountryName(countries,countryName);



