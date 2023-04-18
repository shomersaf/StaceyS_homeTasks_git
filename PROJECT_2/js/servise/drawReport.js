function drawReport (container){
    let crds = JSON.parse(localStorage.getItem("collection"));
    if (crds !== null) {
        document.getElementById("reportIntro").remove();
        drawCards(crds, container,addToTheList,removeFromList);
    }
}