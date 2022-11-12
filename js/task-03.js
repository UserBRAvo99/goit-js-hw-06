const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




// Перший варіант

// const listGallery = document.querySelector('.gallery');

// const elementImg = images.map((element) => {
//   const itemEl = document.createElement('li')
//   const imgEl = document.createElement('img');
//   imgEl.src = `${element.url}`;
//   imgEl.alt = `${element.alt}`;
//   imgEl.style.width = '600px';
//   imgEl.style.height = 'auto';
//   imgEl.style.backgroundSize = "cover"
//   imgEl.style.marginBottom = "15px"
//   return itemEl.insertAdjacentElement("beforeend",imgEl);
// })

// listGallery.append(...elementImg)
// listGallery.style.display = "flex"
// listGallery.style.alignItems = "center";
// listGallery.style.flexDirection = "column";



// Другий варіант з insertAdjacentElement

const listGallery = document.querySelector('.gallery');

const imageElement = images.map((image) => `<li class='gallery_item' style="display:flex;"><img class='gallery_img' src='${image.url}' alt='${image.alt}' style = " width : 600px; height:auto; margin-bottom:15px;S"></li>`).join("");


listGallery.insertAdjacentHTML("afterbegin", imageElement)
