function init (){
var number = +prompt("Enter an integer");

var counter = 0;

while (number/10>0){
  
    number=(number -number%10)/10; 
    counter++; 
}

alert (`The number of the signs of ${number} is ${counter}`)
}
init ();