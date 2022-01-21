import './styles.css';

export const CardHeader = ({ movie }) => (
  <div className="card-header">
    <h1 className="movie-title">{movie.title}</h1>
    <h2 className="movie-org-title">{movie.original_title}</h2>
  </div>
);
