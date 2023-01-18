function init() {
    var number = 0;
    var stop = 0;
    var counter = 0;
    var avg = 0;
    var sum = 0;

    while (stop != "yes") {
        number = +prompt("Enter the positive integer number ending in 0");

        stop = prompt("To get the average of the numbers enter 'yes'. To add the next number - press CONTINUE");
        sum = sum + number;
        if (number != 0) {
            counter++;
        }


    }
    avg = sum / counter;
    alert(`The average of the numbers entered is ${avg}`);

}







init();