function init() {
    var number = +prompt("Enter an integer");
    var sum = 0;
    var remainder = 0;

    while (number > 0) {
        remainder = (number % 10);
        number = (number - remainder) / 10;
        sum = sum + remainder;
    }

    alert(`The sum of the signs of the number entered is ${sum}`);
}
init();