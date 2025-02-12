class Serie {
    title: string = ""
    description: string = ""
    startYear?: Date
    endYear?: Date
    episodes: Episode[] = []
    actors: Actor[] = []

    constructor(title: string, description: string, startYear: Date, endYear: Date, episodes:Episode[], actors:Actor[]) {
        this.title = title
        this.description = description
        this.startYear = startYear
        this.endYear = endYear
        this.episodes = episodes
        this.actors = actors
    }
}

class Episode {
    title: string = ""
    length: number = 0
    description: string = ""
    actors: Actor[] = []

    constructor(title: string, length: number, description: string, actors: Actor[]) {
        this.title = title
        this.length = length
        this.description = description
        this.actors = actors
    }
}

class Actor {
    firstName: string = ""
    lastName: string = ""
    birthday?: Date
    gender: string = ""

    constructor(firstName: string, lastName: string, birthday: Date, gender: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = birthday
        this.gender = gender
    }
}


//

const bryan = new Actor("Bryan", "Cranston", new Date(1956,3,7), "male")
const bob = new Actor("Bob", "Odenkirk", new Date(1962,10,2), "male")
const aaron = new Actor("Aaron", "Paul", new Date(1979,8,27), "male")

const breakingBad = new Serie(
    "Breaking Bad",
    "Meth",
    new Date(2008),
    new Date(2013),
    [],
    []
)
const saul = new Episode(
    "Saul Goodman",
    58, 
    "Walt and Jessie meet Saul", 
    [bryan,bob,aaron]
)
const fly = new Episode(
    "Fly",
    47,
    "Walt and Jesse deal with a fly in the lab.",
    [bryan, aaron]
);
breakingBad.episodes.push(saul,fly);

const serien = [breakingBad]

function printSeriesInfo(serie: Serie) {
    serien.map((s:Serie) => {
        const actors = s.actors.map((a)=>{return a.firstName})
        console.log(
            ` Title: ${s.title} \n Description: ${s.description} \n Start Year: ${s.startYear?.getFullYear()} \n End Year: ${s.endYear?.getFullYear()} \n Number of Episodes: ${s.episodes.length} \n \nActors: ${actors} \n `
        );    
        
    });
    serie.episodes.map((ep)=>{
        const actors = ep.actors.map((a)=>{return a.firstName + " " + a.lastName + "\n"})
        console.log(`Title: ${ep.title} \nDescription: ${ep.description} \nLength: ${ep.length}m \n Actors: \n ${actors}`);
        
    })

    
}
printSeriesInfo(breakingBad)
