function calculate(){
const firstNum = document.getElementById("firstNum"); 
const secondNum = document.getElementById("secondNum"); 
const action = document.getElementById("action");     
let calculator = new Calculate(firstNum.value,secondNum.value,action.value);

let publisher = document.createElement("h1");
publisher.innerHTML = `${firstNum.value} ${action.value}  ${secondNum.value} = ${calculator.result}`;
document.body.appendChild(publisher);

}
function Calculate (firstNum, secondNum,action){
    switch(action) {
        case '+':
          this.result = firstNum+secondNum;
          break;
      
        case '-':
            this.result = firstNum-secondNum;
            break;
      
          case '*':
            this.result = firstNum*secondNum;
            break;
      
          case '/':
            this.result = firstNum/secondNum;
            break;

      }
     

     
     return this.result;
}
//cleaning the form data
function clearForm() {
    $(this).closest("form")[0].reset();
  }