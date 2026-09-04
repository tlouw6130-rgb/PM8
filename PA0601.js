class Speaker {
    constructor(name , age , topic , gender, company){
        this.name = name ,
        this.age = age,
        this.topic = topic,
        this.gender = gender ,
        this.company = company
    }
   async getSpeakers (){
     try {
        const response = await fetch("https://randomuser.me/api/?results=6")
        const data = await response.json()
        console.log(data)
     } catch (error) {
        console.log(error)
        
     }
  }
  
 
}

const speaker1 = new Speaker("Kaybee" , 22, "Web development", "Male", "mLab")
const speaker2 = new Speaker("Tshepo", 24, "music", "Male", "TDE")

//PA0603

class KeyNoteSpeaker extends Speaker{
    constructor(name , age , topic, gender, company){

    }
}