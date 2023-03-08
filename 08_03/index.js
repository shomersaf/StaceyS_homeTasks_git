const docSelect = document.querySelector("select");

for(i=0; i < countries.length; i++){
    let docOption = document.createElement("option");
    docSelect.appendChild(docOption);
    let currentCountry = countries[i].name.common; 
    docOption.innerText =  currentCountry;
    docSelect.addEventListener("change", getFlag);
}

function getFlag(docSelect){
    let docFlagDiv = document.createElement("div");
    docSelect.append(docFlagDiv);
    alert("!!!!!!");
    docFlagDiv.innerText = "fghfghfj!!!!!!!!!!!!!!!!h";
}