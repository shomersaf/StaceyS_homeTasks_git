function init() {
  var movies = [];
  var ratings = [];
  var highRating = [];
  const initialHighRating = [];
  var favorites = [];
  const initialFavorites = [];
  const numOfMovies = (+prompt("Enter the number of movies"));
  var movieToRemove = 0;

  function getFavoritesMovies() {
    document.write(`<hr />`);
    document.write(`<h3 style="color:green">Everything goes in the console.</h3>`);
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
    document.write(`<p><b>Movie:</b> \"${this.movieName.toUpperCase()}\".<b>Rating:</b> ${
        this.movieRating}</p> `);
    getHighRatingMovies(this.movieName, this.movieRating, currentMovie);
  }

  function getHighRatingMovies(mName, mRating, mMovie) {
    movies.push(mName);
    ratings.push(mRating);
    favorites.push(mMovie);
    initialFavorites.push(mMovie);
    if (mRating > 4) {
      highRating.push(mMovie);
      initialHighRating.push(mMovie);
    }
  }

  function publishToConsole() {
 
    console.log(`The High Rated Movies are:`);
    console.log(initialHighRating);
    console.log(`All the FAVORITE movies ever entered are:`);
    console.log(initialFavorites);
  }

  function removeFromFavorites() {
    movieToRemove = prompt(
      `Enter the movie name to remove it from the favorites`
    );
    if (movies.movieName == movies.movieToRemove) {
      let searching = favorites.find(
        (movies) => movies.movieName == movieToRemove
      );
      let searchingIndex = favorites.findIndex(
        (movies) => movies.movieName == movieToRemove
      );
      favorites.splice(searchingIndex, 1);

      console.log(`Removing:`);
      console.log(searching);
      console.log(`All the FAVORITE movies now are:`);
      console.log(favorites);
    
    } else {
      alert(`You've entered the wrong value`);
    }
  }


  function removeFromHighRatingList (){
    let searchingIndex = highRating.findIndex(
        (movies) => movies.movieName == movieToRemove
      );
      highRating.splice(searchingIndex, 1);
        console.log(`High Rating List movies now are:`);
        console.log(highRating);
        
  }

 
  getFavoritesMovies();
  GetNewFavorite();
  publishToConsole();
  removeFromFavorites();
  removeFromHighRatingList ();
}

init();
