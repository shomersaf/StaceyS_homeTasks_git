function showModal(modalData) {
  const popupBg = document.createElement("div");
  const popup = document.createElement("div");
  popup.classList.add("popup", "active");
  popupBg.classList.add("popup__bg", "active");
  const popupBody = document.createElement("div");

  popupBody.classList.add("popupBody");
  const closePopup = document.createElement("div");
  closePopup.classList.add("close-popup");
  closePopup.innerText = "x";
  closePopup.addEventListener("click", () => {
    popupBg.remove("active");
    clearInput();
  });

  popup.append(closePopup, popupBody);
  popupBg.append(popup);
  const containerForPopup = document.querySelector("main");
  containerForPopup.append(popupBg);
  const popupArr = [];
  popupArr.push(modalData);
  drawCards(
    popupArr,
    popupBody,
    addToTheList,
    removeFromList,
    "Add to REPORT",
    false
  );
}
