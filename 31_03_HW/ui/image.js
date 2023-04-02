function getImg(src, height, width) {
    const img = document.createElement("img");
    img.classList.add("minFlag");
    img.height = height;
    img.width = width;
    img.src = src;
    return img;
  }