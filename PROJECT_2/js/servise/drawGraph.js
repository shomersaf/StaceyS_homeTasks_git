function drawGraph(myArr, wrapper, smth) {
  console.log(smth);
  let canvas = document.getElementById('reportCanvas');
  if(canvas){
    canvas.remove();
  }
   canvas = document.createElement("canvas");
  canvas.id = "reportCanvas";
  wrapper.append(canvas);

  let colors = ["orange", "green", "red", "blue", "yellow"];
  const labels = myArr.map((element) => {
 return element?.name;
  });
  const dataArr = [1,2,3,4,5,6,7,8,9,0,1,0,11,22,33,4,4,55,66,77,88,99];
  const dataArr2 = [1,0,11,22,33,4,4,55,66,77,88,91,2,3,4,5,6,7,8,9,0,1,0,11,22,33];
  const dataSetsArr =[
    {
      label: labels,
      data: dataArr, //here will be coin price per dollar
    
      borderColor: colors,
    
    },
    {
      label: labels,
      data: dataArr2,
     
      borderColor: colors,
    
    },
    {
      label: labels,
      data: dataArr,
     
      borderColor: colors,
   
    },
    {
      label: labels,
      data: dataArr2,
   
      borderColor: colors,
 
    },
    {
      label: labels,
      data: dataArr2,

      borderColor: colors,

    },
  ];
  // const responseExample ={tipeStamp,Symbol:price, Symbol:price....  }

  const coinsData = {
    labels: labels, //here will be timeStamps from array
    datasets: dataSetsArr.map((element) => {
        return element;
         }),
  };

  const coinsConfig = {
    type: "line",
    data: coinsData,
    options: {
      scales: {
        y: {
          stacked: true,
        },
      },
      plugins: {
        filler: {
          propagate: false,
        },
        "samples-filler-analyser": {
          target: "chart-analyser",
        },
      },
      interaction: {
        intersect: false,
      },
    },
  };
  const myLineChart = new Chart(canvas, coinsConfig);
  //console.log(rateResult);
}
