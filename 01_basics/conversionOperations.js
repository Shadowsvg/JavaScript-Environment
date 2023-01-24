let score = 89
// console.log(typeof(score))        // number

// console.log(typeof(NaN))          // number
// console.log(typeof(undefined))    // undefined

let str = "24ef"
let num = Number(str)
// console.log(num)     // output 'NaN' because string cannot be converted to number

let isGood = true
let a = Number(isGood)
// console.log(a);      // ture => 1; false => 0

// "" => false
// "shadow" => true

/*----------------Conversion Operations--------------------*/

console.log("1" + 2 + 4) // output => 124
console.log(1 + 2 + "4") // output => 34

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// output: "x:4, y:3"

let c = 3;
const b = ++c;

console.log(`a:${c}, b:${b}`);
// output: "a:4, b:4"

