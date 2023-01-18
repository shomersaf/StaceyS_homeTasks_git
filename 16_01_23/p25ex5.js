function init() {
    var students = parseInt(prompt("How many students are in the class?"));
    var grade = parseInt(prompt("Enter the grade"));
    var counter=0;
    var sum = 0;
    while (counter!=students && grade != -99) {
        
        sum = sum + grade;
        grade = parseInt(prompt("Enter the grade"));
        counter++;
    
    }
    if(grade == -99){
        console.log(`You have entered the wrong grade. The programm was stopped. And the current sum is ${sum}`);
    }
    if(counter==students){
        console.log(`You have finished entering the grades according to the number of the students in this class. The sum of all the grades is ${sum}`);
    }
   
  }
  
  init();