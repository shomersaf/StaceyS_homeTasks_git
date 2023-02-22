//------initialization----------

//getting from DOM
const container = document.querySelector(".container");
const cForm = document.querySelector("form");
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", cleanForm);
const sendButton = document.querySelector(".sendButton");
sendButton.addEventListener("click", createRow);

//table declaring
const table = document.createElement("table");
const tHead = document.createElement("thead");
const thNumber = document.createElement("th");
const thName = document.createElement("th");
const thPrice = document.createElement("th");
const thStart = document.createElement("th");
const thFinish = document.createElement("th");
const thLecture = document.createElement("th");
const thActions = document.createElement("th");
const tBody = document.createElement("tbody");

//appending
tHead.append(
  thNumber,
  thName,
  thPrice,
  thStart,
  thFinish,
  thLecture,
  thActions
);
container.append(table);

//creating data variables
let index = 0;
const courses = [];
const COURSE = {
  cNumber: null,
  cName: null,
  cPrice: null,
  cStart: null,
  cFinish: null,
  cLecture: null,
};

//----------functions-----------

//----main fn --------

function createRow() {
  //validation
  if (
    cForm.elements["courseName"].value != "" &&
    cForm.elements["coursePrice"].value != "" &&
    cForm.elements["startDate"].value != "" &&
    cForm.elements["endDate"].value != "" &&
    cForm.elements["lecture"].value != ""
  ) {
    //structure:
    publishHeadings();
    const tRow = document.createElement("tr");
    const tdNumber = document.createElement("td");
    tdNumber.className = "tdNumber";
    const tdName = document.createElement("td");
    tdName.className = "tdName";
    tdName.name = "tdName";
    const tdPrice = document.createElement("td");
    tdPrice.className = "tdPrice";
    const tdStart = document.createElement("td");
    tdStart.className = "tdStart";
    const tdFinish = document.createElement("td");
    tdFinish.className = "tdFinish";
    const tdLecture = document.createElement("td");
    tdLecture.className = "tdLecture";
    const tdActions = document.createElement("td");
    tdActions.className = "tdActions";
    //row buttons:
    const deleteButton = document.createElement("button");
    deleteButton.innerText = " X ";
    deleteButton.className = "redRowButton";
    deleteButton.addEventListener("click", deleteRow);
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.className = "greenButton";
    editButton.addEventListener("click", editEntered);
    //appending:
    table.append(tHead, tBody);
    tdActions.append(deleteButton, editButton);
    tRow.append(
      tdNumber,
      tdName,
      tdPrice,
      tdStart,
      tdFinish,
      tdLecture,
      tdActions
    );
    tBody.append(tRow);
    //getting from form into OBJECT:
    COURSE.cNumber = `id_${Math.ceil(Math.random() * 99999999999)}`;
    //COURSE.cName = cForm.elements["courseName"];
    COURSE.cName = document.querySelector("#courseName");
    COURSE.cPrice = document.querySelector("#coursePrice");
    COURSE.cStart = document.querySelector("#startDate");
    COURSE.cFinish = document.querySelector("#endDate");
    COURSE.cLecture = document.querySelector("#lecture");
    //pushing the OBJECT into ARRAY:
    courses.push(COURSE);
    tdNumber.innerText = courses[index].cNumber;
    tdName.innerText = courses[index].cName.value;
    tdPrice.innerText = courses[index].cPrice.value;
    tdStart.innerText = courses[index].cStart.value;
    tdFinish.innerText = courses[index].cFinish.value;
    tdLecture.innerText = courses[index].cLecture.value;
    cleanForm();
   //clearObjCOURSE();
    index++;
  } else {
    alert("EVERY field of the form is necessary to fill!");
  }
}

//-----additional fns -------

function publishHeadings() {
    thNumber.innerText = "course id";
    thName.innerText = "Name";
    thPrice.innerText = "Price";
    thStart.innerText = "Starts:";
    thFinish.innerText = "Ends:";
    thLecture.innerText = "Lecture";
    thActions.innerText = "Actions";
  }

function cleanForm() {
    COURSE.cNumber.value = "";
    COURSE.cName.value = "";
    COURSE.cPrice.value = "";
    COURSE.cStart.value = "";
    COURSE.cFinish.value = "";
    COURSE.cLecture.value = "";
}

function clearObjCOURSE() {
    COURSE.cNumber = "";
    COURSE.cName = "";
    COURSE.cPrice = "";
    COURSE.cStart = "";
    COURSE.cFinish = "";
    COURSE.cLecture = "";
  }

function deleteRow(){
    const currentRow = this.closest("tr");
    currentRow.innerText = "";
    courses.splice(index-1,1);
    index--;  
}

function editEntered() {
    //getting
    const currentRow = this.closest("tr");
    const tdName = currentRow.querySelector(".tdName");
    const tdPrice = currentRow.querySelector(".tdPrice");
    const tdStart = currentRow.querySelector(".tdStart");
    const tdFinish = currentRow.querySelector(".tdFinish");
    const tdLecture = currentRow.querySelector(".tdLecture");
    const tdActions = currentRow.querySelector(".tdActions");
    //cleaning
    tdName.innerText ="";
    tdPrice.innerText ="";
    tdStart.innerText ="";
    tdFinish.innerText ="";
    tdLecture.innerText ="";
    tdActions.innerText ="";
    //creating button
    const saveButton = document.createElement("button");
    saveButton.innerText = "save";
    saveButton.className = "greenButton";
    saveButton.addEventListener("click", saveEdited);
    //creating new inputs
    const nameInput = document.createElement("input");
    nameInput.classList.add("nameInput");
    nameInput.type = "text";
    const priceInput = document.createElement("input");
    priceInput.classList.add("priceInput");
    priceInput.type = "number";
    const startInput = document.createElement("input");
    startInput.classList.add("startInput");
    startInput.type = "date";
    const finishInput = document.createElement("input");
    finishInput.classList.add("finishInput");
    finishInput.type = "date";
    const lectureInput = document.createElement("textarea");
    lectureInput.classList.add("lectureInput");
    //appending
    tdName.append(nameInput);
    tdPrice.append(priceInput);
    tdStart.append(startInput);
    tdFinish.append(finishInput);
    tdLecture.append(lectureInput);
    tdActions.append(saveButton);
}

function saveEdited(){
        //getting tableRow
        const currentRow = this.closest("tr");
    if (
        currentRow.querySelector(".nameInput").value != "" &&
        currentRow.querySelector(".priceInput").value != "" &&
        currentRow.querySelector(".startInput").value != "" &&
        currentRow.querySelector(".finishInput").value != "" &&
        currentRow.querySelector(".lectureInput").value != ""
      ) {
    
    //getting columns
     const tdName = currentRow.querySelector(".tdName");
     const tdPrice = currentRow.querySelector(".tdPrice");
     const tdStart = currentRow.querySelector(".tdStart");
     const tdFinish = currentRow.querySelector(".tdFinish");
     const tdLecture = currentRow.querySelector(".tdLecture");
     const tdActions = currentRow.querySelector(".tdActions");

   //cleaning object
    COURSE.cName = "";
    COURSE.cPrice = "";
    COURSE.cStart = "";
    COURSE.cFinish = "";
    COURSE.cLecture = "";

    //pushing input values into the object
    COURSE.cName = currentRow.querySelector(".nameInput");
    COURSE.cPrice = currentRow.querySelector(".priceInput");
    COURSE.cStart = currentRow.querySelector(".startInput");
    COURSE.cFinish = currentRow.querySelector(".finishInput");
    COURSE.cLecture = currentRow.querySelector(".lectureInput");

    //pushing the OBJECT into the ARRAY:
    courses.push(COURSE);
    //cleaning columns
    tdName.innerText = "";
    tdName.innerText = "";
    tdPrice.innerText = "";
    tdStart.innerText = "";
    tdFinish.innerText = "";
    tdLecture.innerText = "";
    tdActions.innerText = "";
    //entering new values
    tdName.innerText = courses[index].cName.value;
    tdName.innerText = courses[index].cName.value;
    tdPrice.innerText = courses[index].cPrice.value;
    tdStart.innerText = courses[index].cStart.value;
    tdFinish.innerText = courses[index].cFinish.value;
    tdLecture.innerText = courses[index].cLecture.value;

    //row buttons:
    const deleteButton = document.createElement("button");
    deleteButton.innerText = " X ";
    deleteButton.className = "redRowButton";
    deleteButton.addEventListener("click", deleteRow);
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.className = "greenButton";
    editButton.addEventListener("click", editEntered);  
    //appending
    tdActions.append(deleteButton, editButton);
      }else{
        alert("EVERY field of the form is necessary to fill!"); 
      }
    
}
  

