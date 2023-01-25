let first = +prompt("Enter the first number");
let second = +prompt("Enter the second number");
let someNumbers = [];

function myPrintArray (myArray){
    for(let i = 0; i<myArray.length; i++){
        document.write(`${myArray[i]}<br />`);
    }
    
}

for (let number = first; number <= second; number++){
  someNumbers.push(number);
} 
myPrintArray (someNumbers);