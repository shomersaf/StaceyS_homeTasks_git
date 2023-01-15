var hours = +prompt("Enter the hours from 1 to 12");
var minutes = +prompt("Enter the minutes from 1 to 59");
var seconds = +prompt("Enter the seconds from 1 to 59");
hours =parseInt(hours);
minutes=parseInt(minutes);
seconds=parseInt(seconds);

function dClock(digital){
    if(digital/10 > 1 ){
        digital=digital.toString();
    }else{
        digital=digital.toString();
        digital = "0" + digital;
    }
    return (digital);
  }

 if (hours>12||hours<1||minutes<1||minutes>59||seconds<1||seconds>59) {
    alert("Error. Wrong format of time entered. Reload the page and reenter!");
 } else {
    var digitalTime = (dClock(hours) + " : " + dClock(minutes) + " : " + dClock(seconds));
    alert(`The time on digital clock is ${digitalTime}`); 
    
 }




