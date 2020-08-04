import React from 'react';
import ReactDOM from 'react-dom';

class Actor extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const currActor = this.props.CurrentActor;
    return (
      <div>{currActor.fname}</div>
    );
  }
}

export default Actor;