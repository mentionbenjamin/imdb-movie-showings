import React from 'react';

const Movie = function(props) {
  return (
    <li>
      <h4>{props.title}</h4>
      <p>{props.children}</p>
    </li>
  );
}


export default Movie;
