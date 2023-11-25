
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

//addTwoNumbers(5, 8)
const result = addTwoNumbers(5, 8);
console.log("result : ", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter user name");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(300, 400, 500, 400, 600, 990));

const user = {
    username: "hitesh",
    price:199
}

function handlObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handlObject(user)

const myNewArray = [200, 300, 100, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));