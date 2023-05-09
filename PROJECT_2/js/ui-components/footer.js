function getFooter(body) {
  const footerBack = document.createElement("div");
  footerBack.classList.add("footerBack");
  const footer = document.createElement("footer");
  const h5 = document.createElement("h5");
  h5.innerText = "Cryptonite. Exploring currencies data project.";
  const h6 = document.createElement("h6");
  h6.innerHTML = `Powered by <a href="https://www.coingecko.com/" target="_blank">CoinGecko</a>. &copy;StaceyS 2023`;
  footer.append(h5, h6);
  body.append(footerBack, footer);
}
