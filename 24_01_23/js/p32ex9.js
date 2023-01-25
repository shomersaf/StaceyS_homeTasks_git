function init (){
    var X = 0;
    var Y = 0;
    var stop = +prompt("Enter the number how many times you wanna X to be entered");
    let paires = [];
    var inXs = [];
    var inYs = [];


    function myPrintArray (myArray){
        for(let i = 0; i<myArray.length; i++){
            document.write(`${myArray[i]}<br />`);
        }    
    }
     
    for (let i = 0; i<stop; i++ ){
        X = +prompt("Enter X");
        Y = X**2 + 5;
        inXs.push(X);
        inYs.push(Y);
        paires.push(`X: ${X}`, `Y: ${Y}`);
    }

    document.write(`<h2>Pairs:</h2>`);
    
    myPrintArray (paires);
    document.write(`The first from Xs: ${inXs[0]}<br />`);
    document.write(`The last from Ys: ${inYs[inYs.length-1]}<br />`);
   

}
init();