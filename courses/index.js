const table = document.querySelector("table");
table.className ="invisible";
const tBody = document.querySelector("tbody");
const outputRow = document.querySelector(".outputRow");
const publishButton = document.querySelector(".publishButton");
const editButton = document.querySelector(".editButton");
const editInputs = document.querySelector(".editInputs");
editInputs.className ="invisible";
const courseName = document.querySelector("#courseName");
const price = document.querySelector("#price");
const nameTd = document.querySelector(".nameTd");
const priceTd = document.querySelector(".priceTd");
let courses = [];



publishButton.addEventListener("click", goVisible);
publishButton.addEventListener("click", publish);
editButton.addEventListener("click", goEditable);

function goVisible(event){
    table.className ="visible";
}

function publish(event){
    //goes to local storage
    let currentCourse = {
        "courseName": courseName.value,
        "price": price.value,
    };
    courses.push(currentCourse);
    localStorage.setItem("courses", JSON.stringify(courses));
   
   // courses = JSON.parse(localStorage.getItem('courses'));
    //console.log(courses);
    outputRow = document.createElement("tr");
    nameTd = cdocument.reateElement("td");
    nameTd.innerText = "fuck!!!!!!!!!";
    outputRow.append(nameTd);
    tBody.append(outputRow);
}

function goEditable(event){
    outputRow.className ="invisible";
    editInputs.className ="visibleInput";
}


function fromLocal(){

    nameTd.innerText = localStorage.getItem(courseName.value);
    priceTd.innerText = localStorage.getItem(price.value);
}