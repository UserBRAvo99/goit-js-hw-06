const inputSizeFont = document.querySelector('#font-size-control')
const sizeText = document.querySelector('#text')




const size = (event) => sizeText.style.fontSize = `${Number(event.currentTarget.value)}px`;

inputSizeFont.addEventListener('click', size)

