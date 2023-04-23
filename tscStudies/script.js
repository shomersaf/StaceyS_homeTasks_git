console.log("Where am I?");
var a = 1;
var b = "omg";
var c = false;
var d = null;
var e = undefined;
//let f:object ={}
var f = { text: "Hello" };
//------------------
//data type "any" - is a standard default type of JS
var g;
g = 1;
g = "hello";
g = null;
g = true;
g = undefined;
g = {};
g = function () { };
//or:
var g1;
function func(x, y) {
    return x + y;
}
var func2 = function (x, y) { return x + y; };
//data type below is so called signature of function
var func3;
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
        return "".concat(x, " + ").concat(y, " ");
    }
}
console.log(func6(1, 2));
console.log(func6('Answer is', 2));
console.log("OOOOOHHHHH");
