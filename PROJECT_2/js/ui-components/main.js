function getMain(body){

    const main = document.createElement('main');
    main.classList.add("maincontent");
    body.append(main);
    getNav(main);
    getContainer(main);
  
}