function GetFavoritesMovies() {
    const movies = [];
    const ratings = [];
    const highRating = [];
    const numOfMovies = +prompt("Enter the number of movies");
    document.write(`<hr />`);
    document.write(`<h3 style="color:green">Oh! God said: Let it be an array! And there is an array (in console):</h3>`);
    for (let i=1; i <=numOfMovies; i++){
        const movieName = prompt("Please Enter movie name");
        const movieRating = +prompt("Please Enter your rating");
        const currentMovie = {
            movieName: movieName,
            rating: movieRating,
        };
        getHighRatingMovies();
        function getHighRatingMovies () {
            movies.push(currentMovie);
            ratings.push(movieRating);
            if (movieRating>4){
                highRating.push(currentMovie);
            }
        }
        document.write(`<p><b>Movie:</b> \"${currentMovie.movieName.toUpperCase()}\".<b>Rating:</b> ${currentMovie.rating}</p> `);
    }
   console.log(highRating);
  
    }
    
    GetFavoritesMovies();
    