const DOM = {
  content: document.querySelector("#content"),
  controllers: document.querySelector("#controllers"),
};
const DEFAULT_NUMBER = 5;

function init() {
  const limitsOptionsArray = [
    { value: 5, text: 5 },
    { value: 10, text: 10},
    { value: 15, text: 15 },
    { value: 20, text: 20 },
  ];

  const skipOptionsArray = [
    { value: 0, text: 0 },
    { value: 5, text: 5 },
    { value: 10, text: 10},
    { value: 15, text: 15 },
    { value: 20, text: 20 },
  ];

  const currentState = {
    limit: DEFAULT_NUMBER,
    skip: 0
  };
 

  const selectOption = getSelect(limitsOptionsArray, (limit) => {
    currentState.limit = limit;
    getProductsHandler(currentState.limit, currentState.skip);
  });


  const selectOption2 = getSelect(skipOptionsArray, (skip) => {
    currentState.skip = skip;
    getProductsHandler(currentState.limit, currentState.skip);
  });

  const skipSpan = document.createElement("span");
  skipSpan.innerText = " Skip: ";

  DOM.controllers.append(selectOption, skipSpan, selectOption2);

  let defaultValue = limitsOptionsArray.find((item) => item.selected);
  let defaultValue2 = skipOptionsArray.find((item) => item.selected);

  getProductsHandler(defaultValue?.value, defaultValue2?.value);
 
}
init();
async function getProductsHandler(limit, skip) {
  try {
    showLoader();
    const result = await getProducts(limit, skip);
    const products = result.products;
    if (!Array.isArray(products)) throw new Error("Api error");
    draw(products);
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



function draw(result) {
  DOM.content.innerHTML = "";
  if (Array.isArray(result)) {
    for (let index = 0; index < result.length; index++) {
      drawProduct(result[index]);
    }
  } else {
    drawProduct(result);
  }
}
function drawProduct(product) {
  const div = document.createElement("div");
  const img = getImg(product?.thumbnail);
  const h2 = document.createElement("h2");
  h2.innerText = `${product?.price} $`;
  const h1 = document.createElement("h1");
  h1.innerText = product.title;

  div.classList.add("cardi");
  div.append(h1, h2, img);
  DOM.content.append(div);
}

async function getProducts(limit = DEFAULT_NUMBER, skip = 0) {
  const result = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  const json = await result.json();
  return json;
}
{
  /* <div class="spinner-border" role="status"> */
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