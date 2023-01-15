var weekBudget = +prompt("Enter your weekly expenses in ILS");
function budgetChecker() {
 if(weekBudget>1000){
    alert ("Stop waste your money");
 } else {
    alert ("Good Job - keep saving your money");
 }

}
budgetChecker();
