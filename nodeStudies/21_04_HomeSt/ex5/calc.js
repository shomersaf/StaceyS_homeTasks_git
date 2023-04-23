//если нам надо экспортировать несколько ф-ций
function sum (a,b){
    return a+b
}
function sub (a,b){
    return a-b
}
exports.func1 = sum;
exports.func2 = sub;

