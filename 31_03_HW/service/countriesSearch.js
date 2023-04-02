
const searchUrl = `https://restcountries.com/v3.1/region`;
async function searchInCountriesAPI(searchParam){
 if (!searchParam) throw new Error ("No data entered");
 let result = await fetch (`${searchUrl}/${searchParam}`);
 if(result.ok){
    result = await result.json();
    clearInput();
    const countriesTable = generateTable(result);
    DOM.content.innerHTML = "";
   //console.log(result);
    DOM.content.append(countriesTable);
    return result;
}else{
    DOM.content.innerHTML ="";
    const h3 = document.createElement("h3");
    h3.innerText = "Not found!"
    DOM.content.append(h3);
    return;
}

}