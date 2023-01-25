function init(){
var i = 0;
    for(i=15; i>=-10; i=i-2){
        document.write(`Inner output ${i}<br />`);
    }
    document.write(`Outter output ${i}<br />`);
    
}
init();