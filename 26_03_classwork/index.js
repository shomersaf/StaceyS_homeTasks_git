const DOM = {
  content: document.querySelector("#content"),
  controllers: document.querySelector("#controllers"),
  createcarButton: document.querySelector("#createcar"),
};


function init() {

  DOM.createcarButton.addEventListener("click", function () {
    const formCreatecar = document.querySelector("#createcarForm");
    const newcar = {
      carLP: formCreatecar["carLP"].value,
      carType: formCreatecar["carType"].value,
      carColor: formCreatecar["carColor"].value,
      carPrice: formCreatecar["carPrice"].value,
    };
    addNewcarHandler(newcar);
  });
}
init();
async function getcarsHandler(limit, skip) {
  try {
    showLoader();
    const result = await getcars(limit, skip);
    const cars = result.cars;
    if (!Array.isArray(cars)) throw new Error("Api error");
    currentcarsLength = cars.length;
    draw(cars);
  } catch (error) {
    swal({
      title: "Something went wrong!",
      text: "Contact admin",
      icon: "error",
    });
  } finally {
    removeLoader();
  }
}

async function addNewcarHandler(car) {
  try {
    const result = await addcar(car);
    swal({
      title: "car created!",
      text: result.success,
      icon: "success",
    });
  } catch (error) {
    swal({
      title: "Something went wrong!",
      text: "Contact admin",
      icon: "error",
    });
  } finally {
  }
}



async function addcar(car) {
  const result = await fetch(`https://reqbin.com/echo/post/json`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  const json = await result.json();
  return json;
}


function showLoader() {
  DOM.content.innerHTML = "";
  const loader = document.createElement("div");
  loader.id = "searchLoader";
  loader.classList.add("spinner-border");
  DOM.content.append(loader);
}

function removeLoader() {
  const loader = document.querySelector("#searchLoader");
  if (loader) {
    loader.remove();
  }
}

function getButton(innerText) {
  const button = document.createElement("button");
  button.innerText = innerText;
  button.classList.add("btn", "btn-secondary");
  return button;
}
