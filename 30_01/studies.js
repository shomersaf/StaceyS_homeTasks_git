function init() {
  var numberEntered = +prompt("Enter an integer"); 
 
  //factorial
function getFactorial (anyNumber){
    let multiplier = 1;
  for (let i = 1; i <= anyNumber; i++) {
    multiplier *= i;
  }

  alert(`the factorial of ${anyNumber} is ${multiplier}`);
}

getFactorial (numberEntered);
}
init();
