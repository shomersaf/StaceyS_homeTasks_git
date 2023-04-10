function getAbout(){
    const container = document.querySelector('.container');
    container.innerHTML="";
    const about=document.createElement('article');
    const h2=document.createElement('h2');
    h2.classList.add('articleHeading');
    h2.innerHTML ="About &#9655;";
    const projectAuthor = document.createElement('aside');
    projectAuthor.classList.add("projectAuthor");
    const projectAuthorH4 = document.createElement('h5');
    projectAuthorH4.innerHTML ="Author &#9655;";
    const image = getImage("photo","authorImg",'./img/author.jpg');
    const projectAuthorP1 = document.createElement('p');
    projectAuthorP1.classList.add('projectAuthorP');
    projectAuthorP1.innerHTML = "<strong>Stacey Steshin</strong> - BSc(Econ), MSc(Eng), CG artist and designer.She is a nowadays student of Full Stack Development Course in John Bryce College, Tel Aviv, Israel, group 4578/91.";
    const projectAuthorP2 = document.createElement('p');
    projectAuthorP2.classList.add('projectAuthorP');
    projectAuthorP2.innerText = "";
    projectAuthor.append(image,projectAuthorH4,projectAuthorP1,projectAuthorP2);
    const projectDesc = document.createElement('div');
    projectDesc.classList.add('projectDesc');
    const projectDescP1 = document.createElement('p');
    projectDescP1.classList.add('projectDescP');
    projectDescP1.innerText ="Cryptonite is a single page application student project based on JAVASCRIPT programming language, SCSS preprocessing, CSS3 media queries and advanced selectors, HTML5, Bootstrap library, flex, AJAX, JSON and JQUERY library.";
    const projectDescP2 = document.createElement('p');
    projectDescP2.classList.add('projectDescP');
    projectDescP2.innerText ="Current application generates in UI the currencies data acquired from external API using fetch request. The application also provides tha ability to get an additional information about the chosen currency due to another external API reguest made. All the data is saving on client side only - in a cash memory of browser (Local Storage). Another ajax request gets all the information from the next external API according to currencies chosen by client. The grafs based on this information are to be generated in real-time every two minutes. The application is based on dynamic page layouts programming technologies.";
    about.append(h2,projectAuthor,projectDesc);
    projectDesc.append(projectDescP1,projectDescP2);
    container.append(about);
    $(function() {
        $('.projectAuthor').hide().fadeIn(1500); 
        $('.projectDesc').hide().fadeIn(1500); 
    })
}