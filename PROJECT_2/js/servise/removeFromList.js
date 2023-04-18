function removeFromList(checker, cId){
    let collection = JSON.parse(localStorage.getItem("collection"));
    collection.forEach((item, index, array) => {
      let searchTarget = cId;
      if (item.id == searchTarget) {
        var res = confirm(`remove ${item.name}?`);
        if (res) {
          collection.splice(index, 1);
          localStorage.setItem("collection", JSON.stringify(collection));
        } else {  
          checker.checked=true;
        }
      }
    });
}