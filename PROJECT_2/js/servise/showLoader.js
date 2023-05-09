function showLoader(container) {
  const loaderDiv = document.createElement("div");
  loaderDiv.classList.add("loaderDiv");
  const loader = document.createElement("div");
  loader.id = "searchLoader";
  loader.classList.add("spinner-border");
  loaderDiv.append(loader);
  container.append(loaderDiv);
}
