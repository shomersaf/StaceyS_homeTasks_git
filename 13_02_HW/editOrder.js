function editOrder(
   
   tdEmail,
   tdNumberOfSeats,
   tdAllergens,
    tdCredit,
   tdComments,
    tdOutside,
    tdDate,
    tdTime,
    tdActions,
    buttonEdit
    
  ) {
    
    //entering inputs
    
     tdEmail.innerText = " ";
     const emailImputToEdit = document.createElement("input");
     tdEmail.append(emailImputToEdit);
     tdEmail.className = "inputToEdit";
     tdEmail.type="email"
     tdEmail.id="editEmail";
     
     

     tdNumberOfSeats.innerText = " ";
     const seatImputToEdit = document.createElement("select");
    
     tdNumberOfSeats.append(seatImputToEdit);
     for(let i=1; i<=8; i++){
        let seatOptToEdit = document.createElement("option");
        seatOptToEdit.innerText = i;
        seatImputToEdit.append(seatOptToEdit);
     }
     
     tdNumberOfSeats.className = "inputToEdit";
     
     

     tdAllergens.innerText = " ";
     const allergensImputToEdit = document.createElement("select");
     const alrgOptToEdit1 = document.createElement("option");
     alrgOptToEdit1.innerText = "Eggs";
     allergensImputToEdit.append(alrgOptToEdit1);
     const alrgOptToEdit2 = document.createElement("option");
     alrgOptToEdit2.innerText = "Gluten";
     allergensImputToEdit.append(alrgOptToEdit2);
     const alrgOptToEdit3 = document.createElement("option");
     alrgOptToEdit3.innerText = "Milk";
     allergensImputToEdit.append(alrgOptToEdit3);
     const alrgOptToEdit4 = document.createElement("option");
     alrgOptToEdit4.innerText = "Nuts";
     allergensImputToEdit.append(alrgOptToEdit4);
     const alrgOptToEdit5 = document.createElement("option");
     alrgOptToEdit5.innerText = "Cashew";
     allergensImputToEdit.append(alrgOptToEdit5);
     tdAllergens.append(allergensImputToEdit);
     tdAllergens.className = "inputToEdit";

     tdCredit.innerText = " ";
     const creditImputToEdit = document.createElement("input");
     tdCredit.type="number"
     tdCredit.id="editCredit";
     tdCredit.append(creditImputToEdit);
     tdCredit.className = "inputToEdit";


     tdComments.innerText = " ";
     const commentsImputToEdit = document.createElement("textarea");
     tdComments.className = "inputToEdit";
     tdCredit.id="editComments";
     tdComments.append(commentsImputToEdit);
    

     tdOutside.innerText = " ";
     const outsideImputToEdit = document.createElement("input");
     const labelOutsideImputToEdit = document.createElement("label");
     labelOutsideImputToEdit.innerText = "Outside";
     
     outsideImputToEdit.type="checkbox";
     outsideImputToEdit.id="editOutside";
     tdOutside.append(outsideImputToEdit);
     tdOutside.append(labelOutsideImputToEdit);
     tdOutside.className = "form-check-label";
     
     

     tdDate.innerText = " ";
     const dateImputToEdit = document.createElement("input");
     dateImputToEdit.type="date"
     dateImputToEdit.id="editDate";
     tdDate.append(dateImputToEdit);
     tdDate.className = "inputToEdit";

     tdTime.innerText = " ";
     const timeImputToEdit = document.createElement("input");
     timeImputToEdit.type="time"
     timeImputToEdit.id="editTime";
     tdTime.append(timeImputToEdit);
     tdTime.className = "inputToEdit";

     buttonEdit.remove();
     const buttonSave = document.createElement("button");
     buttonSave.classList.add("btn", "btn-success", "buttonSave");
     buttonSave.innerHTML = "save";
     tdActions.append(buttonSave);

     
    buttonSave.addEventListener("click", addNewOrderFn);

  }
  