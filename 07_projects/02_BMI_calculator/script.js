const form = document.querySelector('form')
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const resultConclusion = document.querySelector('#result-conclusion')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
        if(resultConclusion.innerHTML !== ''){
            resultConclusion.innerHTML = ''
        }
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
        if(resultConclusion.innerHTML !== ''){
            resultConclusion.innerHTML = ''
        }
    }else{
        const bmi = (weight/ ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            resultConclusion.innerHTML = "You are under weight."
        }else if(bmi >= 18.6 && bmi <= 24.9){
            resultConclusion.innerHTML = "You have normal weight."
        }else{
            resultConclusion.innerHTML = "You are overweight."
        }
    }

})