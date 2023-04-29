function drawReport(reports) {
  // let cnSymbol = 'symbolPlaceholder';
  let crds = JSON.parse(localStorage.getItem("collection"));
  if (crds.length > 0) {
    const intro = document.getElementById("reportIntro");

    intro.innerHTML = `Get the current rate to USD for every coin in your list by click on START RATING button and stop the graph running by use the STOP button. If some of your coins aren't presented in graph rating, it means that the there is no its rate data on server used.`;
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
      "<span>start rating</span>",
      ["btn", "btn-secondary"],
      "rateButton",
      () => {
        getCurrentCourse(crds, rateButtonsDiv);
      }
    );

    drawGraph(crds, reports);
    rateButtonsDiv.append(rateButton);
    reports.append(rateButtonsDiv);
  }
}
