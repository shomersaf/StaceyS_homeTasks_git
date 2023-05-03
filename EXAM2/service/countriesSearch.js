
//const searchUrl = `https://restcountries.com/v3.1/name/`;

async function searchInCountriesAPI(searchParam, searchUrl){
    console.log(searchUrl);
    let result;
 if (!searchParam) throw new Error ("No data entered");
if (searchParam =="no"){
     result = await fetch (`${searchUrl}`);
}else
 result = await fetch (`${searchUrl}/${searchParam}`);
 if(result.ok){
    result = await result.json();
    clearInput();
    const countriesTable = generateTable(result);
    
    DOM.content.innerHTML = " ";
  // console.log(result);
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