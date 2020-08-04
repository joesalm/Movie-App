import React from 'react';
import ReactDOM from 'react-dom';
import Actor from './Actor';

class Actors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arrOfActors = this.props.arrOfActors;

    return (
      <div>
        {/* {arrOfActors[0].fname} */ }
        {/* <Actor/> */ }

        {arrOfActors.map((currentActor) =>
          <div key={currentActor}> <Actor CurrentActor={currentActor}/> </div>)
        }
      </div>)
  }
}

export default Actors;


