var N = 0;
var devider = +prompt("Enter the devider for summing all the numbers deviding in it");
var sum = 0;
var stopper = +prompt("Enter the quantity of numbers you will enter");

for(let i = 1; i<=stopper; i++){
    var N = prompt(`Enter an integer number ${i} from ${stopper}`);
  if(i % devider == 0){

    sum = sum + i;
  }
}
alert(`the sum of number entered which devides in the devider you entered is ${sum}`);