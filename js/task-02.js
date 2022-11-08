const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// знаходжу список через id
const list = document.querySelector('#ingredients')
// цикл для пеебирання масиву ingredients та просвоэння кожному item новий textContent значення
const ingredientsEl = ingredients.map((element) => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.textContent = `${element}`
  return itemEl;
})

// додаю список до тегу ul#ingredients в DOM 
// через rest
list.append(...ingredientsEl)

