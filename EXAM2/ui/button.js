function genButton(txt,clsNames){
  if (!Array.isArray(clsNames)) throw new Error ("clsNames is not an array!")
  else {
    const button = document.createElement("button");
    button.innerText = txt;
    button.classList.add(...clsNames);
    return button;
  }

}
