import React from 'react';


class MovieShowingsBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: [
        {title: Matilda, id: 123},
        {title: Titanic, id: 456},
        {title: Harry Potter, id: 789}
      ]
    };
  }

}


export default MovieShowingsBox;
