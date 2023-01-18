var index = 0;
var largestNumber = 0;
var largestNumberIndex = 0;
alert("The numbers you enter will get personal index from 1 to 100");
var number = 0;
while (index < 100) {
    index++;
    number = +prompt(`Enter an integer value for index ${index}`);
    document.write(`index: ${index} - number: ${number} <br />`);
    if (number > largestNumber) {
        largestNumber = number;
        largestNumberIndex = index
         
    }
}
document.write(`the INDEX of the largest number (${largestNumber}) is ${largestNumberIndex}! `);