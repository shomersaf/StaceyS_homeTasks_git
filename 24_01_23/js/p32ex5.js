function init (){
    var sum = 0;
    numbersEntered = [];
    var stopper = 99;
    num = 0;

    alert(`The ${stopper} numbers will be entered by you till we let you go! Beware!`)
    for (let i = 1; i<=stopper; i++ ){
   
        num = +prompt(`Enter an integer number ${i} `);
        if(i % 3 == 0){
            sum = sum + num;
        }
    }
    alert (`the sum of every third is ${sum}`)
   
}


init();

