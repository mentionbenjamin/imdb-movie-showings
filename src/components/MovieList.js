import React from 'react';
import Comment from './Movie.js';

class MovieList extends React.Component {
  render() {
    console.log('this.props.movies', this.props.movies);

    const movieComponents = this.props.movies.map((movies) => {
      return (<MovieList
        author={movie.author}
        key={movie.id}
        >
          {movie.text}</MovieList>);
    });

    console.log('movieComponents', movieComponents);
    return (
      <ul>
        This is the MovieList
        {movieComponents}
      </ul>
    );
  }
}

export default MovieList;
