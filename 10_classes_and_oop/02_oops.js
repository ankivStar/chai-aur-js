const user = {
    username : "Ankit",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got user detail from database");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this;
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne);
console.log(userTwo);
