var firstNum = +prompt("Enter the first integer number");
var secondNum = +prompt("Enter the second integer number NOT EQUAL to first");

  while (secondNum>firstNum){
    firstNum++;
    console.log(firstNum);
  }

  while (firstNum>secondNum){
    secondNum++;
    console.log(secondNum);
  }

