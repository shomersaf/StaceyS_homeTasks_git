function drawReport (container){
   
    let crds = JSON.parse(localStorage.getItem("collection"));
    if (crds.length>0) {
        document.getElementById("reportIntro").remove();
        drawCards(crds, container,removeFromReport,removeFromReport, "Remove from REPORT",true);
    }

}