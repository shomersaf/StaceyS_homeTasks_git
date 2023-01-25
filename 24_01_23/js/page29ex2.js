
function init(x,y) {
let a = x;
let b = y;
let p = 1;
var m = 0;
var t = 0;

while (b>0) {
t = a;
while (t>0){
m = m + p;
t = t - 1;
}
p = m;
b = b - 1;
}
alert (p);

}
init (3,4);
//init (4,3);