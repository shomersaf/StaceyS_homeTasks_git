function removeFromReport(checker, cId,cCard){
   
    let collection = JSON.parse(localStorage.getItem("collection"));
    collection.forEach((item, index, array) => {
      let searchTarget = cId;
      if (item.id == searchTarget) {
        var res = confirm(`remove ${item.name}?`);
        if (res) {
          collection.splice(index, 1);
          localStorage.setItem("collection", JSON.stringify(collection));
          cCard.remove();
        } 
      }
    });
    if(collection.length==0){
      const container = document.querySelector('.container');
      const intro = document.createElement('div');
    intro.classList.add('intro');
    intro.id = "reportIntro";
    intro.innerHTML =`Your personal real-time report is empty. Nothing added.`;
    intro.style.cssText = 'text-align: center;'
    container.append(intro);
    }
}