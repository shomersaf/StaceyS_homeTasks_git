function drawGraph(wrapper, rate, times, store) {
  
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
  const dataArr = Object.values(rate).map((element) => {
    store.push(element["USD"]);
    console.log(store);
    return store;
    
  });


 console.log(dataArr[0]);

  const data = {
    labels: TimeStamps,
    datasets: [
      {
        label: labels,
        data: store,
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
  //console.log(rateResult);
}
