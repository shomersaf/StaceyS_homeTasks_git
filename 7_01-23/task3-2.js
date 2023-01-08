var minutes = Number(prompt('Enter the running time of the movie in minutes'));
var hours=parseInt(minutes/60);
var minutes=minutes%60;
alert('The running time of the movie is ' + hours + ' hours ' + minutes + ' minutes');