//declaring
let counter = 0;
const sendButton = document.querySelector(".sendButton");
sendButton.addEventListener("click", goGoText);
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", clearForm);
const container = document.querySelector(".container");
//getting
const form = document.forms["myForm"];
//creating
const table = document.createElement("table");
const tHead = document.createElement("thead");
const tHName = document.createElement("th");
const tBody = document.createElement("tbody");
//appending
container.append(table);
table.append(tHead, tHead);
tHead.append(tHName);
tHName.innerText = "Name";


//functions

function goGoText(){
//declaring 
counter++;
const tRow = document.createElement("tr");
const tData1 = document.createElement("td");
const tData2 = document.createElement("td");
//getting
//const form = document.forms["myForm"];
let cName = form.elements["courseName"];
tData1.innerText = cName.value;
//buttons
const delButton = document.createElement("button");
delButton.innerText = " X ";
delButton.className = "delRowButton";
delButton.addEventListener("click", delCourse)
tData2.append(delButton);
//appending
tRow.append(tData1, tData2);
tHead.append(tRow);
tRow.id = counter;
//cleaning form inputs
cName.value = "";
}

function clearForm(){
  let cName = form.elements["courseName"];
  cName.value = "";
}

function delCourse(){

 const toDelete =  this.closest('tr');
 toDelete.remove();
}

