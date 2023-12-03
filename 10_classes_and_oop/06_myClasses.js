class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// Behind the scene

function UserDetail(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

UserDetail.prototype.encryptPassword1 = function(){
    return `${this.password}abc`
}

UserDetail.prototype.changeUserName1 = function(){
    return `${this.username.toUpperCase()}`
}

const ChaiAurCode = new UserDetail("chai", "chai@gmail.com", "123")

console.log(ChaiAurCode.encryptPassword1());
console.log(ChaiAurCode.changeUserName1());
