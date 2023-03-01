document.addEventListener("DOMContentLoaded", genCard);

//getting from DOM
const cardRow = document.querySelector(".cardRow");
const noteForm = document.querySelector("form");
const pinItButton = document.querySelector("#pinItButton");
const cleanButton = document.querySelector("#formCleaner");
pinItButton.addEventListener("click", pinCard);
cleanButton.addEventListener("click", cleanForm);

function generateHTMLCard(newNote){
  const card = document.createElement("div");
  card.style.animation = "fade-in 1s";
  card.classList.add("card", "col", "col-3");
  const pin = document.createElement("img");
  pin.className = "pin";
  pin.src = 'img/knopka.png';
  const note = document.createElement("div");
  card.append(pin,note);
  cardRow.append(card);
  const topicText = document.createElement("div");
  topicText.className = "topicText";
  const cardFooter = document.createElement("div");
  cardFooter.className = "cardFooter";
  note.append(topicText,cardFooter);
  const dateTime = document.createElement("div");
  dateTime.className = "dateTime";
  const cleanerButton = document.createElement("button");
  cleanerButton.classList.add("btn", "btn-danger", "cleaner");
  const iconDelete = document.createElement("i");
  iconDelete.classList.add("bi", "bi-x-circle");
  cleanerButton.append(iconDelete);
  cleanerButton.addEventListener("click", delCard);
  cardFooter.append(dateTime, cleanerButton);
  const dateDiv = document.createElement("div");
  dateDiv.className = "dateDiv";
  const timeDiv = document.createElement("div");
  timeDiv.className = "timeDiv";
  dateTime.append(dateDiv, timeDiv);

  topicText.innerText = newNote.noteTopic;
  dateDiv.innerText = newNote.noteDate;
  timeDiv.innerText = newNote.noteTime;
}

//functions
function pinCard(){
 
  if(
    noteForm.elements["topicInput"].value != "" &&
    noteForm.elements["dateInput"].value != "" &&
    noteForm.elements["timeInput"].value != ""
  ){
    let newNote = {
      noteTopic: document.querySelector("#topicInput").value,
      noteDate: document.querySelector("#dateInput").value,
      noteTime: document.querySelector("#timeInput").value,
    };
    let notes = JSON.parse(localStorage.getItem("notes"));;
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    generateHTMLCard(newNote);
    cleanForm();
  }else{
    alert("Fill EVERY field of the form, please!");
  } 
}


function cleanForm() {
  noteForm.elements["topicInput"].value = "";
  noteForm.elements["dateInput"].value = "";
  noteForm.elements["timeInput"].value = "";
}


function genCard(){
  let notes = JSON.parse(localStorage.getItem("notes"));
  if(notes == null){
    notes = [];
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  for(let i = 0; i < notes.length; i++){
    generateHTMLCard(notes[i]);
  }
}

function delCard(){
  const currentCard = this.closest(".card");
  const currentTopic = currentCard.querySelector(".topicText");
  const currentDate = currentCard.querySelector(".dateDiv");
  const currentTime = currentCard.querySelector(".timeDiv");

  let notes = JSON.parse(localStorage.getItem("notes"));

  for(let index = 0; index < notes.length; index++){
    if(currentTopic.innerText == notes[index].noteTopic &&
      currentDate.innerText == notes[index].noteDate &&
      currentTime.innerText == notes[index].noteTime)
    {
      notes.splice(index,1);
      localStorage.setItem("notes", JSON.stringify(notes));
      break;
    }
  }
  currentCard.remove();
}

