export function handleChange({ e }) {
  const cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    let director = cards[i].querySelector('.movie-director');

    if (director.innerText.indexOf(e.target.value) > -1) {
      cards[i].style.display = '';
      cards[i].animate(
        [
          { transform: 'translateY(20px)', opacity: '0' },
          { transform: 'translateY(0px)', opacity: '1' },
        ],
        {
          duration: 400,
          fill: 'both',
        },
      );
    } else {
      cards[i].style.display = 'none';
    }
  }
}
