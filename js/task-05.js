const inputElement = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')
;

const placeholderName = () => {
    inputElement.placeholder = nameOutput.textContent
}
placeholderName();


const onInputChange = (event) => {
    if (event.currentTarget.value === "") {
        return nameOutput.textContent = 'Anonymous'
    }
    return nameOutput.textContent = event.currentTarget.value
};


inputElement.addEventListener('input', onInputChange)

