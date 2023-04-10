function getButton(txt,clsNames,id,fn){
  if (!Array.isArray(clsNames)) throw new Error ("clsNames is not an array!")
  else {
    const button = document.createElement("button");
    button.innerHTML = txt;
    button.id = id;
    button.classList.add(...clsNames);
    button.addEventListener("click", fn)
    return button;
  }

}
