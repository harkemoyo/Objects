// alert('hello world');
const magic = "mark";
const age = 28;

const sum = {
    magic,
    age,

    sumAge () {
        console.log(this.magic, this.age);
    }

}
sum.sumAge()

// factory fnc

function coolPhoto(name, age) {
 return{
name,
age,
color() {
    console.log( `This is ${this.name} favourite color`);
}
};
};
const obj1 = coolPhoto('Sifa', 29);
console.log(obj1);

// Create a constructor function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
  
  // Create two Person objects
  let john = new Person('john', 25);
  let jane = new Person('jane', 30);
  
  console.log(john);
  console.log(jane);
