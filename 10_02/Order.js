function Order(
    email,
    numberOfSeats,
    allergens = [],
    credit,
    comments = "No Comments",
    outside,
    date,
    time
  ) {
    this.orderNumber = `order_${Math.ceil(Math.random() * 99999999999)}`;
    this.email = email;
    this.numberOfSeats = +numberOfSeats;
    this.allergens = allergens;
    this.credit = credit;
    this.comments = comments;
    this.outside = outside;
    this.date = date;
    this.time = time;
    
  }
  
  console.log("Order is loaded!");