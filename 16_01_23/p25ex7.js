function init() { //highest
    alert("The Search of the Largest Number. Entering 0 or negative ends the search of the largest");
    var next = +prompt("Enter any positive number");
    var previous = next;

    if (next > 0) {
        while (next > 0) {
            if (previous < next) {
                previous = next;
            }
            next = +prompt("Enter any positive number");
            if (previous == 0) {
                previous = next;
            }

        }

        alert(`The largest of the numbers entered is ${previous}`)
    } else {
        alert(`wrong entrance`)
    }

}

init();