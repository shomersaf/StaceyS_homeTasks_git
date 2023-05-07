"use strict";
console.log("Where am I?");
let a = 1;
let b = "omg";
let c = false;
let d = null;
let e = undefined;
//let f:object ={}
let f = { text: "Hello" };
//------------------
//data type "any" - is a standard default type of JS
let g;
g = 1;
g = "hello";
g = null;
g = true;
g = undefined;
g = {};
g = function () { };
//or:
let g1;
function func(x, y) {
    return x + y;
}
let func2 = (x, y) => x + y;
//data type below is so called signature of function
let func3;
//here is how we can use this dada type:
func3 = function (x, y) {
    return x + y;
};
//data type void means we don't use command return
function func4(x, y) {
    console.log(x + y);
}
//this dada type means that this fn never ends
function func5(abc) {
    throw new Error;
}
function func6(x, y) {
    if (typeof x === 'number') {
        return x + y;
    }
    else {
        return `${x} + ${y} `;
    }
}
console.log(func6(1, 2));
console.log(func6('Answer is', 2));
console.log("OOOOOHHHHH");
//# sourceMappingURL=script.js.map