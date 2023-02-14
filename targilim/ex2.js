
const DOM = {
    firstName: null,
    lastName: null,
    age: null,
    numberOfChildren: null, 
      tBody:null,
  };

  let dataEntered = [];
 

DOM.firstName = document.querySelector("#firstName");
DOM.lastName = document.querySelector("#lastName");
DOM.age = document.querySelector("#age");
DOM.numberOfChildren = document.querySelector("#numberOfChildren");

const sendButton = document.querySelector("#sendButton");
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", clearForm);//till this all right
sendButton.addEventListener("click", addNewForm);



function addNewForm (event){
  dataEntered.push(
    new PrintForm (
      DOM.firstName.value,
          DOM.lastName.value,
          DOM.age.value,
          DOM.numberOfChildren.value,
     )
    )
  
    printNewForm(dataEntered);
    clearForm ();
    

}



function clearForm (){
    
        DOM.firstName.value = " ";
        DOM.lastName.value = " ";
        DOM.age.value = " ";
        DOM.numberOfChildren.value = " "; 
}

function clearTBody (){
  DOM.tBody.innerHTML = "";
}




  
  function printNewForm (dataEntered){
    if (Array.isArray(dataEntered) === false) return;
    
      for (let i=0; i<dataEntered.length; i++){
        const currentDataEntered = dataEntered[i];
        const tBody = document.querySelector("#outputTable tbody");
 
    const tRow = document.createElement("tr");
    
     //creates firstName  
    const tData1 = document.createElement("td");
    tData1.className = "firstNameData";
    tData1.innerText = currentDataEntered.firstName;

     //creates lastName  
     
     const tData2 = document.createElement("td");
     tData2.className = "firstNameData";
     tData2.innerText = currentDataEntered.lastName;

     tRow.append(tData1, tData2);
     tBody.append(tRow);
      }
   
      
  }
