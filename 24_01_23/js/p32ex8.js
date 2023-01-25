function init (){
    var N = prompt("Enter the data for N");//5
var sum = 0;
result = 0;

function sumOfDeviding(devider){
    for(let i = 1; i<N; i++){
        if(i % devider == 0){
          sum = sum + i;
        }
      }
      return sum;
}
result = sumOfDeviding(4) + sumOfDeviding(7);
 alert(result);
}
init();