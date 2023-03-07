let currencyCode = prompt("Enter a currency code of three symbols");

function gerCounriesByCurrency(dataBase,curC){
    curC = curC.toUpperCase();
    var selectedCountries = [];
    document.write(`<h3> The countries, using ${curC} as a currency are:</h3>`);
    dataBase.forEach( country => {
        if (country.currencies != null && country.currencies[curC] != null){
            selectedCountries.push(country) 
            document.write(`${country.name.common}<br />`)
            console.log(country.name.common)
        }
    });   
}

gerCounriesByCurrency(countries,currencyCode);

