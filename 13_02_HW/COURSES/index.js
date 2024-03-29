//------initialization----------

//getting from DOM
const container = document.querySelector(".container");
const cForm = document.querySelector("form");
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", cleanForm);
const sendButton = document.querySelector(".sendButton");
sendButton.addEventListener("click", createRow);
const SearchButton = document.querySelector(".searchGlass");
SearchButton.addEventListener("click", filterCourses);
let filterInput = document.querySelector("#filter");
filterInput.addEventListener("input", filterCourses);

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
//let index = 0;
const courses = [];
const COURSE = {
  cNumber: null,
  cName: null,
  cPrice: null,
  cStart: null,
  cFinish: null,
  cLecture: null,
};

let filteredCourses = [];
//----------functions-----------

let resultsTR = [];
let resultsTD = [];
//filtering
function filterCourses() {
  let filterInput = document.querySelector("#filter");
  //alert(filterInput.value);
  resultsTR = tBody.children;
  for (i = 0; i < resultsTR.length; i++) {
    let tdName = resultsTR[i].querySelector(".tdName");
    if (tdName.innerText.includes(filterInput.value)) {
      resultsTR[i].style.cssText = "display: table-row;";
    } else if (filterInput.value == "") {
      resultsTR[i].style.cssText = "display: table-row;";
    } else {
      resultsTR[i].style.cssText = "display: none;";
    }
  }
}

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

    let newCourse = {
      cNumber: `id_${Math.ceil(Math.random() * 99999999999)}`,
      cName: document.querySelector("#courseName").value,
      cPrice: document.querySelector("#coursePrice").value,
      cStart: document.querySelector("#startDate").value,
      cFinish: document.querySelector("#endDate").value,
      cLecture: document.querySelector("#lecture").value,
    };
    courses.push(newCourse);
    tdNumber.innerText = newCourse.cNumber;
    tdName.innerText = newCourse.cName;
    tdPrice.innerText = newCourse.cPrice;
    tdStart.innerText = newCourse.cStart;
    tdFinish.innerText = newCourse.cFinish;
    tdLecture.innerText = newCourse.cLecture;
    cleanForm();
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
  cForm.elements["courseName"].value = "";
  cForm.elements["coursePrice"].value = "";
  cForm.elements["startDate"].value = "";
  cForm.elements["endDate"].value = "";
  cForm.elements["lecture"].value = "";
}

function deleteRow() {
  //Deleting row from HTML
  const currentRow = this.closest("tr");
  const courceId = currentRow.querySelector(".tdNumber").innerText;
  currentRow.innerText = "";
  currentRow.remove();
  // TODO: delete 'tr' from 'table' - is DONE

  //Deleting cource from the array cources

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].cNumber == courceId) {
      courses.splice(i, 1);
      break;
    }
  }
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
  tdName.innerText = "";
  tdPrice.innerText = "";
  tdStart.innerText = "";
  tdFinish.innerText = "";
  tdLecture.innerText = "";
  tdActions.innerText = "";
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

function saveEdited() {
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
    const tdNumber = currentRow.querySelector(".tdNumber");
    const tdName = currentRow.querySelector(".tdName");
    const tdPrice = currentRow.querySelector(".tdPrice");
    const tdStart = currentRow.querySelector(".tdStart");
    const tdFinish = currentRow.querySelector(".tdFinish");
    const tdLecture = currentRow.querySelector(".tdLecture");
    const tdActions = currentRow.querySelector(".tdActions");

    let localIndex = -1;
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].cNumber == tdNumber.innerText) {
        localIndex = i;
        courses[i].cName = currentRow.querySelector(".nameInput").value;
        courses[i].cPrice = currentRow.querySelector(".priceInput").value;
        courses[i].cStart = currentRow.querySelector(".startInput").value;
        courses[i].cFinish = currentRow.querySelector(".finishInput").value;
        courses[i].cLecture = currentRow.querySelector(".lectureInput").value;
        break;
      }
    }

    //cleaning columns
    tdName.innerText = "";
    tdName.innerText = "";
    tdPrice.innerText = "";
    tdStart.innerText = "";
    tdFinish.innerText = "";
    tdLecture.innerText = "";
    tdActions.innerText = "";
    //entering new values
    tdName.innerText = courses[localIndex].cName;
    tdName.innerText = courses[localIndex].cName;
    tdPrice.innerText = courses[localIndex].cPrice;
    tdStart.innerText = courses[localIndex].cStart;
    tdFinish.innerText = courses[localIndex].cFinish;
    tdLecture.innerText = courses[localIndex].cLecture;

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
  } else {
    alert("EVERY field of the form is necessary to fill!");
  }
}
