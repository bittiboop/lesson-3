const message = "Hello, World!";
console.log(typeof message);
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.trim());
console.log(message.includes("World"));

const text = "Hello, World!";
console.log(text.indexOf("Java"));

if (text.includes("Java")) {
    console.log("The text contains 'Java'.");
}

console.log(message[0]);
console.log(text.at(-1));
console.log('яблуко'>'Яблуко')

const myString = "apple,banana,plum";
const myArray = myString.split(","); 
console.log(myArray); 

const myArray2 = ["I", "learn", "JS"];
const myString2 = myArray2.join(" ");
console.log(myString2);

const myString3 = "ECMAScript";
const check = myString3.startsWith("ECMA");
console.log(check);
const check2 = myString3.endsWith("Script");
console.log(check2);

function fibonacci(n) {
    if (n === 1 || n === 2){ return 1;};
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7)); 

setTimeout(() => {
    console.log("This message is delayed by 2 seconds.");
}, 2000);

const id = setInterval(() => console.log("Tick."), 3000);
clearInterval(id);

const now = new Date(getTime());
alert(now);
const date = new Date('2001-01-01'); 

let starts  = Date.now();
for(let i=0; i<10000; i++) {
    let doSomething = i * i * i;
}
let end = Date.now();

//task 1
function getWeekDay(date){
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    return days[date.getDay()];
}
console.log(getWeekDay(new Date(2012, 0, 3))); // "Tue" 

//task 2
let timedate = new Date(2012, 1, 20, 3, 12, 0);
console.log(timedate); 
console.log(getWeekDay(timedate)); // "Mon"

//Math
Math.pow(2,3);
Math.sqrt(25); 
Math.abs(-10); 

Math.random(); 
Math.floor(Math.random() * 10);

function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
console.log(getRandom(1, 50));

Math.random();
console.log(Math.floor(Math.random() * 101)); 


//task 1
function getSquareRoot(n){
    if (n < 0) {
        return "U cant find square root in this number.";
    }
    return Math.sqrt(n);
}
//task 2
function roundToNearest10(n) {
    return Math.round(n / 10) * 10;
}
//task 3
function getRandomEven(min, max){
    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNum % 2 !== 0);
    return randomNum;
}