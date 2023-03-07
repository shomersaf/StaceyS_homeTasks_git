let populationNumber = +prompt("Enter a population number as a statistic limit");

    
function getCountriesAbovethePopulation(dataBase, numberEntered){
    if(numberEntered > 0){
        var selectedCountries = [];
    document.write(`<h3> The countries, which population is over the ${numberEntered} are:</h3>`);
    dataBase.forEach( country => {
        if (country.population > numberEntered){
            selectedCountries.push(country) 
            document.write(`${country.name.common}<br />`)
            console.log(country.name.common)
        }
    });   
    if(selectedCountries.length == 0){
        document.write(`<h3><i> none! </></h3>`);
    }
    }else{
        alert("The value entered by you is irrelevant! Reload the page and try to enter the valid data, please.")};
    }


getCountriesAbovethePopulation(countries,populationNumber);