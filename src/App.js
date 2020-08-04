import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ActorModel from './data-model/ActorModel';
import Actors from './components/Actors';

function App() {

  var arrOfActors=[];
  
  const actor1 = new ActorModel("Harrison", "Ford", "1942-07-13", "https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_.jpg","https://www.imdb.com/name/nm0000148/");
  const actor2 = new ActorModel("Connelly", "Jennifer", "1970-12-12", "https://m.media-amazon.com/images/M/MV5BOTczNTgzODYyMF5BMl5BanBnXkFtZTcwNjk4ODk4Mw@@._V1_.jpg", "https://www.imdb.com/name/nm0000124/?ref_=nv_sr_srsg_0");
  const actor3 = new ActorModel("Guinness", "Alec", "1914-04-02", "https://m.media-amazon.com/images/M/MV5BMTIxMTA5OTI2M15BMl5BanBnXkFtZTYwNjEwNjU2._V1_.jpg", "https://www.imdb.com/name/nm0000027/?ref_=nv_sr_srsg_0");
  const actor4 = new ActorModel("Reeve", "Christopher", "1952-09-25", "https://m.media-amazon.com/images/M/MV5BMjE1MDYwNjQxMF5BMl5BanBnXkFtZTcwNDE4NzU3MQ@@._V1_.jpg","https://www.imdb.com/name/nm0001659/?ref_=fn_al_nm_1");
  const actor5 = new ActorModel("Kaye", "Danny", "1911-01-18", "https://m.media-amazon.com/images/M/MV5BMTUwNDE2OTYyN15BMl5BanBnXkFtZTYwMzEzMzQ2._V1_.jpg", "https://www.imdb.com/name/nm0001414/?ref_=nv_sr_srsg_0");
  const actor6 = new ActorModel("Earl Jones", "James", "1931-01-17", "https://m.media-amazon.com/images/M/MV5BMTcwNTg1MzMwM15BMl5BanBnXkFtZTcwNTQyMDgyMg@@._V1_.jpg", "https://www.imdb.com/name/nm0000469/?ref_=nv_sr_srsg_0");

  // const getAge = require('age-by-birthdate');
  // console.log(getAge('1/17/1972'));

  arrOfActors = [actor1, actor2, actor3, actor4, actor5, actor6];
  
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
          <Actors arrOfActors= {arrOfActors} />
        </div>
      </div>
    </div>
  );
}

export default App;