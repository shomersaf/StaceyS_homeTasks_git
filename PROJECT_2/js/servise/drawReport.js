function drawReport (reports){
   // let cnSymbol = 'symbolPlaceholder';
    let crds = JSON.parse(localStorage.getItem("collection"));
    if (crds.length>0) {
        document.getElementById("reportIntro").remove();
        drawCards(crds, reports,removeFromReport,removeFromReport, "Remove from REPORT",true);
        const rateButton = getButton('<span>get current rate</span>',['btn','btn-secondary'],"rateButton",()=>{getCurrentCourse(crds,reports)});
        //drawGraph(crds, reports);
        reports.append(rateButton);
    }
 
}