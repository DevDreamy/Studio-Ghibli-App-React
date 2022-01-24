import logo from '../../img/logo.png';
import './styles.css';
import { Component } from 'react';
import { Cards } from '../../components/Cards';
import { Filter } from '../../components/Filter';
import { filterDirectors } from '../../functions/filterDirectors';
export class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => response.json())
      .then((movies) => this.setState({ movies }));
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="GhibliApp">
        <main className="container">
          <img src={logo} className="logo-img" alt="logo" />
          <p>
            You can find this same app made with pure JavaScript by{' '}
            <a href="https://github.com/DevDreamy/Studio-Ghibli-App">clicking here.</a>
          </p>
          <Filter directors={filterDirectors({ movies })} />
          <Cards movies={movies} />
        </main>
      </div>
    );
  }
}
