// REFRACTORED CODES.


//PA0601

class Speaker {
    constructor(name, age, topic, gender, company) {
        this.name = name;
        this.age = age;
        this.topic = topic;
        this.gender = gender;
        this.company = company;
    }

    async getSpeakers() {
        try {
            const response = await fetch(
                "https://randomuser.me/api/?results=6"
            );

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            return data.results;
        } catch (error) {
            console.error("Error fetching speakers:", error);
            return [];
        }
    }
}

const speaker1 = new Speaker(
    "Kaybee",
    22,
    "Web Development",
    "Male",
    "mLab"
);

const speaker2 = new Speaker(
    "Tshepo",
    24,
    "Music",
    "Male",
    "TDE"
);

console.log(speaker1);
console.log(speaker2);




//PA0602
class Artist {
    constructor(name, age, genre, gender, label, instrument) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.gender = gender;
        this.label = label;
        this.instrument = instrument;
    }

    booking() {
        console.log(`${this.name} is available for booking.`);
    }
}

const artist1 = new Artist(
    "Tshepo",
    24,
    "Neo Soul",
    "Male",
    "TopDeckEnt",
    "Drums"
);


// PA0603

class Musician extends Artist {
    constructor(name, age, genre, gender, label, instrument, sessionTime) {
        super(name, age, genre, gender, label, instrument);
        this.sessionTime = sessionTime;
    }

    displayBio() {
        return `${this.name} is a ${this.genre} musician who plays ${this.instrument} during a ${this.sessionTime} session.`;
    }
}

const musician1 = new Musician(
    "Tshepo",
    24,
    "Neo Soul",
    "Male",
    "TopDeckEnt",
    "Drums",
    "30-minute"
);

console.log(musician1.displayBio());


// PA0604

const musician2 = new Musician(
    "Tshepo",
    24,
    "Neo Soul",
    "Male",
    "TopDeckEnt",
    "Drums",
    "30-minute"
);

console.log(musician2.displayBio());
