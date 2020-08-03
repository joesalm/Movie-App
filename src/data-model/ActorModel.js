class ActorModel {
    constructor (fname, lname, birthdate, image, imdbLink) {
        this.fname = fname;
        this.lname = lname;
        this.birthdate = birthdate;
        this.image = image;
        this.imdbLink  = imdbLink;
    }

    Age () {
        return 10;
    }
}

export default ActorModel;