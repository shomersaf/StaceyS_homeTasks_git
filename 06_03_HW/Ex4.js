let startDay = prompt("There are countries, whic start their week on Sunday, Monday or Saturday, for example. Enter the start of the week");

function getCountriesBySOW(dataBase,sow){
    sow = sow.toLowerCase();
    var selectedCountries = [];
    document.write(`<h3> The countries, which start a week on ${sow}:</h3>`);
    dataBase.forEach( country => {
        if (country.startOfWeek == sow){
            selectedCountries.push(country) 
            document.write(`${country.name.common}<br />`)
            console.log(country.name.common)
        }
    });   
    if(selectedCountries.length == 0){
        document.write(`<h3><i> none! </></h3>`);
    }
    
}

getCountriesBySOW(countries,startDay);
