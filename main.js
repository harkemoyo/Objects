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
    console.log( `This is ${this.name} favourite color She is ${age}`);
}
};
};
const obj1 = coolPhoto('Sifa', 29);
obj1.color()


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
  
//   recursion
function factorial(n) {
    // Base case
    if (n === 1) {
      return 1;
    }
    // Recursive case
    else {
      return n * factorial(n - 1);
    }
  }
console.log(factorial(4))