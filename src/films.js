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
function moviesAverageOfDirector(movies, director) {
  let moviesDirector = getMoviesFromDirector(movies, director) // tengo que igualar la variable con la funcion getMoviesFromDirector del ejercicio 2 porque pide las peliculas de un determinado director
  let moviesAverage = moviesDirector.reduce((counter,{score}) =>(counter + score) /2 ,moviesDirector[0].score)//en vez usar movies, debo usar moviesDirector

return moviesAverage;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let titleMovies = movies.map((movie) => movie.title); //ordenamos las peliculas por titulo
  let titlesMoviesOrder = titleMovies.sort ((titleA, titleB) => { //ordenamos alfabeticamente
    if (titleA < titleB) {return -1;}
    if (titleA > titleB) {return 1;}
    return 0;
});
  let top20movies = titlesMoviesOrder.slice (0,20);
  return top20movies;
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
