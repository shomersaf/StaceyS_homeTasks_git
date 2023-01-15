var firstNum = parseInt(prompt ("Enter the first number"));
var secondNum = parseInt(prompt ("Enter the second number"));
var thirdNum = parseInt(prompt ("Enter the third number"));
var average = 0;
 function getAverage(a,b,c){
    
    var avg =parseInt(((a+b+c)/3));
    return (avg);
 }
average = getAverage(firstNum,secondNum, thirdNum);
 console.log (`the average is ${average}`);