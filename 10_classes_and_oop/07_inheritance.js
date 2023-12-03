class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCousre(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@123', '123')
chai.addCousre()

const masalaChai = new User("masalaChai")
masalaChai.logMe()
chai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);