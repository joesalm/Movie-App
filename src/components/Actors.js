import React from 'react';
// import {Container} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
// import { Container, Row, Col } from 'reactstrap';
import ReactDOM from 'react-dom';
import Actor from './Actor';

class Actors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValueToSearch: ""
    }

    this.updateSearchName = this.updateSearchName.bind(this);

    }

    updateSearchName(event) {
      this.setState ({
        inputValueToSearch: event.target.value
      });
    // console.log(event.target.value);
  }
  
  render() {

    const arrOfActors = this.props.arrOfActors;
    const filterActors = arrOfActors.filter((Actor)=>{
      // return Actor.fname.includes("Ford")
      return Actor.fname.toUpperCase().includes(this.state.inputValueToSearch.toUpperCase())
    })

    const cards = filterActors.map((currentActor) => {
      return <div >
        <Col
         xs={12} sm={6} md={4}
        >
          <Actor CurrentActor={currentActor} key={currentActor} />
        </Col>
      </div>
    });

    return (
      <div id="site-bgcolor">

        <div id="form">
          <form>
            <fieldset>
              <label htmlFor="Search"> Search by name: </label>
              <input type="text" id="search-btn" value={this.state.inputValueToSearch} onChange= {(e) => this.updateSearchName(e)} />
              {/* <input type="text" id="search-btn" // onChange={updateSearchName} */}
               {/* /> */}
              {/* <button id="search-btn" name="search-btn" type="button" value="Search"></button> /> */}
            </fieldset>
          </form>
        </div>



        {/* <Container fluid> */}
        <Container>          
          <Row>
            {cards}
          </Row>
        </Container>

      </div>
    )
  }
}

export default Actors;


                // {/* {arrOfActors[0].fname} */}
                // {/* <Actor/> */}
                // {arrOfActors.map((currentActor) =>
                //   <div > <Actor CurrentActor={currentActor} /> </div>)
                // }