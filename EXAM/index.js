const container = document.querySelector(".container");
const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const category = document.querySelector("#category");
const pictureLink = document.querySelector("#pictureLink");
const addProduct = document.querySelector(".addProduct");
addProduct.addEventListener("click", generateTable);
const cartHeadline = document.querySelector("h2");
const tBody = document.querySelector("tbody");
const tHead = document.querySelector("thead");

function generateTable(event) {
    cartHeadline.className = "cartHeadline";
    tHead.className = "tHeadVisible";
    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");
    const tableData3 = document.createElement("td");
    const tableData4 = document.createElement("td");
    const pickIMG = document.createElement("img");
    pickIMG.src= pictureLink.value;
    pickIMG.className = "pickIMG";
    
    tBody.append(tableRow);
    tableRow.append(tableData1, tableData2, tableData3, tableData4);
    tableData4.appendChild(pickIMG);
    
    tableData1.innerText = productName.value;
    tableData2.innerText = productPrice.value;
    tableData3.innerText = category.value;
    
    clearForm ();
}

function clearForm (){
    productName.value ="";
    productPrice.value ="";
    category.value ="";
    pictureLink.value ="";
}