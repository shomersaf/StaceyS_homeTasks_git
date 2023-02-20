let counter = 0;
const sendButton = document.querySelector(".sendButton");
sendButton.addEventListener("click", goGoText);

const container = document.querySelector(".container");


const table = document.createElement("table");
const tHead = document.createElement("thead");
const tHName = document.createElement("th");


container.append(table);
table.append(tHead);
tHead.append(tHName);
tHName.innerText = "Name";





function goGoText(){
//declaring 
counter++;
const tRow = document.createElement("tr");
const tData1 = document.createElement("td");
const tData2 = document.createElement("td");
//getting
const form = document.forms["myForm"];
let cName = form.elements["courseName"];
tData1.innerText = cName.value;
//buttons
const delButton = document.createElement("button");
delButton.innerText = " X ";
delButton.className = "delRowButton";
tData2.append(delButton);
//appending
tRow.append(tData1, tData2);
table.append(tRow);
//cleaning form inputs
cName.value = "";
}





