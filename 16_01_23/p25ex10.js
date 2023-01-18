function init() {
var number = +prompt("Enter an integer");
while(number>10){
number=(number-number%10)/10;
}
alert(`The leftest sign is ${number}`);
}

init();