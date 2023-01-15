function salaryCalc (salary){
    salary = +prompt ("Enter your actual salary");
    salary = salary + salary/100*10;
    alert (`The salary after 10% growth is ${salary}`); 
}
salaryCalc();