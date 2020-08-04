import React from 'react';
// import {Container} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
// import { Container, Row, Col } from 'reactstrap';
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
        <Container>

          <Row>
            <Col sm="12" md="6" lg="4">

                {/* {arrOfActors[0].fname} */}
                {/* <Actor/> */}
                {arrOfActors.map((currentActor) =>
                  <div > <Actor CurrentActor={currentActor} /> </div>)
                }

            </Col>
            <Col sm="12" md="6" lg="4">
                {/* {arrOfActors[0].fname} */}
                {/* <Actor/> */}
                {arrOfActors.map((currentActor) =>
                  <div > <Actor CurrentActor={currentActor} /> </div>)
                }

            </Col>
            <Col sm="12" md="6" lg="4">
                {/* {arrOfActors[0].fname} */}
                {/* <Actor/> */}
                {arrOfActors.map((currentActor) =>
                  <div > <Actor CurrentActor={currentActor} /> </div>)
                }

            </Col>
          </Row>

        </Container>















      </div>
    )
  }
}

export default Actors;