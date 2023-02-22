//gettin container and form
const container = document.querySelector(".container");
const cForm = document.querySelector("form");
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

const tBody = document.createElement("tbody");

//buttons
//buttons getting
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", fuckForm);

const sendButton = document.querySelector(".sendButton");
sendButton.addEventListener("click", createRow);

//creating row buttons
const deleteButton = document.createElement("button");
deleteButton.innerText = " X ";
deleteButton.className = "redRowButton";

const editButton = document.createElement("button");
editButton.innerText = "edit";
editButton.className = "greenButton";

const saveButton = document.createElement("button");
saveButton.innerText = "save";
editButton.className = "greenButton";

//creating row inputs
const nameInput = document.createElement("input");
nameInput.classList.add("nameInput");
const priceInput = document.createElement("input");
priceInput.classList.add("priceInput");
const startInput = document.createElement("input");
startInput.classList.add("startInput");
const finishInput = document.createElement("input");
finishInput.classList.add("finishInput");
const lectureInput = document.createElement("input");
lectureInput.classList.add("lectureInput");

//creating data variables
const index = 0;

const courses = [];
const COURSE = {
  cNumber: null,
  cName: null,
  cPrice: null,
  cStart: null,
  cFinish: null,
  cLecture: null,
};

//functions

function publishHeadings() {
  thNumber.innerText = "course id";
  thName.innerText = "Name";
  thPrice.innerText = "Price";
  thStart.innerText = "Starts:";
  thFinish.innerText = "Ends:";
  thLecture.innerText = "Lecture";
  thActions.innerText = "Actions";
}

function createRow() {
  publishHeadings();

  table.append(tHead, tBody);
  const tRow = document.createElement("tr");
  const tdNumber = document.createElement("td");
  tdNumber.className = "tdNumber";
  const tdName = document.createElement("td");
  tdName.className = "tdName";
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

  tRow.append(
    tdNumber,
    tdName,
    tdPrice,
    tdStart,
    tdFinish,
    tdLecture,
    tdActions
  );
  tdActions.append(deleteButton, editButton);
  tBody.append(tRow);

  COURSE.cNumber = `id_${Math.ceil(Math.random() * 99999999999)}`;
  COURSE.cName = cForm.elements["courseName"];
  COURSE.cPrice = cForm.elements["coursePrice"];
  COURSE.cStart = cForm.elements["startDate"];
  COURSE.cFinish = cForm.elements["endDate"];
  COURSE.cLecture = cForm.elements["lecture"];

  courses.push(COURSE);
  // if(COURSE.cNumber// &&
  //COURSE.cName //&&
  // COURSE.cPrice &&
  //COURSE.cStart &&
  //COURSE.cFinish &&
  //COURSE.cLecture
  // ){
  tdNumber.innerText = courses[index].cNumber;
  tdName.innerText = courses[index].cName.value;
  tdPrice.innerText = courses[index].cPrice.value;
  tdStart.innerText = courses[index].cStart.value;
  tdFinish.innerText = courses[index].cFinish.value;
  tdLecture.innerText = courses[index].cLecture.value;
  // }

  clearForm();
  index++;
}

function clearForm() {
  COURSE.cName.value = "";
  COURSE.cPrice.value = " ";
  COURSE.cStart.value = " ";
  COURSE.cFinish.value = " ";
  COURSE.cLecture.value = " ";
}
function fuckForm() {
  cForm.elements["courseName"].value = "";
  cForm.elements["coursePrice"].value = "";
  cForm.elements["startDate"].value = "";
  cForm.elements["endDate"].value = "";
  cForm.elements["lecture"].value = "";
}
