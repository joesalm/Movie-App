class ActorModel {
    constructor (fname, lname, birthdate, image, imdbLink) {
        this.fname = fname;
        this.lname = lname;
        this.birthdate = birthdate;
        this.image = image;
        this.imdbLink = imdbLink;
    }

    Age () {
        const getAge = require('age-by-birthdate');
        console.log(getAge(this.birthdate));
        return getAge(this.birthdate);
    }



    
}

export default ActorModel;