const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

const greetings = 'Hello world'
for(const greet of greetings){
    console.log(greet);
}

// maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICAD")
map.set('FR', "FRANCE")

console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}

//object is not iteratable using forOf

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }

// for(const [key] of myObject){
//     console.log(key);
// }