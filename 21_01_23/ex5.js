
var productsQuantity = +prompt("Please Enter the number of Products");
var productName = 0;
var productPrice = 0;
var totalAmount = 0;
let names = [];
let prices = [];

    for (let i = 1; i<=productsQuantity; i++){
        names.push(prompt(`Enter the NAME of Product ${i}`));
        prices.push(prompt(`Enter the PRICE of Product ${i}`));
     }
     for(let i=0; i<productsQuantity; i++) {
       document.writeln (`<h2>NAME: ${names[i]}. PRICE: ${prices[i]} </h2>`);
          totalAmount = totalAmount + parseInt(prices[i]);
    }

    document.writeln (`<hr /><h2>NUMBER OF PRODUCTS: ${productsQuantity}. <br /> TOTAL AMOUNT: ${totalAmount} </h2>`);


