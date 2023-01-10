let firstNum = +prompt("Enter the first number");
let secondNum = +prompt("Enter the second number");
if(firstNum>secondNum) {
    alert (`the smaller number is ${secondNum}`);
    alert (`the larger number is ${firstNum}`);
    alert (`${firstNum} > ${secondNum}`);
}
else if (secondNum>firstNum) {
    alert (`the smaller number is ${firstNum}`);
    alert (`the larger number is ${secondNum}`);
    alert (`${secondNum} > ${firstNum}`);
}
else{
    alert ("The numbers entered are equal");
}
