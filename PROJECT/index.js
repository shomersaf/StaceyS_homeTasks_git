//getting from DOM
const cardRow = document.querySelector(".cardRow");
const noteForm = document.querySelector("form");
const pinItButton = document.querySelector("#pinItButton");
const cleanButton = document.querySelector("#formCleaner");
pinItButton.addEventListener("click", pinCard);
cleanButton.addEventListener("click", cleanForm);
let i = 0;

const notes = [];


//functions
function pinCard(){

  if(
    noteForm.elements["topicInput"].value != "" &&
    noteForm.elements["dateInput"].value != "" &&
    noteForm.elements["timeInput"].value != ""
  ){

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
    cardFooter.append(dateTime, cleanerButton);
    const dateDiv = document.createElement("div");
    dateDiv.className = "dateDiv";
    const timeDiv = document.createElement("div");
    timeDiv.className = "timeDiv";
    dateTime.append(dateDiv, timeDiv);
  
  
    let newNote = {
      noteTopic: document.querySelector("#topicInput").value,
      noteDate: document.querySelector("#dateInput").value,
      noteTime: document.querySelector("#timeInput").value,
    };
  
    notes.push(newNote);

    localStorage.setItem("notes", JSON.stringify(notes));
  
    topicText.innerText = notes[i].noteTopic;
    dateDiv.innerText = notes[i].noteDate;
    timeDiv.innerText = notes[i].noteTime;
    i++;
  
    
    if(i % 4 == 0){
      const rowBreaker = document.createElement("div");
      rowBreaker.classList.add("w-100", "d-none" , "d-md-block");
      cardRow.appendChild(rowBreaker);
    }
  
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
