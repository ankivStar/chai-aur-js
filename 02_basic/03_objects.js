// singleton

//object literal
const mySym = Symbol("key1")

const JsUser = {
    name: "Ankit",
    "full name" : "Ankit Verma",
    [mySym]:"my key1",
    age : 18,
    location : "Jaipur",
    email : "ankit@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "ankit@chatgpt.com"
console.log(JsUser["email"]);
// Object.freeze(JsUser)
JsUser.email = "ankit@microsoft.com"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("hello JS user");
}

JsUser.greetingsTwo = function(){
    console.log(`hello JS use, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());