function getValueType (someValue, someValueType) {
    someValue = prompt("Enter any type value");
    someValueType = typeof someValue;
    alert(`You've just entered the value of ${someValueType} type and it always will be string if it's entered from prompt and if I won't change it to another type. Let's go`);
    someValue = +prompt("Let us try to change the type for number. Enter any number");
    someValueType = typeof someValue;
    alert(`You've just entered the value of ${someValueType} type`);

}
getValueType();