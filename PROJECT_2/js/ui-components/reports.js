function getReports(){
    const container = document.querySelector('.container');
    container.innerHTML="";
    const reports=document.createElement('article');
    const h2=document.createElement('h2');
    h2.classList.add('articleHeading');
    h2.innerHTML ="Real-time reports &#9655;";
    container.append(h2,reports);
}