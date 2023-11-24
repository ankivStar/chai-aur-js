let score = "33abc"
console.log(typeof score);
console.log(typeof score);

let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "" => false
// "abc" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);