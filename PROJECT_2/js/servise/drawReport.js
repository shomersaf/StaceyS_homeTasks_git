function drawReport(reports) {
  let crds = JSON.parse(localStorage.getItem("collection"));
  if (crds.length > 0) {
    const intro = document.getElementById("reportIntro");

    intro.innerHTML = `<span>info: </span><br /> If some of your coins aren't presented in graph, it means that the there is no its exchange data on the server used.<br /> Therefore, if all of the coins entered aren't on exchange, there graph won't be generated at all.<br /> Every coin rated on exchange server will appear in a graph according to it's current price status as for USD. `;
    drawCards(
      crds,
      reports,
      removeFromReport,
      removeFromReport,
      "Remove from REPORT",
      true
    );
    const controller = new AbortController();
    const rateButtonsDiv = document.createElement("div");
    const rateButton = getButton(
      "<span>START</span>",
      ["btn", "btn-secondary"],
      "rateButton",
      () => {
        getCurrentCourse(crds, rateButtonsDiv, reports, controller);
      }
    );
    const stopButton = getButton(
      "<span>STOP</span>",
      ["btn", "btn-secondary"],
      "stopButton",
      () => {
         controller.abort();}
    );

  
    reports.append(rateButtonsDiv);
    getCurrentCourse(crds, rateButtonsDiv, reports, controller);
  }

}
