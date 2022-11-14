function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBnt = document.querySelector('.change-color')
const colorName = document.querySelector('.color')
const body = document.querySelector('body')

const changeColorBody = () => { 
  colorName.textContent = getRandomHexColor()
  body.style.backgroundColor = colorName.textContent
}

changeColorBnt.addEventListener('click', changeColorBody)