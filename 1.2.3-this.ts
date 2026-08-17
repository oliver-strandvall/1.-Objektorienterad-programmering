class Person {
    name: string;
    age: number;

    constructor(personName: string, personAge: number) {
        this.name = personName;
        this.age = personAge;
    }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 42);

console.log(person1.name);
console.log(person1.age);
console.log(person2.name);
console.log(person2.age);