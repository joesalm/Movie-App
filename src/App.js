import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ActorModel from './data-model/ActorModel';
import Actors from './components/Actors';

function App() {

  var arrOfActors=[];
  
  const actor1 = new ActorModel("Harrison", "Ford", "1942-07-13", "https://www.imdb.com/name/nm0000148/", "https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_.jpg");
  const actor2 = new ActorModel("Connelly", "Jennifer", "1970-12-12", "https://www.imdb.com/name/nm0000124/?ref_=nv_sr_srsg_0", "https://m.media-amazon.com/images/M/MV5BOTczNTgzODYyMF5BMl5BanBnXkFtZTcwNjk4ODk4Mw@@._V1_.jpg");
  

  // const getAge = require('age-by-birthdate');
  // console.log(getAge('1/17/1972'));

  arrOfActors = [actor1, actor2];
  
  console.log(arrOfActors);
  // console.log(actor1);
  const fnames = [];
  
  const renderActor = () => {

    arrOfActors.forEach(element => {
      console.log(element); // printing the actors / actress to the log with all the details for each and every one of them.
      // console.log(element.fname);
      fnames.push(element.fname); // just for fun it uses to print only the first names of the actors or actresses.
      console.log(element.Age()); // calculate the age.
      // console.log(fnames.length);
    });
    // for(let i in actor1) {
      // console.log(i);
      
      // console.log(actor1);
      // fnames.push (actor1[fname]);
      // console.log(i);
    //   fnames.push(actor1[i]);
    // }
    // return fnames.length;
    // return fname;
  }

  renderActor();
  return (
    <div className="App">
      <div>
        {/* {fnames + ' '} */}
        <div>
          <Actors arrOfActors1= {arrOfActors} />
        </div>
      </div>
    </div>
  );
}

export default App;