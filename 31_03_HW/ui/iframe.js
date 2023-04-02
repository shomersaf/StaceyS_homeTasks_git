function getIframe(mapSrc, width, height) {
    const iframe = document.createElement("iframe");
    console.log("here");
    iframe.classList.add("newIframe");
    iframe.height = height;
    iframe.width = width;
    iframe.src = mapSrc;
    return iframe;
  }