const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const counterValue = document.querySelector('#value')

btnIncrement.addEventListener("click", () => {
    return counterValue.textContent = Number(counterValue.textContent) + 1
})
btnDecrement.addEventListener("click", () => {
    return counterValue.textContent = Number(counterValue.textContent) - 1
})


