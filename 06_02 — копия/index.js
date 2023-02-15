let counter = 1;
function moveThisShit(){
  const worldOrder = new GetOrder();
  console.log(worldOrder);
}
function GetOrder(orderEmail,credit,numberOfSeats,additionalComments,outside,allergens,orderNumber,orderBlock,ordersList,) {
  //getting data
  this.orderEmail = document.getElementById("orderEmail");
  this.credit = document.getElementById("credit");
  this.numberOfSeats = document.getElementById("numberOfSeats");
  this.additionalComments = document.getElementById("additionalComments");
  this.outside = document.getElementById("outside");
  this.allergens = document.querySelectorAll(".allergens");

  //getting order number
  this. orderNumber = `${counter++}`;

  //creating order block - ul
  this.orderBlock = document.querySelector(".orderBlock");
  this.ordersList = document.createElement("ul");
  this.ordersList.className = "ordersList";
  this.orderBlock.append(ordersList);

  //creating order lines elements - li
  this.orderHeadline = document.createElement("h3");
  this.orderEmailLine = document.createElement("li");
  this.orderCreditLine = document.createElement("li");
  this.orderSeatsLine = document.createElement("li");
  this.orderCommentsLine = document.createElement("li");
  this.orderOutsideLine = document.createElement("li");
  this.orderDateLine = document.createElement("li");
  this.orderTimeLine = document.createElement("li");
  this.orderAllergensLine = document.createElement("li");

  //entering data into order lines
  this.orderHeadline.innerHTML = `<b>Order N#</b>${orderNumber}:`;
  this.orderEmailLine.innerHTML = `<b>Email:</b> ${orderEmail}`;
  this.orderCreditLine.innerHTML = `<b>Credit:</b> ${credit}`;
 this.orderSeatsLine.innerHTML = `<b>Number of Seats:</b> ${numberOfSeats}`;
  this.orderCommentsLine.innerHTML = `<b>Comments:</b> ${additionalComments}`;
  //checking up the placement and entering data
  if (outside == true) {
    this.orderOutsideLine.innerHTML = `<b>Place:</b> Outside`;
  } else {
    this.orderOutsideLine.innerHTML = `<b>Place:</b> Inside`;
  }
  //continueing to enter data into order lines
  this.orderDateLine.innerHTML = `<b>Date:</b> ${date.value}`;
  this.orderTimeLine.innerHTML = `<b>Time:</b> ${time.value}`;
  //checking up if an allergen selected and entering data
  this. allergensString = " ";
  for (let i = 0; i < allergens.length; i++) {
    if (allergens[i].selected) {
      allergensString = allergensString + " " + allergens[i].value + ",";
    }
  }
  allergensString = allergensString.slice(0, -1);
  allergensString = allergensString.concat(".");
  orderAllergensLine.innerHTML = `<b>Allergens:</b> ${allergensString}`;

  //assigning the class to the order lines
  orderEmailLine.className = "orderClass";
  orderCreditLine.className = "orderClass";
  orderSeatsLine.className = "orderClass";
  orderCommentsLine.className = "orderClass";
  orderOutsideLine.className = "orderClass";
  orderDateLine.className = "orderClass";
  orderTimeLine.className = "orderClass";
  orderAllergensLine.className = "orderClass";

  //creating removal Button
  this.removeButton = document.createElement("img");
  removeButton.src = "xmark-solid.svg";
  removeButton.height = 50;
  removeButton.width = 50;
  removeButton.onclick = function () {
    this.parentElement.remove();
  };

  //publishing the New World Order)))
  ordersList.append(
    orderHeadline,
    orderEmailLine,
    orderCreditLine,
    orderSeatsLine,
    orderCommentsLine,
    orderDateLine,
    orderTimeLine,
    orderAllergensLine,
    orderOutsideLine,
    removeButton
  );


}

//cleaning the form data
function clearForm() {
  $(this).closest("form")[0].reset();
}
