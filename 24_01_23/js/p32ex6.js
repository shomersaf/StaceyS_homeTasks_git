function exponentiation (){
var N = +prompt("Enter an integer for N");//3
var sumOfExponents = 0;
const base = 2;

for(let i = 0; i<=N; i++){
    sumOfExponents += base**i;//1+
}
alert(sumOfExponents);
}
exponentiation();