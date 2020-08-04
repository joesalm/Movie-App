import React from 'react';
import ReactDOM from 'react-dom';


class Actor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currActor = this.props.CurrentActor;
        return (




            <div id="Actor-Card">
                <div className="table-responsive">
                    <img id="Actor-Pic" src={currActor.image} />
                    {/* {currActor.image} */}
                </div>
                <a id="Actor-Name" href={currActor.imdbLink} target="_blank"> {currActor.fname + ' ' + currActor.lname} </a>
                <p>Age: {currActor.Age()}</p>
            </div>
        );
    }
}

export default Actor;