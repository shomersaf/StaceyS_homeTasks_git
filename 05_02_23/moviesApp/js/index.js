var numOfMovies = 0;
var movies = [];
var ratings = [];
var highRating = [];
var favorites = [];
var movieToRemove = 0;


    function printMovie (){
        let movieName = document.getElementById("movieName");
        let movieRating = document.getElementById("movieRating");
        numOfMovies++;
       let movieLine = document.createElement("h3");
       movieLine.innerHTML = (`${numOfMovies}. Movie: \"${(movieName.value).toUpperCase()}\" Rating: ${movieRating.value}`);
       movieLine.style.color = "blue";
       movieLine.className = "container";
       document.body.appendChild(movieLine);
       getFavoritesMovies();
     
    }

  
    function getFavoritesMovies() {
      
        var currentMovie = {
            movieName: movieName.value,
            rating: movieRating.value,
          };
          getHighRatingMovies(movieName.value, movieRating.value, currentMovie);    
      }

      function getHighRatingMovies(mName, mRating, mMovie) {
        movies.push(mName);
        ratings.push(mRating);
        favorites.push(mMovie);
        if (mRating > 4) {
          highRating.push(mMovie);
        }
      }
      
      function publishHighRating (){
       let highRatingList = document.createElement("div");
       var mvName = JSON.stringify(highRating,null, 2);
       mvName = mvName.replace(/{/g, ' ');
       mvName = mvName.replace(/}/g, ' ');
       mvName = mvName.replace(/"/g, ' ');
       mvName = mvName.replace(/movieName/g, 'movie');
       
       highRatingList.innerHTML  = (`Highly Rated:<br /> ${mvName}`);
        highRatingList.style.color = "green";
        highRatingList.className = "container";
        
        document.body.appendChild(highRatingList); 
      
    
    }
   
    
  