
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