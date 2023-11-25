let a = 10
const b = 20
var c = 30

function one(){
    const username = "Ankit"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

addOne(5) // no error
function addOne(num){
    return num+1
}


//addTwo(5) // error
const addTwo = function(num){
    return num+2
}
addTwo(5)