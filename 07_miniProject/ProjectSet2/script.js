const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid height ${weight}`
    }
    else{
        const BMI = (weight / ((height * height)/10000)).toFixed(2)
        result.innerHTML = `Your BMI is <span>${BMI}</span>`
    }
})