function drawReport(reports) {
  // let cnSymbol = 'symbolPlaceholder';
  let crds = JSON.parse(localStorage.getItem("collection"));
  if (crds.length > 0) {
    const intro = document.getElementById("reportIntro");

    intro.innerHTML = `Get the current rate to USD for every coin in your list by click on START button and stop the graph running by use the STOP button. If some of your coins aren't presented in graph rating, it means that the there is no its rate data on server used.`;
    drawCards(
      crds,
      reports,
      removeFromReport,
      removeFromReport,
      "Remove from REPORT",
      true
    );
     
    const rateButtonsDiv = document.createElement('div');
    const rateButton = getButton(
      "<span>START</span>",
      ["btn", "btn-secondary"],
      "rateButton",
      () => {
        getCurrentCourse(crds, rateButtonsDiv);
      }
    );
    const stopButton = getButton(
        "<span>STOP</span>",
        ["btn", "btn-secondary"],
        "stopButton",
        () => {}
      );
      

    drawGraph(crds, reports);
    rateButtonsDiv.append(rateButton, stopButton);
    reports.append(rateButtonsDiv);
  }
}
