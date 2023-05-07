var coinsLineChart = null;

function drawGraph(
  controller,
  wrapper,
  rate,
  time
) {
  controller.abort();
  let canvas = document.getElementById("reportCanvas");

  // if(coinsLineChart != null){
  //   for(newCoinName in rate){
  //     let exists = coinsLineChart.config.data.datasets.some(dataset => dataset.label == newCoinName)
  //     if(!exists){
  //       coinsLineChart = null
  //       if(canvas){
  //         canvas.remove()
  //         canvas = null
  //       }
  //       break
  //     }
  //   }
  // }
  if(coinsLineChart?.config.data.datasets.some(dataset => !Object.hasOwn(rate, dataset.label))){
    coinsLineChart = null
    if(canvas){
      canvas.remove()
      canvas = null
    }
  }

  if (canvas == null) {
    canvas = document.createElement("canvas");
    canvas.id = "reportCanvas";
    wrapper.append(canvas);
    coinsLineChart = null
  }

  

  if (coinsLineChart === null){
    let colors = ["orange", "green", "red", "blue", "yellow"];
    
    const config = {
      type: "line",
      data: {
        labels: [time],
        datasets: []
      },
    };

    for(coinName in rate){
      config.data.datasets.push({
        label: coinName,
        data: [ rate[coinName].USD ],
        borderColor: colors,
        yAxisID: "y"
      })
    }
    coinsLineChart = new Chart(canvas, config);
  }
  else{
    coinsLineChart.config.data.labels.push(time)
    coinsLineChart.config.data.datasets.forEach(dataset => {
      dataset.data.push(rate[dataset.label].USD)
    })
    coinsLineChart.update()
  }
 
}

// function drawGraph(
//   wrapper,
//   rate,
//   times,
//   store,
//   store2,
//   store3,
//   store4,
//   store5,
//   nakopitel
// ) {
//   let canvas = document.getElementById("reportCanvas");
//   if (canvas) {
//     canvas.remove();
//   }
//   canvas = document.createElement("canvas");
//   canvas.id = "reportCanvas";
//   wrapper.append(canvas);

//   let colors = ["orange", "green", "red", "blue", "yellow"];

//   const labels = Object.keys(rate).map((element) => {
//     return element;
//   });

//   const timeStamps = Object.values(times).map((element) => {
//     return element;
//   });

//   store.push(...Object.values(rate[Object.keys(rate)[0].toString()]));
//   store2.push(...Object.values(rate[Object.keys(rate)[1].toString()]));
//   store3.push(...Object.values(rate[Object.keys(rate)[2].toString()]));
//   store4.push(...Object.values(rate[Object.keys(rate)[3].toString()]));
//   store5.push(...Object.values(rate[Object.keys(rate)[4].toString()]));

//   //==================================================================================
 
  

//   //=======================================================================================

//   const data = {
//     labels: timeStamps,
//     datasets:
//       // datasets: smth.map((element) => {
//       //     return element;
//       //     }),
//       [
//         {
//           label: labels[0],
//           data: store,
//           borderColor: colors,
//           yAxisID: "y",
//         },
//         {
//           label: labels[1],
//           data: store2,
//           borderColor: colors,
//           yAxisID: "y",
//         },
//         {
//           label: labels[2],
//           data: store3,
//           borderColor: colors,
//           yAxisID: "y",
//         },
//         {
//           label: labels[3],
//           data: store4,
//           borderColor: colors,
//           yAxisID: "y",
//         },
//         {
//           label: labels[4],
//           data: store5,
//           borderColor: colors,
//           yAxisID: "y",
//         },
//       ],
//   };

//   const config = {
//     type: "line",
//     data: data,
//   };
 
//   const myLineChart = new Chart(canvas, config);
  
// }




//put all dataArr into one array
//remove the rest not needed
//generate the objects in datasets depending on the number of coins
//on deleting the coin from the report it must accordinally disappear from graph data and graph ui
