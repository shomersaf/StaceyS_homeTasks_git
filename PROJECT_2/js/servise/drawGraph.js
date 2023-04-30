function drawGraph(wrapper, rate, times, store, store2, store3, store4, store5, smth) {
  
  let canvas = document.getElementById("reportCanvas");
  if (canvas) {
    canvas.remove();
  }
  canvas = document.createElement("canvas");
  canvas.id = "reportCanvas";
  wrapper.append(canvas);

  let colors = ["orange", "green", "red", "blue", "yellow"];
  const labels = Object.keys(rate).map((element) => {
    return element;
  });
  const timeStamps = Object.values(times).map((element) => {
    return element;
  });
  const dataArr = Object.values(rate["ETH"]).map((element) => {
    store.push(element);
    //console.log(store);
    return store; 
  });
  const dataArr2 = Object.values(rate["BTC"]).map((element) => {
    store2.push(element);
    //console.log(store2);
    return store2; 
  });
  const dataArr3 = Object.values(rate["PRISM"]).map((element) => {
    store3.push(element);
    //console.log(store3);
    return store3; 
  });
  const dataArr4 = Object.values(rate["EGG"]).map((element) => {
    store4.push(element);
    //console.log(store4);
    return store4; 
  });
  const dataArr5 = Object.values(rate["AVA"]).map((element) => {
    store5.push(element);
    //console.log(store5);
    return store5; 
  });



 //console.log(`Object.values(rate["ETH"]): ${Object.values(rate["ETH"])}, Object.keys(rate)[0]: ${Object.keys(rate)[0]}`);
 for (let key in rate) {
 // console.log(`${key} : ${rate[key]["USD"]}`);////yeeees!!!!!
 //console.log(rate.BTC["USD"]);

  const dataObj ={
    label: key,
        data:rate[key]["USD"],
        borderColor: colors,
        yAxisID: "y",
  };
 
 smth.push(dataObj);

console.log(smth[0].data);
}

//console.log(dataArr[0]);

  const data = {
    labels: timeStamps,
    datasets:
    // datasets: smth.map((element) => {
    //     return element;
    //     }),
    [
      
      {
        label: smth[0].label,
        data: store,
        borderColor: colors,
        yAxisID: "y",
      },
      {
        label: smth[1].label,
        data: store2,
        borderColor: colors,
        yAxisID: "y",
      },
      {
        label: smth[2].label,
        data: store3,
        borderColor: colors,
        yAxisID: "y",
      },
      {
        label: smth[3].label,
        data: store4,
        borderColor: colors,
        yAxisID: "y",
      },
      {
        label: smth[4].label,
        data: store5,
        borderColor: colors,
        yAxisID: "y",
      },
   
    ],
  };

  const config = {
    type: "line",
    data: data,
  };
  const myLineChart = new Chart(canvas, config);

}

//let's make it dynamic in such points: 
// rate["ETH"] - must become dynamic
//1. the labels
//2. the coins number
//3. the coins data
//on deleting the coin from the report it must accordinally disappear from graph data and graph ui