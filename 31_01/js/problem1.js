function GetFavoritesMovies() {
 
const numOfMovies = +prompt("Enter the number of movies");
document.write(`<hr />`);
document.write(`<h3 style="color:green">OMG! Does it really work? Can't believe! :)</h3>`);
for (let i=1; i <=numOfMovies; i++){
    const movieName = prompt("Please Enter movie name");
    const movieRating = +prompt("Please Enter your rating");
    const currentMovie = {
        movieName: movieName,
        movieRating: movieRating,
    };
   
    document.write(`<p><b>Movie:</b> \"${currentMovie.movieName.toUpperCase()}\".<b>Rating:</b> ${currentMovie.movieRating}</p> `);
}

}

GetFavoritesMovies();
