var N = prompt("Enter the data for N");//5
var sum = 0;

for(let i = 1; i<N; i++){
  if(i % 3 == 0){
    sum = sum + i;
  }
}
alert(sum);