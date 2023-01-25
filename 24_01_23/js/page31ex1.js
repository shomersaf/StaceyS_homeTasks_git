function init(){
    let c = -b;
    var b = 32
    for (let a = 0; a > 1; c++){
    c = parseInt(c/2);
    b = b - 8;
    }
    
    console.log (b);
}

init();