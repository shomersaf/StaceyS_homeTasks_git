const DOM = {
    content: document.querySelector("#content"),
    button: document.querySelector("#button"),
  };

async function getProduct() {
    let result = await fetch(`https://dummyjson.com/products`);
    const json = await result.json();
    let oneProduct = json.products[0];
   // console.log(json);
    //console.log(oneProduct);
    return json;
  }
  function init(){
    DOM.button.addEventListener("click", handleProducts)
  }

  async function handleProducts() {
    
    try {
      showLoader();
      const result = await getProduct();
      for (i=0; i<result.products.length; i++){
                let divProduct = document.createElement("div");
                divProduct.className = "divProduct";
                let divProductDesc = document.createElement("div");
                divProductDesc.className = "divProductDesc";
                let productImgDiv = document.createElement("div"); 
                productImgDiv.className = "productImgDiv";
                let productImg = document.createElement("img"); 
                productImg.className = "productImg";
                productImg.src = result.products[i].thumbnail;   
      let divId = document.createElement("p"); 
      divId.className = "divId";
      let divTitle = document.createElement("p"); 
      divTitle.className = "divTitle";
      let divDesc = document.createElement("p"); 
      divDesc.className = "divDesc";
      let divPrice = document.createElement("p"); 
      divPrice.className = "divPrice";
      let divDiscount = document.createElement("p"); 
      divDiscount.className = "divDiscount";
      let divRating = document.createElement("p"); 
      divRating.className = "divRating";
      let divStock = document.createElement("p");
      divStock.className = "divStock"; 
      let divBrand = document.createElement("p"); 
      divBrand.className = "divBrand"; 
      let divCategory = document.createElement("p"); 
      divCategory.className = "divCategory"; 
      divId.innerHTML = `<span>id:</span>${result.products[i].id}`;
      divId.className = "divId"; 
      divTitle.innerHTML = `<span>title:</span>${result.products[i].title}`;
      divTitle.className = "divTitle"; 
      divDesc.innerHTML = `<span>description:</span>${result.products[i].description}`;
      divDesc.className = "divDesc"; 
      divPrice.innerHTML = `<span>price:</span>${result.products[i].price}`;
      divPrice.className = "divPrice"; 
      divDiscount.innerHTML = `<span>discount:</span>${result.products[i].discountPercentage}`;
      divDiscount.className = "divDiscount"; 
      divRating.innerHTML = `<span>rating:</span>${result.products[i].rating}`;
      divRating.className = "divRating"; 
      divStock.innerHTML = `<span>stock:</span>${result.products[i].stock}`;
      divStock.className = "divStock"; 
      divBrand.innerHTML = `<span>brand:</span>${result.products[i].brand}`;
      divBrand.className = "divBrand"; 
      divCategory.innerHTML = `<span>Category:</span>${result.products[i].category}`;
      divCategory.className = "divCategory"; 
      divProductDesc.append(divId, divTitle, divDesc, divPrice, divDiscount, divRating, divStock, divBrand, divCategory);
      productImgDiv.append(productImg);
      divProduct.append(productImgDiv, divProductDesc);
      DOM.content.append(divProduct);
      }
      
      if (!result) throw new Error("Api error");
      
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
  init();