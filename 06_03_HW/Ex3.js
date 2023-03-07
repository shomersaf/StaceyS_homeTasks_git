let currencyCode = prompt("Enter a currency code of three symbols. For example ILS for israeli shekel or USD for US dollar");

function gerCounriesByCurrency(dataBase,curC){
    curC = curC.toUpperCase();
    var selectedCountries = [];
    document.write(`<h3> The countries, using ${curC} currency are:</h3>`);
    dataBase.forEach( country => {
        if (country.currencies != null && country.currencies[curC] != null){
            selectedCountries.push(country) 
            document.write(`${country.name.common}<br />`)
            console.log(country.name.common)
        }
    });   
    if(selectedCountries.length == 0){
        document.write(`<h3><i> none! </></h3> <p>Invalid data entered. Reload the page and enter the relevant data!</p>`);
    }
    
}

gerCounriesByCurrency(countries,currencyCode);

