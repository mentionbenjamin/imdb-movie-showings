import React from 'react';
import MovieList from '../components/MovieList.js';


class MovieShowingsBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: [
        {title: 'Matilda', text: 'about a kid', id: 123},
        {title: 'Titanic', text: 'about a boat', id: 456},
        {title: 'Harry Potter', text: 'about a wizard', id: 789}
      ]
    };
  }

  render() {
    return (
      <div className="movie-showings-box">
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}
