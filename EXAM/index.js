const CART = {
    productName:null,
    productPrice:null,
    category:null,
    pictureLink:null,
}

const container = document.querySelector(".container");
CART.productName = document.querySelector("#productName");
CART.productPrice = document.querySelector("#productPrice");
CART.category = document.querySelector("#category");
CART.pictureLink = document.querySelector("#pictureLink");
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
    const tableData5 = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = " X ";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", removeRowFn);

    tBody.append(tableRow);
    tableRow.append(tableData1, tableData2, tableData3, tableData4, tableData5);
    tableData4.appendChild(pickIMG);
    tableData5.appendChild(deleteButton);
    
    tableData1.innerText = CART.productName.value;
    tableData2.innerText = CART.productPrice.value;
    tableData3.innerText = CART.category.value;
    
    clearForm ();
}

function clearForm (){
    CART.productName.value =""; 
    CART.productPrice.value ="";
    CART.category.value ="";
   CART.pictureLink.value ="";
}

function removeRowFn (event) {
 
   
}