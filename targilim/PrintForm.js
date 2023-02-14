function PrintForm(
    firstName,
    lastName,
    age,
    numberOfChildren,   
  ) {
    
    this.firstName = firstName || "not entered";
    this.lastName = lastName || "not entered";
    this.age = +age || "not entered";
    this.numberOfChildren = numberOfChildren || "not entered";
    
  }