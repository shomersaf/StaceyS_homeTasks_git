const DOM = {
    emailInput: null,
    numberOfSeats: null,
    ordersTableBody: null,
    filter: null,
  };
  
  let orders = [];
  
  function init() {
    DOM.emailInput = document.querySelector("#orderEmail");
    DOM.numberOfSeats = document.querySelector("#numberOfSeats");
    DOM.ordersTableBody = document.querySelector("#ordersTable tbody");
  
    DOM.filter = document.querySelector("#filter");
  
    //   making onclick="addNNewOrder()" from JS:
    //   const addNewOrderButton = document.getElementById("addNewOrderButton");
    const addNewOrderButton = document.querySelector("#addNewOrderButton");
    addNewOrderButton.addEventListener("click", addNewOrderFn);
  
    const clearTableButton = document.querySelector("#clearTable");
    clearTableButton.addEventListener("click", clearTableFn);
  
    DOM.filter.addEventListener("input", function (event) {
      filterOrdersFn(event.target.value);
    });
    function addNewOrderFn(event) {
      // console.log(event); // event
      // console.log(this); // button!
      orders.push(new Order(DOM.emailInput.value, DOM.numberOfSeats.value));
      draw(orders);
      clearForm();
    }
  }
  function filterOrdersFn(filterValue) {
    if (!filterValue) return draw(orders);
    let filteredOrders = [];
    for (let index = 0; index < orders.length; index++) {
      if (orders[index].email.includes(filterValue)) {
        filteredOrders.push(orders[index]);
      }
    }
    draw(filteredOrders);
  }
  function clearForm() {
    DOM.emailInput.value = "";
    DOM.numberOfSeats.value = "";
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
      // create Button column
      const tdActions = document.createElement("td");
      const buttonDelete = document.createElement("button");
      buttonDelete.classList.add("btn", "btn-danger");
      buttonDelete.innerText = "X";
      tdActions.append(buttonDelete);
      buttonDelete.addEventListener("click", function () {
        const idToDelete = currentOrder.orderNumber;
        for (let index = 0; index < orders.length; index++) {
          if (orders[index].orderNumber === idToDelete) {
            orders.splice(index, 1);
          }
        }
        filterOrdersFn(DOM.filter.value);
      });
  
      tableRow.append(tdOrderId, tdEmail, tdNumberOfSeats, tdActions); // tr>td,td,td,td
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