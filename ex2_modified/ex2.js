
const DOM = {
    firstName: null,
    lastName: null,
    age: null,
    numberOfChildren: null,   
  };

  let dataEntered = [];
  const container = document.querySelector(".container");

DOM.firstName = document.querySelector("#firstName");
DOM.lastName = document.querySelector("#lastName");
DOM.age = document.querySelector("#age");
DOM.numberOfChildren = document.querySelector("#numberOfChildren");

const sendButton = document.querySelector("#sendButton");
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", clearForm);
sendButton.addEventListener("click", addNewForm);

function addNewForm (event){
    dataEntered.push(
    DOM.firstName,
    DOM.lastName,
    DOM.age,
    DOM.numberOfChildren, 
    );
    generateInputs();
    clearForm ();
    printNewForm(dataEntered);

}
function clearForm (){
    
        DOM.firstName.value = " ";
        DOM.lastName.value = " ";
        DOM.age.value = " ";
        DOM.numberOfChildren.value = " "; 
}
orders.push(
    new PrintForm(
      DOM.firstName.value,
      DOM.lastName.value,
      DOM.age.value,
      DOM.numberOfChildren.value,
    )
  );
  function generateInputs (){
    const newH3 = document.createElement("h3");
    newH3.innerText = `First name: ${firstName.value}. Last name: ${lastName.value}. Age: ${age.value}. The Number of children: ${numberOfChildren.value}.`;
    const newDiv = document.createElement("div");
    newDiv.className ="newDivClass";
    const firstNameLabel = document.createElement ("label");
    firstNameLabel.innerText = "First name:";
    const firstNameInput = document.createElement ("input");
    firstNameInput.type = "text";
    const lastNameLabel = document.createElement ("label");
    lastNameLabel.innerText = "Last name:";
    const lastNameInput = document.createElement ("input");
    lastNameInput.type = "text";
    const ageLabel = document.createElement ("label");
    ageLabel.innerText = "Age:";
    const ageInput = document.createElement ("input");
    ageInput.type = "number";
    const childrenLabel = document.createElement ("label");
    childrenLabel.innerText = "Age:";
    const childrenInput = document.createElement ("input");
    childrenInput.type = "number";
    container.append(newH3, newDiv);
    newDiv.append(firstNameLabel, firstNameInput, lastNameLabel, lastNameInput, ageLabel, ageInput, childrenLabel, childrenInput); 
  }
