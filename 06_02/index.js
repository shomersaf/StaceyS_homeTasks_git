let counter = 1;

function getOrder() {
  //getting data
  let orderEmail = document.getElementById("orderEmail");
  let credit = document.getElementById("credit");
  let numberOfSeats = document.getElementById("numberOfSeats");
  let additionalComments = document.getElementById("additionalComments");
  let outside = document.getElementById("outside");
  let allergens = document.querySelectorAll(".allergens");

  //getting order number
  let orderNumber = `${counter++}`;

  //creating order block - ul
  const orderBlock = document.querySelector(".orderBlock");
  let ordersList = document.createElement("ul");
  ordersList.className = "ordersList";
  orderBlock.append(ordersList);

  //creating order lines elements - li
  let orderHeadline = document.createElement("h4");
  let orderEmailLine = document.createElement("li");
  let orderCreditLine = document.createElement("li");
  let orderSeatsLine = document.createElement("li");
  let orderCommentsLine = document.createElement("li");
  let orderOutsideLine = document.createElement("li");
  let orderDateLine = document.createElement("li");
  let orderTimeLine = document.createElement("li");
  let orderAllergensLine = document.createElement("li");

  //entering data into order lines
  orderHeadline.innerHTML = `<b>Order N#</b>${orderNumber}:`;
  orderEmailLine.innerHTML = `<b>Email:</b> ${orderEmail.value}`;
  orderCreditLine.innerHTML = `<b>Credit:</b> ${credit.value}`;
  orderSeatsLine.innerHTML = `<b>Number of Seats:</b> ${numberOfSeats.value}`;
  orderCommentsLine.innerHTML = `<b>Comments:</b> ${additionalComments.value}`;
  //checking up the placement and entering data
  if (outside.checked == true) {
    orderOutsideLine.innerHTML = `<b>Place:</b> Outside`;
  } else {
    orderOutsideLine.innerHTML = `<b>Place:</b> Inside`;
  }
  //continueing to enter data into order lines
  orderDateLine.innerHTML = `<b>Date:</b> ${date.value}`;
  orderTimeLine.innerHTML = `<b>Time:</b> ${time.value}`;
  //checking up if an allergen selected and entering data
  let allergensString = " ";
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
  const removeButton = document.createElement("img");
  removeButton.src = "xmark-solid.svg";
  removeButton.height = 40;
  removeButton.width = 40;
  removeButton.className = "removeButton";
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
