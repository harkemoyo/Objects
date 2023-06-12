alert('hello world');
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

