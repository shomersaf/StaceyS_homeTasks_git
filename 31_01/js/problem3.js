function init() {

  var movies = [];
  var ratings = [];
  var highRating = [];
  var favorites = [];
  const numOfMovies = +prompt("Enter the number of movies");


  function getFavoritesMovies() {
    document.write(`<hr />`);
    document.write(`<h3 style="color:green">Let's go!</h3>`);
    for (let i = 1; i <= numOfMovies; i++) {
      let movieName = prompt("Please Enter movie name");
      let movieRating = +prompt("Please Enter your rating");
      var currentMovie = {
        movieName: movieName,
        rating: movieRating,
      };
      getHighRatingMovies(movieName, movieRating, currentMovie);

      document.write(
        `<p><b>Movie:</b> \"${currentMovie.movieName.toUpperCase()}\".<b>Rating:</b> ${
          currentMovie.rating
        }</p> `
      );
    }
  }

  function GetNewFavorite() {
    this.movieName = prompt("Please Enter a NEW movie name");
    this.movieRating = +prompt("Please Enter a NEW rating");
    currentMovie = {
      movieName: movieName,
      rating: movieRating,
    };
    document.write(
      `<p><b>Movie:</b> \"${this.movieName.toUpperCase()}\".<b>Rating:</b> ${
        this.movieRating
      }</p> `
    );
    getHighRatingMovies(this.movieName, this.movieRating, currentMovie);
  }

  function getHighRatingMovies(mName, mRating, mMovie) {
    movies.push(mName);
    ratings.push(mRating);
    favorites.push(mMovie);
    if (mRating > 4) {
      highRating.push(mMovie);
    }
  }
  
 function publishToConsole (){
  console.log(`The High Rated Movies are:`);
  console.log(highRating);
  console.log(`All the movies entered are:`);
  console.log(favorites);
 }

 
 getFavoritesMovies();
 GetNewFavorite();
 publishToConsole();
}

init();
