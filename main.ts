class IceCreamFlavor{
    name: string = ""
    price: number = 0
    isPopular: boolean = false
    description?: string

    constructor(name:string, price:number, isPopular:boolean){
        this.name = name
        this.price = price
        this.isPopular = isPopular
    }
}

const vanilla = new IceCreamFlavor("Vanilla", 2, true)
const schoko = new IceCreamFlavor("Schoko", 3, true)
const waldmeister = new IceCreamFlavor("Waldmeister", 2.5, true)
const nougat = new IceCreamFlavor("Nougat", 4, true)

const iceArr = [vanilla, schoko, waldmeister, nougat]
iceArr.map((el) => {
    console.log(el.name);
})

//

class Person {
    id: number;
    firstName: string;
    lastName: string;
    birthday: Date;

    constructor(id: number, firstName: string, lastName: string, birthday: Date) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}

class SchoolClass {
    id: number;
    name: string;
    persons: Person[] = [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    addPerson(...newPersons: Person[]) {
        this.persons.push(...newPersons);
    }

    allPersons() {
        console.log(`Schulklasse ${this.name} enthält folgende Personen:`);
        this.persons.forEach((p) => {
            console.log(`${p.firstName} ${p.lastName}, Geburtstag: ${p.birthday.toDateString()}`);
        });
    }
}

const class3B = new SchoolClass(1, "3B");

const students = [
    new Person(1, "Max", "Müller", new Date(2010, 5, 15)),
    new Person(2, "Laura", "Schmidt", new Date(2009, 8, 22)),
    new Person(3, "Felix", "Meier", new Date(2011, 2, 10)),
    new Person(4, "Sophie", "Lehmann", new Date(2010, 10, 5))
];

class3B.addPerson(...students);
class3B.allPersons();

//

class Car {
    brand: string = ""
    constructionYear?: Date
    currentSpeed: number = 0 
    
    constructor(brand: string, constructionYear: Date, currentSpeed: number) {
        this.brand = brand;
        this.constructionYear = constructionYear;
        this.currentSpeed = currentSpeed;
    }
}

class Driver {
    firstName: string = ""
    lastName: string = ""
    age:number = 0
    car: Car[] = []

    constructor(firstName:string, lastName:string, age:number, car:Car[]){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.car = car
    }
}

const audi = new Car("Audi", new Date(2014), 300 )
const bmw = new Car("BMW", new Date(2015), 280)
const mercedes = new Car("Mercedes", new Date(2014), 290)

const günther = new Driver("Günther","Steiner",45, [audi])
const achi = new Driver("Achi","Lachi",28, [bmw])
const dieter = new Driver("Dieter","Meyer",37,[mercedes])
console.log(günther,achi,dieter);

//