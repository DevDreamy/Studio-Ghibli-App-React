import './styles.css';

export const CardFooter = ({ movie }) => (
  <div className="card-footer">
    <p className="movie-director">Director: {movie.director}</p>
    <p>Run time: {movie.running_time} minutes</p>
  </div>
);
