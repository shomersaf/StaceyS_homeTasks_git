var notPrimes = [];
var initialPrimes = [1,2,3,5];

function printArray (){
    for(let i = 0; i<notPrimes.length; i++){
        document.write(`${notPrimes[i]}<br />`);
    }
    
}


function primeToArray (){
    var devider = 2;
    var remainder = 0;
    for(let i = 0; i <= notPrimes.length; i++ ){
        var num = +prompt("Enter any number");//1
      
        var stop = num - 1;
        remainder = num % devider;
        while (devider < stop) {//false
            remainder = num % devider;
            if (remainder == 0) {
                alert("Not Prime. Enters the array. Press CONTINUE");
                notPrimes.push(num);
                break;
            } else {
                devider++;
                }
        }


        if(remainder>0||num == devider){
            alert("Prime entered. The programm stops");
            break;
        }
    }
}
primeToArray();
printArray();