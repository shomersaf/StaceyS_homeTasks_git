function init (){
    const numbers = [1,2,55,4,6,7787,3,4,5,2,33,4];
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
        
      }
    var result = getMaxOfArray(numbers);
    document.write (`<hr />`);

    document.write (`The largest number in the array ${numbers} is ${result}`);

}
init();