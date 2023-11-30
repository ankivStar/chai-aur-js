//Generate random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*15)]
    }
    return color;
}

const startChanging = document.querySelector('#start')
const stopChanging = document.querySelector('#stop')
const body = document.querySelector('body')

let intervalId;
function startChangingColor(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    
    function changeBgColor(){
        body.style.backgroundColor = randomColor()
    }
}

function stopChangingColor(){
    clearInterval(intervalId)
    intervalId = null
}

startChanging.addEventListener('click', startChangingColor)
stopChanging.addEventListener('click', stopChangingColor)