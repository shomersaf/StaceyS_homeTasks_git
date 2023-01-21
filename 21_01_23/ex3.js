var firstName = prompt("Enter the first name");
var lastName = prompt("Enter the last name");
var fullName = 0;
var delimiter = " ";

function fullNameFunc() {
  fullName = firstName + delimiter + lastName;
  return fullName;
}

fullNameFunc();

alert(`The full name is ${fullName}`);
