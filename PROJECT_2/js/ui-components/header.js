function getHeader(body){
   const header = document.createElement('header');
   header.classList.add("parallax");
   const parallax0 = document.createElement('div');
   parallax0.id ="parallax-0";
   parallax0.setAttribute("data-speed","2");
   const parallax1 = document.createElement('div');
   parallax1.id ="parallax-1";
   parallax1.setAttribute("data-speed","5");
   const parallax2 = document.createElement('div');
   parallax2.id ="parallax-2";
   parallax2.setAttribute("data-speed","11");
   const parallax3 = document.createElement('div');
   parallax3.id ="parallax-3";
   parallax3.setAttribute("data-speed","16");
   const parallax4 = document.createElement('div');
   parallax4.id ="parallax-4";
   parallax4.setAttribute("data-speed","26");
   const parallax5 = document.createElement('div');
   parallax5.id ="parallax-5";
   parallax5.setAttribute("data-speed","36");
   const parallax6 = document.createElement('div');
   parallax6.id ="parallax-6";
   parallax6.setAttribute("data-speed","49");
   
   const arrowDiv = document.createElement('div');
   arrowDiv.id ="arrowDiv";

   const h1 = document.createElement('h1');
   h1.innerText = "cryptonite. currencies data";
   const arrowReff = document.createElement('a');
   arrowReff.setAttribute("href","#navigation");
   
   const arrow = document.createElement('button');
   arrow.classList.add("btn","btn-primary")
   arrow.id = "arrow";
   arrow.style.cssText = 'cursor:pointer';
   arrow.innerHTML = "&#8659;";
   arrowReff.append(arrow);
   arrowDiv.append(h1,arrowReff);
   parallax6.append(arrowDiv);
   const parallax7 = document.createElement('div');
   parallax7.classList.add("parallax__layer");
   parallax7.id ="parallax-7";
   parallax7.setAttribute("data-speed","69");
   const graphem1 = document.createElement('div');
   graphem1.innerHTML = "&#165;";
   const graphem2 = document.createElement('div');
   graphem2.innerHTML = "&#8364;";
   const graphem3 = document.createElement('div');
   graphem3.innerHTML = "&#8381;";
   const graphem4 = document.createElement('div');
   graphem4.innerHTML = "&#8362;";
   const graphem5 = document.createElement('div');
   graphem5.innerHTML = "$";
   const graphem6 = document.createElement('div');
   graphem6.innerHTML = "&#8383;";
   const graphem7 = document.createElement('div');
   graphem7.innerHTML = "&#8377;";
   
   const graphems =[graphem1,graphem2,graphem3,graphem4,graphem5,graphem6,graphem7];
   const parallaxes =[parallax0,parallax1,parallax2,parallax3,parallax4,parallax5,parallax6,parallax7];

   graphems.forEach(graphem => {
      graphem.classList.add("graphem"); 
    })
    parallaxes.forEach(parallax => {
      parallax.classList.add("parallax__layer"); 
    })
   parallax7.append(...graphems);
   header.append(...parallaxes);
   body.append(header);
   
   parallax();
 
}