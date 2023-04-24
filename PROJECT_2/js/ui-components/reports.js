function getReports(){
    const container = document.querySelector('.container');
    container.innerHTML="";
    const reports=document.createElement('article');
    const h2=document.createElement('h2');
    h2.classList.add('articleHeading');
    h2.innerHTML ="Real-time reports &#9655;";
    const intro = document.createElement('div');
    intro.classList.add('intro');
    intro.id = "reportIntro";
    intro.innerHTML =`Your personal real-time report is empty. Nothing added.`;
    intro.style.cssText = 'text-align: center;'
    container.append(h2,reports,intro);
    drawReport(container);
}