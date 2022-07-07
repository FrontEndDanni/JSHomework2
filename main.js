//QUESTION 1: 
/**
 * Write a function that parses through the below object 
 * and displays all their favorite food dishes as shown:
 */

//QUESTION 1: 
/**
 * Write a function that parses through the below object 
 * and displays all their favorite food dishes as shown:
 */

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}
//Attempt 1: Returns arrays with food- not sure if correct.
function showFood(foodlist){
    for (let i = 0; i< Object.entries(foodlist).length; i++) {
        console.log(Object.entries(foodlist)[i]);
    }
}
console.log(showFood(person3))

//Attempt 2: Tried this other function, only brings back [object, object] for shakes
Object.values(person3).forEach(person3 => console.log(`${person3}`))

//QUESTION 2:
/**
 * Write an object that has a:
 * - name and age x
 * - printInfo method x
 * - method that increments person's age by 1 each time method is called
 * Create two people using "new" keyword
 * print both their info 
 * increment one person's age by 3 years 
 */ 

 class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo = () => { console.log(`Name: ${this.name} \nAge: ${this.age}`) }
    increaseAge = () => { this.age += 1 };
    increaseAge2 = () => { this.age += 3} ;
}
let tom = new Person('Tom', 30)
tom.printInfo()
console.log(tom.increaseAge())
tom.printInfo()

let jan = new Person('Jan', 25)
jan.printInfo()
console.log(jan.increaseAge2())
jan.printInfo()

//QUESTION 3: 
/**
 * Create a Promise based function that will check a string to
 * determin if its length is greater than 10
 * - If it's greater than 10, log "big word"
 * - If it's less than (or equal to?) 10, console log "Small Number"
 */


const checkString = aString => {
    return new Promise ( (resolve, reject) =>(
        aString.length <= 10 ? reject( false ) : resolve( true )
    ))
}

checkString("I am just the greatest person alive")

.then( result => console.log(`Big Word`) )
.catch( error => console.log(`Small Number`) )

