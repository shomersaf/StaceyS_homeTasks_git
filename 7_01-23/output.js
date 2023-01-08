const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.preventDefault();
    const velocity = form.querySelector('[name="velocity"]');
    const time = form.querySelector('[name="time"]');

var tm=time.value;
var vel=velocity.value;

var distance = tm*vel;
var beginning = '<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="stylesheet" href="styles.css" /><title>Distance Calculator</title></head> <body> <div class="container"><header><h1>Home Task 10</h1> </header>  <main><div class="consoleLink"><p>Task1</p></div>'; 
var ending='<div class="consoleLink"><p>Reload the page to come back</p></div></main><footer><h5>&copy;StaceyS 2023</h5> </footer> </div><script src="output.js"></script></body></html>';

   

    document.write(beginning+'<div class="result"><p>'+ 'The distance is '+distance+' km/h'+'</p></div>'+ending);
}
form.addEventListener('submit', retrieveFormValue);




