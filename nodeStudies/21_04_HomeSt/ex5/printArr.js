//если нам надо экспортировать одну ф-цию
function printArr(arr) {
    for (let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
module.exports = printArr;