class artist {
    constructor(name, age, genre, gender, label,  instrument ){
        this.name = name ,
        this.age = age ,
        this.genre = genre ,
        this.gender = gender
        this.label = label
        this.instrument = instrument
    }
    booking(){

    }

}
const artist1 = new Artist("Tshepo" , 24, "neosoul", "Male", "TopDeckEnt", "Feelgoodlivesession", "Drums")

//PA0603

class musician extends artist{
    constructor(name , age , genre, gender, label, instrument, sessionTime){
        super(name, age , genre,gender, label,instrument)
        this.sessionTime = sessionTime

    }
    displayBio(){
        return this.name +"Is the musician" + "at" + this.sessionTime
    }
}
const musician1 = new musician("Tshepo", "24", "neosoul","male", "TopDeckEnt" , "drums" , "30min")

//PA0604
class musician extends artist{
    constructor(name , age , genre, gender, label, instrument, sessionTime){
        super(name, age , genre,gender, label,instrument)
        this.sessionTime = sessionTime

    }
    displayBio(){
        return this.name +"Is the musician" + "at" + this.sessionTime
    }
}
const Musician1 = new musician("Tshepo", "24", "neosoul","male", "TopDeckEnt" , "drums" , "30min")

