function showModal(modalData){
  //alert(`id: ${modalData.id} symbol: ${modalData.symbol} name: ${modalData.name}`);
  const popupBg = document.createElement('div');
  const popup = document.createElement('div');
  popup.classList.add("popup", 'active');
  popupBg.classList.add("popup__bg", 'active');
  const popupBody = document.createElement('div');
 // popupBody.innerHTML =`id: ${modalData.id} symbol: ${modalData.symbol} name: ${modalData.name}`;

 

  popupBody.classList.add("popupBody");
  const closePopup = document.createElement('div');
  closePopup.classList.add("close-popup");
  closePopup.innerText = "x";
  closePopup.addEventListener("click", ()=>{
    popupBg.remove('active')})
 // e.preventDefault(); 
  popup.append(closePopup, popupBody);
  popupBg.append(popup);
  const containerForPopup = document.querySelector('main');
  containerForPopup.append(popupBg);
  const popupArr =[];
  popupArr.push(modalData);
  drawCards(popupArr, popupBody,addToTheList,removeFromList, "Add to REPORT", false);
  
}