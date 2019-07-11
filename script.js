const sayHello = () => alert('Hello world !');
sayHello();
 
//Exercise 1
const first = "Hello";
const second = "world !";
const connectWords = `${first} ${second}`;

console.log(connectWords);

//Exercise 2
const multiply = (a = 1, b = 1) => (a * b);

console.log(`Result of multiplication is ${multiply(6)}`);

//Exercise 3
const average = (...args) => {
    let sum = 0;
    args.forEach(arg => { sum = sum + arg });
return sum/args.length;
}

console.log(`Average is ${average(1,2,3,4,5,6,7)}`);

//Exercise 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(`Average grades is ${average(...grades)}`);

//Exercise 5
const myData = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstname, ,lastname] = myData

console.log(`Name is ${firstname} and lastname is ${lastname}`);