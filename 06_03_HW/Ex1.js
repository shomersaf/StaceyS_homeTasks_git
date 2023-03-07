
let countryCode = prompt("Enter country code cca3. Example: ita, fin, swe or isr, etc.");

function getBordersByCountry(dataBase,cc){
    cc = cc.toUpperCase();
    let resultIndex = dataBase.findIndex(dataBase => dataBase.cca3 == cc);
    let borders = dataBase[resultIndex]?.borders;
    if(borders){
        console.log(borders);
        document.write(`<hr /><h3>${cc} borders on:</h3>`);  
        borders.forEach(element => {     
            document.write(`${element}<br />`);  
        });
    }else{
        alert("You've just entered a wrong value! Reload and try again!");
    } 
}

getBordersByCountry(countries,countryCode);





