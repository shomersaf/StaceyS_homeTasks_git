function pizzaOrder(quantity, size, fish, corn, olives, cheese, adress, price, delimiter, currency) {
    size = prompt("Enter the size of pizza: S (Small), M (Middle), XL (extra large)");
    fish = prompt(`To get the FISH topping - enter "Yes" or "No"`);
    corn = prompt(`To get the CORN topping - enter "Yes" or "No"`);
    olives = prompt(`To get the FISH topping - enter "Yes" or "No"`);
    cheese = prompt(`For extra cheese - enter "Yes" or "No"`);
    quantity = +prompt(`Enter quantity`);
    adress = prompt(`Enter adress`);
    currency = " ILS";
    delimiter = ",";
    switch (size) {
        case "S":
            price = "20" + currency;

        case "M":
            price = "40" + currency;

        case "XL":
            price = "60" + currency;

    }
    alert(`You've ordered pizza. Quantity: ${quantity}. Size: ${size}. Toppings: fish: ${fish}${delimiter} corn: ${corn}${delimiter} olives: ${olives}${delimiter} extra cheese: ${cheese}. Adress: ${adress} The price is ${price}`);

}

pizzaOrder();