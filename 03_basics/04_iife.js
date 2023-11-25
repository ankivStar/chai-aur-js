// Immediately invoked function expression(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Ankit');