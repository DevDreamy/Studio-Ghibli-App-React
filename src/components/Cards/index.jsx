import { CardContent } from '../CardContent';
import { CardFooter } from '../CardFooter';
import { CardHeader } from '../CardHeader';
import './styles.css';

export const Cards = ({ movies }) => (
  <div className="container-content">
    {movies.map((movie) => (
      <div key={movie.id} className="card">
        <CardHeader movie={movie} />

        <CardContent movie={movie} />

        <CardFooter movie={movie} />
      </div>
    ))}
  </div>
);
