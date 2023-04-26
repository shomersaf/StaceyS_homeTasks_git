function init(){

  localStorage.setItem("moreInfoArr", []);
  const body = document.querySelector('body');
  getHeader(body);
  getMain(body);
  getFooter(body);
}


init();

