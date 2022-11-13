
const inputEnter = document.querySelector('#validation-input')
const validInput = document.querySelector('#validation-input valid')



const inputValidation = (event) => {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(inputEnter.dataset.length)) {
        return inputEnter.classList.add('valid')
    } else if (event.currentTarget.value.length !== Number(inputEnter.dataset.length)) {
        return inputEnter.classList.add('invalid')
    }
} 


inputEnter.addEventListener('blur', inputValidation)
