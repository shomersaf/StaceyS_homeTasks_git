function removeLoader(elemId) {
    const loader = document.querySelector(elemId);
    if (loader) {
      loader.remove();
    }
  }