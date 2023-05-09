function getImage(imgClass, src) {
  const image = document.createElement("img");
  image.classList.add(imgClass);
  image.setAttribute("src", src);
  return image;
}
