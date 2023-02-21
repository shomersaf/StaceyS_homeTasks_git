//declaring
const courses =[];
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
const tHName1 = document.createElement("th");
const tHName2 = document.createElement("th");
const tBody = document.createElement("tbody");
//appending
container.append(table);


tHName1.innerText = "Name";
tHName2.innerText = "Actions";

//functions

function goGoText(){
//declaring 
tHead.append(tHName1, tHName2);
table.append(tHead, tBody);
const tRow = document.createElement("tr");
const tData1 = document.createElement("td");
tData1.className = "tData1";
const tData2 = document.createElement("td");
//getting
//const form = document.forms["myForm"];
let cName = form.elements["courseName"];
courses.push(cName);
tData1.innerText = courses[counter].value;
//tData1.innerText = cName.value;
//buttons
const delButton = document.createElement("button");
delButton.innerText = " X ";
delButton.className = "delRowButton";
delButton.addEventListener("click", delCourse)
tData2.append(delButton);
//-------
const editButton = document.createElement("button");
  editButton.className = "editButton";
  editButton.innerText = " edit ";
  editButton.addEventListener("click", editCourse)
  tData2.append(editButton);
//appending
tRow.append(tData1, tData2);
tBody.append(tRow);
counter++;
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

function editCourse(event){
  const toEdit =  this.closest('tr');
 toEdit.innerHTML =" ";
 const newTd1 = document.createElement("td");
 const newTd2 = document.createElement("td");
 const newInput = document.createElement("input");
 newInput.className ="newInput";
 newInput.type ="text";
 newInput.id ="enteredName";

 const saveButton = document.createElement("button");
 saveButton.type="submit";
 saveButton.innerText ="save";
 saveButton.classList.add("editButton", "saveButton");
 saveButton.addEventListener("click", saveEntered);
 newTd1.append(newInput);
 newTd2.append(saveButton);
 toEdit.append(newTd1, newTd2);
 cName = document.querySelector("#enteredName");


courses.splice[counter,1];
courses.push(cName);
counter++;
 }
function saveEntered(){
 
  
  const toEdit =  this.closest('tr');
  toEdit.innerHTML =" ";
  
  //IT COMES IN TILL HERE
 
  //alert(enteredName.value);
  const newTd1 = document.createElement("td");
  const newTd2 = document.createElement("td");
  //newTd1.innerText = enteredName.value;
 //alert(enteredName.value);
 newTd1.innerText = courses[counter-1].value;
 
  const delButton = document.createElement("button");
  delButton.innerText = " X ";
  delButton.className = "delRowButton";
  delButton.addEventListener("click", delCourse)

  const editButton = document.createElement("button");
  editButton.className = "editButton";
  editButton.innerText = " edit ";
  editButton.addEventListener("click", editCourse)
  newTd2.append(delButton, editButton);
 
  toEdit.append(newTd1, newTd2);
}



