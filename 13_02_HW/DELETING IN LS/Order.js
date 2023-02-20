function Order(
    email,
    numberOfSeats,
    allergens = [],
    credit,
    comments,
    outside,
    date,
    time
  ) {
    this.orderNumber = `order_${Math.ceil(Math.random() * 99999999999)}`;
    this.email = email || "Enter your email";
    this.numberOfSeats = +numberOfSeats || 1;
    this.allergens = allergens || "No allergens";
    this.credit = credit || "Enter the credit";
    this.comments = comments || "No Comments";
    this.outside = outside;
    this.date = date || "Enter the date";
    this.time = time || "Enter the time";
    
  }
  
  console.log("Order is loaded!");