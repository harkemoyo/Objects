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

// arrow func

// class Debate {
//   constructor (name){
//     this.name = name
//   }
//   arrowFunction() {
//     setTimeout(() => {
// console.log('arrow :'+ this.name);
//     }, 1000);
//   }
//   normalFunction() {
//     setTimeout( function() {
// console.log('arrow :'+ this.name);
//     }, 1000);
//   }
// }
// let mark =  new Debate('sofia');
// Debate.arrowFunction()
// Debate.normalFunction()
// console.log(this.name)



const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};
console.log(person.age)
const gender = person.gender
console.log(gender);


const cup = {
  length: 10,
  width: 5,
  height:  10,
  volume: function (){
    return this.length*this.width*this.height
  }

}
console.log(cup.volume());

const mark = {
   name: 'Hark',
   age : 56,
   country: "Norway",
   logData: function (){
    return `${this.name} is ${this.age} years old and lives in ${this.country}`
   }
}
console.log(mark.logData())
console.log(Object.values(mark))


//for loop in objects

// array methods can't work in objects
// this works
let arr = [24, 33, 77];
arr.forEach((val) => console.log(val)); 

for (val of arr) {
  console.log(val); 
}


// can'nt work
let obj = { age: 12, name: "John Doe" };
obj.forEach((val) => console.log(val)); 

for (val of obj) {
  console.log(val);
}