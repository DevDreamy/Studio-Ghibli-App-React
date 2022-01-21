export function handleClick(e, movie) {
  if (e.target.previousElementSibling.innerText.length <= 103) {
    e.target.previousElementSibling.innerText = movie.description;
    e.target.innerText = 'Read Less';
    return;
  }
  e.target.previousElementSibling.innerText = movie.shortdescription;
  e.target.innerText = 'Read More';
  return;
}
