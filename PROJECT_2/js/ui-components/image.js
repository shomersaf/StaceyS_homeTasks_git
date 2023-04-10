function getImage(imgClass,id,src){
    const image = document.createElement('img');
    image.classList.add(imgClass);
    image.id = id;
    image.setAttribute("src",src);
    return image;
}