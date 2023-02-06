let counter = 1;

function getOrder() {
  let orderEmail = document.getElementById("orderEmail");
  let credit = document.getElementById("credit");
  let numberOfSeats = document.getElementById("numberOfSeats");
  let additionalComments = document.getElementById("additionalComments");
  let outside = document.getElementById("outside");
  let allergens = document.getElementById("allergens");
  const ordersList = document.getElementById("ordersList");
  //const orderHeader = document.getElementById("orderHeader");
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
  orderOutsideLine.innerHTML = `<b>Outside:</b> ${outside.value}`;
  orderDateLine.innerHTML = `<b>Date:</b> ${date.value}`;
  orderTimeLine.innerHTML = `<b>Time:</b> ${time.value}`;
  orderAllergensLine.innerHTML = `<b>Allergens:</b> ${allergens.value }`;
  
  orderEmailLine.className = "orderClass";
  orderCreditLine.className = "orderClass";
  orderSeatsLine.className = "orderClass";
  orderCommentsLine.className = "orderClass";
  orderOutsideLine.className = "orderClass";
  orderDateLine.className = "orderClass";
  orderTimeLine.className = "orderClass";
  orderAllergensLine.className = "orderClass";

  orderHeadline.innerHTML = `<b>Order N#</b>${orderNumber}:`;

  ordersList.append(orderHeadline);
  ordersList.append(orderEmailLine);
  ordersList.append(orderCreditLine);
  ordersList.append(orderSeatsLine);
  ordersList.append(orderCommentsLine);
  ordersList.append(orderOutsideLine);
  ordersList.append(orderDateLine);
  ordersList.append(orderTimeLine);
  ordersList.append(orderAllergensLine);
}


function clearForm() {
    $(this).closest('form')[0].reset(); 
}