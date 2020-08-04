import React from 'react';
import ReactDOM from 'react-dom';
import Actor from './Actor';

class Actors extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Actor/>
      </div>
    );
  }
}

export default Actors;