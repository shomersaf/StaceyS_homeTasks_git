let firstNumber = +prompt("Enter the first integer number");
let secondNumber = +prompt("Enter the second integer number");
if(firstNumber != secondNumber) {
    if (firstNumber % secondNumber == 0) {
        alert ("the " + firstNumber +
        " IS remainderless devisible by " + secondNumber);
    }
    else {
        alert ("the " + firstNumber +
        " IS NOT remainderless devisible by "
         + secondNumber);
    }
    if (secondNumber % firstNumber == 0){
        alert ("the " + secondNumber +
        " IS remainderless devisible by "
         + firstNumber);
    }
    else {
        alert(secondNumber +
        " IS NOT remainderless devisible by "
         + firstNumber);
    }
}
else {
    alert("The numbers ARE EQUAL");
}
