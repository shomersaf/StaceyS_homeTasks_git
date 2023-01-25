
function myPrintArray (myArray){
    for(let i = 0; i<myArray.length; i++){
        document.write(`${myArray[i]}<br />`);
    }
    
}
function twoGroups (){
var N = +prompt("Enter an integer");
var firstGroup = [];
var secondGroup = [];


for(let i = 1; i<N; i++){
firstGroup.push(i);
secondGroup.push(i*2);
}
document.write(`<h2>The first group:</h2>`);
myPrintArray(firstGroup);
document.write(`<h2>The second group:</h2>`);
myPrintArray(secondGroup);
}

twoGroups ();
