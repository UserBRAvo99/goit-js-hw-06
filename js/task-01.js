// отримую кількість item в #categories , або довжину #categories
const categoriesItem = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesItem.length}`);

// перебираю element (тобто всі елементи всередині #categories) , і знаходжу в них потрібні властивості на кожній ітерації 
categoriesItem.forEach(element => {
    const title = element.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const titleList = element.querySelectorAll('li');
    console.log(`Elements: ${titleList.length}`);
});


