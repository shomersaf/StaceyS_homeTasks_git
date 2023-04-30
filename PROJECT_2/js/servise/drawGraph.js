function drawGraph(wrapper, rate, times, store, store2) {
  
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
  const TimeStamps = Object.values(times).map((element) => {
    return element;
  });
  const dataArr = Object.values(rate["BTC"]).map((element) => {
    store.push(element);
    console.log(store);
    return store; 
  });
  const dataArr2 = Object.values(rate["ETH"]).map((element) => {
    store2.push(element);
    console.log(store2);
    return store2; 
  });

  //console.log(`Object.values(rate["BTC"]): ${Object.values(rate["BTC"])},Object.values(rate["ETH"]): ${Object.values(rate["ETH"])}`);

//console.log(dataArr[0]);

  const data = {
    labels: TimeStamps,
    datasets: [
      {
        label: labels[0],
        data: store,
        borderColor: colors,
        yAxisID: "y",
      },
      {
        label: labels[1],
        data: store2,
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
//let's catch the 3d,4th and the 5th coin
//let's make it dynamic in 3 points: 
//1. the labels
//2. the coins number
//3. the coins data