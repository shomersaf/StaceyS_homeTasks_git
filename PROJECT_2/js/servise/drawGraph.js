var coinsLineChart = null;

function drawGraph(wrapper, rate, time, myInterval, controller) {
  let canvas = document.getElementById("reportCanvas");

  if (
    coinsLineChart?.config.data.datasets.some(
      (dataset) => !Object.hasOwn(rate, dataset.label)
    )
  ) {
    coinsLineChart = null;
    if (canvas) {
      canvas.remove();
      canvas = null;
    }
  }

  if (canvas == null) {
    canvas = document.createElement("canvas");
    canvas.id = "reportCanvas";
    wrapper.append(canvas);
    coinsLineChart = null;
  }

  if (coinsLineChart === null) {
    let colors = ["orange", "green", "red", "blue", "yellow"];

    const config = {
      type: "line",
      data: {
        labels: [time],
        datasets: [],
      },
    };

    for (coinName in rate) {
      config.data.datasets.push({
        label: coinName,
        data: [rate[coinName].USD],
        borderColor: colors,
        yAxisID: "y",
      });
    }
    coinsLineChart = new Chart(canvas, config);
  } else {
    coinsLineChart.config.data.labels.push(time);
    coinsLineChart.config.data.datasets.forEach((dataset) => {
      dataset.data.push(rate[dataset.label].USD);
    });
    coinsLineChart.update();
  }
  if (rate.Response) {
    clearInterval(myInterval);
    canvas.remove();
  }
}
