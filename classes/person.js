// Your code here
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    
    introduce() {
        console.log(
            `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
        );
    }

    
    static introducePeople(people) {
        if (!Array.isArray(people)) {
            throw new Error("introducePeople only takes an array as an argument.");
        } else {
          people.forEach(element => {
            if(element instanceof Person === true) {
                element.introduce();
            } else {
                throw new Error("All items in array must be Person class instances.")
            }
          });  
        }  
    }
}

const person = new Person("kristen", "chauncey", 38);
const person2 = new Person("jeff", "granoff", 30);
Person.introducePeople([person, person2]);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = Person;
} catch {
    module.exports = null;
}
