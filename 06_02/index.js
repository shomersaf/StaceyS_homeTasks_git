let counter = 1;

function getOrder() {
  let orderEmail = document.getElementById("orderEmail");
  let credit = document.getElementById("credit");
  let numberOfSeats = document.getElementById("numberOfSeats");
  let additionalComments = document.getElementById("additionalComments");
  let outside = document.getElementById("outside");
  let allergens = document.querySelectorAll(".allergens")
 

  const orderBlock = document.querySelector(".orderBlock");
  let ordersList = document.createElement("ul");
  ordersList.className = "ordersList";
  orderBlock.append(ordersList);
  
  let orderNumber = `${counter++}`;

  let orderHeadline = document.createElement("h3");

  let orderEmailLine = document.createElement("li");
  let orderCreditLine = document.createElement("li");
  let orderSeatsLine = document.createElement("li");
  let orderCommentsLine = document.createElement("li");
  let orderOutsideLine = document.createElement("li");
  let orderDateLine = document.createElement("li");
  let orderTimeLine = document.createElement("li");
  let orderAllergensLine = document.createElement("li");
  
  orderEmailLine.innerHTML = `<b>Email:</b> ${orderEmail.value}`;
  orderCreditLine.innerHTML = `<b>Credit:</b> ${credit.value}`;
  orderSeatsLine.innerHTML = `<b>Number of Seats:</b> ${numberOfSeats.value}`;
  orderCommentsLine.innerHTML = `<b>Comments:</b> ${additionalComments.value}`;
  
  if(outside.checked==true){
    orderOutsideLine.innerHTML = `<b>Place:</b> Outside`;
  } else {
    orderOutsideLine.innerHTML = `<b>Place:</b> Inside`;
  }

  orderDateLine.innerHTML = `<b>Date:</b> ${date.value}`;
  orderTimeLine.innerHTML = `<b>Time:</b> ${time.value}`;
 
 let allergensString = " ";
   for (let i=0; i<allergens.length; i++){
    if(allergens[i].selected){
      allergensString = allergensString + " " + allergens[i].value +",";
    }
   }
  
  allergensString = allergensString.slice(0, -1);
  allergensString = allergensString.concat(".");
   orderAllergensLine.innerHTML = `<b>Allergens:</b> ${allergensString}`
  
  orderEmailLine.className = "orderClass";
  orderCreditLine.className = "orderClass";
  orderSeatsLine.className = "orderClass";
  orderCommentsLine.className = "orderClass";
  orderOutsideLine.className = "orderClass";
  orderDateLine.className = "orderClass";
  orderTimeLine.className = "orderClass";
  orderAllergensLine.className = "orderClass";

  orderHeadline.innerHTML = `<b>Order N#</b>${orderNumber}:`;


  const removeButton = document.createElement("img");
  removeButton.src =
    "xmark-solid.svg";
    removeButton.height = 50;
    removeButton.width = 50;
    removeButton.onclick = function () {
      this.parentElement.remove(); 
      //document.getElementsByClassName("orderClass").remove();
    };


  ordersList.append(orderHeadline);
  ordersList.append(orderEmailLine);
  ordersList.append(orderCreditLine);
  ordersList.append(orderSeatsLine);
  ordersList.append(orderCommentsLine);
  ordersList.append(orderDateLine);
  ordersList.append(orderTimeLine);
  ordersList.append(orderAllergensLine);
  ordersList.append(orderOutsideLine);
  ordersList.append(removeButton);
  
  
}


function clearForm() {
    $(this).closest('form')[0].reset(); 
}