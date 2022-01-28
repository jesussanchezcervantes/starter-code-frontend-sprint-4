// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let directorMovies = movies.map((movie) => movie.director); 

  return directorMovies;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let movieFromDirector = movies.filter((movie) => movie.director === director );

 return movieFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies) {
  let moviesAverage = movies.reduce((counter,{score}) =>(counter + score) /2 ,movies[0].score)

return moviesAverage;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let titleMovies = movies.map((movie) => movie.title); //ordenamos por titulo
  let titlesMoviesOrder = titleMovies.sort ((a, b) => { //ordenamos alfabeticamente
    if (a.title > b.title) {return 1;}
    if (a.title < b.title) {return -1;}
    return 0;
});
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
