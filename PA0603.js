class musician extends artist{
    constructor(name , age , genre, gender, label, instrument, sessionTime){
        super(name, age , genre,gender, label,instrument)
        this.sessionTime = sessionTime

    }
    displayBio(){
        return this.name +"Is the musician" + "at" + this.sessionTime
    }
}
const musician1 = new musician("Tshepo", "24", "neosoul",)