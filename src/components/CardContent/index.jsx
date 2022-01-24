import P from 'prop-types';
import { handleClick } from '../../functions/handleClick';

import './styles.css';

export const CardContent = ({ movie }) => (
  <div className="card-content">
    <img src={movie.movie_banner} alt="movie_banner" />
    <p className="movie-desc">{movie.shortdescription}</p>
    <button className="readMore-btn" onClick={(e) => handleClick(e, movie)}>
      Read More
    </button>
  </div>
);

CardContent.propTypes = {
  movie: P.array,
};
