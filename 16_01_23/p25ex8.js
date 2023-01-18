function init() { //lowest
    alert("The Search of the Least Number. Entering 0 or negative ends the search of the least");
    var next = +prompt("Enter any positive number");
    var previous = next;

    if (next > 0) {
        while (next > 0) {
            if (previous > next) {
                previous = next;
            }
            next = +prompt("Enter any positive number");
            if (previous == 0) {
                previous = next;
            }

        }

        alert(`The least of the numbers entered is ${previous}`)
    } else {
        alert(`wrong entrance`)
    }

}

init();