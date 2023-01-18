var max = +prompt ("Enter the natural number for 'max' variable");
var den = +prompt ("Enter the 'den' number");
var number = den;
counter = 0;
while(number<=max){
    if(number%den==0){
     document.write(`${number}<br />`);
       number=number+den; 
    }
}