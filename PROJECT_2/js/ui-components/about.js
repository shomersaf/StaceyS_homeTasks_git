function getAbout(){
    const container = document.querySelector('.container');
    container.innerHTML="";
    const about=document.createElement('article');
    const h2=document.createElement('h2');
    h2.classList.add('articleHeading');
    h2.innerHTML ="About &#9655;";
    about.append(h2);
    container.append(about);
}