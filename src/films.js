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
  let titleMovies = movies.map((movie) => movie.title); //obtengo un array de los titulos de las peliculas
  let titlesMoviesOrder = titleMovies.sort ((titleA, titleB) => (titleA > titleB) ? 1 : -1)//ordenamos alfabeticamente usando el operador ternario
  let top20movies = titlesMoviesOrder.slice (0,20);//devuelve unicamente los 20 primeros titulos.

  return top20movies;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let orderedByYears = movies.slice().sort ((movieA, movieB) => {
    if (movieA.year > movieB.year) {return 1}
    if (movieA.year < movieB.year) {return -1}
    if (movieA.year === movieB.year){
      if (movieA.title > movieB.title) {return 1}
      if (movieA.title < movieB.title) {return -1}
      return 0;
    }  
  });

  return orderedByYears;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let moviesFromCategory = movies.filter((movie) => movie.genre.includes (category)); // peliculas de una categoria determinada. 
  let moviesFromCategoryWithScore = moviesFromCategory.filter((movie) => movie.score != ""); // peliculas cuyo score es mayor que 0.
  let moviesAverage = moviesFromCategoryWithScore.reduce((counter,{score}) =>(counter + score) /2 ,moviesFromCategoryWithScore[0].score) // saco la media de las peliculas de una categoria determinada (counter y score no cambia)

  return moviesAverage;
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
