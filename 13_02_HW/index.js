const DOM = {
  emailInput: null,
  numberOfSeats: null,
  allergens: null,
  credit: null,
  comments: null,
  outside: null,
  date: null,
  time: null,
  ordersTableBody: null,
};

//let orders = [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function init() {
  DOM.emailInput = document.querySelector("#orderEmail");
  DOM.numberOfSeats = document.querySelector("#numberOfSeats");
  DOM.allergens = document.querySelector("#allergens");
  DOM.credit = document.querySelector("#credit");
  DOM.comments = document.querySelector("#additionalComments");
  DOM.outside = document.querySelector("#outside");
  DOM.date = document.querySelector("#date");
  DOM.time = document.querySelector("#time");
  DOM.ordersTableBody = document.querySelector("#ordersTable tbody");
  //   making onclick="addNNewOrder()" from JS:
  //   const addNewOrderButton = document.getElementById("addNewOrderButton");
  const addNewOrderButton = document.querySelector("#addNewOrderButton");
  addNewOrderButton.addEventListener("click", addNewOrderFn);

  const showAllOrdersButton = document.querySelector("#showAllOrders");
  showAllOrdersButton.addEventListener("click", showAllOrdersFn);

  const clearTableButton = document.querySelector("#clearTable");
  clearTableButton.addEventListener("click", clearForm);

  const clearAllOrdersButton = document.querySelector("#clearAllOrders");
  clearAllOrdersButton.addEventListener("click", clearTableFn);
  
  const deleteAllOrdersButton = document.querySelector("#deleteAllOrders");
  deleteAllOrdersButton.addEventListener("click", deleteAllOrdersFn);

  function deleteAllOrdersFn (event){
    localStorage.clear();
    clearTableFn(); 
    orders=[];
  }


  function showAllOrdersFn (event){
  
   let orders = JSON.parse(localStorage.getItem('orders'));
    draw(orders);  
  }

  
  

  function addNewOrderFn(event) {
    // console.log(event); // event
    // console.log(this); // button!
    if(DOM.outside.checked == true){
      DOM.outside.value = "Outside";
    
    }else{
      DOM.outside.value = "Inside";
    
    }
    orders.push(
      new Order(
        DOM.emailInput.value,
        DOM.numberOfSeats.value,
        DOM.allergens.value,
        DOM.credit.value,
        DOM.comments.value,
        DOM.outside.value,
        DOM.date.value,
        DOM.time.value
      )
    );
    localStorage.setItem("orders", JSON.stringify(orders));
    orders = JSON.parse(localStorage.getItem('orders'));
    draw(orders);
    
    clearForm();
   
  }
}
function clearForm(event) {
  DOM.emailInput.value = "";
  DOM.numberOfSeats.value = "";
  DOM.allergens.value = "";
  DOM.credit.value = "";
  DOM.comments.value = "";
  DOM.outside.value = "";
  DOM.outside.checked = false;
  DOM.date.value = "";
  DOM.time.value = ""; 
 
 
}


function clearTableFn() {
  DOM.ordersTableBody.innerHTML = "";

}
function draw(ordersArray) {
  if (Array.isArray(ordersArray) === false) return;
  // document.createElement!
  // DOM.ordersTableBody.append
  // DOM.ordersTableBody > tr > td,td,td,td
  clearTableFn();
  for (let index = 0; index < ordersArray.length; index++) {
    const currentOrder = ordersArray[index];
    // create row
    const tableRow = document.createElement("tr");
    // create orderNumber column
    const tdOrderId = document.createElement("td");
    tdOrderId.innerText = currentOrder.orderNumber;
    // create email column
    const tdEmail = document.createElement("td");
    tdEmail.innerText = currentOrder.email;

    // create numberOfSeats column
    const tdNumberOfSeats = getNumberOfSeatsTD(currentOrder.numberOfSeats);
    // create allergens column
    const tdAllergens = document.createElement("td");
    tdAllergens.innerText = currentOrder.allergens + " ";
    const allergenIcon = document.createElement("img");

    switch (currentOrder.allergens) {
      case "Eggs":
        allergenIcon.src = "img/egg.svg";
        allergenIcon.width = 20;
        allergenIcon.height = 20;
        allergenIcon.className = "allergenIcon";
        break;
        break;
      case "Gluten":
        allergenIcon.src = "img/gluten.svg";
        allergenIcon.width = 20;
        allergenIcon.height = 20;
        allergenIcon.className = "allergenIcon";
        break;
      case "Milk":
        allergenIcon.src = "img/milk.svg";
        allergenIcon.width = 20;
        allergenIcon.height = 20;
        allergenIcon.className = "allergenIcon";
        break;
      case "Nuts":
        allergenIcon.src = "img/peanuts.svg";
        allergenIcon.width = 20;
        allergenIcon.height = 20;
        allergenIcon.className = "allergenIcon";
        break;
        break;
      case "Сashew":
        allergenIcon.src = "img/cashew.svg";
        allergenIcon.width = 20;
        allergenIcon.height = 20;
        allergenIcon.className = "allergenIcon";
        break;
    }

    tdAllergens.append(allergenIcon);
    // create credit column
    const tdCredit = document.createElement("td");
    tdCredit.innerText = currentOrder.credit;
    // create comments column
    const tdComments = document.createElement("td");
    tdComments.innerText = currentOrder.comments;
    // create outside column
    const tdOutside = document.createElement("td");
    //checking up the placement and entering data
    
    tdOutside.innerText = currentOrder.outside;
    
    
    

    // create date column
    const tdDate = document.createElement("td");
    tdDate.innerText = currentOrder.date;
    // create time column
    const tdTime = document.createElement("td");
    tdTime.innerText = currentOrder.time;
    // create Button column
    const tdActions = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger");
    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("btn", "btn-success", "editButton");
    buttonDelete.innerText = "X";
    buttonEdit.innerHTML = `<i class="bi bi-pencil-square"></i>`;
    tdActions.append(buttonDelete);
    tdActions.append(buttonEdit);

    buttonEdit.addEventListener("click", function () {
      editOrder(
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
      );
    });

    buttonDelete.addEventListener("click", function () {
    
      
      let orders = JSON.parse(localStorage.getItem('orders'));
      
      orders.splice(index, 1);

      localStorage.setItem('orders', JSON.stringify(orders));
      //orders = JSON.parse(localStorage.getItem('orders'));
      
      draw(orders);

    });

    tableRow.append(
      tdOrderId,
      tdEmail,
      tdNumberOfSeats,
      tdAllergens,
      tdCredit,
      tdComments,
      tdOutside,
      tdDate,
      tdTime,
      tdActions
    ); // tr>td,td,td,td
    DOM.ordersTableBody.append(tableRow); //table > tbody > tr
  }
  function getNumberOfSeatsTD(numberOfSeats) {
    if (typeof numberOfSeats !== "number") return;
    const numberOfSeatsTd = document.createElement("td");
    for (let index = 0; index < numberOfSeats; index++) {
      const person = document.createElement("i");
      person.className = "bi-person";
      numberOfSeatsTd.append(person);
    }
    numberOfSeatsTd.append(`(${numberOfSeats})`);
    return numberOfSeatsTd;
  }

}

init();
