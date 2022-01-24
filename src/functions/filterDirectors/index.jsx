export function filterDirectors({ movies }) {
  const fullDescriptions = movies.map((movie) => movie.description);
  const shortDescriptions = fullDescriptions.map((description) => description.substr(0, 100) + '...');
  movies.map((movie, index) => (movie.shortdescription = shortDescriptions[index]));

  const allDirectorsArray = movies.map((movie) => movie.director);
  const newDirectorsArray = allDirectorsArray.filter(function (value, index) {
    return allDirectorsArray.indexOf(value) === index;
  });
  return newDirectorsArray;
}
