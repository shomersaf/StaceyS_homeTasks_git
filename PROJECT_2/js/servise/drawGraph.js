function drawGraph(myArr) {
    const canvas = document.createElement('canvas');
    canvas.id = "reportCanvas";
    DOM.content.append(canvas);
   
      let colors = ["orange", "green", "red","blue", "yellow"]
      let labels = myArr.map((c) => { return c?.name?.common })
      let population = myArr.map((c) => { return c?.population })
      let data = {
         labels: labels,
         datasets: [{
             label: 'Population',
             data: population,
             backgroundColor: colors,
             borderColor: 'white',
             borderWidth: 1,
             hoverOffset: 4
         }]
     };
      let config = {
         type: 'doughnut',
         data: data,
     };
     new Chart(canvas, config);
  
    }