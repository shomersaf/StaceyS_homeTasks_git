function init (){
    var tables = parseInt(prompt("Enter the tables number"));
    var guests = parseInt(prompt("Enter the guests number"));
    var capacity = 0;

    capacity = tables*guests;
    alert(`The capacity of restaurant is ${capacity}`);
}
init();