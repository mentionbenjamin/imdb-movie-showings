import React from 'react.js';
import Movie from '/Movie.js';

class MovieList extends React.Components {
  render() {
    const movieComponents = this.props.movies.map((movie) => {
      return
        (<Movie author={movie.title} key={movie.id}>
          {movie.text}
        </Movie>);
    });

    return (
      <ul>
        This is the MovieList
        {movieComponents}
      </ul>
    );
  }
}



export default MovieList;
